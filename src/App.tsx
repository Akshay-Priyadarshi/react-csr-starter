import { createBrowserRouter, RouterProvider } from "react-router";
import { routes } from "./pages";
import { I18nextProvider } from "react-i18next";
import { i18nProps } from "./i18n";

const router = createBrowserRouter(routes);

export const App = () => {
  return (
    <I18nextProvider i18n={i18nProps} defaultNS={"translation"}>
      <RouterProvider router={router} />
    </I18nextProvider>
  );
};
