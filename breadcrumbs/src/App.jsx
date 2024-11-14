import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import Home from "./Home";
import ProductListing from "./ProductListing";
import ProductDetail from "./ProductDetails";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <h1>RoadsideCoder Store</h1>
        <Breadcrumbs />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;