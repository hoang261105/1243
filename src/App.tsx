import React, { useState } from "react";
import Shopping from "./components/Shopping";
import Carts from "./components/Carts";

export default function App() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1>Shopping Cart</h1>
        </div>
        <div className="row">
          <Shopping></Shopping>
          <Carts></Carts>
        </div>
      </div>
    </>
  );
}
