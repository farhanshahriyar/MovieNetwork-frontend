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
    <Router>
      <Toaster/>
      <Headers/>
      <main>
        <Container>
          {/* Client Side */}
          <Routes>
            <Route path="/" element={<HomeScreen />} exact/>
          </Routes>
          <Routes>
            <Route path="/product/:id" element={<ProductScreen/>}/>
          </Routes>
          <Routes>
            <Route path="/search" element={<SearchScreen/>}/>
          </Routes>
          <Routes>
            <Route path="/error-page" element={<ErrorScreen/>}/>
          </Routes>
          <Routes>
            <Route path="/web-series" element={<WebseriesScreen/>}/>
          </Routes>
          <Routes>
            <Route path="/movie" element={<MovieScreen/>}/>
          </Routes>
          <Routes>
            <Route path="/up-coming" element={<UpComingScreen/>}/>
          </Routes>
          <Routes>
            <Route path="/request" element={<RequestScreen/>}/>
          </Routes>
          <Routes>
            <Route path="/faq" element={<FaqScreen/>}/>
          </Routes>

          <Routes>
            <Route path="/profile" element={<ProfileScreen/>}/>
          </Routes>
          <Routes>
            <Route path="/login" element={<LoginScreen/>}/>
          </Routes>
          <Routes>
            <Route path="/forget-password" element={<ForgetPasswordScreen/>}/>
          </Routes>
          <Routes>
            <Route path="/register" element={<RegisterScreen/>}/>
          </Routes>
          
          {/* Admin Panel Works Here */}
          {/* <Routes>
            <Route path="/dashboard" element={<AdminScreen/>}/>
          </Routes> */}


          <Routes>
       
            {/* <Route path="/dashboard" element={<AdminScreen/>} /> */}
            <Route path="/dashboard" element={<AdminRoute element={<AdminScreen />} />} />
         
          </Routes>

          <Routes>
            {/* <Route path="/webseries-list" element={<WebSeriesList/>}/> */}
            <Route path="/webseries-list" element={<AdminRoute element={<WebSeriesList />} />} />
          </Routes>
          <Routes>
            <Route path="/documentory-list" element={<AdminRoute element={<DocumentoryListScreen/>}/>}/>
          </Routes>
          <Routes>
            <Route path="/movie-list" element={<AdminRoute element={<MovieListScreen/>}/>}/>
          </Routes>
          <Routes>
            <Route path="/short-film-list" element={<AdminRoute element={<ShortListScreen/>}/>}/>
          </Routes>
          <Routes>
            <Route path="/request-product-list" element={<AdminRoute element={<RequestMovieAdmin/>}/>}/>
          </Routes>
          <Routes>
            <Route path="/upcoming-news-page" element={<AdminRoute element={<UpcomingNewsPage/>}/>}/>
          </Routes>
          <Routes>
            <Route path="/user-list" element={<AdminRoute element={<UserList/>}/>}/>
          </Routes>
          <Routes>
            <Route path="/user-update/:id" element={<AdminRoute element={<UpdateUser/>}/>}/>
          </Routes>
          <Routes>
            <Route path="/update-website" element={<AdminRoute element={<UpdateWebsiteScreen/>}/>}/>
          </Routes>
          
          {/* UnderConstruction from both section */}
          <Routes>
            <Route path="/under-construction" element={<UnderConstruction/>}/>
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
