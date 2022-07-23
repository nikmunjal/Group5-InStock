import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WarehouseDetails from "./Components/WarehouseDetails/WarehouseDetails"
import InventoryPage from './page/InventoryPage/InventoryPage';
import WarehousePage from './page/WarehousePage/WarehousePage';
import InventoryDetailsPage from './page/InventoryDetailsPage/InventoryDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={WarehousePage}/>
        <Route path="/inventory" exact component={InventoryPage} />
        <Route path="/inventory/:id" component={InventoryDetailsPage} />        
        <Route path="/warehouse/:id" component={WarehouseDetails}/>
      </Switch>
    </BrowserRouter>
  );
}


export default App;
