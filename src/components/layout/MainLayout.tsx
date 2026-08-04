import { Outlet } from "react-router-dom";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollTop from "@/components/shared/ScrollTop";

export default function MainLayout() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />

      <ScrollTop />
    </>
  );
}
