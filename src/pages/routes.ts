import { RouteObject } from "react-router";
import { HomePage } from "./home";
import { AboutPage } from "./about";
import { NotFoundPage } from "./not-found";

export const routesMeta: Record<string, { path: string; name: string }> = {
  HOME: { path: "/", name: "Home" },
  ABOUT: { path: "/about", name: "About" },
  NOT_FOUND: { path: "*", name: "Not Found" },
};

export const routes: RouteObject[] = [
  {
    id: routesMeta.HOME.name,
    path: routesMeta.HOME.path,
    Component: HomePage,
  },
  {
    id: routesMeta.ABOUT.name,
    path: routesMeta.ABOUT.path,
    Component: AboutPage,
  },
  {
    id: routesMeta.NOT_FOUND.name,
    path: routesMeta.NOT_FOUND.path,
    Component: NotFoundPage,
  },
];
