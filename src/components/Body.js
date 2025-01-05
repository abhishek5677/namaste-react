import { useEffect, useState, useContext } from 'react'
import RestrauntCard, { withPromotedLabel } from "./RestrauntCard";
import { Shimmer } from "./Shimmer";
import { mockData } from "../utils/mockData";
import { Link } from "react-router-dom";
import { ALL_RESTAURANT_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from '../utils/UserContext';
const Body = () => {

    const [filterResData, setFilterResData] = useState([])
    const [filteredRestaurant, setFilteredRestaurant] = useState([])
    const [searchText, setSearchText] = useState('')

    const { setUserName, loggedInUser, userNumber } = useContext(UserContext)

    const PromotedResCard = withPromotedLabel(RestrauntCard)

    useEffect(() => {
        // fetchData()
        setFilterResData(mockData[4].card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(mockData[4].card?.card?.gridElements?.infoWithStyle?.restaurants)
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

    if (!onlineStatus) {
        return <h1>Looks like you are offline!, please check your internet connection.</h1>
    }


    return (
        <div className='body-container  px-10 py-10'>
            <div className="gap-4 flex items-center mb-10">
                <div className="gap-4 flex items-center">
                    <input
                        className="border-solid	border border-orange-700 rounded-sm"
                        type="text"
                        placeholder="search restaurants"
                        onChange={(e) => setSearchText(e.target.value)}
                        value={searchText}
                    />
                    <button
                        className="border p-1 px-4 rounded-md bg-orange-600 text-white"
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
                    className="border p-1 px-4 rounded-md bg-orange-600 text-white"
                    onClick={() => {
                        // we need data of restraunts with 4 or 4 star above rating
                        let filterData = mockData.filter((ele) => ele.card.card.info.avgRating >= 4)
                        setFilterResData(filterData)
                    }}
                >
                    Best rated restaurants
                </button>
                <button
                    className="border p-1 px-4 rounded-md bg-orange-600 text-white"
                    onClick={() => setFilteredRestaurant(mockData[4].card?.card?.gridElements?.infoWithStyle?.restaurants)}
                >reset
                </button>
                <div>
                    <label>UerName: {userNumber}</label>
                    <input
                        className="border-solid	border border-orange-700 rounded-sm"
                        type="text"
                        placeholder="search restaurants"
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
            </div>
            <div className='resto-container flex flex-wrap justify-center gap-[35px]'>
                {filterResData?.length == 0 ?
                    <Shimmer />
                    :
                    filteredRestaurant?.map((ele, index) => {
                        return (ele?.info?.avgRating >= 4.3 ? (
                            <Link to={`restaurant/${ele?.info?.id}`} key={index} >
                                <PromotedResCard resData={ele} />
                            </Link>
                        ) : (
                            <Link to={`restaurant/${ele?.info?.id}`} key={index} >
                                <RestrauntCard resData={ele} />
                            </Link>
                        ))
                    })
                }
            </div>
        </div >
    )
};

export default Body;