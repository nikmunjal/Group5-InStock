import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import InventoryPage from './page/InventoryPage/InventoryPage';


import WarehousePage from './page/WarehousePage/WarehousePage';
import InventoryDetailsPage from './page/InventoryDetailsPage/InventoryDetailsPage';
import AddInventory from './page/AddInventory/AddInventory';
import WarehouseDetails from './components/WarehouseDetails/WarehouseDetails';


function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={WarehousePage} />
        <Route path="/inventory" exact component={InventoryPage} />
        <Route path="/inventory/add" component={AddInventory}/>
        <Route path="/inventory/:id" component={InventoryDetailsPage} />
        <Route path="/:id" component={WarehouseDetails}/>

      </Switch>
    </BrowserRouter>
  );
}


export default App;
