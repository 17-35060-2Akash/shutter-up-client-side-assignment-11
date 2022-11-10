import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import AddService from "../../Pages/AddService/AddService";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Update from "../../Pages/MyReviews/Update/Update";
import Blog from "../../Pages/Others/Blog/Blog";
import NotFound from "../../Pages/Others/NotFound/NotFound";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: async () => fetch(`https://shutter-up-server.vercel.app/services?limit=${50}`)
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: async ({ params }) => fetch(`https://shutter-up-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            },
            {
                path: '/myreviews',
                element:
                    <PrivateRoute>
                        <MyReviews></MyReviews>
                    </PrivateRoute>
            },
            {
                path: '/addservice',
                element:
                    <PrivateRoute>
                        <AddService></AddService>
                    </PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: async ({ params }) => fetch(`https://shutter-up-server.vercel.app/update/${params.id}`)
            },
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);