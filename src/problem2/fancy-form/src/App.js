import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import OTPPage from "./pages/OTPPage";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/validateOTP" element={<OTPPage />} />
    </Routes>
  );
}
