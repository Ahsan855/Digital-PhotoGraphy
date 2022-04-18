import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Pages/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Contact from "./Pages/Contact/Contact";
import NotFound404 from "./Pages/Shared/NotFound/NotFound404";
import Footer from "./Pages/Shared/Footer/Footer";
import RequireAuth from "./Pages/ReqierAuth/RequireAuth";
import Blog from "./Pages/Blogs/Blog";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Services from "./Pages/Services/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
