import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";



import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";

import About from "./component/About/About";
import Shop from "./component/Shop/Shop";
import Contact from "./component/Contact/Contact";
import Vendors from "./component/Vendors/Vendors";
import Blog from "./component/Blog/Blog";
import MegaMenu from "./component/MegaMenu/MegaMenu";


function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/megamenu" element={<MegaMenu/>} />
          
        </Routes>
      </div>
    </>
  );
}

export default App;
