import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About/About';
import Store from './components/Store/Store';


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/Store", element: <Store /> },
  { path: "/About", element: <About /> },

]
)


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
