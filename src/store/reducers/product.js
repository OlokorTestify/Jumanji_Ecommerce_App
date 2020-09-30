import * as types from "../actionTypes";

const initialState = {
  products: [],
  product: null,
  userProducts: [],
  createdProduct: null,
  error: null,
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_PRODUCT_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    case types.CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        createdProduct: action.product,
      };

    case types.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.product,
      };
    case types.GET_PRODUCT_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    case types.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.product,
      };

    case types.UPDATE_PRODUCT_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    case types.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.products,
      };

    case types.GET_ALL_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    case types.GET_ALL_USER_PRODUCTS_SUCCESS:
      return {
        ...state,
        userProducts: action.products,
      };

    case types.GET_ALL_USER_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case types.DELETE_PRODUCT_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}

export default productReducer;
