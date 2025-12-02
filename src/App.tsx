import { useState } from "react";
import "./App.css";
import { AlertBox } from "./components/AlertBox/AlertBox";
import { UserProfileCard } from "./components/UserProfileCard/UserProfileCard";
import { ProductDisplay } from "./components/ProductDisplay/ProductDisplay";

// src/App.tsx
const user = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  role: "Software Engineer",
  avatarUrl: "https://example.com/avatar.jpg",
};
const product = {
  id: "1",
  name: "Wireless Headphones",
  price: 199.99,
  description: "High-quality wireless headphones with noise cancellation.",
  imageUrl: "https://example.com/headphones.jpg",
  inStock: true,
};

function App() {
  return (
    <>
      <AlertBox
        type="success"
        message="Your profile has been updated successfully!"
        onClose={() => alert("Alert closed")}
      >
        <p className="text-sm">You can now continue using the application.</p>
      </AlertBox>

      <UserProfileCard
        user={user}
        showEmail={true}
        showRole={true}
        onEdit={(userId) => alert(`Editing user ${userId}`)}
      >
        <div className="text-sm text-gray-500">Last login: 2 hours ago</div>
      </UserProfileCard>

      <ProductDisplay
        product={product}
        showDescription={true}
        showStockStatus={true}
        onAddToCart={(productId) => alert(`Added product ${productId} to cart`)}
      >
        <div className="text-sm text-gray-500">Free shipping available</div>
      </ProductDisplay>
    </>
  );
}

export default App;
