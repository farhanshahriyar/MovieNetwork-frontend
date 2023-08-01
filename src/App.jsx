import React from "react";
import { Routes, Route, createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Headers from "./Components/Headers";
import { Container } from "react-bootstrap";
import Footer from "./Components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import ErrorScreen from "./screens/ErrorScreen";
import AdminScreen from "./AdminItemScreens/AdminScreen";
import MovieScreen from "./screens/MovieScreen";
import WebseriesScreen from "./screens/WebseriesScreen";
import UpComingScreen from "./screens/UpComingScreen";
import RequestScreen from "./screens/RequestScreen";
import FaqScreen from "./screens/FaqScreen";
import WebSeriesList from "./AdminItemScreens/WebSeriesList";
import DocumentoryListScreen from "./AdminItemScreens/DocumentoryListScreen";
import MovieListScreen from "./AdminItemScreens/MovieListScreen";
import ShortListScreen from "./AdminItemScreens/ShortListScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import RequestMovieAdmin from "./AdminItemScreens/RequestMovieAdmin";
import UpcomingNewsPage from "./AdminItemScreens/UpcomingNewsPage";
import UserList from "./AdminItemScreens/UserList";
import UpdateUser from "./AdminItemScreens/UpdateUser";
import UnderConstruction from "./Components/UnderConstruction";
import { Toaster } from "react-hot-toast";
import ForgetPasswordScreen from "./screens/ForgetPasswordScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AdminRoute from "./Components/AdminRoute";
import UpdateWebsiteScreen from "./screens/UpdateWebsiteScreen";
import SearchScreen from "./screens/SearchScreen";
import './bootstrap.min.css';

const routes = createBrowserRouter([
  {
    path: '/', element:
      <>
        <Toaster />
        <Headers></Headers>
        <Container>
          <Outlet />
        </Container>
        <Footer />
      </>
    , children: [
      { path: '/', element: <HomeScreen /> },
      { path: '/product/:id', element: <ProductScreen /> },
      { path: '/search', element: <SearchScreen /> },
      { path: '/error-page', element: <ErrorScreen /> },
      { path: '/web-series', element: <WebseriesScreen /> },
      { path: '/movie', element: <MovieScreen /> },
      { path: '/up-coming', element: <UpComingScreen /> },
      { path: '/request', element: <RequestScreen /> },
      { path: '/faq', element: <FaqScreen /> },
      { path: '/profile', element: <ProfileScreen /> },
      { path: '/login', element: <LoginScreen /> },
      { path: '/forget-password', element: <ForgetPasswordScreen /> },
      { path: '/register', element: <RegisterScreen /> },
      { path: '/dashboard', element: <AdminRoute><AdminScreen></AdminScreen></AdminRoute> },
      { path: '/dashboard/webseries-list', element: <AdminRoute><WebSeriesList></WebSeriesList></AdminRoute> },
      { path: '/dashboard/documentory-list', element: <AdminRoute><DocumentoryListScreen></DocumentoryListScreen></AdminRoute> },
      { path: '/dashboard/movie-list', element: <AdminRoute><DocumentoryListScreen></DocumentoryListScreen></AdminRoute> },
      { path: '/dashboard/short-film-list', element: <AdminRoute><ShortListScreen></ShortListScreen></AdminRoute> },
      { path: '/dashboard/request-product-list', element: <AdminRoute><RequestMovieAdmin></RequestMovieAdmin></AdminRoute> },
      { path: '/dashboard/upcoming-news-page', element: <AdminRoute><UpcomingNewsPage></UpcomingNewsPage></AdminRoute> },
      { path: '/dashboard/user-list', element: <AdminRoute><UserList /></AdminRoute> },
      { path: '/dashboard/user-update/:id', element: <AdminRoute><UpdateUser /></AdminRoute> },
      { path: '/dashboard/update-website', element: <AdminRoute><UpdateWebsiteScreen /></AdminRoute> },
    ]
  },

  // Admin Side

]);


const App = () => {

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
