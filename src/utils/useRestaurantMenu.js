import { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL } from "./constant";

const useRestaurantMenu = (id) => {

    const [resData, setResData] = useState(null)

    useEffect(() => {
        fetchMenu();
    }, [])

    // api call
    const fetchMenu = async () => {
        const data = await fetch(RESTAURANT_MENU_URL(id));
        const json = await data.json();
        setResData(json)
    }

    // return data 
    return resData;
}

export default useRestaurantMenu;