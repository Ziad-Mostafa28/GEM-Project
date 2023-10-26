import React, { useEffect, useState } from "react";
import "./App.css";
import { homeContext } from "./store/homeContext";
import Home from "./pages/Home/Home";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import SearchResult from "./components/SearchResult/SearchResult";
import CollectionDetails from "./components/SearchResult/CollectionDetails";
import Visit from "./pages/Visit/Visit";
import VisitGuide from "./pages/VisitGuide/VisitGuide"; 
import endPoints, { httpData } from "./store/Alldata";

const App = () => {
  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    async function getHomeData() {
      const response = await httpData.get(endPoints.home); 
      setHomeData(response.data.data);
    }
    getHomeData();
  }, []);



  return (
    <>
      <Header />
      <Routes>

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
        <Route path="visit" element={<Visit />} />
        <Route path="visit-Guide" element={<VisitGuide />} />



      </Routes>
      <Footer /> 
    </>
  );
};

export default App;
