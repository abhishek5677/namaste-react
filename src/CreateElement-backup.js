// import React from 'react'
// import ReactDOM from 'react-dom/client'

// // createRoot take 3 argumemts - tag, attributes(object) and children as an array
// // const heading = React.createElement("h1", { id: "heading" }, "Hello world from react!");


// // jsx - html like syntax
// // const jsxHeading = (
// //     <h1 id='heading' className='class-heading' tabIndex={1}>
// //         Namaste react using jsx
// //     </h1>
// // )

// // React functional component
// // const Title = () => (
// //     <h1 id='heading' className='class-heading' tabIndex={1}>
// //         Namaste react using jsx
// //     </h1>
// // )

// // React elememt
// // const NewEle = <h1>React elememt</h1>

// // js expression
// // const number = 1000;

// // React functional component
// // const HeadingComponent = () => {
// //     return (
// //         <div className="container">
// //             {Title()}
// //             {<Title />}
// //             {<Title></Title>}
// //             {NewEle}
// //             {number}
// //             <h1 id='head'>Namaste react from functional component</h1>
// //         </div>
// //     )
// // }


// // const parent = React.createElement(
// //     "div",
// //     { id: "parent" },
// //     [
// //         React.createElement(
// //             "div",
// //             { id: "child" },
// //             [
// //                 React.createElement("h1", { id: "h1-tag" }, " react"),
// //                 React.createElement("h2", { id: "h2-tag" }, "I am h2 tag")
// //             ]
// //         ),
// //         React.createElement(
// //             "div",
// //             { id: "child2" },
// //             [
// //                 React.createElement("h1", { id: "h1-tag" }, "I am h1 tag"),
// //                 React.createElement("h2", { id: "h2-tag" }, "I am h2 tag")
// //             ]
// //         )

// //     ]
// // );
// // console.log(parent); // object


// const Header = () => {
//     return (
//         <div className='header'>
//             <div className='logo-container'>
//                 <img className='logo' src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png" />
//             </div>
//             <div className='nav-items'>
//                 <ul>
//                     <li>Home</li>
//                     <li>About Us</li>
//                     <li>Contact Us</li>
//                     <li>Cart</li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// const RestrauntCard = (props) => {

//     const { resData } = props;

//     const { name, costForTwo, cuisines, avgRating, sla, cloudinaryImageId } = resData.card.card.info

//     return (
//         <div className='res-card'>
//             <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`} alt='' />
//             <h3>{name}</h3>
//             <h3>{costForTwo}</h3>
//             <h4>{cuisines.join(", ")}</h4>
//             <h4>{avgRating}</h4>
//             <h4>{sla.deliveryTime} minutes</h4>
//         </div>
//     )
// }

// const resData = [
//     {
//         "card": {
//             "card": {
//                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                 "info": {
//                     "id": "870899",
//                     "name": "Paras Mishthan",
//                     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/15/9de3a721-5e96-41d2-bb3e-3cbeff47fbd3_870899.jpg",
//                     "locality": "Nagarpalika Complex",
//                     "areaName": "Chhindwara City",
//                     "costForTwo": "₹150 for two",
//                     "cuisines": [
//                         "Beverages",
//                         "Sweets",
//                         "Snacks"
//                     ],
//                     "avgRating": 3.8,
//                     "veg": true,
//                     "parentId": "510613",
//                     "avgRatingString": "3.8",
//                     "totalRatingsString": "28",
//                     "promoted": true,
//                     "adTrackingId": "cid=22783151~p=1~adgrpid=22783151#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=870899~eid=054df516-c4b9-4951-b63b-b516f472ac6b~srvts=1735398165703~collid=80406",
//                     "sla": {
//                         "deliveryTime": 66,
//                         "lastMileTravel": 11.2,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "65-70 mins",
//                         "lastMileTravelString": "11.2 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                     },
//                     "availability": {
//                         "nextCloseTime": "2024-12-28 22:30:00",
//                         "opened": true
//                     },
//                     "badges": {
//                         "imageBadges": [
//                             {
//                                 "imageId": "v1695133679/badges/Pure_Veg111.png",
//                                 "description": "pureveg"
//                             }
//                         ]
//                     },
//                     "isOpen": true,
//                     "type": "F",
//                     "badgesV2": {
//                         "entityBadges": {
//                             "textBased": {

//                             },
//                             "imageBased": {
//                                 "badgeObject": [
//                                     {
//                                         "attributes": {
//                                             "imageId": "v1695133679/badges/Pure_Veg111.png",
//                                             "description": "pureveg"
//                                         }
//                                     }
//                                 ]
//                             },
//                             "textExtendedBadges": {

//                             }
//                         }
//                     },
//                     "aggregatedDiscountInfoV3": {
//                         "header": "20% OFF",
//                         "subHeader": "ABOVE ₹699",
//                         "discountTag": "FLAT DEAL",
//                         "logoCtx": {
//                             "text": "BENEFITS"
//                         }
//                     },
//                     "orderabilityCommunication": {
//                         "title": {

