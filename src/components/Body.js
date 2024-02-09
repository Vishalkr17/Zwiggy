import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import RestaurantCard, { RestaurantCardPromoted } from "./RestaurantCard";
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

  if (!onlineStatus) {
    return (
      <div className="text-center py-4 bg-red-500 text-white">
        Looks like you are offline. Please check your internet connection.
      </div>
    );
  }

  return !listOfRestaurants || listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-gray-100 p-4">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="mt-20 flex space-x-4 items-center">
            <button 
              onClick={() => {
                const filteredList = listOfRestaurants.filter(
                  (res) => res.info.avgRating > 4.2
                );
                setfilterListOfRestaurants(filteredList);
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded"
            >
              Top Rated Restaurants
            </button>
          </div>

          {/* Search container */}
          <div className="mt-20 flex space-x-4 items-center">
            <input
              type="text"
              placeholder="Search ..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="p-2 border rounded-lg bg-white"
            />
            <button
              className="search-btn bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-r"
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
        </div>

        <div className="flex flex-wrap justify-center">
          {filterListOfRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={`/restaurants/${restaurant.info.id}`}
              className="md:w-1/2 lg:w-1/4 p-2"
            >
              {restaurant.info.promoted ? (
                <RestaurantCardPromoted resData={restaurant} />
              ):(
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
