import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Dashboard from "./Dashboard";
import BooksList from "./BooksList";
import BookContent from "./BookContent";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/books" element={<BooksList />} />
      <Route path="/book/:fileName" element={<BookContent />} />
    </Routes>
  );
};

export default AppRoutes;
