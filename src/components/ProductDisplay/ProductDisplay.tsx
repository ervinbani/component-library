// components/ProductDisplay/ProductDisplay.tsx
import React from "react";
import type { ProductDisplayProps } from "../../types/ProductDisplay.types";

export const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription = false,
  showStockStatus = false,
  onAddToCart,
  children,
}) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
      )}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {product.name}
        </h2>
        <p className="text-3xl font-semibold text-blue-600 mb-4">
          ${product.price.toFixed(2)}
        </p>
        {showDescription && (
          <p className="text-gray-600 mb-4">{product.description}</p>
        )}
        {showStockStatus && (
          <p
            className={`text-sm font-medium mb-4 ${
              product.inStock ? "text-green-600" : "text-red-600"
            }`}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </p>
        )}
        {onAddToCart && (
          <button
            onClick={() => onAddToCart(product.id)}
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Add to Cart
          </button>
        )}
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
};
