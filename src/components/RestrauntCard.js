import { CDN_URL } from "../utils/constant";

const RestrauntCard = (props) => {

    const { resData } = props;

    const { name, costForTwo, cuisines, avgRating, sla, cloudinaryImageId } = resData.card.card.info

    return (
        <div className='res-card'>
            <img src={`${CDN_URL}${cloudinaryImageId}`} alt='' />
            <h3>{name}</h3>
            <h3>{costForTwo}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}


export default RestrauntCard;