import React from "react";
import { useLocation } from "react-router-dom";

const WelcomePage = () => {
  const location = useLocation(); 
  const { name } = location.state || {}; 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f8f4ff] to-[#e8e0ff]">
      <h1 className="text-4xl font-bold text-[#552583]">
        Welcome , {name || "User"}!
      </h1>
    </div>
  );
};

export default WelcomePage;
