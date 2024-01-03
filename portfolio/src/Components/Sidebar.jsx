const Sidebar = () => {
  return (
    <div className="sidebar_container">
      <div className="sidebar_top">
        <img
          src="https://www.gravatar.com/avatar/1b8fabaa8d66250a7049bdb9ecf44397?s=250&d=mm&r=x"
          alt="profile_img"
        />
        <h2>Rahul Meena</h2>
        <p>Hello World</p>
      </div>
      <div className="sidebar_bottom">
        <div className="profile_data">
          <div className="icon_bg">
            <i className="fa-solid fa-hourglass-half fa-md"></i>
          </div>
          <div className="profile_text">
            <p>Age</p>
            <p>29 years old</p>
          </div>
        </div>
        <div className="profile_data">
          <div className="icon_bg">
            <i className="fa-solid fa-location-dot fa-md"></i>
          </div>
          <div className="profile_text">
            <p>Age</p>
            <p>29 years old</p>
          </div>
        </div>
        <div className="profile_data">
          <div className="icon_bg">
            <i className="fa-solid fa-user fa-md"></i>
          </div>
          <div className="profile_text">
            <p>Age</p>
            <p>29 years old</p>
          </div>
        </div>
        <div className="sidebar_links">
          <i className="fa-brands fa-github fa-lg"></i>
          <i className="fa-brands fa-linkedin fa-lg"></i>
          <i className="fa-brands fa-instagram fa-lg"></i>
          <i className="fa-brands fa-twitter fa-lg"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
