import axios from "axios";
import * as types from "../actionTypes";

export const createProduct = (data) => {
  function success(product) {
    return {
      type: types.CREATE_PRODUCT_SUCCESS,
      product,
    };
  }
  function failure(error) {
    return {
      type: types.CREATE_PRODUCT_FAILURE,
      error,
    };
  }

  return async (dispatch) => {
    const token = localStorage.getItem("access_token");
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_BASE_URL}/products`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      dispatch(success(res.data.data.product));
      return res.data.data.product;
    } catch (error) {
      if (error.response) {
        dispatch(failure(error.response.data.message));
        throw error.response.data.message;
      }
      dispatch(failure("Network Error or Server Down"));
      throw new Error("Network Error or Server Down");
    }
  };
};

export const updateProduct = (id, values) => {
  console.log(values);
  function success(product) {
    return {
      type: types.UPDATE_PRODUCT_SUCCESS,
      product,
    };
  }
  function failure(error) {
    return {
      type: types.UPDATE_PRODUCT_FAILURE,
      error,
    };
  }

  return async (dispatch) => {
    const token = localStorage.getItem("access_token");
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_SERVER_BASE_URL}/products/${id}`,
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      dispatch(success(res.data.data.product));
    } catch (error) {
      if (error.response) {
        dispatch(failure(error.response.data.message));
        throw error.response.data.message;
      }
      dispatch(failure("Network Error or Server Down"));
      throw new Error("Network Error or Server Down");
    }
  };
};

export const getProduct = (id) => {
  function success(product) {
    return {
      type: types.GET_PRODUCT_SUCCESS,
      product,
    };
  }

  function failure(error) {
    return {
      type: types.GET_PRODUCT_FAILURE,
      error,
    };
  }

  return async (dispatch) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_BASE_URL}/products/${id}`,
      );
      dispatch(success(res.data.data.product));
      return;
    } catch (error) {
      if (error.response) {
        dispatch(failure(error.response.data.message));
        throw error.response.data.message;
      }
      dispatch(failure("Network Error or Server Down"));
      throw new Error("Network Error or Server Down");
    }
  };
};

export const delProduct = (id) => {
  function failure(error) {
    return {
      type: types.DELETE_PRODUCT_FAILURE,
      error,
    };
  }

  return async (dispatch) => {
    const token = localStorage.getItem("access_token");
    try {
      await axios.delete(
        `${process.env.REACT_APP_SERVER_BASE_URL}/products/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
    } catch (error) {
      if (error.response) {
        dispatch(failure(error.response.data.message));
        throw error.response.data.message;
      }
      dispatch(failure("Network Error or Server Down"));
      throw new Error("Network Error or Server Down");
    }
  };
};

export const getAllProducts = () => {
  function success(products) {
    return {
      type: types.GET_ALL_PRODUCTS_SUCCESS,
      products,
    };
  }

  function failure(error) {
    return {
      type: types.GET_ALL_PRODUCTS_FAILURE,
      error,
    };
  }

  return async (dispatch) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_BASE_URL}/products`,
      );
      dispatch(success(res.data.data.products));
      return res.data.data.products;
    } catch (error) {
      if (error.response) {
        dispatch(failure(error.response.data.message));
        throw error.response.data.message;
      }
      throw new Error("Network Error or Server Down");
    }
  };
};

export const getAllUserProducts = () => {
  function success(products) {
    return {
      type: types.GET_ALL_USER_PRODUCTS_SUCCESS,
      products,
    };
  }

  function failure(error) {
    return {
      type: types.GET_ALL_USER_PRODUCTS_FAILURE,
      error,
    };
  }

  return async (dispatch) => {
    try {
      const token = localStorage.getItem("access_token");

      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_BASE_URL}/products/user/products`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      dispatch(success(res.data.data.products));
      return;
    } catch (error) {
      if (error.response) {
        dispatch(failure(error.response.data.message));
        throw error.response.data.message;
      }
      dispatch(failure("Network Error or Server Down"));
      throw new Error("Network Error or Server Down");
    }
  };
};
