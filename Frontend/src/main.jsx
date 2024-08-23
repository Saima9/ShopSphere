import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './routes/Home.jsx';
import Bag from './routes/bag.jsx';
import {Provider} from 'react-redux'
import eStore from './store/index.js';




const router = createBrowserRouter([
  {
  path:"/"  , element:<App/> , children:[
  {path:"/"  , element:<Home/> /*,loader: postLoader*/},
  {path:"/Bag"  , element:<Bag/>/*, action: postAction*/ },
],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={eStore}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
