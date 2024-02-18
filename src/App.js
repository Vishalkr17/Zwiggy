import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './components/shimmer';
import UserContext from './utils/UserContext';
import { Provider } from "react-redux";
import appStore from './store/appStore';
import Cart from './components/Cart';

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () =>{
    const [userName, setUserName] = useState()

    // authentication
        useEffect(() => {
            // Make an API call and send username and password
            const data = {
                name: 'Vishal'
            };
            setUserName(data.name);
        },[])

    return(
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
                <div className='app'>
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [ 
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />,   
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer />}>
                        <Grocery />   
                    </Suspense>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,   
            },
            {
                path: "/cart",
                element: <Cart />,   
            }
        ],
        errorElement: <Error />
    },
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);