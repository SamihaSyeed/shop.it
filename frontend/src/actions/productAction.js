import axios from 'axios';
import { ALL_PRODUCT_SUCCESS, ALL_PRODUCT_FAIL, ALL_PRODUCT_REQUEST, CLEAR_ERRORS } from "../constants/productsConstant";

export const getProduct = () => async (dispatch) =>{
    try{
        dispatch({type: ALL_PRODUCT_REQUEST});
        const res = await axios.get("/api/v1/products");
        console.log(res.data)
        dispatch({type: ALL_PRODUCT_SUCCESS, payload: res.data})
    }catch(e){
        console.log(e )
        dispatch({
            type:ALL_PRODUCT_FAIL,
            payload:e.response
        })
    }
}
export const clearErrors = () => async (dispatch) =>{
    dispatch({type:CLEAR_ERRORS})
}