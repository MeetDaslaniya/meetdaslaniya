import "./App.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./Component/Blog";
import Contact from "./Component/Contact";
import Image from "./Component/Image";




function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/image" element={<Image />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
