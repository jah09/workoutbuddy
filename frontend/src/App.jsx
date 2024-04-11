import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
export default function App() {
  const { user } = useAuthContext();
  return (
    <BrowserRouter>
      <Navbar />
      {/* Pages*/}
      <div className="pages">
        <Routes>
          {/* <Route path="/" element={<Navbar />} /> */}
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/register"
            element={!user ? <Signup /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
