import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Market from "./components/Market";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import { Navbar, Welcome, Footer, Services, Transactions } from "./components";

ReactDOM.render(
  <BrowserRouter>
    <TransactionsProvider>
      <div className="gradient-bg-welcome">
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="market" element={<Market />} />
        </Routes>
        <Footer />
      </div>
    </TransactionsProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
