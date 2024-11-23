import { SIGN_IN, SIGN_UP, GOOGLE_AUTH, GET_BOOK } from "./actionTypes";

interface Signin {
  type: typeof SIGN_IN;
  payload: any;
}

interface Signup {
  type: typeof SIGN_UP;
  payload: any;
}

interface GoogleAuth {
  type: typeof GOOGLE_AUTH;
  payload: any;
}

interface GET_BOOK {
  type: typeof GET_BOOK;
  payload: any;
}

export type authActionTypes = Signin | Signup | GoogleAuth | GET_BOOK;
