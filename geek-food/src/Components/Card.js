const Card = (props) => {
    return(
        <div className="card-container">
            <p>{props.description}</p>
            <div className="card-user-details-wrapper">
                <div className="user-img-wrapper">
                    <img src={props.imgLink} alt="user-img"/>
                </div>
                <div>
                    <h3>{props.userName}</h3>
                    <p>{props.jobRole}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;