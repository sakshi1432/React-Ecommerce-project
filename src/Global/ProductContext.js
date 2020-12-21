import React, { createContext, useState,useEffect } from "react";
import ProductCard from "../components/Products";
// import Teddy from "../assets/Teddy.jpg";
// import Tapeli from "../assets/Tapeli.jpg";
// import Teddy2 from "../assets/Teddy2.jpg";
// import Watch from "../assets/Watch.jpg";
// import Suit from "../assets/Suit.jpg";
// import Study from "../assets/Study.jpg";
// import Sofa from "../assets/Sofa.jpg";
// import Sandal from "../assets/Sandal.jpg";
// import Spoon from "../assets/Spoon.jpg";
// import Straightner from "../assets/Straightner.jpg";
// import Mobile from "../assets/Mobile.jpg";
// import Pair from "../assets/Pair.jpg";
// import Google from "../assets/Google.jpg";
// import Cup from "../assets/Cup.jpg";
// import Decoration from "../assets/Decoration.jpg";
// import Ethnic from "../assets/Ethnic.jpg";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import {connect} from "react-redux";

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
  

  const [products,setProducts] = useState([
    // { id: 1, name: "Teddy", price: 300, image: Teddy },
    // { id: 2, name: "Cooking", price: 400, image: Tapeli },
    // { id: 3, name: "Teddy ", price: 199, image: Teddy2, status: "Hot" },
    // { id: 4, name: "Watch for Man", price: 500, image: Watch },
    // { id: 5, name: "Suit women", price: 1999, image: Suit, status: "bestDeal" },
    // { id: 6, name: "Study Table", price: 4500, image: Study },
    // { id: 7, name: "Sofa Set", price: 9000, image: Sofa },
    // { id: 8, name: "Sandal", price: 1200, image: Sandal },
    // { id: 9, name: "Spoon", price: 400, image: Spoon },
    // { id: 10, name: "Straightner", price: 270, image: Straightner },
    // { id: 11, name: "Mobile", price: 9000, image: Mobile },
    // { id: 12, name: "Royal Shoes", price: 800, image: Pair },
    // { id: 13, name: "Google for combo", price: 300, image: Google },
    // { id: 14, name: "Cup", price: 150, image: Cup },
    // { id: 15, name: "Interior Design", price: 6000, image: Decoration },
    // { id: 1, name: "Ethnic wear", price: 2000, image: Ethnic },
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
    //     <ProductsContext.Provider value={{products: [...products]}}>
    //         {props.children}
    //     </ProductsContext.Provider>
    <Grid container>
    {
    products.map((product) => {
      return (
        <Grid item lg={4} spacing={3}>
        <ProductCard
        
          title={product.name}
          detail={product.price}
          image={product.image}
      
        />
        </Grid>
      );
    })
    }
</Grid>
  );
  
};
function mapStateToProps(state) {
  const { cartItems } = state
  return { cartData: cartItems.cartData }
}

export default connect(mapStateToProps)(ProductsContextProvider)
