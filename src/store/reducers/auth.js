import * as types from "../actionTypes";

function checkAuth() {
  if (localStorage.getItem("access_token")) {
    return true;
  } else {
    return false;
  }
}

const initialState = {
  message: "",
  error: null,
  user: null,
  isLoggedIn: checkAuth(),
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        message: "login successful",
        user: action.user,
      };
    case types.LOGIN_USER_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        error: action.error,
      };

    case types.GOOGLE_AUTH_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        message: "login successful",
        user: action.user,
      };
    case types.GOOGLE_AUTH_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        error: action.error,
      };

    case types.GET_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    case types.GET_USER_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoggedIn: action.unauthorized ? false : true,
      };

    case types.UPDATE_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    case types.UPDATE_USER_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    case types.SIGNUP_USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        message: "login successful",
        user: action.user,
      };
    case types.SIGNUP_USER_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        error: action.error,
      };
    case types.LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: false,
        message: action.message,
      };
    default:
      return state;
  }
}

export default authReducer;
