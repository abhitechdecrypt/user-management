import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ViewUser from "./pages/ViewUser";
import DeleteUser from "./pages/DeleteUser";
import CreateUser from "./pages/CreateUser";

export default function AppRouter() {
   return (
      <Router>
         <Navbar />
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/add" element={<CreateUser />} />
            <Route path="/list" element={<ViewUser />} />
            <Route path="/edit/:id" element={<CreateUser />} />
            <Route path="/delete" element={<DeleteUser />} />
            <Route path="*" element={<Navigate to="/" replace />} />
         </Routes>
      </Router>
   );
}
