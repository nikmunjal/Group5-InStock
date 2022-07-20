import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={Warehouses} />
        <Route path="/inventory" component={Inventory} />

      </Switch>
    </BrowserRouter>  
  );
}

export default App;
