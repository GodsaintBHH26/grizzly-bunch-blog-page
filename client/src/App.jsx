import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import BasePage from "./pages/BasePage";
import Login from "./pages/Login";
import Notification from "./components/UI/custom-components/Notification";
import Signup from "./pages/Signup";
import Feed from "./pages/Feed";
import CreatePost from "./pages/CreatePost";
import UserAccount from "./pages/UserAccount";
import SinglePost from "./pages/SinglePost";

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
        {
          path:"signup",
          element: <Signup/>
        },
        {
          path:"feed",
          element: <Feed/>
        },
        {
          path:"create",
          element:<CreatePost/>
        },
        {
          path:"account",
          element:<UserAccount/>
        },
        {
          path:"posts/:slug",
          element:<SinglePost/>
        }
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
