import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import InventoryPage from './page/InventoryPage/InventoryPage';
import WarehousePage from './page/WarehousePage/WarehousePage';
import InventoryDetailsPage from './page/InventoryDetailsPage/InventoryDetailsPage';
import AddInventory from './page/AddInventory/AddInventory';
import WarehouseDetail from './components/WarehouseDetail/WarehouseDetail';


function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={WarehousePage} />
        <Route path="/inventory" exact component={InventoryPage} />
        <Route path="/inventory/add" component={AddInventory}/>
        <Route path="/inventory/:id" component={InventoryDetailsPage} />
        <Route path="/:id" component={WarehouseDetail}/>

      </Switch>
    </BrowserRouter>
  );
}


export default App;
