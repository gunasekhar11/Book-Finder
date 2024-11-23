import axios from "axios";
import { toast } from "react-toastify";
import { authActionTypes } from "../Store/Auth";

export function bookFinderAPICall(bookName: any) {
  return (dispatch: any) => {
    dispatch({
      type: authActionTypes.GET_BOOK,
      payload: {
        data: [],
        loader: true,
        error: null,
      },
    });
    const url = `https://openlibrary.org/search.json?title=${bookName}`;
    axios
      .get(url)
      .then((response: any) => {
        if (response) {
          dispatch({
            type: authActionTypes.GET_BOOK,
            payload: {
              data: response?.data,
              loader: false,
              error: null,
            },
          });
        }
      })
      .catch((error: any) => {
        if (error?.response?.status === 400) {
          dispatch({
            type: authActionTypes.GET_BOOK,
            payload: {
              data: [],
              loader: false,
              error: null,
            },
          });
          toast.error(error?.response?.data?.detail);
        } else {
          dispatch({
            type: authActionTypes.GET_BOOK,
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
