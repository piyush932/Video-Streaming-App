import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/Store.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Watch from "./components/WatchPage/Watch.jsx";
import Container from "./components/Container";
import SearchresultsPage from "./components/Search/SearchresultPage.jsx"

const bodyRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <Body />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Container />,
      },
      {
        path: "watch",
        element: <Watch />,
      },
      {
        path: "search/:query",
        element: <SearchresultsPage />, 
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
