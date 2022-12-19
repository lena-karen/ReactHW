import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { CircularProgress } from '@mui/material'
import { PersistGate} from 'redux-persist/es/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store = {store}>
        <PersistGate persistor = {persistor} loading = {<CircularProgress />} >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>
);

