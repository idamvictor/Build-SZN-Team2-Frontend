import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./Pages/Signup";
import Homepage from "./Pages/Homepage";
import PageNotFound from "./Pages/PageNotFound";
import EmailVerification from "./Pages/EmailVerification";
import Login from "./Pages/Login";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Homepage" element={<Homepage />} />
        <Route path="/" element={<Signup />} />
        <Route path="EmailVerification" element={<EmailVerification />} />
        <Route path="Login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
