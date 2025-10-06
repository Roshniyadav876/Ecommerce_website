import React, { useState, useEffect } from "react";
import "./Hero.css";

function Hero() {
  const images = [
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80",
    "https://images.pexels.com/photos/7130497/pexels-photo-7130497.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/8454343/pexels-photo-8454343.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1600&q=80",
    "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.unsplash.com/photo-1521335629791-ce4aec67ddaf?auto=format&fit=crop&w=1600&q=80",
    "https://images.pexels.com/photos/3762926/pexels-photo-3762926.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.unsplash.com/photo-1585386959984-a4155225b8f4?auto=format&fit=crop&w=1600&q=80",
  ];

  const [index, setIndex] = useState(0);

  // Preload all images first
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Change background automatically every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero_section">
      {images.map((img, i) => (
        <div
          key={i}
          className={`hero_bg ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      <div className="overlay"></div>

      <div className="hero_content">
        <h1>New Season Arrivals</h1>
        <p>Discover the latest fashion trends and styles</p>
        <button className="btn">Shop Now</button>
      </div>
    </section>
  );
}

export default Hero;
