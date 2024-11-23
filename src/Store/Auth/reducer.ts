import {  SIGN_IN, SIGN_UP , GOOGLE_AUTH, GET_BOOK } from "./actionTypes";
import { authActionTypes } from "./types";

export const initialLoginState = {
  signin: {
    data: [],
    loader: false,
    error: null,
  },
  signup: {
    data: [],
    loader: false,
    error: null,
  },
  googleauth: {
    data: [],
    loader: false,
    error: null,
  },
  get_book: {
    data: [],
    loader: false,
    error: null,
  },
};

export default (state = initialLoginState, action: authActionTypes) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        signin: {
          ...state.signin,
          data: action.payload.data,
          loader: action.payload.loader,
          error: action.payload.error,
        },
      };
    case SIGN_UP:
      return {
        ...state,
        signup: {
          ...state.signup,
          data: action.payload.data,
          loader: action.payload.loader,
          error: action.payload.error,
        },
      };
    case GOOGLE_AUTH:
      return {
        ...state,
        googleauth: {
          ...state.googleauth,
          data: action.payload.data,
          loader: action.payload.loader,
          error: action.payload.error,
        },
      };
      case GET_BOOK:
        return {
          ...state,
          get_book: {
            ...state.get_book,
            data: action.payload.data,
            loader: action.payload.loader,
            error: action.payload.error,
          },
        };
    default:
      return state;
  }
};
