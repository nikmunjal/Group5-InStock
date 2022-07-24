import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import InventoryPage from './page/InventoryPage/InventoryPage';
import WarehousePage from './page/WarehousePage/WarehousePage';
import InventoryDetailsPage from './page/InventoryDetailsPage/InventoryDetailsPage';
import Footer from './components/Footer';
import InventoryDelete from './components/InventoryDelete/InventoryDelete';
import InventoryEdit from './components/InventoryEdit/InventoryEdit';
import AddInventory from './page/AddInventory/AddInventory';
import WarehouseDetail from './components/WarehouseDetail/WarehouseDetail';


function App() {
  return (
    <BrowserRouter>

      <Switch>

        <Route path="/" exact component={WarehousePage} />
        <Route path="/inventory" exact component={InventoryPage} />
        <Route path="/inventory/add" component={AddInventory}/>
        <Route path="/inventory/:id" exact component={InventoryDetailsPage} />
        <Route path="/inventory/edit/:id" exact component={InventoryEdit} />
        <Route path="/inventory/delete/:id" exact component={InventoryDelete} />

        <Route path="/:id" component={WarehouseDetail}/>

      </Switch>
      <Footer />
    </BrowserRouter>
  );
}


export default App;
