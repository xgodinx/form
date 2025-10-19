import { createBrowserRouter } from "react-router-dom";
import Form from "./components/Form";
import Posts from "./components/Posts";
import App from "./App";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Form />,
      },
      {
        path: "posts",
        element: <Posts />,
      },
    ],
  },
]);
