import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/dashboard/index.tsx";
import Auth from "./pages/auth/index.tsx";
import { FinancialRecordsProvider } from "./contexts/financial-record-context.tsx";
import { SignedIn, UserButton } from "@clerk/clerk-react";

function App() {
  return (
    <>
      <Router>
        <div className="app-container">
          <div className="navbar">
            <Link to="/">Dashboard</Link>
            <SignedIn>
              <div className="user-button mt-4">
                <UserButton />
              </div>
            </SignedIn>
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <FinancialRecordsProvider>
                  <Dashboard />
                </FinancialRecordsProvider>
              }
            />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
