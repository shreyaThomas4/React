import React from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantObj } from "../Utils/data";

const Body = () => {
    return (
      <>
        <div>Search</div>
        <div className="res-container">
        {restaurantObj.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id}resData={restaurant.info} />
        ))}
        </div>
      </>
    );
  };

  export default Body;