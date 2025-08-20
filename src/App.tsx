// Default Import

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";

// Layout

import Layout from "@/layouts/root-layout";

// Utility Pages / Components

// import ScrollToTop from "./utility/ScrollToTop";
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


// Auth Pages

import AdminLogin from "./pages/Auth/login";

// Admin Pages

import ManageUsersPage from "./pages/Admin/Users/page";
import UserDetailPage from "./pages/Admin/Users/[id]/page";
import AdminOverviewPage from "./pages/Admin/overview";

import ManageQuestionsPage from "./pages/Admin/Questions/page";
import CreateQuestionPage from "./pages/Admin/Questions/create/page";
import DashboardLayout from "./pages/Admin/layout";
import ProtectedRoute from "./components/ProtectedRoute";
import Chatbot from "./components/Chatbot";

function App() {

  const [loading, setLoading] = useState(true);

  return (

    // Providers, Router, Scroll to Top Function and Button, and Custom Cursor

    <>
      <ScrollToTopFunction />
      {/* <ScrollToTop /> */}
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

            {/* <Route path="/admin/overview" element={<DashboardLayout children={<AdminOverviewPage/>} />}/> */}

            {/* Admin Pages */}
                
            <Route
              path="/admin/overview"
              element={
                <ProtectedRoute adminOnly>
                  <AdminOverviewPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/manage-user"
              element={
                <ProtectedRoute adminOnly>
                  <ManageUsersPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/user/:id"
              element={
                <ProtectedRoute adminOnly>
                  <UserDetailPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/manage-question"
              element={
                // <ProtectedRoute adminOnly>
                  <DashboardLayout>
                    <ManageQuestionsPage />
                  </DashboardLayout>
                // </ProtectedRoute>
              }
            />

            <Route
              path="/admin/questions/create"
              element={
                <ProtectedRoute adminOnly>
                  <DashboardLayout>
                    <CreateQuestionPage />
                  </DashboardLayout>
                </ProtectedRoute>
              }/>

            <Route path="/admin-login" element={<AdminLogin/>} />
            <Route path="*" element={<NotFoundPage />} />

          </Routes>

        )}

      </AnimatePresence>

      <Chatbot/>

      <Toaster position="top-center" />

    </>

  );
}

export default App;
