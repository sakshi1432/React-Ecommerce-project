import React, { createContext, useState, useEffect } from "react";
import ProductCard from "../components/Women";
import Grid from "@material-ui/core/Grid";
import "bootstrap/dist/css/bootstrap.min.css";
// import Baby from "../assets/Baby.jpg";
// import best from "../assets/best.jpg";
// import Jeans from "../assets/Jeans.jpg";
// import jump from "../assets/jump.jpg";
// import nnop from "../assets/nnop.jpg";
// import off from "../assets/off.jpg";
// import Grid from "@material-ui/core/Grid";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "../components/Header";
import axios from "axios";
import {connect} from "react-redux";

export const WomenContext = createContext();

const WomenContextProvider = (props) => {
  const [products, setProducts] = useState([
    //  { id: 1, name: "Girl-doll dress", price: 1600, image: Baby },
    //   { id: 2, name: "New", price: 1400, image: best },
    //   { id: 3, name: "Jaens ", price: 490, image: Jeans, status: "Hot" },
    //   { id: 4, name: "jump", price: 1500, image: jump },
    //   { id: 5, name: "Hot-Dress", price: 1199, image: nnop, status: "bestDeal" },
    //   { id: 6, name: "Collection", price: 2500, image: off },
  ]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")

      .then((res) => {
        console.log("here", res);
        setProducts(res.data);
      });
  }, []);
  useEffect(() => {
    console.log("cartData",props.cartData)
  }, [props]);
  
  return (
    // <WomenContext.Provider value={{products: [...products]}}>
    // {props.children}
    // </WomenContext.Provider>

    <Grid container>
      {products.map((product) => {
        return (
          <Grid className="h-100" item lg={4} spacing={2}>
            <ProductCard
              title={product.title}
              detail={product.price}
              image={product.image}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
// TodoList.js

function mapStateToProps(state) {
  const { cartItems } = state
  return { cartData: cartItems.cartData }
}

export default connect(mapStateToProps)(WomenContextProvider)

