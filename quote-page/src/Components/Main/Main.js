import React from "react";
import "./Main.css";
import Card from "../Card/Card";
import { reviewData } from "../../utils/data.js";

const Main = () => {
  return (
    <div className="main-wrapper">
        {
            reviewData.map((data)=> <Card review={data.review} userName={data.userName} />)
        }
    </div>
  );
};

export default Main;
