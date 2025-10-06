import React from "react";
import { products } from "@/Dto/products";
import { Card } from "@/components/card/Card";

const ProductsPage = () => {
  return (
    <div className="products-page">
      <h1 className="products-title">Lista de Productos</h1>

      <div className="products-grid">
        {products.map((product, index) => (
          <Card
            key={index}
            color={product.isActive ? "white" : "black"}
            title1={product.name}
            title2={product.brand}
            linkText={`${product.price} ${product.currency}`}
            imageSrc={product.imageUrl}
            variant="product" 
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

