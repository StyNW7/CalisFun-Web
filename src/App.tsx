// Default Import

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { useState } from "react";
import { Toaster } from "react-hot-toast";

// Layout

import Layout from "@/layouts/root-layout";

// Utility Pages / Components

import ScrollToTop from "./utility/ScrollToTop";
// import CustomCursor from "./utility/CustomCursor";
import ScrollToTopFunction from "./utility/ScrollToTopFunction";
import NotFoundPage from "./pages/Utility/NotFound404";
import LoadingScreen from "./pages/Utility/LoadingScreen";

// Main Pages

import LandingPage from "@/pages/Landing/page";
import DownloadPage from "./pages/Download/page";
import AboutPage from "./pages/About/page";

// Utility Pages

import ContactPage from "./pages/Utility/Contact";

// Feature Pages

import TulisPage from "./pages/Features/write";
import BacaPage from "./pages/Features/read";
import HitungPage from "./pages/Features/count";


// Admin Pages

import AdminLogin from "./pages/Admin/login";

function App() {

  const [loading, setLoading] = useState(true);

  return (

    // Providers, Router, Scroll to Top Function and Button, and Custom Cursor

    <BrowserRouter>
      <ScrollToTopFunction />
      <ScrollToTop />
      {/* <CustomCursor /> */}

      {loading && (
        <LoadingScreen onComplete={() => setLoading(false)} />
      )}

      <AnimatePresence mode="wait">

        {!loading && (

          <Routes>
            
            <Route path="/" element={<Layout />}>

                {/* Main Pages */}
              
                <Route index element={<LandingPage/>} />
                <Route path="/download" element={<DownloadPage/>} />
                

                {/* Feature Pages */}
                
                <Route path="/hitung" element={<HitungPage/>} />
                <Route path="/baca" element={<BacaPage/>} />
                <Route path="/tulis" element={<TulisPage/>} />


                {/* Utility Pages */}

                <Route path="/contact" element={<ContactPage/>} />
                <Route path="/about" element={<AboutPage/>} />

            </Route>

            <Route path="/admin-login" element={<AdminLogin/>} />
            <Route path="*" element={<NotFoundPage />} />

          </Routes>

        )}

      </AnimatePresence>

      <Toaster position="top-center" />

    </BrowserRouter>

  );
}

export default App;
