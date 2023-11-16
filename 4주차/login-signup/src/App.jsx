import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import SignUp from "./Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
