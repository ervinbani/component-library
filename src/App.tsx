import { useState } from "react";
import "./App.css";
import { AlertBox } from "./components/AlertBox/AlertBox";
import { UserProfileCard } from "./components/UserProfileCard/UserProfileCard";

// src/App.tsx

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
        user={{
          id: "1",
          name: "John Doe",
          email: "john.doe@example.com",
          role: "Software Engineer",
          avatarUrl: "https://example.com/avatar.jpg",
        }}
        showEmail={true}
        showRole={true}
        onEdit={(userId) => alert(`Editing user ${userId}`)}
      >
        <div className="text-sm text-gray-500">Last login: 2 hours ago</div>
      </UserProfileCard>
    </>
  );
}

export default App;
