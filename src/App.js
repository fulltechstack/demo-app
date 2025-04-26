import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import NotFound from "./components/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
