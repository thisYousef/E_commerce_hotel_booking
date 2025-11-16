import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Results from "./Results";
import Cart from "./common/Cart/Cart";
import "./App.css";

const App = lazy(() => import("./App"));
const Home = lazy(() => import("./components/Pages/Home"));
const About = lazy(() => import("./components/About/About"));
const Gallery = lazy(() => import("./components/Gallery/gallery"));
const Destination = lazy(() => import("./components/Destination/Home"));
const SinglePages = lazy(() => import("./singlePage/SinglePages"));
const Blog = lazy(() => import("./components/Blog/Blog"));
const BlogSingle = lazy(() => import("./components/Blog/blog-single-page/BlogSingle"));
const RoomSingle = lazy(() => import("./components/HomeSection/Rooms/RoomSingle"));
const Login = lazy(() => import("./components/Login/Login"));
const Register = lazy(() => import("./components/Login/Register"));
const ForgotPass = lazy(() => import("./components/Login/ForgotPass"));
const ErrorPage = lazy(() => import("./components/Error"));
const PrivateRoute = lazy(() => import("./components/Login/PrivateRoute"));
const Dashboard = lazy(() => import("./components/Login/Dashboard"));
const UpdateProfile = lazy(() => import("./components/Login/UpdateProfile"));
const MainHotel = lazy(() => import("./components/hotels/mainHotel"));

const loading = (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <CircularProgress />
    </Box>
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Home /> },
            { path: "about", element: <About /> },
            { path: "gallery", element: <Gallery /> },
            { path: "destination", element: <Destination /> },
            { path: "singlepage/:id", element: <SinglePages /> },
            { path: "room-single", element: <RoomSingle /> },
            { path: "blog", element: <Blog /> },
            { path: "blogsingle/:id", element: <BlogSingle /> },
            { path: "dashboard/update-profile", element: <UpdateProfile /> },
            { path: "results", element: <Results /> },
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
            { path: "forgot", element: <ForgotPass /> },
            { path: "hotels", element: <MainHotel /> },

            {
                path: "/",
                element: <PrivateRoute />,
                children: [
                    { path: "checkout", element: <Cart /> },
                    { path: "dashboard", element: <Dashboard /> },
                ],
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Suspense fallback={loading}>
        <RouterProvider router={router} />
    </Suspense>
);
