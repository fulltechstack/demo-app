import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Fashion from "./components/Fashion";
import Household from "./components/Household";
import Electronics from "./components/Electronics";
import Account from "./components/Account";
import authContext from "./context/AuthContext";
import { useState } from "react";

function App() {
  let [user, setUser] = useState();
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
  return (
    <authContext.Provider value={{ user, setUser }}>
      <RouterProvider router={router} />
    </authContext.Provider>
  );
}

export default App;
