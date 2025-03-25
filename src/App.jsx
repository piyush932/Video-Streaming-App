import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/Store.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchVideo from "./pages/WatchVideo.jsx";
import Container from "./pages/Container.jsx";
import SearchresultsPage from "./pages/SearchresultPage.jsx"
import Signin from "./pages/Signin.jsx";
import Layout from "./pages/Layout.jsx";

const bodyRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout/>
    ),
    children: [
      {
        path: "/",
        element: <Container />,
      },
      {
        path: "watch",
        element: <WatchVideo />,
      },
      {
        path: "search/:query",
        element: <SearchresultsPage />, 
      },
      {
        path: "signin",
        element: <Signin />, 
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="w-full">
        <RouterProvider router={bodyRouter} />
      </div>
    </Provider>
  );
}

export default App;
