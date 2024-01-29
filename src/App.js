import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About/About';
import Store from './components/Store/Store';
import Contact from './components/Contact/Contact';


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/Store", element: <Store /> },
  { path: "/About", element: <About /> },
  { path: "/Contact", element: <Contact /> }
]
)


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
