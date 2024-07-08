import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
const Home = lazy(() => import("./routes/Home"));
const Forecast = lazy(() => import("./routes/Forecast"));

const LoadingFallback = () => <div className="hidden">Loading...</div>;

const AppRouter = () => (
  <Router>
    <Routes>
      <Route
        path="/weather-app-vite"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <App />
          </Suspense>
        }
      >
        <Route index element={<Home />} />
        <Route path="forecast" element={<Forecast />} />
      </Route>
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  </Router>
);
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);
