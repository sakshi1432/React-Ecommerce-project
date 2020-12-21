import {ADD_TO_CART} from '../Reducers/Constant.js';
export const addToCart=(data)=>{
  
    return{
        type:ADD_TO_CART,
        data:data
    }
}