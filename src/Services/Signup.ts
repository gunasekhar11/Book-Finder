import axios from "axios";
import { toast } from "react-toastify";
import { authActionTypes } from "../Store/Auth";
import { API_URL_CONSTANT } from "../Utilities/constants";

export function signUpAPICall(userDetails: any, navigate: any) {
  return (dispatch: any) => {
    dispatch({
      type: authActionTypes.SIGN_UP,
      payload: {
        data: [],
        loader: true,
        error: null,
      },
    });
    const url = API_URL_CONSTANT.SIGN_UP;
    axios
      .post(url, userDetails)
      .then((response: any) => {
        if (response.data) {
          dispatch({
            type: authActionTypes.SIGN_UP,
            payload: {
              data: [],
              loader: false,
              error: null,
            },
          });
          navigate();
          toast.success(`successfully signed up !`);
        }
      })
      .catch((error: any) => {
        if (error?.response?.status === 400) {
          dispatch({
            type: authActionTypes.SIGN_UP,
            payload: {
              data: [],
              loader: false,
              error: null,
            },
          });
          toast.error(error?.response?.data?.detail);
        } else {
          dispatch({
            type: authActionTypes.SIGN_UP,
            payload: {
              data: [],
              loader: false,
              error: null,
            },
          });
          toast.error("Something went wrong. Please Try Again..!");
        }
      });
  };
}
