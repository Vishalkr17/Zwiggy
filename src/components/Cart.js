import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux"
import { clearCart } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className="text-center mt-20 p-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-md shadow-md">
        <h1 className="font-semibold text-3xl mb-6">Your Zwiggy Cart</h1>
        
        <button 
            className="p-2 m-2 bg-black hover:bg-slate-900 text-white rounded-md"
            onClick={handleClearCart}       
        >
            
            Clear Cart
        </button>

        <ItemList items={cartItems} showDescription={false} />
        {cartItems.length === 0 ? (
          <p className="mt-8 text-gray-600">Your cart is empty. Add some delicious items!</p>
        ) : (
          <div className="mt-8 flex justify-between items-center">
            <div>
              <p className="text-gray-600">Total:</p>
              <p className="text-lg font-semibold">₹ {calculateTotal(cartItems)}</p>
            </div>
            <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600">
              Place Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Function to calculate the total price of items in the cart
const calculateTotal = (items) => {
  return items.reduce((total, item) => total + (item.card.info.price / 100 || item.card.info.defaultPrice / 100), 0).toFixed(2);
};

export default Cart;
