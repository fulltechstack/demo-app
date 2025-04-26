import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Welcome from "./components/Welcome"
import Login from "./components/Login";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Welcome />,
        children: [
          {
            path: "/login",
            element: <Login />
          }
        ]
      },
    ]
  );
  return (
    <RouterProvider router={router} />
  );
}

export default App;
