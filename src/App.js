import React, { useEffect, useState } from "react";
import "./App.css";
import { homeContext } from "./store/homeContext";
import axios from "axios";
import Home from "./pages/Home/Home";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchResult from "./components/SearchResult/SearchResult";
import CollectionDetails from "./components/SearchResult/CollectionDetails";

const App = () => {
  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    async function getHomeData() {
      const response = await axios.get(
        "https://uat-iconcreations.com/2022/gem/public/api/web/home"
      );
      setHomeData(response.data.data);
      // console.log(response.data.data);
    }
    getHomeData();
  }, []);

  return (
    <>
      <Header /> 
        <Routes>
          {/* <Route path="/">
            <homeContext.Provider value={homeData}>
              <Home />
            </homeContext.Provider>
          </Route> */}




          <Route
            path="/"
            element={
              <homeContext.Provider value={homeData}>
                <Home />
              </homeContext.Provider>
            }
          />

          <Route path="search-result" element={<SearchResult />} />
          <Route path="search-result/:id" element={<CollectionDetails />} />


        </Routes> 
      <Footer />
    </>
  );
};

export default App;
