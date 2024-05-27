import { Navigations } from "../components/Navigations";
import { Inputs } from "../components/Inputs";
import { Button } from "../components/Button";
import Styles from "./Styles.module.css";

export const LandingPage = () => {
  return (
    <main className="homePageMain">
      <Navigations
        Home="Home"
        Dashboard="Dashboard"
        Services="Services"
        showIcons={false}
      />
      <section className={Styles.landingSectionOne}>
        <div id={Styles.sectionOneDiv}>
          <h1>
            Streamline Your Streaming, Unify Your Entertainment Experience!
          </h1>
          <p>
            Meet Media Hub, a media unifier where you can link all you favourite
            Music and Movie Streaming Services
          </p>
        </div>
        <img
          className={Styles.landingPageBanner}
          src="/LandingPageBanner.png"
          alt=""
        />
      </section>

      <section className={Styles.landingSectionTwo}>
        <div className={Styles.mediaWrap}>
          <h1>What can you do with Media Hub</h1>
          <div className={Styles.mediaIconDiv}>
            <div className={Styles.imgDiv}>
              <img src="/musicIcon.png" alt="" />
              <div className={Styles.innerImgDiv}>
                <h3>Link and create Playlist</h3>
                <p>
                  Link your playlist from your favourite streaming platform and
                  even create new ones with Media Hub
                </p>
              </div>
            </div>
            <div className={Styles.imgDiv}>
              <img src="/videoIcon.png" alt="" />
              <div className={Styles.innerImgDiv}>
                <h3>Link and create Watchlist</h3>
                <p>
                  Link your Watchlist from your favourite streaming platform and
                  even create new ones with Media Hub
                </p>
              </div>
            </div>
            <div className={Styles.imgDiv}>
              <img src="/shareIcon.png" alt="" />
              <div className={Styles.innerImgDiv}>
                <h3>Share Media Hub Contents</h3>
                <p>
                  Share your saved movies,Music, recommendations,and even
                  Playlist with anybody.
                </p>
              </div>
            </div>
            <div className={Styles.imgDiv}>
              <img src="/trackingIcon.png" alt="" />
              <div className={Styles.innerImgDiv}>
                <h3>Track Media Contents</h3>
                <p>
                  Keep track of all your media contents on all streaming
                  platforms and unify them on Media Hub
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={Styles.landingSectionThree}>
        <div className={Styles.landingSection3Div1}>
          <h1>View your Unified Media Contents</h1>
          <p>
            Gain access to al your linked media contents from different platform
            all on your Media Hub homepage.
          </p>
        </div>
        <div className={Styles.landingSection3Div2}>
          <img src="/homeimg.png" alt="" />
        </div>
      </section>

      <section className={Styles.landingSectionFour}>
        <div className={Styles.landingSection4Div1}>
          <img src="/statsimg.png" alt="" />
        </div>
        <div className={Styles.landingSection4Div2}>
          <h1>Track and view streaming Progress</h1>
          <p>
            Keep track of all your streaming progress for movies and music on
            the Media Hub dashboard.
          </p>
        </div>
      </section>

      <section className={Styles.landingSectionFive}>
        <div>
          <h2 className={Styles.pricing}>Pricing</h2>
        </div>
        <div className={Styles.planDiv}>
          <div className={Styles.plan}>
            <div className={Styles.planInnerDiv}>
              <h3>Free</h3>
              <h2>$0.00</h2>
              <p>Connect 2 streaming services </p>
              <p>Limited manual media tracking</p>
              <p>Share playlist/watch list within the app</p>
            </div>
            <div className={Styles.planButton}>
              <Button value={"Get Plan"} />
            </div>
          </div>

          <div className={Styles.plan} id={Styles.plan}>
            <div className={Styles.planInnerDiv} id={Styles.planInnerDiv}>
              <h3>Pro</h3>
              <h2>$4.99</h2>
              <p>Connect up to 5 streaming services </p>
              <p>Unlimited manual media tracking</p>
              <p>Share playlist/watch list across social platforms</p>
              <p>Advanced goal setting with progress tracking</p>
            </div>
            <div className={Styles.planButton} id={Styles.planButton}>
              <Button value={"Get Plan"} />
            </div>
          </div>

          <div className={Styles.plan}>
            <div className={Styles.planInnerDiv}>
              <h3>Premium</h3>
              <h2>$9.99</h2>
              <p>Connect all supported streaming services </p>
              <p>Advanced media tracking with data visualization</p>
              <p>
                Collaborative playlist/watch list share and edit with others{" "}
              </p>
              <p>Customizable goals with achievement badges and challenges </p>
            </div>
            <div className={Styles.planButton}>
              <Button value={"Get Plan"} />
            </div>
          </div>
        </div>
      </section>

      <section className={Styles.landingSectionSix}>
        <div className={Styles.landingInputs}>
          <div className={Styles.landingInputsDiv}>
            <p>Write Us a Message</p>
            <div className={Styles.Inputs}>
              <Inputs
                customStyle={Styles.Input1}
                type={"text"}
                placeholder={"name"}
                names={"name"}
              />
              <Inputs
                customStyle={Styles.Input2}
                type={"text"}
                placeholder={"Email"}
                names={"emailAddress"}
              />
              <Inputs
                customStyle={Styles.Input3}
                type={"text"}
                placeholder={"message"}
                names={"message"}
              />
              <Button value={"Submit"} />
            </div>
          </div>
        </div>
        <div className={Styles.landingSectionSixContactDiv}>
          <h2>Contact us</h2>
          <p>
            Let’s Connect, Kindly Fill out the Form. We’re here to help you or
            reach us via Mail or Phone.
          </p>
          <div>
            <img src="/mailIcon.png" alt="" />
            <p>Mediahub@gmail.com</p>
          </div>
          <div>
            <img src="/callIcon.png" alt="" />
            <p>+13590007534</p>
          </div>
        </div>
      </section>

      <section className={Styles.landingSectionSeven}>
        <div className={Styles.landingSectionSevenMainDiv}>
          <div className={Styles.landingSectionSevenDiv1}>
            <div className={Styles.landingSectionSevenHP}>
              <h2>INFO</h2>
              <p>Status</p>
              <p>Formats</p>
              <p>FAQ</p>
              <p>Compressions</p>
            </div>
            <div className={Styles.landingSectionSevenHP}>
              <h2>RESOURCES</h2>
              <p>Developer API</p>
              <p>Tools</p>
              <p>Blog</p>
            </div>
            <div className={Styles.landingSectionSevenHP}>
              <h2>COMPANY</h2>
              <p>About us</p>
              <p>Sustainability</p>
              <p>Terms of service</p>
              <p>Privacy</p>
            </div>
          </div>
          <div className={Styles.landingSectionSevenDiv2}>
            <div className={Styles.landingSectionSocial}>
              <h3>Follow us on</h3>
              <div className={Styles.landingSectionImg}>
                <img src="/facebookIcon.png" alt="" />
                <img src="/instagramIcon.png" alt="" />
              </div>
            </div>
            <div className={Styles.landingSectionSevenDiv3}>
              <p>Terms and conditions</p>
              <p>Cookies Policy</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
