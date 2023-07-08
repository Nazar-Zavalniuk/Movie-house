import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import AppStateProvider from "./Context/AppStateProvider/AppStateProvider";
import Error from "./Pages/Error/Error";

function App() {
  return (
    <BrowserRouter>
      <AppStateProvider>
        <Routes>
          <Route Component={Error} path="/error" />
          <Route Component={Homepage} path="/homepage" />
          <Route path="/*" element={<Navigate to="/homepage" replace />} />
        </Routes>
      </AppStateProvider>
    </BrowserRouter>
  );
}

export default App;
