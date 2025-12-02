import { useState } from "react";
import "./App.css";

type View = "home" | "user" | "product";

function App() {
  const [currentView, setCurrentView] = useState<View>("home");

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
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                User Profile Component
              </h2>
              {/* User component will be added in next step */}
              <p className="text-gray-500">User component coming soon...</p>
            </div>
          )}

          {currentView === "product" && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Product Display Component
              </h2>
              {/* Product component will be added in next step */}
              <p className="text-gray-500">Product component coming soon...</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