//                         },
//                         "subTitle": {

//                         },
//                         "message": {

//                         },
//                         "customIcon": {

//                         },
//                         "commsStyling": {

//                         }
//                     },
//                     "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                             "lottie": {

//                             },
//                             "video": {

//                             }
//                         }
//                     },
//                     "reviewsSummary": {

//                     },
//                     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                     "restaurantOfferPresentationInfo": {

//                     },
//                     "externalRatings": {
//                         "aggregatedRating": {
//                             "rating": "--"
//                         }
//                     },
//                     "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//                     "campaignId": "22783151"
//                 },
//                 "analytics": {

//                 },
//                 "cta": {
//                     "link": "swiggy://menu?restaurant_id=870899&source=collection&query=Tea",
//                     "text": "RESTAURANT_MENU",
//                     "type": "DEEPLINK"
//                 },
//                 "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
//             },
//             "relevance": {
//                 "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
//                 "sectionId": "MENU_RETURN_FOOD"
//             }
//         }
//     },
//     {
//         "card": {
//             "card": {
//                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                 "info": {
//                     "id": "151649",
//                     "name": "Hotel Sai Nath & Sai Restaurant",
//                     "cloudinaryImageId": "vkhcohhmqfczycw9vsar",
//                     "locality": "railway station",
//                     "areaName": "Chhindwara Locality",
//                     "costForTwo": "₹200 for two",
//                     "cuisines": [
//                         "North Indian",
//                         "South Indian",
//                         "Chinese",
//                         "Beverages",
//                         "Fast Food",
//                         "Desserts"
//                     ],
//                     "avgRating": 4.2,
//                     "veg": true,
//                     "parentId": "101802",
//                     "avgRatingString": "4.2",
//                     "totalRatingsString": "933",
//                     "sla": {
//                         "deliveryTime": 63,
//                         "lastMileTravel": 11,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "60-65 mins",
//                         "lastMileTravelString": "11.0 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                     },
//                     "availability": {
//                         "nextCloseTime": "2024-12-28 22:30:00",
//                         "opened": true
//                     },
//                     "badges": {
//                         "imageBadges": [
//                             {
//                                 "imageId": "v1695133679/badges/Pure_Veg111.png",
//                                 "description": "pureveg"
//                             }
//                         ]
//                     },
//                     "isOpen": true,
//                     "type": "F",
//                     "badgesV2": {
//                         "entityBadges": {
//                             "textBased": {

//                             },
//                             "imageBased": {
//                                 "badgeObject": [
//                                     {
//                                         "attributes": {
//                                             "description": "pureveg",
//                                             "imageId": "v1695133679/badges/Pure_Veg111.png"
//                                         }
//                                     }
//                                 ]
//                             },
//                             "textExtendedBadges": {

//                             }
//                         }
//                     },
//                     "aggregatedDiscountInfoV3": {
//                         "header": "25% OFF",
//                         "subHeader": "ABOVE ₹1399",
//                         "discountTag": "FLAT DEAL",
//                         "logoCtx": {
//                             "text": "BENEFITS"
//                         }
//                     },
//                     "orderabilityCommunication": {
//                         "title": {

//                         },
//                         "subTitle": {

//                         },
//                         "message": {

//                         },
//                         "customIcon": {

//                         },
//                         "commsStyling": {

//                         }
//                     },
//                     "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                             "lottie": {

//                             },
//                             "video": {

//                             }
//                         }
//                     },
//                     "reviewsSummary": {

//                     },
//                     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                     "restaurantOfferPresentationInfo": {

//                     },
//                     "externalRatings": {
//                         "aggregatedRating": {
//                             "rating": "--"
//                         }
//                     },
//                     "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                 },
//                 "analytics": {

//                 },
//                 "cta": {
//                     "link": "swiggy://menu?restaurant_id=151649&source=collection&query=Tea",
//                     "text": "RESTAURANT_MENU",
//                     "type": "DEEPLINK"
//                 },
//                 "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
//             },
//             "relevance": {
//                 "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
//                 "sectionId": "MENU_RETURN_FOOD"
//             }
//         }
//     },
//     {
//         "card": {
//             "card": {
//                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                 "info": {
//                     "id": "830418",
//                     "name": "Indian Coffee House",
//                     "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/6/8f48cf2a-182c-42c7-bd04-70820d7e554e_4eb4d771-1445-44f0-8c65-3c8c4d439f0f.jpg",
//                     "locality": "Chhindwara City",
//                     "areaName": "Khajri Chowk",
//                     "costForTwo": "₹300 for two",
//                     "cuisines": [
//                         "South Indian",
//                         "North Indian",
//                         "Chinese",
//                         "Fast Food",
//                         "Beverages"
//                     ],
//                     "avgRating": 4.4,
//                     "veg": true,
//                     "parentId": "106448",
//                     "avgRatingString": "4.4",
//                     "totalRatingsString": "104",
//                     "sla": {
//                         "deliveryTime": 56,
//                         "lastMileTravel": 11.2,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "55-60 mins",
//                         "lastMileTravelString": "11.2 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                     },
//                     "availability": {
//                         "nextCloseTime": "2024-12-28 22:30:00",
//                         "opened": true
//                     },
//                     "badges": {
//                         "imageBadges": [
//                             {
//                                 "imageId": "v1695133679/badges/Pure_Veg111.png",
//                                 "description": "pureveg"
//                             }
//                         ]
//                     },
//                     "isOpen": true,
//                     "aggregatedDiscountInfoV2": {

