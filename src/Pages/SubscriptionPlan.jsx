// import styles from "./SubscriptionPlan.module.css";

// function PlanCard({ title, price, period, features, buttonText }) {
//   return (
//     <article className={styles.planCard}>
//       <h2 className={styles.planTitle}>{title}</h2>
//       <p className={styles.planPrice}>{price}</p>
//       {period && <p className={styles.planPeriod}>{period}</p>}
//       <ul className={styles.planFeatures}>
//         {features.map((feature, index) => (
//           <li key={index} className={styles.planFeatureItem}>
//             <img
//               src={feature.img}
//               alt={feature.alt}
//               className={styles.planFeatureImage}
//             />
//             {feature.text}
//           </li>
//         ))}
//       </ul>
//       <button className={styles.planButton}>{buttonText}</button>
//     </article>
//   );
// }

// export default function SubscriptionPlan() {
//   const plans = [
//     {
//       title: "Free",
//       price: "$0.00",
//       features: [
//         {
//           text: "Connect 2 streaming services",
//           img: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a720f5aa1d2234750a5b7bd5c9854e11b3d63d494aec41e23a131e917a9c05f?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&",
//           alt: "",
//         },
//         {
//           text: "Limited manual media tracking",
//           img: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a720f5aa1d2234750a5b7bd5c9854e11b3d63d494aec41e23a131e917a9c05f?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&",
//           alt: "",
//         },
//         {
//           text: "Share playlist/watch list within the app",
//           img: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a720f5aa1d2234750a5b7bd5c9854e11b3d63d494aec41e23a131e917a9c05f?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&",
//           alt: "",
//         },
//       ],
//       buttonText: "Get Plan",
//     },
//     {
//       title: "Pro",
//       price: "$4.99",
//       period: "Billed Monthly",
//       features: [
//         {
//           text: "Connect up to 5 streaming services",
//           img: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a720f5aa1d2234750a5b7bd5c9854e11b3d63d494aec41e23a131e917a9c05f?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&",
//           alt: "",
//         },
//         {
//           text: "Unlimited manual media tracking",
//           img: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a720f5aa1d2234750a5b7bd5c9854e11b3d63d494aec41e23a131e917a9c05f?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&",
//           alt: "",
//         },
//         {
//           text: "Share playlist/watch list across social platforms",
//           img: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a720f5aa1d2234750a5b7bd5c9854e11b3d63d494aec41e23a131e917a9c05f?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&",
//           alt: "",
//         },
//         {
//           text: "Advanced goal setting with progress tracking",
//           img: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a720f5aa1d2234750a5b7bd5c9854e11b3d63d494aec41e23a131e917a9c05f?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&",
//           alt: "",
//         },
//       ],
//       buttonText: "Get Plan",
//     },
//     {
//       title: "Premium",
//       price: "$9.99",
//       period: "Billed Monthly",
//       features: [
//         {
//           text: "Connect all supported streaming services",
//           img: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a720f5aa1d2234750a5b7bd5c9854e11b3d63d494aec41e23a131e917a9c05f?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&",
//           alt: "",
//         },
//         {
//           text: "Advanced media tracking with data visualization",
//           img: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a720f5aa1d2234750a5b7bd5c9854e11b3d63d494aec41e23a131e917a9c05f?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&",
//           alt: "",
//         },
//         {
//           text: "Collaborative playlist/watch list (share and edit with others)",
//           img: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a720f5aa1d2234750a5b7bd5c9854e11b3d63d494aec41e23a131e917a9c05f?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&",
//           alt: "",
//         },
//         {
//           text: "Customizable goals with achievement badges and challenges",
//           img: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a720f5aa1d2234750a5b7bd5c9854e11b3d63d494aec41e23a131e917a9c05f?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&",
//           alt: "",
//         },
//       ],
//       buttonText: "Get Plan",
//     },
//   ];

//   return (
//     <main className={styles.main}>
//       <img
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/8959128947ec95a021156093dea6a44476a563c48086e111c3c758ceb17a91db?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&"
//         alt="Media Hub logo"
//         className={styles.logo}
//       />
//       <section className={styles.header}>
//         <h1 className={styles.title}>Choose a subscription plan</h1>
//         <p className={styles.description}>
//           {" "}
//           Use Media Hub without limits and enjoy its features{" "}
//         </p>
//       </section>
//       <section className={styles.planContainer}>
//         {plans.map((plan, index) => (
//           <PlanCard key={index} {...plan} />
//         ))}
//       </section>
//     </main>
//   );
// }


