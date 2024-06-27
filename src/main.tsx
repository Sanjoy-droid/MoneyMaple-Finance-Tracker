import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";

const KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!KEY) {
  throw new Error("Missing Publishble Key!!!");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={KEY}>
      <App />
    </ClerkProvider>
  </React.StrictMode>
);
