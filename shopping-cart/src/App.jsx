import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
