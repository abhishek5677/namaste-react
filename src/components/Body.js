import RestrauntCard from "./RestrauntCard";
import { useEffect, useState } from 'react'
import { Shimmer } from "./Shimmer";
import { mockData } from "../utils/mockData";
import { Link } from "react-router-dom";
import { ALL_RESTAURANT_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {

    const [filterResData, setFilterResData] = useState([])
    const [filteredRestaurant, setFilteredRestaurant] = useState([])
    const [searchText, setSearchText] = useState('')

    console.log('body rendered');

    useEffect(() => {
        fetchData()
        // setFilterResData(mockData[4].card?.card?.gridElements?.infoWithStyle?.restaurants)
        // setFilteredRestaurant(mockData[4].card?.card?.gridElements?.infoWithStyle?.restaurants)
    }, [])

    // API call for swiggy data
    const fetchData = async () => {
        const data = await fetch(ALL_RESTAURANT_URL)
        const json = await data.json()
        // console.log(json?.data?.cards[4]?.card?.card);
        // optional chaining
        setFilterResData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const onlineStatus = useOnlineStatus()

    if(!onlineStatus){
        return <h1>Looks like you are offline!, please check your internet connection.</h1>
    }

    return (
        <div className='body-container'>
            <div className='filter-btn'>
                <div>
                    <input
                        type="text"
                        placeholder="search restaurants"
                        onChange={(e) => setSearchText(e.target.value)}
                        value={searchText}
                    />
                    <button
                        onClick={() => {
                            const filterRes = filterResData.filter((ele) => {
                                if (ele.info.name.toLowerCase().includes(searchText.toLowerCase())) {
                                    return ele;
                                }
                            })
                            // console.log(filterRes);
                            setFilteredRestaurant(filterRes)
                        }}
                    >
                        search
                    </button>
                </div>

                <button
                    onClick={() => {
                        // we need data of restraunts with 4 or 4 star above rating
                        let filterData = mockData.filter((ele) => ele.card.card.info.avgRating >= 4)
                        setFilterResData(filterData)
                    }}
                >
                    Best rated restaurants
                </button>
                <button onClick={() => setFilteredRestaurant(mockData[4].card?.card?.gridElements?.infoWithStyle?.restaurants)}>reset</button>
            </div>
            <div className='resto-container'>
                {filterResData?.length == 0 ?
                    <Shimmer />
                    :
                    filteredRestaurant?.map((ele, index) => {
                        return <Link to={`restaurant/${ele?.info?.id}`} key={index} >
                            <RestrauntCard resData={ele} />
                        </Link>
                    })
                }
            </div>
        </div >
    )
};

export default Body;