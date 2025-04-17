import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Todos from './Components/Todos.jsx'
import AddTodos from './Components/AddTodos.jsx'
import { Provider } from 'react-redux'
import {store} from '../src/app/store/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    
    <App />
    <AddTodos/>
     <Todos/>
  </Provider>,
)
