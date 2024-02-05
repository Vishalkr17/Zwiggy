import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterListOfRestaurants, setfilterListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.3773949&lng=85.3580618&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();
    console.log(jsonData.data)
    setListOfRestaurants(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle.restaurants);
    setfilterListOfRestaurants(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle.restaurants)
  };

  // Conditional Rendering - Rendering based on some conditions

  return !listOfRestaurants || listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="sfbtn-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search ..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }} 
          ></input> 
          
          <button
            className="search-btn"
            type="submit"
            onClick={() => {
              const filterRestaurant = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilterListOfRestaurants(filterRestaurant);
            }}
          >
            🔎
          </button>
        </div>
        <div className="filter-btn">
          <button
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.2
              );
              setfilterListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="res-container">
        {filterListOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
