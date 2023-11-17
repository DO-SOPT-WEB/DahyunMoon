import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import SignUp from "./Signup";
import MyPage from "./Mypage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage/:userId" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
