import React from "react";
import "./Products.css";

function Products({ products, searchTerm }) {
  // Filter products based on searchTerm
  const filteredProducts = (products || []).filter((p) =>
    (p.title || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="shop-section" className="product_section">
      <h2>Our Collection</h2>
      <div className="product_grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div key={item.id} className="product_card">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>₹{item.price}</p>
              <button className="btn">Add to Cart</button>
            </div>
          ))
        ) : (
          <p className="no_results">No products found</p>
        )}
      </div>
    </section>
  );
}

export default Products;
