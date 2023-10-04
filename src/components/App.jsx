import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import RouteWrapper from "./RouteWrapper";
import LogIn from "./LogIn";
import CreateAnAccount from "./CreateAnAccount";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RouteWrapper />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<LogIn />}></Route>
            <Route
              path="/create-an-account"
              element={<CreateAnAccount />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