//                     },
//                     "type": "F",
//                     "badgesV2": {
//                         "entityBadges": {
//                             "textBased": {

//                             },
//                             "imageBased": {
//                                 "badgeObject": [
//                                     {
//                                         "attributes": {
//                                             "imageId": "v1695133679/badges/Pure_Veg111.png",
//                                             "description": "pureveg"
//                                         }
//                                     }
//                                 ]
//                             },
//                             "textExtendedBadges": {

//                             }
//                         }
//                     },
//                     "orderabilityCommunication": {
//                         "title": {

//                         },
//                         "subTitle": {

//                         },
//                         "message": {

//                         },
//                         "customIcon": {

//                         },
//                         "commsStyling": {

//                         }
//                     },
//                     "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                             "lottie": {

//                             },
//                             "video": {

//                             }
//                         }
//                     },
//                     "reviewsSummary": {

//                     },
//                     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                     "restaurantOfferPresentationInfo": {

//                     },
//                     "externalRatings": {
//                         "aggregatedRating": {
//                             "rating": "--"
//                         }
//                     },
//                     "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                 },
//                 "analytics": {

//                 },
//                 "cta": {
//                     "link": "swiggy://menu?restaurant_id=830418&source=collection&query=Tea",
//                     "text": "RESTAURANT_MENU",
//                     "type": "DEEPLINK"
//                 },
//                 "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
//             },
//             "relevance": {
//                 "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
//                 "sectionId": "MENU_RETURN_FOOD"
//             }
//         }
//     },
//     {
//         "card": {
//             "card": {
//                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                 "info": {
//                     "id": "890120",
//                     "name": "AD'S RESTAURANT",
//                     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/20/2d86ab53-4a0c-4217-ab51-ab7a5747288e_890120.JPG",
//                     "locality": "Sinchai Colony",
//                     "areaName": "Chhindwara City",
//                     "costForTwo": "₹300 for two",
//                     "cuisines": [
//                         "Salads",
//                         "Pizzas",
//                         "Healthy Food",
//                         "Fast Food",
//                         "Burgers",
//                         "Cafe"
//                     ],
//                     "avgRating": 3.7,
//                     "parentId": "520321",
//                     "avgRatingString": "3.7",
//                     "totalRatingsString": "6",
//                     "sla": {
//                         "deliveryTime": 65,
//                         "lastMileTravel": 11.5,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "60-65 mins",
//                         "lastMileTravelString": "11.5 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                     },
//                     "availability": {
//                         "nextCloseTime": "2024-12-28 23:00:00",
//                         "opened": true
//                     },
//                     "badges": {

//                     },
//                     "isOpen": true,
//                     "type": "F",
//                     "badgesV2": {
//                         "entityBadges": {
//                             "imageBased": {

//                             },
//                             "textExtendedBadges": {

//                             },
//                             "textBased": {

//                             }
//                         }
//                     },
//                     "aggregatedDiscountInfoV3": {
//                         "header": "10% OFF",
//                         "subHeader": "UPTO ₹40",
//                         "logoCtx": {
//                             "text": "BENEFITS"
//                         }
//                     },
//                     "orderabilityCommunication": {
//                         "title": {

//                         },
//                         "subTitle": {

//                         },
//                         "message": {

//                         },
//                         "customIcon": {

//                         },
//                         "commsStyling": {

//                         }
//                     },
//                     "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                             "lottie": {

//                             },
//                             "video": {

//                             }
//                         }
//                     },
//                     "reviewsSummary": {

//                     },
//                     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                     "restaurantOfferPresentationInfo": {

//                     },
//                     "externalRatings": {
//                         "aggregatedRating": {
//                             "rating": "--"
//                         }
//                     },
//                     "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                 },
//                 "analytics": {

//                 },
//                 "cta": {
//                     "link": "swiggy://menu?restaurant_id=890120&source=collection&query=Tea",
//                     "text": "RESTAURANT_MENU",
//                     "type": "DEEPLINK"
//                 },
//                 "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
//             },
//             "relevance": {
//                 "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
//                 "sectionId": "MENU_RETURN_FOOD"
//             }
//         }
//     }
// ]

// const Body = () => {
//     return (
//         <div className='body-container'>
//             <div className='search'>
//                 search
//             </div>
//             <div className='resto-container'>
//                 {resData.map((ele, index) => <RestrauntCard key={ele.card.card.info.id} resData={ele} />)}
//             </div>
//         </div>
//     )
// }

// const AppLayout = () => {
//     return (
//         <div className='app'>
//             <Header />
//             <Body />
//         </div>
//     )
// }


// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);