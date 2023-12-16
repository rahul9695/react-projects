const root = ReactDOM.createRoot(document.getElementById('root'));

//heading
const heading = React.createElement("h1", {id:"heading"}, "Topics covered");

// paragraph
const para = React.createElement("p", null, "The following is a list of all the topics we cover in the MDN learning area.");

// Getting started with the web section
const firstAnchor = React.createElement(
    "a", 
    {href:"https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web", target: "_blank"},
    "Getting started with the web"
);

const firstSectionPara = React.createElement(
    "p", 
    {className:"sectionDetail"}, 
    "Provides a practical introduction to web development for complete beginners."
);
const gettingStartedSection = React.createElement("section", null, [firstAnchor, firstSectionPara]);

// HTML — Structuring the web section
const secondAnchor = React.createElement(
    "a", 
    {href:"https://developer.mozilla.org/en-US/docs/Learn/HTML", target: "_blank"},
    "HTML — Structuring the web"
);

const secondSectionPara = React.createElement(
    "p", 
    {className:"sectionDetail"}, 
    "HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail."
);
const styleWebSection = React.createElement("section", null, [secondAnchor, secondSectionPara]);

// JavaScript — Dynamic client-side scripting
const thirdAnchor = React.createElement(
    "a", 
    {href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript", target: "_blank"},
    "JavaScript — Dynamic client-side scripting"
);

const thirdSectionPara = React.createElement(
    "p", 
    {className:"sectionDetail"}, 
    "JavaScript is the scripting language used to add dynamic functionality to web pages. This topic teaches all the essentials needed to become comfortable with writing and understanding JavaScript."
);
const javascriptSection = React.createElement("section", null, [thirdAnchor, thirdSectionPara]);

// card container
const cardContainer = React.createElement("div", {id:"card-container"}, [heading, para,gettingStartedSection , styleWebSection, javascriptSection]);

//final render to root in index.html
root.render(cardContainer);