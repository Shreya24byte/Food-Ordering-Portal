import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Header } from './components/Header';
import {MainCategory} from './components/MainCategory';
import {Pizzas} from './components/Pizzas';
import {Burgers} from './components/Burgers';
import { Checkout } from './components/Checkout';

function App() {
  const [cartItems, updateCartItems] = useState([]);
  return (
    <Router>
    <div className="App">
      <Header cartItems={cartItems}/>
      <Switch>
        <Route path="/pizza">
        <Pizzas updateCartItems={updateCartItems} cartItems={cartItems}/>
        </Route>
        <Route path="/burger">
        <Burgers updateCartItems={updateCartItems} cartItems={cartItems}/>
        </Route>
        <Route path="/checkout">
        <Checkout updateCartItems={updateCartItems} cartItems={cartItems}/>
        </Route>
        <Route path="/">
        <MainCategory/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
