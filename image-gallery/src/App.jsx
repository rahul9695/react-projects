import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header.jsx";
import Detail from "./components/Detail.jsx";
import Footer from "./components/Footer.jsx";
import Search from "./components/Search.jsx";
import Home from "./components/Home.jsx";


function App() {
  // console.log("HELLO");
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/image/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
