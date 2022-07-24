import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import InventoryPage from "./page/InventoryPage/InventoryPage";
import WarehousePage from "./page/WarehousePage/WarehousePage";
import InventoryDetailsPage from "./page/InventoryDetailsPage/InventoryDetailsPage";
import AddInventory from "./page/AddInventory/AddInventory";
import WarehouseDetail from "./components/WarehouseDetail/WarehouseDetail";
import AddNewWareHouse from "./page/AddNewWareHouse/AddNewWareHouse";
import EditWarehouse from "./page/EditWarehouse/EditWarehouse";

function App() {
    return (
        <BrowserRouter>
            <Switch>

                <Route path="/" exact component={WarehousePage} />
                <Route path="/add" exact component={AddNewWareHouse} />
                <Route path="/inventory/add" exact component={AddInventory} />
                <Route path="/" exact component={WarehousePage} />                
                <Route path="/add" exact component={AddNewWareHouse} />                 
                <Route path="/inventory/add" exact component={AddInventory} />                

                <Route path="/inventory/:id" component={InventoryDetailsPage} />
                <Route path="/inventory" component={InventoryPage} />
                <Route path="/:id" component={WarehouseDetail} />
                <Route path="/edit/:id" component={EditWarehouse} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
