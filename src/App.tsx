import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import { ROUTER_URL_CONSTANT } from "./Utilities/constants";
import SignIn from "./Components/Authentication/SignIn/SignIn";
import SignUp from "./Components/Authentication/SIgnUp/SignUp";
import AutoScrollUp from "./Utilities/autoScrollUp";
import Header from "./Components/Header/Header";
import ViewBook from "./Components/Home/ViewBook/ViewBook";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AutoScrollUp />
        <Routes>
          <Route path={ROUTER_URL_CONSTANT.MAIN} element={<Home />} />
          <Route path={ROUTER_URL_CONSTANT.SIGN_IN} element={<SignIn />} />
          <Route path={ROUTER_URL_CONSTANT.SIGN_UP} element={<SignUp />} />
          <Route
            path={`${ROUTER_URL_CONSTANT.VIEW_BOOK}`}
            element={<ViewBook />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
