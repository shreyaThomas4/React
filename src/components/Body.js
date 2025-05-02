import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState();
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants =
      json.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setRestaurantList(restaurants);
    setFilteredRestaurantList(restaurants)
  };

  const handleOnSearch = () => {
    const filteredRes = restaurantList.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredRestaurantList(filteredRes);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button onClick={handleOnSearch}>Search</button>
      </div>
      <div className="res-container">
        {restaurantList.length === 0 && (
          <>
            <Shimmer />
          </>
        )}
        {filteredRestaurantList?.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </>
  );
};

export default Body;
