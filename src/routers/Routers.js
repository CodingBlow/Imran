import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Ac from "../pages/ac";
import PrivacyPolicy from "../components/UI/Privacy_Policy";
import BookingForm from "../components/UI/BookingForm";
import ServicesList from "../components/UI/ServicesList";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/ac" element={<Ac />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/Privacy_Policy" element={<PrivacyPolicy />} />
      <Route path="/BookingForm" element={<BookingForm />} />
      <Route path="/Services" element={<ServicesList />} />
    </Routes>
  );
};

export default Routers;
