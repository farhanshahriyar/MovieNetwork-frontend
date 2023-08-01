import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
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



const App = () => {

  return (
    <div>
      <Toaster/>
      <Headers/>
      <main>
        <Container>
          {/* Client Side */}

          <Routes>
            <Route path="/" element={<HomeScreen />}/>
            <Route path="/product/:id" element={<ProductScreen/>}/>
            <Route path="/search" element={<SearchScreen/>}/>
            <Route path="/error-page" element={<ErrorScreen/>}/>
            <Route path="/web-series" element={<WebseriesScreen/>}/>
            <Route path="/movie" element={<MovieScreen/>}/>
            <Route path="/up-coming" element={<UpComingScreen/>}/>
            <Route path="/request" element={<RequestScreen/>}/>
            <Route path="/faq" element={<FaqScreen/>}/>
            <Route path="/profile" element={<ProfileScreen/>}/>
            <Route path="/login" element={<LoginScreen/>}/>
            <Route path="/forget-password" element={<ForgetPasswordScreen/>}/>
            <Route path="/register" element={<RegisterScreen/>}/>
            {/* Admin Side */}
            <Route path="/dashboard" element={<AdminRoute element={<AdminScreen />} />} >
            </Route>
            <Route path="/dashboard/webseries-list" element={<AdminRoute element={<WebSeriesList />} />} />
              <Route path="/dashboard/documentory-list" element={<AdminRoute element={<DocumentoryListScreen/>}/>}/>
              <Route path="/dashboard/movie-list" element={<AdminRoute element={<MovieListScreen/>}/>}/>
              <Route path="/dashboard/short-film-list" element={<AdminRoute element={<ShortListScreen/>}/>}/>
              <Route path="/dashboard/request-product-list" element={<AdminRoute element={<RequestMovieAdmin/>}/>}/>
              <Route path="/dashboard/upcoming-news-page" element={<AdminRoute element={<UpcomingNewsPage/>}/>}/>
              <Route path="/dashboard/user-list" element={<AdminRoute element={<UserList/>}/>}/>
              <Route path="/dashboard/user-update/:id" element={<AdminRoute element={<UpdateUser/>}/>}/>
              <Route path="/dashboard/update-website" element={<AdminRoute element={<UpdateWebsiteScreen/>}/>}/>
           
          {/* UnderConstruction from both section */}
            <Route path="/under-construction" element={<UnderConstruction/>}/>
           </Routes> 

        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
