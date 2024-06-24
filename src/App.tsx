import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/index.tsx";
import Auth from "./pages/auth/index.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/auth" element={<Auth/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
