import "../App.css";

const Header = () => {
  return (
    <div id="header-container">
      <h1>Family Wellness</h1>
      <p style={{ textTransform: "uppercase" }}>Massage Therapy</p>
      <div id="header-links-container">
        <a id="active-link" href="https://www.google.com">
          Home
        </a>
        <a href="https://www.google.com">About</a>
        <a href="https://www.google.com">Services</a>
        <a href="https://www.google.com">F&Q</a>
        <a href="https://www.google.com">Contact</a>
      </div>
    </div>
  );
};

export default Header;
