import Button from '../Button/Button';
import './Header.css';
// import LinksContainer from './LinksContainer';

const Header = () => {
    return(
        <div className="header-wrapper">
            <div className="logo-wrapper">
                <img src="https://icon2.cleanpng.com/20180226/owe/kisspng-pizza-logo-royalty-free-illustration-pizza-logo-image-logo-vector-5a93a9c616fee6.0087662915196266940942.jpg" alt="website logo"></img>
                <h1>Geekfoods</h1>
            </div>
            <div className="links-wrapper">
                <a style={{color: "#ffffff"}} href="https://www.google.com">Home</a>
                <a style={{color: "#ffffff"}} href="https://www.google.com">Quote</a>
                <a style={{color: "#ffffff"}} href="https://www.google.com">Restaurants</a>
                <a style={{color: "#ffffff"}} href="https://www.google.com">Foods</a>
                <a style={{color: "#ffffff"}} href="https://www.google.com">Contact</a>
            </div>
            <Button 
               title = "Get started"
               style = {{
                backgroundColor : "#ffc823",
                borderRadius : "7px",
                border : "none",
                padding : "10px 15px 10px 15px",
                color : "black",
                fontWeight : "600"
               }}
            />
        </div>
    ); 
}

export default Header;