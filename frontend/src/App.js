
import Home from './Home.js'
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import FetchData from './FetchData';
import Orders from './Orders';
import Cart from './Cart';
import { CartProvider } from './ContextReducer.js';
import UserHome from './UserHome';

const router = createBrowserRouter([
    { path: '/', element: <UserHome /> },
    { path: '/shop', element: <Home /> },
    { path: '/shop/Items', element: <FetchData /> },
    { path: '/shop/Orders', element: <Orders /> },
    { path: '/shop/Cart', element: <Cart /> },
])
function App() {

    return (
        <CartProvider>
            <div className="App">
                <RouterProvider router={router} />
            </div>
        </CartProvider>
    );
}

export default App;
