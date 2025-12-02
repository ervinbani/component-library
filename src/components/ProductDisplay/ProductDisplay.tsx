// components/ProductDisplay/ProductDisplay.tsx
import React from "react";
import type { ProductDisplayProps } from "../../types/index";

export const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription = false,
  showStockStatus = false,
  onAddToCart,
  children,
}) => {
  return (
    <div className="product-display">
      <h2>{product.name}</h2>
      <p>${product.price.toFixed(2)}</p>
      {showDescription && <p>{product.description}</p>}
      {showStockStatus && (
        <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
      )}
      {onAddToCart && (
        <button onClick={() => onAddToCart(product.id)}>Add to Cart</button>
      )}
      {children}
    </div>
  );
};
