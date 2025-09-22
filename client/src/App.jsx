import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import BasePage from "./pages/BasePage";
import Login from "./pages/Login";
import Notification from "./components/UI/custom-components/Notification";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          element: <BasePage />,
          index: true,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ]);
  return (
    <>
      <div>
        <RouterProvider router={routes} />
        <Notification/>
      </div>
    </>
  );
}

export default App;
