import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import InventoryPage from "./page/InventoryPage/InventoryPage";
import WarehousePage from "./page/WarehousePage/WarehousePage";
import InventoryDetailsPage from "./page/InventoryDetailsPage/InventoryDetailsPage";
import AddInventory from "./page/AddInventory/AddInventory";
import WarehouseDetail from "./components/WarehouseDetail/WarehouseDetail";
import AddNewWareHouse from "./page/AddNewWareHouse/AddNewWareHouse";
import InventoryEdit from "./components/InventoryEdit/InventoryEdit";
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
                <Route
                    path="/inventory/:id"
                    exact
                    component={InventoryDetailsPage}
                />
                <Route path="/inventory" exact component={InventoryPage} />
                <Route
                    path="/inventory/:id"
                    exact
                    component={InventoryDetailsPage}
                />
                <Route
                    path="/inventory/edit/:id"
                    exact
                    component={InventoryEdit}
                />
                <Route path="/add" component={AddNewWareHouse} />
                <Route path="/:id" component={WarehouseDetail} />
                <Route path="/:id" component={WarehouseDetail} />
                <Route path="/edit/:id" component={EditWarehouse} />
                <Route path="/inventory" exact component={InventoryPage} />
                <Route
                    path="/inventory/:id"
                    exact
                    component={InventoryDetailsPage}
                />
                <Route
                    path="/inventory/edit/:id"
                    exact
                    component={InventoryEdit}
                />
                <Route path="/edit/:id" exact component={EditWarehouse} />
                <Route path="/add" component={AddNewWareHouse} />
                <Route path="/:id" component={WarehouseDetail} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
