import React from "react";
import { useAppState } from "../Context/AppStateProvider/AppStateProvider";
import { Route, Routes, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../Router/Router";

function AppRouter() {
  const { userName } = useAppState();

  return userName ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          Component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Route path="/*" element={<Navigate to="/homepage" replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          Component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Route path="/*" element={<Navigate to="/homepage" replace />} />
    </Routes>
  );
}

export default AppRouter;
