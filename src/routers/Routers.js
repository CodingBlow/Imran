import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import ACPage from "../pages/AC/AcPage";
import PrivacyPolicy from "../components/UI/Privacy_Policy";
import BookingForm from "../components/UI/BookingForm";
import ServicesList from "../components/UI/ServicesList";
import ServiceDetails from "../pages/HotServiceDetails";
import RentalFormPage from "../pages/HotRentalFormPage";
import W_Machine from "../pages/WM/W_Machine";
import ROPage from "../pages/RO-Purifier/ROPage";
import RefPage from "../pages/refrigerator/RefrigeratorPage";
import GeyserPage from "../pages/geyser/GeyserPage";
import InverterPage from "../pages/Inverter/InverterPage";
import ConstructionPage from "../pages/Construction/ConstructionPage";
import AllProduct from "../pages/AllProducts/AllProducts"
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service/:id" element={<ServiceDetails />} />
      <Route path="/rental-form" element={<RentalFormPage />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/ac" element={<ACPage />} />
      <Route path="/washing_machine" element={<W_Machine />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/Privacy_Policy" element={<PrivacyPolicy />} />
      <Route path="/BookingForm" element={<BookingForm />} />
      <Route path="/Services" element={<ServicesList />} />
      <Route path="/ro-water-purifier-rental" element={<ROPage/>}/>
      <Route path="/refrigerator-rental" element={<RefPage/>}/>
      <Route path="/Geyser" element={<GeyserPage/>}/>
      <Route path="/inverter-rental" element={<InverterPage/>}/>
      <Route path="/construction-equipment-rental" element={<ConstructionPage/>}/>
      <Route path="/home/allproducts" element={<AllProduct/>}/>
    </Routes>
  );
};

export default Routers;
