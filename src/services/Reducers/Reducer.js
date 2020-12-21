import {ADD_TO_CART} from './Constant';
import {cloneDeep} from "lodash";
const initialState={
    cartData:[]
}
export default function cartItems(state=initialState,action)
{
    switch(action.type){
        case ADD_TO_CART:
            const updatedCartData=cloneDeep(state.cartData)
            updatedCartData.push (action.data)
    
        return {
            ...state,
            cartData:updatedCartData
        }
        break;
        default:
            return state
    }
}