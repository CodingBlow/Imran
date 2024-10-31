import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import AC from "../pages/AC";
import PrivacyPolicy from "../components/UI/Privacy_Policy";
import BookingForm from "../components/UI/BookingForm";
import ServicesList from "../components/UI/ServicesList";
import ServiceDetails from "../pages/HotServiceDetails";
import RentalFormPage from "../pages/HotRentalFormPage";
import W_Machine from "../pages/W_Machine";
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
      <Route path="/ac" element={<AC />} />
      <Route path="/washing_machine" element={<W_Machine />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/Privacy_Policy" element={<PrivacyPolicy />} />
      <Route path="/BookingForm" element={<BookingForm />} />
      <Route path="/Services" element={<ServicesList />} />
    </Routes>
  );
};

export default Routers;
