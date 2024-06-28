// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { Provider } from 'react-redux'
// import { store,persistor } from './redux/store.js'
// import { PersistGate } from 'redux-persist/integration/react'
// import ThemeProvider from './components/ThemeProvider.js'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
// <PersistGate persistor={persistor}>
//   <Provider store={store}>
// <ThemeProvider>
//           <App />
  
// </ThemeProvider>    
//   </Provider> 
  
// </PersistGate> </React.StrictMode>,
// )

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import ThemeProvider from './components/ThemeProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
