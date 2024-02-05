
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const { resId } = useParams()
    const resInfo = useRestaurantMenu(resId) // Custom Hook

    if(resInfo === null) return <Shimmer />
    
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card


    return (
        <div className="menu"> 
            <h1>{name}</h1>
            <p>{cuisines.join(', ')} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => <li key={item.card.info.id}>
                    <p>{item.card.info.name}</p>
                    <p>₹{(item.card.info.price/100 || item.card.info.defaultPrice/100)}</p>
                </li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;