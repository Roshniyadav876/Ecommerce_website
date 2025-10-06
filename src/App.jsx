import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Products from './pages/Products/Product'
import Footer from "./Components/Footer/Footer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);   // API se aayega
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")   // yaha tumhari API URL
      .then(res => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then(data => {
        setProducts(data);       // API data set ho gaya
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  
  function handleShopNow(productId) {
    console.log("Shop Now clicked for product id:", productId);
  }

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="main_container">
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleShopNow={handleShopNow}
      />
      <Hero handleShopNow={handleShopNow} />
      <Products products={products} searchTerm={searchTerm} />
      <Footer/>
    </div>
  );
}

export default App;
