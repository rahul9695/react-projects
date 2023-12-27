import "./Center.css";
import { useEffect, useState } from "react";
import Card from "./Card.jsx";
import restaurantList from "../data.js";

const Center = () => {
  const [searchValue, setSearchValue] = useState("");
  const [ratingValue, setRatingValue] = useState(1);
  const [restaurantData, setRestaurantData] = useState([...restaurantList]);

  function onChangeHandler(e, setterFn) {
    setterFn(e.target.value);
  }

  useEffect(()=>{
    const filteredArray = restaurantList.filter((restaurantObject) => {
      return restaurantObject.name.toLowerCase().includes(searchValue.toLowerCase()) && restaurantObject.rating >= ratingValue;
    });
    // console.log(filteredArray);
    setRestaurantData(filteredArray);
  },[searchValue, ratingValue]);

  return (
    <div className="center_wrapper">
      <div className="input_wrapper">
        <div>
        <input
          onChange={(e) => onChangeHandler(e, setSearchValue)}
          id="search_input"
          type="text"
          placeholder="Search restaurant"
          value={searchValue}
        />
        <span className="restaurant_length">Active: {restaurantData.length}</span>
        </div>
        <div>
          <label htmlFor="">Minimum Rating: </label>
          <input
            onChange={(e) => onChangeHandler(e, setRatingValue)}
            min={1}
            max={10}
            step={0.5}
            id="rating_input"
            type="number"
            value={ratingValue}
          />
        </div>
      </div>
      <div className="restro_cards_wrapper">
        {restaurantData.map((restaurant) => (
          <Card key={restaurant._id.$oid} {...restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Center;
