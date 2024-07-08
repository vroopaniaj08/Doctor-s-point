import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './components/store.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  <Provider store={store}>
  <GoogleOAuthProvider clientId="921755601449-rq286kvo8ns6thh1n461tjcmbqo5d4mf.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
  </Provider>
  </BrowserRouter>
)
