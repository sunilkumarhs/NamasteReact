import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import ShimmerUI from "./components/ShimmerUI";
import UserContexts from "./utils/userContexts";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import CartContexts from "./utils/CartContexts";
import CollectionList from "./components/CollectionList";

const About = lazy(() => import("./components/About"));

const Cart = lazy(() => import("./components/Cart"));

const AppLayout = () => {
  const [loginUser, setLoginUser] = useState(null);
  const [curPath, setCurPath] = useState(null);

  useEffect(() => {
    const data = "Sunil Kumar";
    setLoginUser(data);
  }, []);
  return (
    <div>
      <Provider store={appStore}>
        <UserContexts.Provider
          value={{ loggedUserId: loginUser, setLoginUser }}
        >
          <CartContexts.Provider value={{ pathState: curPath, setCurPath }}>
            <Header />
            <div className="pt-20">
              <Outlet />
            </div>
          </CartContexts.Provider>
        </UserContexts.Provider>
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
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
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurantMenu/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/collectionList/:colId",
        element: <CollectionList />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);