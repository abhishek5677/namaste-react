import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Shimmer } from "./Shimmer";
import { RESTAURANT_MENU_URL } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    const [menuItems, setMenuItems] = useState([])
    const [showIndex, setShowIndex] = useState(0)

    const { id } = useParams();

    const resData = useRestaurantMenu(id)


    useEffect(() => {
        const filterItemData = resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
            .filter((ele) => {
                if (ele.card.card.itemCards) {
                    return true;
                }
                return false;
            })
            .map((ele) => ele.card.card.itemCards);

        setMenuItems(filterItemData || []);
    }, [resData]);

    const { name, costForTwoMessage } = resData?.data?.cards[2]?.card?.card?.info || {}


    return (

        resData === null ? (
            <div className="menu-container">
                <h3>loading...</h3>
            </div>
        ) : (
            <div className="p-5">
                <h1 className="text-4xl	font-bold text-black text-center">{name}</h1>
                <h2 className="text-xl font-bold text-black text-center">{costForTwoMessage}</h2>
                <h2 className="text-lg	font-bold text-black text-center">Menu</h2>
                {menuItems.map((ele, index) => {
                    return (
                        <div key={index}>
                            <RestaurantCategory
                                key={index}
                                data={ele}
                                showItem={showIndex === index ? true : false}
                                setShowIndex={() => setShowIndex(index)}
                            />
                            <hr className="w-full max-w-4xl mx-auto" />
                        </div>
                    )
                })}

            </div>
        )

    )
}

export default RestaurantMenu;