import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-8 mt-auto border-t border-gray-800">
      <small>© {new Date().getFullYear()} ValTube. All rights reserved.</small>
    </footer>
  );
}
