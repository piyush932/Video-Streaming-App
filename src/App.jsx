import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Watch from './components/Watch';
import Container from './components/Container';

const bodyRouter = createBrowserRouter([{
  path:'/',
  element:<Body/>,
  children:[
    {
      path:'/',
      element:<Container/>
    },
    {
      path:'watch',
      element:<Watch/>
    }
  ]
}])


function App() {

  return (
    <div>
      <Header/>
      <RouterProvider router={bodyRouter}/>
    </div>
  )
}

export default App;
