import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="logo-wrapper">
                <img src="https://icon2.cleanpng.com/20180226/owe/kisspng-pizza-logo-royalty-free-illustration-pizza-logo-image-logo-vector-5a93a9c616fee6.0087662915196266940942.jpg" alt="website logo"></img>
                <h1>Geekfoods</h1>
            </div>
            <p className="footer-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</p>
            <div className="links-wrapper">
                <a style={{color: "#000"}} href="https://www.google.com">About</a>
                <a style={{color: "#000"}} href="https://www.google.com">Careers</a>
                <a style={{color: "#000"}} href="https://www.google.com">History</a>
                <a style={{color: "#000"}} href="https://www.google.com">Services</a>
                <a style={{color: "#000"}} href="https://www.google.com">Project</a>
                <a style={{color: "#000"}} href="https://www.google.com">Blog</a>
            </div>
            <div className="social-icons-wrapper">
            <i class="fa-brands fa-facebook fa-xl"></i>
            <i class="fa-brands fa-instagram fa-xl"></i>
            <i class="fa-brands fa-twitter fa-xl"></i>
            <i class="fa-brands fa-github fa-xl"></i>
            </div>
        </div>
    );
}

export default Footer;