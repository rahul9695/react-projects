const root = ReactDOM.createRoot(document.getElementById('root'));

// Heading
const heading = React.createElement("h1", {id:"heading"}, "Learn Web Development");

// first div with para
const firstPara = React.createElement("p", null, "Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.");
const firstDiv = React.createElement("div", {id:"first-div"}, firstPara);

// second div with para
const anchorTag = React.createElement("a", {href:"https://developer.mozilla.org/en-US/", target:"_blank"}, "the rest of MDN");
const secondPara = React.createElement("p", null, "The aim of this area of MDN is not to take you from 'beginner' to 'expert' but to take you from 'beginner' to 'comfortable.' From there, you should be able to start making your way, learning from ",anchorTag,", and other intermediate to advanced resources that assume a lot of previous knowledge.");
const secondDiv = React.createElement("div", {id:"second-div"}, secondPara);

// third div with para
const thirdPara = React.createElement("p", null, "If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.");
const thirdDiv = React.createElement("div", {id:"second-div"}, thirdPara);

// card container
const cardContainer = React.createElement("div", {id:"card-container"}, [heading, firstDiv, secondDiv, thirdDiv]);

// cardContainer.render();
root.render(cardContainer);
