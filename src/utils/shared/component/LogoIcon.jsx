import React from "react";
export default function LogoIcon({ additionalStyles }) {
  return (
    <div style={additionalStyles} className="logo-icon">
      <img src="/logo-white.png" alt="logo-icon" width={80} height={40} />
    </div>
  );
}
