import { CDN_Link } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="border-b border-gray-300 py-2 flex">
          <div className="w-9/12">
            <div className="mt-4">
              <div className="font-medium text-base">{item.card.info.name}</div>
              <div className="text-gray-600">₹ {item.card.info.price ? (item.card.info.price / 100) : (item.card.info.defaultPrice / 100)}</div>
            </div>
            <p className="text-gray-400 text-xs pt-2 mb-4 mr-4">{item.card.info.description}</p>
          </div>
          <div className="relative w-3/12">
                {item.card.info.imageId && (
                    <img
                    src={CDN_Link + item.card.info.imageId}
                    alt={item.card.info.name}
                    className="w-full max-h-32 object-cover rounded-md"
                    />
                )}
                <button className="w-4/5 shadow-lg font-semibold rounded-lg absolute left-1/2 bottom-0  transition-transform transform -translate-x-1/2 hover:scale-110 p-2 bg-white hover:shadow-xl text-center text-green-600">
                    ADD
                </button>
            </div>

        </div>
      ))}
    </div>
  );
};

export default ItemList;
