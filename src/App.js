import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import InventoryPage from './page/InventoryPage/InventoryPage';
import WarehousePage from './page/WarehousePage/WarehousePage'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>

        <Route path="/" exact component={WarehousePage} />
        <Route path="/inventory" component={InventoryPage} />

      </Switch>
      <Footer />
    </BrowserRouter>
  );
}


export default App;
