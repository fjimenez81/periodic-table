import { useEffect, useRef } from 'react';
import './Atom.css'
import Zdog from "zdog";
import { electronicConfiguration } from "@/utils/electronicConfiguration";
import type { Sublevel, Electron } from '@/interfaces';
import { useRoute } from "wouter";
import { totalElements } from '@/data/elements';
import { formatAtomicMass } from '@/utils/formatAtomicMass';

interface Label {
	element: HTMLDivElement;
	orbitRadius: number;
}

type HtmlCanvas = HTMLCanvasElement | null;

export default function Atom() {

	const atomCanvasRef = useRef<HtmlCanvas>(null);
	const starCanvasRef = useRef<HtmlCanvas>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [ match, params ] = useRoute("/atom/:id");

	useEffect(() => {
		if (!match || !params?.id) return;
		const atomicNumber = Number(params!.id);
		const atomCanvas = atomCanvasRef.current;
		const starCanvas = starCanvasRef.current;
		const container = containerRef.current;

		if (!atomCanvas || !starCanvas || !container) return;

		// ================= STARFIELD =================
		const starCtx = starCanvas.getContext("2d");
		if (!starCtx) return;

		interface Star {
			x: number;
			y: number;
			r: number;
			alpha: number;
			dAlpha: number;
		}

		let stars: Star[] = [];

		const resizeCanvas = () => {
			starCanvas.width = window.innerWidth;
			starCanvas.height = window.innerHeight;
		};

		const initStars = () => {
			stars = [];
			const numStars = 300;
			for (let i = 0; i < numStars; i++) {
				stars.push({
					x: Math.random() * starCanvas.width,
					y: Math.random() * starCanvas.height,
					r: Math.random() * 1.5,
					alpha: Math.random(),
					dAlpha: 0.005 + Math.random() * 0.01,
				});
			}
		};

		const drawStars = () => {
			if (!starCtx) return;
			starCtx.clearRect(0, 0, starCanvas.width, starCanvas.height);
			stars.forEach((s) => {
				starCtx.beginPath();
				starCtx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
				starCtx.fillStyle = `rgba(255,255,255,${s.alpha})`;
				starCtx.fill();
				s.alpha += s.dAlpha;
				if (s.alpha > 1 || s.alpha < 0) s.dAlpha *= -1;
			});
			requestAnimationFrame(drawStars);
		};

		resizeCanvas();
		initStars();
		drawStars();

		window.addEventListener("resize", () => {
			resizeCanvas();
			initStars();
		});

		// ================= ATOM (Zdog) =================
		atomCanvas.width = window.innerWidth;
		atomCanvas.height = window.innerHeight;

		const xenonConfig: Sublevel[] = electronicConfiguration(atomicNumber);
		const totalParticles = parseInt(formatAtomicMass(totalElements.find(e => e.atomicNumber === atomicNumber)?.atomicMass as number))
		const settings = {
			nucleusRadius: totalParticles > 40 ? 80 : 40,
			particleRadius: 16,
			totalParticles,
			protonColor: "#bc0003",
			neutronColor: "#082976",
			electronColor: "#8BC34A",
			baseOrbitRadius: 80,
		};

		let illo: Zdog.Illustration;
		let electrons: Electron[] = [];
		let labels: Label[] = [];
		let isSpinning = true;
		let scale = 1;

		const createAtom = () => {
			//if (illo) illo.resetGraph();
			labels.forEach((l) => l.element.remove());
			electrons = [];
			labels = [];

			illo = new Zdog.Illustration({
				element: atomCanvas,
				dragRotate: true,
				rotate: { x: -0.5, y: 0.7 },
				onDragStart: () => (isSpinning = false),
			});

			// --- Núcleo ---
			for (let i = 0; i < settings.totalParticles; i++) {
				const theta = Math.acos(2 * Math.random() - 1);
				const phi = Math.random() * 2 * Math.PI;
				const r = settings.nucleusRadius * Math.cbrt(Math.random());
				const x = r * Math.sin(theta) * Math.cos(phi);
				const y = r * Math.sin(theta) * Math.sin(phi);
				const z = r * Math.cos(theta);
				const color =
					i % 2 === 0 ? settings.protonColor : settings.neutronColor;

				const group = new Zdog.Anchor({
					addTo: illo,
					translate: { x, y, z },
				});

				new Zdog.Shape({
					addTo: group,
					stroke: settings.particleRadius * 2,
					color,
				});

				new Zdog.Shape({
					addTo: group,
					translate: {
						x: -settings.particleRadius / 3,
						y: -settings.particleRadius / 3,
						z: settings.particleRadius / 3,
					},
					stroke: settings.particleRadius * 0.6,
					color: "rgba(255,255,255,0.06)",
				});

				new Zdog.Shape({
					addTo: group,
					translate: {
						x: settings.particleRadius / 4,
						y: settings.particleRadius / 4,
						z: -settings.particleRadius / 4,
					},
					stroke: settings.particleRadius * 0.5,
					color: "rgba(0,0,0,0.06)",
				});
			}

			// --- Órbitas y electrones ---
			xenonConfig.forEach((sublevel, index) => {
				const orbitRadius = settings.baseOrbitRadius + index * 30;
				const tilt = {
					x: Math.random() * Math.PI,
					y: Math.random() * Math.PI,
					z: Math.random() * Math.PI,
				};

				new Zdog.Ellipse({
					addTo: illo,
					diameter: orbitRadius * 2,
					quarters: 4,
					stroke: 1,
					color: "rgba(255,255,255,0.15)",
					rotate: tilt,
				});

				for (let j = 0; j < sublevel.electrons; j++) {
					const orbit = new Zdog.Anchor({ addTo: illo, rotate: tilt });
					const angleOffset = (j / sublevel.electrons) * Math.PI * 2;
					const speed = 0.004 + Math.random() * 0.003;
					const electron = new Zdog.Shape({
						addTo: orbit,
						translate: {
							x: orbitRadius * Math.cos(angleOffset),
							z: orbitRadius * Math.sin(angleOffset),
						},
						stroke: 12,
						color: settings.electronColor,
					});
					electrons.push({
						orbit,
						electron,
						orbitRadius,
						angle: angleOffset,
						speed,
					});
				}

				// --- Etiquetas flotantes ---
				const label = document.createElement("div");
				label.textContent = `${sublevel.name} (${sublevel.electrons})`;
				Object.assign(label.style, {
					position: "absolute",
					color: "#fff",
					fontSize: "14px",
					pointerEvents: "none",
					transform: "translate(-50%, -50%)",
				});
				container.appendChild(label);
				labels.push({ element: label, orbitRadius });
			});
		};

		const animate = () => {
			if (isSpinning) {
				illo.rotate.y += 0.003;
				illo.rotate.x += 0.0015;
			}

			electrons.forEach((e) => {
				e.angle += e.speed;
				e.electron.translate.x = Math.cos(e.angle) * e.orbitRadius;
				e.electron.translate.z = Math.sin(e.angle) * e.orbitRadius;
			});

			illo.updateRenderGraph();

			const rect = atomCanvas.getBoundingClientRect();
			const cx = rect.left + rect.width / 2;
			const cy = rect.top + rect.height / 2;

			labels.forEach((l, i) => {
				const angle = (performance.now() / 2500 + i) % (2 * Math.PI);
				const x = cx + Math.cos(angle) * l.orbitRadius;
				const y = cy + Math.sin(angle) * l.orbitRadius;
				l.element.style.left = `${x}px`;
				l.element.style.top = `${y}px`;
			});

			requestAnimationFrame(animate);
		};

		createAtom();
		animate();

		// --- Zoom con la rueda ---
		const onWheel = (e: WheelEvent) => {
			e.preventDefault();
			if (e.deltaY < 0) scale *= 1.1;
			else scale /= 1.1;
			scale = Math.min(Math.max(scale, 0.2), 3);
			illo.scale = { x: scale, y: scale, z: scale } as Zdog.Vector;
		};

		atomCanvas.addEventListener("wheel", onWheel);

		return () => {
			atomCanvas.removeEventListener("wheel", onWheel);
			labels.forEach((l) => l.element.remove());
			window.removeEventListener("resize", resizeCanvas);
		};
	}, [params, match]);

	return (
		<div
			ref={containerRef}
			style={{
				position: "relative",
				width: "100vw",
				height: "100vh",
				overflow: "hidden",
				backgroundColor: "black",
			}}
		>
			{/* Fondo de estrellas */}
			<canvas
				ref={starCanvasRef}
				id="starfield"
				style={{
					position: "absolute",
					inset: 0,
					zIndex: 0,
				}}
			/>

			{/* Átomo (Zdog) */}
			<canvas
				ref={atomCanvasRef}
				className="zdog-canvas"
				style={{
					position: "absolute",
					inset: 0,
					zIndex: 1,
				}}
			/>
		</div>
	);
}


