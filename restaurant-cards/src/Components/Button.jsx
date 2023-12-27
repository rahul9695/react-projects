/* eslint-disable react/prop-types */
import './Button.css';

const Button = (props) => {
    return(<button className="btn-hover-dark" style={props.style}>{props.title}</button>);
}

export default Button;