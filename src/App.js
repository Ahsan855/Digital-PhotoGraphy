import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Pages/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import NotFound404 from "./Pages/Shared/NotFound/NotFound404";
import Footer from "./Pages/Shared/Footer/Footer";
import RequireAuth from "./Pages/ReqierAuth/RequireAuth";
import Blog from "./Pages/Blogs/Blog";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/checkOut"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
