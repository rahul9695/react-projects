const LinksContainer = (props) => {
    return(
        <div className="links-wrapper">
            <a style={props.style} href="https://www.google.com">{props.one}</a>
            <a style={props.style} href="https://www.google.com">{props.two}</a>
            <a style={props.style} href="https://www.google.com">{props.three}</a>
            <a style={props.style} href="https://www.google.com">{props.four}</a>
            <a style={props.style} href="https://www.google.com">{props.five}</a>
            <a style={props.style} href="https://www.google.com">{props.six}</a>
        </div>
    );
}

export default LinksContainer;