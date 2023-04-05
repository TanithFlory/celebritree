import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ArticlePreview from "./components/Articles/ArticlePreview/ArticlePreview";
import Footer from "./components/Footer/Footer";
import Pagebreak from "./components/UI/Pagebreak";
import Credits from "./components/Credits/Credits";
import NotFound from "./components/NotFound/NotFound";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/blog/" element={<Home />} />
        <Route path="/blog/home" element={<Home />} />
        <Route path="/blog/articles/:tag/:title" element={<ArticlePreview />} />
        <Route path="/blog/credits" element={<Credits />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Pagebreak margin="3rem 0" />
      <Footer />
    </>
  );
}

export default App;
