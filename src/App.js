import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import InventoryPage from './page/InventoryPage/InventoryPage';


import WarehousePage from './page/WarehousePage/WarehousePage';
import InventoryDetailsPage from './page/InventoryDetailsPage/InventoryDetailsPage';
import Footer from './components/Footer';
import InventoryDelete from './components/InventoryDelete/InventoryDelete';
import InventoryEdit from './components/InventoryEdit/InventoryEdit';


function App() {
  return (
    <BrowserRouter>

      <Switch>

        <Route path="/" exact component={WarehousePage} />
        <Route path="/inventory" exact component={InventoryPage} />
        <Route path="/inventory/:id" component={InventoryDetailsPage} />
        <Route path="/inventory/edit/:id" component={InventoryEdit} />
        <Route path="/inventory/delete" exact component={InventoryDelete} />


      </Switch>
      <Footer />
    </BrowserRouter>
  );
}


export default App;
