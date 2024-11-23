export interface SystemState {
  auth: {
    signin: {
      data: any;
      loader: boolean;
      error: any;
    };
    signup: {
      data: any;
      loader: boolean;
      error: any;
    };
    googleauth: {
      data: any;
      loader: boolean;
      error: any;
    };
    get_book: {
      data: any;
      loader: boolean;
      error: any;
    };
  };
}
