import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,

    PRODUCT_DETAIL_REQUEST,
    PRODUCT_DETAIL_SUCCESS,
    PRODUCT_DETAIL_FAIL,

    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAIL,

    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAIL
} from '../constants/productConstants'
import axios from 'axios'


export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })
        const { data } = await axios.get('http://localhost:5000/api/products')
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export const listProductDetail = (id) => async (dispatch) => {
    try {

        dispatch({ type: PRODUCT_DETAIL_REQUEST })
        const { data } = await axios.get(`http://localhost:5000/api/products/${id}`)
        dispatch({
            type: PRODUCT_DETAIL_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAIL_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export const listProductDelete = (id) => async (dispatch) => {
    try {

        dispatch({ type: PRODUCT_DELETE_REQUEST })
        const { data } = await axios.delete(`http://localhost:5000/api/products/${id}`)
        dispatch({
            type: PRODUCT_DELETE_SUCCESS,
        })
        dispatch(listProducts())

    } catch (error) {
        dispatch({
            type: PRODUCT_DELETE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

// export const listProductDelete = (id) => async (dispatch, getState) => {
//     try {
//         dispatch({
//             type: PRODUCT_DELETE_REQUEST,
//         });

//         const {
//             userLogin: { userInfo },
//         } = getState();

//         const config = {
//             headers: {
//                 Authorization: `Bearer ${userInfo.token}`,
//             },
//         };

//         await axios.delete(`http://localhost:5000/api/products/${id}`, config);

//         dispatch({
//             type: PRODUCT_DELETE_SUCCESS,
//         });
//         dispatch(listProductDelete());
//     } catch (error) {
//         dispatch({
//             type: PRODUCT_DELETE_FAIL,
//             payload:
//                 error.response && error.response.data.message
//                     ? error.response.data.message
//                     : error.message,
//         });
//     }
// };

export const createProduct = (product) => async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_CREATE_REQUEST });
  
      const { userLogin: { userInfo } } = getState();
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`
        }
      };
  
      const { data } = await axios.post(
        'http://localhost:5000/api/products/addProduct',
        product,
        config
      );
  
      dispatch({
        type: PRODUCT_CREATE_SUCCESS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_CREATE_FAIL,
        payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      });
    }
  };