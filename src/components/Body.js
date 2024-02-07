import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterListOfRestaurants, setfilterListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.3773949&lng=85.3580618&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const jsonData = await data.json();
    setListOfRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilterListOfRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants);
  };

  if(onlineStatus === false){
    return <div>
      <h1>Looks like you are offline. Please check your internet connection.</h1>
    </div>
  }
  
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
          <Link key={restaurant.info.id} 
            to={`/restaurants/${restaurant.info.id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}>
              <RestaurantCard  resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
