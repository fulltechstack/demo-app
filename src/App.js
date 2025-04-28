import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Fashion from "./components/Fashion";
import Household from "./components/Household";
import Electronics from "./components/Electronics";
import Account from "./components/Account";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome />,
      children: [
        {
          path: "/account",
          element: <Account />,
          children: [
            {
              path: "/account/login",
              element: <Login />,
            },
          ],
        },
        {
          path: "*",
          element: <NotFound />,
        },
        {
          path: "/fashion",
          element: <Fashion />,
        },
        {
          path: "/household",
          element: <Household />,
        },
        {
          path: "/electronics",
          element: <Electronics />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
