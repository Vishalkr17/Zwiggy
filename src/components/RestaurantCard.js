import { CDN_Link } from '../utils/constants';

const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className='p-2 m-2 w-[273px] h-[283.448px] bg-gray-100 rounded-md shadow-md transition-transform transform hover:scale-110'>
      <img
        src={CDN_Link + resData?.info?.cloudinaryImageId}
        alt={resData?.info?.name}
        className='w-full h-24 object-cover rounded-md mb-2'
      />
      <h3 className='text-base font-bold'>{resData?.info?.name}</h3>
      <div className='flex items-center'>
        <span className='text-sm mr-2'>{resData?.info?.avgRating}</span>
      </div>
      <h4 className='text-sm'>{resData?.info?.sla.slaString}</h4>
      <h4 className='text-sm'>{resData?.info?.cuisines.join(', ')}</h4>
      <h4 className='text-sm'>{resData?.info?.costForTwo}</h4>
      <h4 className='text-sm'>{resData?.info?.areaName}</h4>
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


