import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using Selector

  const cartItems = useSelector((store) => store.cart.items)

  return (
    <div className="flex justify-between items-center fixed top-0 left-0 right-0 h-20 bg-white z-50 shadow-md transition-transform duration-300 ease-transform contain-size contain-layout contain-style">
      <div className="flex items-center">
        <img
          className="h-20 w-20 rounded-full p-2 m-2 transition-transform transform hover:scale-110 cursor-pointer"
          src={require('../public/FoodAppIcon.png')}
          alt="logo"
        />
      </div>
      <div className="flex items-center space-x-4 pr-4">
        <ul className="flex items-center lg:space-x-12 sm:space-x-8">

          <li className="hover:text-orange-500">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>

          <li className="hover:text-orange-500">
            <Link to="/" className="text-gray-800 hover:text-orange-500">
              Home
            </Link>
          </li>

          <li className="hover:text-orange-500">
            <Link to="/about" className="text-gray-800 hover:text-orange-500">
              About Us
            </Link>
          </li>

          <li className="hover:text-orange-500">
            <Link
              to="/grocery"
              className="text-gray-800 hover:text-orange-500"
            >
              Grocery
            </Link>
          </li>

          <li className="hover:text-orange-500">
            <Link
              to="/contact"
              className="text-gray-800 hover:text-orange-500"
            >
              Contact Us
            </Link>
          </li>

    
          <li className="hover:text-orange-500 cursor-pointer">
            <Link
                to="/cart"
                className="text-gray-800 hover:text-orange-500"
              >
              🛒 Cart ({cartItems.length})
            </Link>
          </li>

          <button
            className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
            onClick={() => {
              btnName === 'Login'
                ? setBtnName('Logout')
                : setBtnName('Login');
            }}
          >
            {btnName}
          </button>
          <li className='text-base font-semibold hover:text-orange-500'>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
