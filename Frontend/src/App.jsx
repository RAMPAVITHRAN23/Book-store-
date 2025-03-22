import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Components/Nav";
import "./index.css";

function App() {
  return (
    <>
      <Nav />
      <main className="min-h-screen px-6 py-6 mx-auto max-w-screen-2xl">
        <Outlet />
      </main>
      <footer className="py-4 text-center text-white bg-gray-800">
        © 2025 Your Company Name
      </footer>
    </>
  );
}

export default App;
