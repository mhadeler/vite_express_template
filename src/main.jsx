import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { StateProvider } from './Helpers/StateProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <StateProvider>
        <App />
    </StateProvider>
);