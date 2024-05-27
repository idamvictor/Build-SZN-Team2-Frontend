// import { useNavigate } from 'react-router-dom';
// import styles from './Onboarding.module.css';

// function ImageBlock({ src, alt, onClick }) {
//   return (
//     <div className={styles.imageBlock} onClick={onClick}>
//       <img loading="lazy" src={src} alt={alt} className={styles.image} />
//     </div>
//   );
// }

// export default function Onboarding() {
//   const navigate = useNavigate();

//   const handleSpotifyClick = () => {
//     navigate('/MusicHome');
//   };

//   return (
//     <>
//       <div className={styles.mainContainer}>
//         <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8959128947ec95a021156093dea6a44476a563c48086e111c3c758ceb17a91db?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&" alt="" className={styles.logo} />
//         <h1 className={styles.title}>Select your Media accounts</h1>
//         <p className={styles.subtitle}>Kindly select the accounts you want to connect to Media hub</p>
        
//         <section className={styles.accountsContainer}>
//           <div className={styles.accountSet}>
//             <ImageBlock
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/71bcdec87f960de0c556488b1ce052d8c56c99000c6cdbb26738a788d3a33f9e?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&"
//               alt="Spotify"
//               onClick={handleSpotifyClick}
//             />
//             <ImageBlock
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/df7a0328b5ac9c303a198ea6edbc682ea5b5d876bd351ef71a5a8287366e5d57?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&"
//               alt="Media Account 2"
//             />
//           </div>
//         </section>
        
//         <footer className={styles.footer}>
//           <button className={styles.skipButton}>Skip</button>
//           <button className={styles.doneButton}>Done</button>
//         </footer>
//       </div>
//     </>
//   );
// }


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Onboarding.module.css';

function ImageBlock({ src, alt, onClick }) {
  return (
    <div className={styles.imageBlock} onClick={onClick}>
      <img loading="lazy" src={src} alt={alt} className={styles.image} />
    </div>
  );
}

export default function Onboarding() {
  const navigate = useNavigate();
  const [isNetflixClicked, setIsNetflixClicked] = useState(false);

  const handleSpotifyClick = () => {
    navigate('/MusicHome');
  };

  const handleNetflixClick = () => {
    setIsNetflixClicked(true);
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8959128947ec95a021156093dea6a44476a563c48086e111c3c758ceb17a91db?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&" alt="" className={styles.logo} />
        <h1 className={styles.title}>Select your Media accounts</h1>
        <p className={styles.subtitle}>Kindly select the accounts you want to connect to Media hub</p>
        
        <section className={styles.accountsContainer}>
          <div className={styles.accountSet}>
            <ImageBlock
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/71bcdec87f960de0c556488b1ce052d8c56c99000c6cdbb26738a788d3a33f9e?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&"
              alt="Spotify"
              onClick={handleSpotifyClick}
            />
            <ImageBlock
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/df7a0328b5ac9c303a198ea6edbc682ea5b5d876bd351ef71a5a8287366e5d57?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&"
              alt="Netflix"
              onClick={handleNetflixClick}
            />
          </div>
        </section>
        
        <footer className={styles.footer}>
          <button className={styles.skipButton}>Skip</button>
          <button
            className={styles.doneButton}
            onClick={() => navigate('/MusicHome')}
            disabled={!isNetflixClicked}
          >
            Done
          </button>
        </footer>
      </div>
    </>
  );
}
