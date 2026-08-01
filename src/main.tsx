import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";

import App from "./App";
import { ThemeProvider } from "@/context/ThemeContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <App />

        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={12}
          toastOptions={{
            duration: 4000,
            style: {
              borderRadius: "12px",
              background: "#fff",
              color: "#0f172a",
            },
            success: {
              iconTheme: {
                primary: "#2563eb",
                secondary: "#fff",
              },
            },
            error: {
              iconTheme: {
                primary: "#dc2626",
                secondary: "#fff",
              },
            },
          }}
        />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
