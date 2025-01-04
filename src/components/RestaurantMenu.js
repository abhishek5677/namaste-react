import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Shimmer } from "./Shimmer";
import { RESTAURANT_MENU_URL } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const [menuItems, setMenuItems] = useState([])

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
            <div>
                <h1>{name}</h1>
                <h2>{costForTwoMessage}</h2>

                <h2>Menu</h2>
                <ul>
                    {menuItems.map((ele, index) => {
                        // console.log(ele, index);
                        return (
                            <div key={index}>
                                {ele.map((res) => {
                                    return <li key={res?.card?.info?.id}>
                                        {res?.card?.info?.name} -
                                        {(res?.card?.info?.defaultPrice / 100) || (res?.card?.info?.price / 100)}
                                    </li>
                                })}
                                <hr />
                            </div>
                        )
                    })}
                </ul>
            </div>
        )

    )
}

export default RestaurantMenu;