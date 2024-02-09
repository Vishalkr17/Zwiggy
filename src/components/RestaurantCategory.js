import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {

    const[showItems,setShowItems] = useState(false);

    const handleClick = () => {
        setShowItems(!showItems);
    }

    return <div className="w-8/12 mx-auto my-2 p-4 bg-gray-50 shadow-lg cursor-pointer">
        <div className="flex justify-between" onClick={handleClick}>
            <span className="font-semibold text-base">{data.title}({data.itemCards.length})</span>
            <span>⬇️</span>
        </div>
        <div>
            {/* Accordion Body */}
           { showItems && <ItemList items={data.itemCards} /> }
        </div>
    </div>
}

export default RestaurantCategory;