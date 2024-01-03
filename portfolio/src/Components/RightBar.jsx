import { useState } from "react";
import About from "./About";
import Certificates from "./Certificates";
import Projects from "./Projects";
import More from "./More";
import Contact from "./Contact";

const RightBar = () => {
  const [activeSection, setActiveSection] = useState("about");

  function showCertificates() {
    setActiveSection("certificates");
    // Implement logic to show certificates content
  }

  function showProjects() {
    setActiveSection("projects");
    // Implement logic to show projects content
  }

  function showMore() {
    setActiveSection("more");
    // Implement logic to show more content
  }

  function showContact() {
    setActiveSection("contact");
    // Implement logic to show contact content
  }

  function updateNextPage() {
    if (activeSection === "about") setActiveSection("certificates");
    else if (activeSection === "certificates") setActiveSection("projects");
    else if (activeSection === "projects") setActiveSection("more");
    else if (activeSection === "more") setActiveSection("contact");
  }

  const navLinksStyles = {
    color: "yellow",
    fontWeight: "600",
  };

  return (
    <div className="mainWrapper">
      <div className="about_nav_links">
        <div className="about_links_wrapper">
          <li
            onClick={() => setActiveSection("about")}
            style={activeSection === "about" ? navLinksStyles : {}}
          >
            About
          </li>
          <li
            onClick={showCertificates}
            style={activeSection === "certificates" ? navLinksStyles : {}}
          >
            Certificates
          </li>
          <li onClick={showProjects}
           style={activeSection === "projects" ? navLinksStyles : {}}>Projects</li>
          <li onClick={showMore}
           style={activeSection === "more" ? navLinksStyles : {}}>More</li>
          <li onClick={showContact}
           style={activeSection === "contact" ? navLinksStyles : {}}>Contact</li>
        </div>
      </div>
      <div className="content_container">
        {activeSection === "about" && <About />}

        {activeSection === "certificates" && (
          <>
            <Certificates />
          </>
        )}

        {activeSection === "projects" && (
          <>
            <Projects />
          </>
        )}

        {activeSection === "more" && (
          <>
            <More />
          </>
        )}

        {activeSection === "contact" && (
          <>
            <Contact />
          </>
        )}
      </div>
      <div className="nextBtnWrapper">
        <button className="nextBtn" onClick={updateNextPage}>
          Next
          <i className="fa-solid fa-chevron-right fa-xs"></i>
        </button>
      </div>
    </div>
  );
};

export default RightBar;
