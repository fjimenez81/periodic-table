import { Route, Switch } from "wouter";
import PeriodicTable from "@/components/periodic_table/PeriodicTable"
import Atom from "./components/electric_configuration/Atom";

function App() {


  return (
    <>
      <Switch>
        <Route path="/" component={PeriodicTable} />
        <Route path="/atom/:id" component={Atom} />
        {/* Default route in a switch */}
        <Route>404: No such page!</Route>
      </Switch>
    </>
  )
}

export default App
