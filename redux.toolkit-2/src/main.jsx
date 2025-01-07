import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './redux/app/store'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

    <Provider store={store}>
 <BrowserRouter>
   <App />
  </BrowserRouter>
    </Provider>
 
   
  
)