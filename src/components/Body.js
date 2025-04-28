import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantObj } from "../Utils/data";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(restaurantObj);

  const filterData = () => {
    let filterResList = restaurantObj.filter((data) => {
      return data.info.avgRatingString >= 4;
    });
    setRestaurantList(filterResList);
  };

  return (
    <>
      <div>Search</div>
      <button onClick={filterData}>Filter Top Res</button>
      <div className="res-container">
        {restaurantList?.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </>
  );
};

export default Body;
