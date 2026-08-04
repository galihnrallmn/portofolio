import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";

import App from "./App";

import MotionProvider from "@/components/ui/MotionProvider";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";

import "./index.css";

function AppProvider() {
  const { theme } = useTheme();

  return (
    <>
      <MotionProvider>
        <App />
      </MotionProvider>

      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={12}
        toastOptions={{
          duration: 4000,

          style: {
            borderRadius: "16px",
            background: theme === "dark" ? "#0f172a" : "#ffffff",
            color: theme === "dark" ? "#f8fafc" : "#0f172a",
            border:
              theme === "dark" ? "1px solid #334155" : "1px solid #e2e8f0",
            boxShadow: "0 10px 30px rgba(0,0,0,.12)",
          },

          success: {
            iconTheme: {
              primary: "#2563eb",
              secondary: "#ffffff",
            },
          },

          error: {
            iconTheme: {
              primary: "#dc2626",
              secondary: "#ffffff",
            },
          },
        }}
      />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <AppProvider />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
