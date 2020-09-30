import axios from "axios";
import * as types from "../actionTypes";

export const userLogin = ({ email, password }) => {
  function success(user) {
    return {
      type: types.LOGIN_USER_SUCCESS,
      user,
    };
  }

  function failure(error) {
    return {
      type: types.LOGIN_USER_FAILURE,
      error,
    };
  }

  return async (dispatch) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_BASE_URL}/auth/login`,
        { email, password },
      );
      localStorage.setItem("access_token", res.data.data.access_token);
      dispatch(success(res.data.data.user));
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

export const logOut = () => {
  localStorage.removeItem("access_token");
  return {
    type: types.LOGOUT_USER,
    message: "logged out successfully...",
  };
};

export const userSignUp = ({ email, password, first_name, last_name }) => {
  function success(user) {
    return {
      type: types.SIGNUP_USER_SUCCESS,
      user,
    };
  }

  function failure(error) {
    return {
      type: types.SIGNUP_USER_FAILURE,
      error,
    };
  }

  return async (dispatch) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_BASE_URL}/auth/signup`,
        { email, password, first_name, last_name },
      );
      localStorage.setItem("access_token", res.data.data.access_token);
      dispatch(success(res.data.data.user));
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

export const googleAuth = (token) => {
  function success(user) {
    return {
      type: types.GOOGLE_AUTH_SUCCESS,
      user,
    };
  }

  function failure(error) {
    return {
      type: types.GOOGLE_AUTH_FAILURE,
      error,
    };
  }

  return async (dispatch) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_BASE_URL}/auth/google`,
        { token },
      );
      localStorage.setItem("access_token", res.data.data.access_token);
      dispatch(success(res.data.data.user));
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

export const getUser = () => {
  function success(user) {
    return {
      type: types.GET_USER_SUCCESS,
      user,
    };
  }

  function failure(error, status) {
    return {
      type: types.GET_USER_FAILURE,
      error,
      unauthorized: status,
    };
  }
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("access_token");
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_BASE_URL}/auth/user`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      dispatch(success(res.data.data.user));
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          dispatch(failure(error.response.data.message, "unauthorized"));
          throw error.response.data.message;
        }
        dispatch(failure(error.response.data.message));
        throw error.response.data.message;
      }
      dispatch(failure("Network Error or Server Down"));
      throw new Error("Network Error or Server Down");
    }
  };
};

export const updateUser = (data) => {
  function success(user) {
    return {
      type: types.UPDATE_USER_SUCCESS,
      user,
    };
  }

  function failure(error) {
    return {
      type: types.UPDATE_USER_FAILURE,
      error,
    };
  }
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("access_token");
      const res = await axios.put(
        `${process.env.REACT_APP_SERVER_BASE_URL}/auth/user`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      dispatch(success(res.data.data.user));
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
