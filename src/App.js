import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WarehouseDetails from "./Components/WarehouseDetails/WarehouseDetails"

function App() {
  return (
    <BrowserRouter>
      <Switch>

        {/* <Route path="/warehouse" exact component={Warehouses} />
        <Route path="/inventory" component={Inventory} /> */}
        <Route path="/warehouse/:id" render={(props) => {
          return <WarehouseDetails {...props} />;
        }} />

      </Switch>
    </BrowserRouter>  
  );
}

export default App;
