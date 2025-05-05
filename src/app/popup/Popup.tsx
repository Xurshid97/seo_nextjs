"use client"; // Mark as client component

import { useState } from "react";

export default function Popup() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  const openPopup = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <>
      <button
        onClick={openPopup}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          padding: "10px 20px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Show Page Info
      </button>
      {isPopupVisible && (
        <>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
              zIndex: 999,
            }}
            onClick={closePopup} // Close popup when clicking overlay
          />
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              zIndex: 1000,
              maxWidth: "500px",
              width: "90%",
            }}
          >
            <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>Page Info</h2>
            <p>{loremIpsum}</p>
            <button
              onClick={closePopup}
              style={{
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                borderRadius: "4px",
                padding: "10px 20px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Close
            </button>
          </div>
        </>
      )}
    </>
  );
}