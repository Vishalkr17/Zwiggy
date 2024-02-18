import { useState } from "react";
import { CDN_Link } from "../utils/constants";
import { useDispatch } from "react-redux"
import { addItem, removeItem } from "../store/cartSlice";


const ItemList = ({ items , showDescription}) => {
  console.log(items)
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const handleAddItem = (item, itemId) => {
    // Build this feature -> When click on add remove tag add, and make it - 1 + , when clicked in + it increments and when clicked on - it decreases
    setCount((prevCount) => ({
      ...prevCount,
      [itemId]: (prevCount[itemId] || 0) + 1,
    }))
    // Dispatch an action 
    dispatch(addItem(item,itemId))
  }

  const handleRemoveItem = (itemId) => {
    setCount((prevCount) => ({
      ...prevCount,
      [itemId]: (prevCount[itemId] || 0) - 1,
    }))

    dispatch(removeItem(itemId))
  }

  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="border-b border-gray-300 py-2 flex">
          <div className="w-9/12">
            <div className="mt-4">
              <div className="font-medium text-base">{item.card.info.name}</div>
              <div className="text-gray-600">₹ {item.card.info.price ? (item.card.info.price / 100) : (item.card.info.defaultPrice / 100)}</div>
            </div>
            <p className="text-gray-400 text-xs pt-2 mb-4 mr-4">{showDescription && item.card.info.description}</p>
          </div>
          <div className="relative w-3/12">
                {item.card.info.imageId && (
                    <img
                    src={CDN_Link + item.card.info.imageId}
                    alt={item.card.info.name}
                    className="w-full max-h-32 object-cover rounded-md"
                    />
                )}
                <div className="flex justify-between items-center mt-2">
                  {count[item.card.info.id] > 0 ? (
                  <>
                    <button
                      className="w-1/5 shadow-lg font-semibold rounded-lg p-2 bg-white text-center text-green-600"
                      onClick={() => handleRemoveItem(item.card.info.id)}
                    >
                      -
                    </button>
                    <span className="mx-2">{count[item.card.info.id]}</span>
                    <button 
                      className="w-1/5 shadow-lg font-semibold rounded-lg p-2 bg-white text-center text-green-600"
                      onClick={() => handleAddItem(item, item.card.info.id)}
                    >
                      +
                    </button>
                  </>
                  ): (
                    <button className="w-4/5 shadow-lg font-semibold rounded-lg absolute left-1/2 bottom-0  transition-transform transform -translate-x-1/2 hover:scale-110 p-2 bg-white hover:shadow-xl text-center text-green-600"
                    onClick={() => handleAddItem(item, item.card.info.id)}
                    >
                      ADD
                    </button>
                  )} 
               </div>  
            </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
