import { useState } from "react";
import PrimaryCards from "./PrimaryCards";
import Loader from "./Loader";

const About = () => {
  const aboutArray = [
    "Hello there! 👋 My name is Rahul Meena and I'm from Berlin, Germany. As a Full-Stack software developer, I specialize in creating visually appealing websites, apps and mobile games. My passion for graphic design isn't just a hobby, it's a key ingredient in every project I work on.",
    "Growing up bilingual, I developed a love for languages and I currently speak four of them fluently. I believe that this skill has given me a unique perspective and allows me to communicate effectively with clients from all over the world. One of my strengths is adding a personal touch to my projects by adding the client's identity and message into the design, creating meaningful and beautiful end products that are both eye-catching and user-friendly.",
    "In my free time, I enjoy exploring my other passions, such as photography and music production, which provide me with creative outlets. I am also very passionate about Web3 and everything related to crypto, NFTs and blockchain technology as I believe they have the potential to revolutionize business and online interactions.",
    "If you have an innovative idea for a project that needs to be developed, I would love to hear from you. Your vision can be turned into a real product. Don't hesitate to reach out and let's start a conversation about your concept. I'm excited to collaborate and help bring your ideas to life.",
  ];

  const [aboutIndex, setAboutIndex] = useState(0);
  const [showHide, setShowHide] = useState(`Show more`);

  function toggleAboutIndex() {
    if (aboutIndex === 0) setAboutIndex(aboutArray.length - 1);
    else setAboutIndex(0);

    if (showHide === "Show more") setShowHide("Hide Text");
    else setShowHide("Show more");
  }
  return (
    <>
      <div className="about_main_content">
        <div className="about_heading">
          <h2>About Me</h2>
          <span></span>
        </div>
      </div>
      <div className="about_me">
        <div className="aboutText">
          {aboutArray.map((data, i) => {
            if (i <= aboutIndex)
              return (
                <>
                  <p key="">{data}</p>
                </>
              );
          })}
        </div>
        <p className="aboutShowMore" onClick={toggleAboutIndex}>
          {showHide}
        </p>
      </div>
      <div className="aboutMain">
        <h2>Primary Focus</h2>
        <div className="cardsWrapperMain">
          <PrimaryCards
            fontAwesomeIconClass="fa-solid fa-globe fa-2xl"
            title="Web Design & Development"
            description="Creating attractive, easy-to-use websites that work well for businesses and individuals online."
          />
          <PrimaryCards
            fontAwesomeIconClass="fa-solid fa-mobile-screen-button fa-2xl"
            title="Mobile Apps & Games"
            description="Creating and developing engaging mobile apps and games for iOS and Android devices."
          />
          <PrimaryCards
            fontAwesomeIconClass="fa-solid fa-code fa-2xl"
            title="Development Solutions"
            description="Utilizing JavaScript frameworks like React, Node, Next, Vue and more to build interactive web applications."
          />
          <PrimaryCards
            fontAwesomeIconClass="fa-solid fa-ranking-star fa-2xl"
            title="Marketing & SEO"
            description="Using SEO and marketing strategies to boost online visibility and promote products or services."
          />
        </div>
        <h2>Exploring Creativity</h2>
        <div className="cardsWrapperMain">
          <PrimaryCards
            fontAwesomeIconClass="fa-solid fa-camera-retro fa-2xl"
            title="Visual Storytelling"
            description="Taking and editing photos or videos that tell engaging stories, bringing concepts and ideas to life visually."
          />
          <PrimaryCards
            fontAwesomeIconClass="fa-solid fa-wand-magic-sparkles fa-2xl"
            title="Digital Content Creation"
            description="Creatiing dynamic digital content, such as 3D models, graphics or animations."
          />
        </div>
        <h2>Programming Languages</h2>
        <div className="loadersWrapper">
          <Loader title="Javascript" percentage="80%" />
          <Loader title="TypeScript" percentage="50%" />
          <Loader title="PHP" percentage="40%" />
          <Loader title="Python" percentage="25%" />
          <Loader title="CSS" percentage="95%" />
          <Loader title="HTML" percentage="100%" />
        </div>
        <h2>Human Languages</h2>
        <div className="loadersWrapper">
          <Loader title="Javascript" percentage="80%" />
          <Loader title="TypeScript" percentage="50%" />
          <Loader title="PHP" percentage="40%" />
          <Loader title="Python" percentage="25%" />
        </div>
        <h2>Development Skills</h2>
        <div className="skillsComponent">
          <div className="skillsWrapper">
            <div className="skillScrollWrapper">
              <div className="skillLogoWrapper logoFirst">
                <img
                  src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-best-web-design-psd-html-cms-development-ecommerce-6.png"
                  alt="img"
                />
              </div>
              <div className="skillLogoWrapper">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png"
                  alt="img"
                />
              </div>
              <div className="skillLogoWrapper">
                <img
                  src="https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png"
                  alt="img"
                />
              </div>
              <div className="skillLogoWrapper">
                <img
                  src="https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png"
                  alt="img"
                />
              </div>
              <div className="skillLogoWrapper">
                <img
                  src="https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png"
                  alt="img"
                />
              </div>
              <div className="skillLogoWrapper">
                <img
                  src="https://img.icons8.com/?size=96&id=24895&format=png"
                  alt="img"
                />
              </div>
              <div className="skillLogoWrapper">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-512/free-github-169-1174970.png?f=webp&w=512"
                  alt="img"
                />
              </div>
              <div className="skillLogoWrapper">
                <img
                  src="https://cdn.freebiesupply.com/logos/large/2x/python-5-logo-png-transparent.png"
                  alt="img"
                />
              </div>
              <div className="skillLogoWrapper">
                <img
                  src="https://www.freepnglogos.com/uploads/wordpress-logo-png/file-wordpress-logo-wikimedia-commons-13.png"
                  alt="img"
                />
              </div>
              <div className="skillLogoWrapper">
                <img
                  src="https://cdn.freebiesupply.com/logos/large/2x/figma-1-logo-png-transparent.png"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
        <h2>Exploring Creativity</h2>
        <div className="cardsWrapperMain">
          <PrimaryCards
            src="https://oktayshakirov.com/assets/images/finances.png"
            fontAwesomeIconClass="fa-solid fa-money-check fa-2xl"
            title="Investments"
            description="Exploring Stocks, Crypto and Long-Term Growth Opportunities for Financial Investment"
          />
          <PrimaryCards
            src="https://oktayshakirov.com/assets/images/music.png"
            fontAwesomeIconClass="fa-solid fa-music fa-2xl"
            title="Music"
            description="Creating Instrumentals, Mixing and Mastering Tracks and Collaborating with Musicians"
          />
          <PrimaryCards
            src="https://oktayshakirov.com/assets/images/traveling.png"
            fontAwesomeIconClass="fa-solid fa-plane fa-2xl"
            title="Traveling"
            description="Exploring new places, learn about different cultures and create lifelong memories."
          />
          <PrimaryCards
            src="https://oktayshakirov.com/assets/images/camera.png"
            fontAwesomeIconClass="fa-solid fa-video fa-2xl"
            title="Photography"
            description="Capturing precious moments and memories through the lens of a camera."
          />
        </div>
      </div>
    </>
  );
};

export default About;
