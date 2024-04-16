import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Product from "pages/Product";
import Layout from "components/Layout";
import Contact from "pages/Contact";
import Disease from "pages/Disease";

const App = () => {
  return (
    <div className="font-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/disease" element={<Disease />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
