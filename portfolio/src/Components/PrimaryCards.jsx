/* eslint-disable react/prop-types */
import "../App.css";

const PrimaryCards = (props) => {
  return (
    <>
      <div className="cardContainer">
        <div className="cardIcon">
          <i className={props.fontAwesomeIconClass}></i>
        </div>
        <div className="cardText">
          <h4>{props.title}</h4>
          <p>
            {props.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default PrimaryCards;
