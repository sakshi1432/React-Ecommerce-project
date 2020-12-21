import React from "react";


const Products = () =>{
    const {products} = useContext{ProductsContext};
    return{
        <div className = "products">
            {products.map((product) = (
                <div className = "product" key = {product.id}>
                    <div className="product-image">
                        <img src={product.image} alt = "not found"/>
                    </div>
                    <div className = "product-details">
                        <div className="product-name">

                        </div>
                    </div>
                </div>



            ))}
        </div>
    }
}