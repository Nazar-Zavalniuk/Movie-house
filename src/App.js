import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import AppStateProvider from "./Context/AppStateProvider/AppStateProvider";
import Error from "./Pages/Error/Error";
import Navigator from "./Pages/Navigator/Navigator";
import MoviePage from "./Pages/MoviePage/MoviePage";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import UserSettings from "./Pages/UserSettings/UserSettings";
import AppNotifier from "./Components/UI/AppNotifier/AppNotifier";

function App() {
  return (
    <BrowserRouter>
      <AppStateProvider>
        <AppNotifier />
        <Routes>
          <Route Component={UserSettings} path="/user-settings" />
          <Route Component={Registration} path="/registration" />
          <Route Component={Login} path="/login" />
          <Route Component={MoviePage} exact path="/movie/:id" />
          <Route Component={Navigator} path="/navigator" />
          <Route Component={Error} path="/error" />
          <Route Component={Homepage} path="/homepage" />
          <Route path="/*" element={<Navigate to="/homepage" replace />} />
        </Routes>
      </AppStateProvider>
    </BrowserRouter>
  );
}

export default App;
