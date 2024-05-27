import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
// import Signin from './pages/Signin'
// import { Signup } from "./pages/Signup"
import { EmailVerification } from "./pages/EmailVerification"
import { Homepage } from "./pages/Homepage"
// import { Onboarding } from "./pages/Onboarding"
// import { ForgotPassword } from "./pages/ForgotPassword"
import { LandingPage } from "./pages/LandingPage"
import { ProfilePage } from "./pages/ProfilePage"

import { useState } from "react";
import Home from "./pages/Home.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import MoviePage from "./pages/MoviePage.jsx";
import MusicHome from "./pages/MusicHome.jsx";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import SubscriptionPlan from "./pages/SubscriptionPlan";
import Onboarding from "./pages/Onboarding";
import axios from "axios"

function App() {
  axios.default.withCredentials=true
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [watchlist, setWatchlist] = useState([]);

  const handleMovieSelect = (id) => {
    setSelectedMovieId(id);
  };

  const addToWatchlist = (movie) => {
    setWatchlist((prevWatchlist) => {
      if (prevWatchlist.find((item) => item.imdbID === movie.imdbID)) {
        return prevWatchlist;
      }
      return [...prevWatchlist, movie];
    });
  };

  console.log(watchlist);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="Signin" element={<Signin />} />
          <Route path="SubscriptionPlan" element={<SubscriptionPlan />} />
          <Route path="Onboarding" element={<Onboarding />} />
          <Route path="EmailVerification" element={<EmailVerification />} />
          <Route path="Homepage" element={<Homepage />} />
          <Route path="Onboarding" element={<Onboarding />} />
          {/* <Route path="ForgotPassword" element={<ForgotPassword />} /> */}
          <Route path="LandingPage" element={<LandingPage />} />
          <Route path="ProfilePage" element={<ProfilePage />} />
          {/* <Route path="*" element={<PageNotFound />} /> */}

          <Route
            path="Home"
            element={
              <Home
                onMovieSelect={handleMovieSelect}
                addToWatchlist={addToWatchlist}
              />
            }
          />
          <Route
            path="/MoviePage"
            element={
              <MoviePage
                selectedMovieId={selectedMovieId}
                addToWatchlist={addToWatchlist}
              />
            }
          />
          <Route path="*" element={<PageNotFound />} />
          <Route path="MusicHome" element={<MusicHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
