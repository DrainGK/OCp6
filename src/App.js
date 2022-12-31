import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rent from "./components/Rent";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import RentPage from "./pages/RentPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rent/:id" element={<Rent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