import { useNavigate } from 'react-router-dom';
import styles from './SubscriptionPlan.module.css';

function PlanCard({ title, price, period, features, buttonText, onClick }) {
  return (
    <article className={styles.planCard}>
      <h2 className={styles.planTitle}>{title}</h2>
      <p className={styles.planPrice}>{price}</p>
      {period && <p className={styles.planPeriod}>{period}</p>}
      <ul className={styles.planFeatures}>
        {features.map((feature, index) => (
          <li key={index} className={styles.planFeatureItem}>
            <img
              src={feature.img}
              alt={feature.alt}
              className={styles.planFeatureImage}
            />
            {feature.text}
          </li>
        ))}
      </ul>
      <button className={styles.planButton} onClick={onClick}>{buttonText}</button>
    </article>
  );
}

export default function SubscriptionPlan() {
  const navigate = useNavigate();

  const handlePlanClick = (plan) => {
    if (plan.title === "Free") {
      navigate('/Onboarding'); // Navigate to the home page
    } else {
      // Handle other plans if needed
    }
  };

  const plans = [
    {
      title: "Free",
      price: "$0.00",
      features: [
        {
          text: "Connect 2 streaming services",
          img: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a720f5aa1d2234750a5b7bd5c9854e11b3d63d494aec41e23a131e917a9c05f?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&",
          alt: "",
        },
        {
          text: "Limited manual media tracking",
          img: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a720f5aa1d2234750a5b7bd5c9854e11b3d63d494aec41e23a131e917a9c05f?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&",
          alt: "",
        },
        {
          text: "Share playlist/watch list within the app",
          img: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a720f5aa1d2234750a5b7bd5c9854e11b3d63d494aec41e23a131e917a9c05f?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&",
          alt: "",
        },
      ],
      buttonText: "Get Plan",
    },
    {
      title: "Pro",
      price: "$4.99",
      period: "Billed Monthly",
      features: [
        {
          text: "Connect up to 5 streaming services",
          img: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a720f5aa1d2234750a5b7bd5c9854e11b3d63d494aec41e23a131e917a9c05f?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&",
          alt: "",
        },
        {
          text: "Unlimited manual media tracking",
          img: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a720f5aa1d2234750a5b7bd5c9854e11b3d63d494aec41e23a131e917a9c05f?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&",
          alt: "",
        },
        {
          text: "Share playlist/watch list across social platforms",
          img: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a720f5aa1d2234750a5b7bd5c9854e11b3d63d494aec41e23a131e917a9c05f?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&",
          alt: "",
        },
        {
          text: "Advanced goal setting with progress tracking",
          img: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a720f5aa1d2234750a5b7bd5c9854e11b3d63d494aec41e23a131e917a9c05f?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&",
          alt: "",
        },
      ],
      buttonText: "Get Plan",
    },
    {
      title: "Premium",
      price: "$9.99",
      period: "Billed Monthly",
      features: [
        {
          text: "Connect all supported streaming services",
          img: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a720f5aa1d2234750a5b7bd5c9854e11b3d63d494aec41e23a131e917a9c05f?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&",
          alt: "",
        },
        {
          text: "Advanced media tracking with data visualization",
          img: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a720f5aa1d2234750a5b7bd5c9854e11b3d63d494aec41e23a131e917a9c05f?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&",
          alt: "",
        },
        {
          text: "Collaborative playlist/watch list (share and edit with others)",
          img: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a720f5aa1d2234750a5b7bd5c9854e11b3d63d494aec41e23a131e917a9c05f?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&",
          alt: "",
        },
        {
          text: "Customizable goals with achievement badges and challenges",
          img: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a720f5aa1d2234750a5b7bd5c9854e11b3d63d494aec41e23a131e917a9c05f?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&",
          alt: "",
        },
      ],
      buttonText: "Get Plan",
    },
  ];

  return (
    <main className={styles.main}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8959128947ec95a021156093dea6a44476a563c48086e111c3c758ceb17a91db?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&"
        alt="Media Hub logo"
        className={styles.logo}
      />
      <section className={styles.header}>
        <h1 className={styles.title}>Choose a subscription plan</h1>
        <p className={styles.description}>
          {" "}
          Use Media Hub without limits and enjoy its features{" "}
        </p>
      </section>
      <section className={styles.planContainer}>
        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            {...plan}
            onClick={() => handlePlanClick(plan)}
          />
        ))}
      </section>
    </main>
  );
}
