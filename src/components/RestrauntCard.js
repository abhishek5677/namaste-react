import { CDN_URL } from "../utils/constant";

const RestrauntCard = (props) => {

    const { resData } = props;

    const { name, costForTwo, cuisines, avgRating, sla, id, cloudinaryImageId } = resData?.info

    return (
        <div className='res-card h-[450px] w-[300px] bg-orange-300 p-3 rounded-lg'>
            <img className="w-[100%] mb-3 h-[200px]" src={`${CDN_URL}${cloudinaryImageId}`} alt='not found' />
            <h3 className="text-[20px] font-bold">{name}</h3>
            <h3>{costForTwo}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla?.slaString} minutes</h4>
        </div>
    )
}

// HOC component
export const withPromotedLabel = (RestrauntCard) => {
    return (props) => {
        return (
            <>
                <label className="absolute bg-black text-white p-2 rounded-lg m-0">Promoted</label>
                <RestrauntCard {...props} />
            </>
        )
    }
}


export default RestrauntCard;