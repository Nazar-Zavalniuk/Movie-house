import UserSettings from "../Pages/UserSettings/UserSettings";
import Homepage from "../Pages/Homepage/Homepage";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import MoviePage from "../Pages/MoviePage/MoviePage";
import Navigator from "../Pages/Navigator/Navigator";
import Error from "../Pages/Error/Error";

export const privateRoutes = [
  { path: "/user-settings", component: UserSettings, exact: true },
  { path: "/homepage", component: Homepage, exact: true },
  { path: "/movie/:id", component: MoviePage, exact: true },
  { path: "/navigator", component: Navigator, exact: true },
  { path: "/error", component: Error, exact: true },
];

export const publicRoutes = [
  { path: "/homepage", component: Homepage, exact: true },
  { path: "/registration", component: Registration, exact: true },
  { path: "/login", component: Login, exact: true },
  { path: "/movie/:id", component: MoviePage, exact: true },
  { path: "/navigator", component: Navigator, exact: true },
  { path: "/error", component: Error, exact: true },
];
