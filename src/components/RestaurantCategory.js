import React from "react";
import { addItem } from "../utils/slices/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantCategory = ({ data, setShowIndex, showItem }) => {

    const handleToggle = () => {
        setShowIndex()
    };

    const dispatch = useDispatch();

    const handleItem = (ele) => {
        // dispatch an action
        dispatch(addItem(ele))
    }

    return (
        <div className="w-full max-w-4xl mx-auto mt-10 mb-10">
            <div
                className="border border-gray-300 rounded-lg mb-2 shadow-sm"
            >
                {/* Accordion Header */}
                <button
                    onClick={() => handleToggle()}
                    className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 text-gray-700 text-left rounded-t-lg focus:outline-none"
                >
                    <span className="font-bold text-black">{data[0]?.card?.info?.category} ({data.length})</span>
                    <svg
                        className={`w-5 h-5 transform ${showItem === true ? "rotate-180" : "rotate-0"
                            } transition-transform`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>

                {/* Accordion Content */}
                {showItem && (
                    <div className="p-4 bg-white text-gray-600">
                        {data?.map((ele, index) => {
                            return (
                                <div key={index}>
                                    <div className="mb-2 flex justify-between items-center">
                                        <div className="">
                                            <h2 className="text-3lg text-black font-bold">
                                                {ele?.card?.info?.name}
                                            </h2>
                                            <h3 className="font-bold">
                                                ₹ {(ele?.card?.info?.price ? ele?.card?.info?.price : ele?.card?.info?.defaultPrice) / 100}
                                            </h3>
                                            <p>{ele?.card?.info?.description}</p>
                                        </div>
                                        <div className="w-[400px] relative">
                                            <button className="py-1 px-3 absolute bg-black text-white right-10 rounded" onClick={() => handleItem(ele)}>
                                                Add +
                                            </button>
                                            <img
                                                className="w-[400px] h-32"
                                                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${ele?.card?.info?.imageId}`}
                                            />
                                        </div>
                                    </div>
                                    <hr className="my-6" />
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>

    );
}
export default RestaurantCategory