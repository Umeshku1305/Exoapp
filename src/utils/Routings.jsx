import React from "react";
import NavWork from "../Components/NavWork";
import Studio from "../Components/Studio";
import News from "../Components/News";
import Contact from "../Components/Contact";
import { Route, Routes } from "react-router-dom";

const Routings = () => {
  return (
    <div>
      <Routes>
        <Route path="/work" element={<NavWork />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Routings;
