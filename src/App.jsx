import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./Pages/Signup";
import Homepage from "./Pages/Homepage";
import PageNotFound from "./Pages/PageNotFound";
import Login from "./Pages/Login";
import Newpassword from "./Pages/Newpassword";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Homepage" element={<Homepage />} />
        <Route path="/" element={<Signup />} />
        <Route path="Login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="*" element={<Newpassword/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
