import { useState } from "react";
import "./App.css";
import { UserProfileCard } from "./components/UserProfileCard/UserProfileCard";
import { ProductDisplay } from "./components/ProductDisplay/ProductDisplay";
import { AlertBox } from "./components/AlertBox/AlertBox";
import type { User, Product } from "./types/index";

type View = "home" | "user" | "product";

function App() {
  const [currentView, setCurrentView] = useState<View>("home");
  const [showUserAlert, setShowUserAlert] = useState(false);
  const [showProductAlert, setShowProductAlert] = useState(false);

  // Sample data
  const user: User = {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Software Engineer",
    avatarUrl: "https://via.placeholder.com/150",
  };

  const product: Product = {
    id: "1",
    name: "Wireless Headphones",
    price: 199.99,
    description: "High-quality wireless headphones with noise cancellation.",
    imageUrl: "https://via.placeholder.com/400x300",
    inStock: true,
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Welcome to Component Library
          </h1>
          <p className="text-gray-600">Explore our reusable React components</p>
        </header>

        {/* Navigation Menu */}
        <nav className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setCurrentView("home")}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              currentView === "home"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentView("user")}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              currentView === "user"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            User Profile
          </button>
          <button
            onClick={() => setCurrentView("product")}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              currentView === "product"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Products
          </button>
        </nav>

        {/* Main Content */}
        <main className="bg-white rounded-lg shadow-lg p-8">
          {currentView === "home" && (
            <div className="text-center py-12">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Welcome! 👋
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                This is a showcase of reusable React TypeScript components.
              </p>
              <p className="text-gray-500">
                Use the navigation menu above to explore different components.
              </p>
            </div>
          )}

          {currentView === "user" && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                User Profile Component
              </h2>

              {showUserAlert && (
                <div className="mb-6">
                  <AlertBox
                    type="success"
                    message="User profile updated successfully!"
                    onClose={() => setShowUserAlert(false)}
                  >
                    <p className="text-sm mt-2">All changes have been saved.</p>
                  </AlertBox>
                </div>
              )}

              <UserProfileCard
                user={user}
                showEmail={true}
                showRole={true}
                onEdit={(userId) => {
                  setShowUserAlert(true);
                  alert(`Editing user ${userId}`);
                }}
              >
                <div className="text-sm text-gray-500">
                  Last login: 2 hours ago
                </div>
              </UserProfileCard>
            </div>
          )}

          {currentView === "product" && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Product Display Component
              </h2>

              {showProductAlert && (
                <div className="mb-6">
                  <AlertBox
                    type="success"
                    message="Product added to cart successfully!"
                    onClose={() => setShowProductAlert(false)}
                  >
                    <p className="text-sm mt-2">
                      Continue shopping or proceed to checkout.
                    </p>
                  </AlertBox>
                </div>
              )}

              <ProductDisplay
                product={product}
                showDescription={true}
                showStockStatus={true}
                onAddToCart={(productId) => {
                  setShowProductAlert(true);
                  alert(`Added product ${productId} to cart`);
                }}
              >
                <div className="text-sm text-gray-500">
                  Free shipping available
                </div>
              </ProductDisplay>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
