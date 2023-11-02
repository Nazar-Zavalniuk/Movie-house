import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import { AppStateProvider } from "./Context/AppStateProvider/AppStateProvider";
import AppNotifier from "./Components/UI/Notifiers/AppNotifier/AppNotifier";
import { MoviesStateProvider } from "./Context/MoviesStateProvider/MoviesStateProvider";
import AppRouter from "./Components/AppRouter";

function App() {
  return (
    <HashRouter>
      <AppStateProvider>
        <MoviesStateProvider>
          <AppNotifier />
          <AppRouter />
        </MoviesStateProvider>
      </AppStateProvider>
    </HashRouter>
  );
}

export default App;
