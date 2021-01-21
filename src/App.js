import logo from './logo.svg';
import Movies from "./components/movies";
import MoviesF from './components/MoviesF';
import './App.css';
import {Route, Redirect, Switch} from "react-router-dom";
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';

function App() {
  return (
    <main className="container">
      <Switch>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/customers" component={Customers}></Route>
        <Route path="/rentals" component={Rentals}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Redirect from="/" exact to="/movies"></Redirect>
        <Redirect to="/not-found"></Redirect>
      </Switch>
    </main>
  );
}

export default App;
