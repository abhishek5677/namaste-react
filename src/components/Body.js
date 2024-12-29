import RestrauntCard from "./RestrauntCard";
import mockData from "../utils/mockData";
import { useEffect, useState } from 'react'

const Body = () => {

    const [filterResData, setFilterResData] = useState(mockData)

    useEffect(() => {
        setFilterResData(mockData)
        console.log('trigger data');
    }, [])



    return (
        <div className='body-container'>
            <div className='filter-btn'>
                <button onClick={() => {
                    // we need data of restraunts with 4 or 4 star above rating
                    let filterData = mockData.filter((ele) => ele.card.card.info.avgRating >= 4)
                    setFilterResData(filterData)
                }}>Filter restraunts</button>
                <button onClick={() => setFilterResData(mockData)}>reset</button>
            </div>
            <div className='resto-container'>
                {filterResData.map((ele, index) => <RestrauntCard key={ele.card.card.info.id} resData={ele} />)}
            </div>
        </div>
    )
};

export default Body;