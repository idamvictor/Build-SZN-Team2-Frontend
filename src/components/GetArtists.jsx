import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./GetArtists.module.css";
import spotify from "../assets/spotify-logo.svg";
import { Link } from "react-router-dom";

const GetArtists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchArtists = async () => {
      const artistIds = [
        "2w9zwq3AktTeYYMuhMjju8",
        "1uNFoZAHBGtllmzznpCI3s",
        "66CXWjxzNUsdJxJ2JdwvnR",
        "7dGJo4pcD2V6oG8kP0tJRR",
        "6eUKZXaKkcviH0Ku9w2n3V",
        "1Xyo4u8uXC1ZmMpatF05PJ",
        "53XhwfbYqKCa1cC15pYq2q",
        "6vWDO969PvNqNYHIOW5v0m",
        "5pKCCKE2ajJHZ9KAiaK11H",
        "3TVXtAsR1Inumwj472S9r4",
        // Add more artist IDs here if needed
      ].join(",");

      const options = {
        method: "GET",
        url: "https://spotify23.p.rapidapi.com/artists/",
        params: { ids: artistIds },
        headers: {
          "X-RapidAPI-Key":
            "3e3ca70843msh8aa19a49b39a9c5p1a7812jsn6bb63025b4e0",
          "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setArtists(response.data.artists);
        console.log(response.data.artists);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArtists();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.artistSeeAllContainer}>
        <h2 className={styles.artists}>Artists</h2>
        <Link to="" className={styles.seeAllLink}>See all</Link>
      </div>
      <div className={styles.favouriteArtistsContainer}>
        {artists.map((artist) => (
          <div key={artist.id} className={styles.artistCard}>
            <img
              src={artist.images[0]?.url}
              alt={artist.name}
              className={styles.artistImage}
            />
            <div className={styles.artistInfo}>
              <h3 className={styles.artistName}>{artist.name}</h3>
              <div className={styles.genreImageContainer}>
                <p className={styles.genre}>
                  {artist.genres[0] || "Genre not available"}
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

export default GetArtists;
