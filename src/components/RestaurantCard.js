import { CDN_Link } from '../utils/constants'

const RestaurantCard = (props) => {
    const { resData } = props;
    
    return (
        <div className='res-card'>
            <img src={ CDN_Link + resData?.info?.cloudinaryImageId} />
            <h3>{resData?.info?.name}</h3>
            <h4>{resData?.info?.avgRating}</h4>
            <h4>{resData?.info?.sla.slaString}</h4>
            <h4>{resData?.info?.cuisines.join(', ')}</h4>
            <h4>{resData?.info?.costForTwo}</h4>
            <h4>{resData?.info?.areaName}</h4>
        </div>
    )
}

export default RestaurantCard;