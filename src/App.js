import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Basic from "./components/Basic";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import ProductContext, { ProductsContext } from "./Global/ProductContext";
import "bootstrap/dist/css/bootstrap.min.css";
import WomenContext, { WomensContext } from "./Global/WomenContext";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import Add from "./components/Add";
import { Provider } from "react-redux";
import {createStore} from "redux";
import rootReducer from './services/Reducers/index';
const store=createStore(rootReducer)
console.log("store data",store.getState ())

function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      <Header/>
        <Add />
        <Basic />
        <Switch>
          <Route path="/" exact component={Add}></Route>
          <Route path="/cart" exact component={Cart}></Route>

          <Route path="/clothes" component={WomenContext}></Route>

          <Route path="/kids" component={ProductContext}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
