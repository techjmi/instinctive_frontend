import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// import { store } from './components/redux/store'
import {Provider} from 'react-redux'
import{ToastContainer} from 'react-toastify'
import { persistor, store } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'
// import { PersistGate } from 'redux-persist/lib/integration/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

    <App />
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    </PersistGate>
    </Provider>
  </StrictMode>,
)
