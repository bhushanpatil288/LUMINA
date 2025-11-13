import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import {Home, About} from './components'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children:[
            {
                path: '',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    },
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router = {router} />
)
