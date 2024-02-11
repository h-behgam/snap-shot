import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import NotFound from "./Pages/NotFound";
import routes from "./Router/PathIndex";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <NotFound />,
      children: routes,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
