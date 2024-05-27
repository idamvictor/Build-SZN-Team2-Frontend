import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./TrackRecommendation.module.css";
import spotify from "../assets/spotify-logo.svg";
import { Link } from "react-router-dom";


const TrackRecommendation = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      const options = {
        method: "GET",
        url: "https://spotify23.p.rapidapi.com/recommendations/",
        params: {
          limit: "20",
          seed_tracks: "0c6xIDDpzE81m2q797ordA",
          seed_artists: "4NHQUGzhtTLFvgF5SZesLK",
          seed_genres: "classical,country",
        },
        headers: {
          "X-RapidAPI-Key":
            "3e3ca70843msh8aa19a49b39a9c5p1a7812jsn6bb63025b4e0",
          "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setTracks(response.data.tracks);
        console.log(response.data.tracks);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTracks();
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.artistSeeAllContainer}>
        <h2 className={styles.artists}>Recommendation</h2>
        <Link to="" className={styles.seeAllLink}>
          See all
        </Link>
      </div>
      <div className={styles.favouriteTracksContainer}>
        {tracks.map((track) => (
          <div key={track.id} className={styles.trackCard}>
            <div className={styles.imageTitleContainer}>
              <img
                src={track.album.images[0]?.url}
                alt={track.name}
                className={styles.trackImage}
              />
              <h3>{truncateText(track.name, 20)}</h3>
            </div>
            <div className={styles.trackInfo}>
              <div className={styles.nameLogoContainer}>
                <p className={styles.artistName}>
                  {truncateText(track.artists[0]?.name || "Unknown Artist", 30)}
                </p>
                <img
                  src={spotify}
                  alt="Spotify Logo"
                  className={styles.spotifyLogo}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackRecommendation;
