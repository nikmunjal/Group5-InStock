import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import InventoryPage from './page/InventoryPage/InventoryPage';
import WarehourePage from './page/WarehousePage/WarehousePage';

function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={WarehourePage} />
        <Route path="/inventory" component={InventoryPage} />

      </Switch>
    </BrowserRouter>
  );
}


export default App;
