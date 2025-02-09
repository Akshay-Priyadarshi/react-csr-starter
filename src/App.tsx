import { createBrowserRouter, RouterProvider } from "react-router";
import { ThemeProvider } from "./providers";
import { routes } from "./pages";

const router = createBrowserRouter(routes);

export const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="shadcn-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
