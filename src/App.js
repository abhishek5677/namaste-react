import React, { lazy, Suspense, useEffect, useState } from 'react'
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import About from './components/About';
import ContactUs from './components/ContactUs';
import ErrorElement from './components/ErrorElement';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/store/appStore';
import Cart from './components/Cart';
// import Grocery from './components/Grocery';

const Grocery = lazy(() => import('./components/Grocery'));


const AppLayout = () => {
 
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const data = {
            name: "Abhishek Garad"
        }
        setUserName(data.name)
    }, [])

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, userNumber: 98663883, setUserName }}>
                <div className='app'>
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <ContactUs />,
            },
            {
                path: "/grocery",
                element: (
                    <Suspense fallback={<h1>loading...</h1>}>
                        <Grocery />
                    </Suspense>
                ),
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
        ],
        errorElement: <ErrorElement />
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
