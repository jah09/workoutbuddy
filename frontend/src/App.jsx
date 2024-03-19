import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* Pages*/}
      <div className="pages">
        <Routes>
          {/* <Route path="/" element={<Navbar />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
