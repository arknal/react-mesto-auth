import { createBrowserRouter, Navigate } from "react-router-dom";
import PageWrapper from "./utils/PageWrapper";
import routes from "../shared/lib/routes";
import MainPage from "./Main";
import NotFound from "./NotFound";

const router = createBrowserRouter([
  {
    path: routes.main,
    element: <PageWrapper />,
    children: [
      {
        path: routes.main,
        element: <MainPage />,
        children: [
          {
            path: routes.feed,
            element: <>Feed</>,
          },
          {
            path: routes.myCards,
            element: <>My Cards</>,
          },
        ],
      },
      {
        path: `${routes.card}/:cardId`,
        element: <>SMOTRIM KARTU</>,
      },
      {
        path: routes.profile,
        element: <>PROFILE</>,
      },
      {
        path: routes.register,
        element: <>REGISTER</>,
      },
      {
        path: routes.login,
        element: <>LOGIN</>,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
