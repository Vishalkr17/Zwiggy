import { useContext } from 'react';
import UserContext from '../utils/UserContext';
import { CDN_Link } from '../utils/constants';

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className='p-1 m-1 w-[273px] h-[283.448px] bg-gray-100 rounded-md shadow-md transition-transform transform hover:scale-110'>
      <img
        src={CDN_Link + resData?.info?.cloudinaryImageId}
        alt={resData?.info?.name}
        className='w-full h-24 object-cover rounded-md mb-2'
      />
      <h3 className='text-base font-semibold text-gray-800'>{resData?.info?.name}</h3>
      <div className='flex items-center'>
      <span className='text-green-800 font-extrabold pr-1'>✪</span>
      <span className='text-sm mr-2 font-semibold text-gray-800'>{resData?.info?.avgRating} • {resData?.info?.sla.slaString}</span>
      </div>
      <h4 className='text-sm text-gray-500'>{resData?.info?.cuisines.join(', ')}</h4>
      <h4 className='text-sm text-gray-500'>{resData?.info?.costForTwo}</h4>
      <h4 className='text-sm text-gray-500'>{resData?.info?.areaName}</h4>
      <h4 className='text-sm text-gray-500'>User: {loggedInUser}</h4>
    </div>
  );
};

//Higher Order Component

// input RestaurantCard => RestaurantCardPromoted

export const RestaurantCardPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}



export default RestaurantCard;

//


