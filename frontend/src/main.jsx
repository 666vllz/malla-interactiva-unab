import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./components/Login.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/malla",
    element: <App />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)
