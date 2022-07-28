import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from "./variables"; 
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider 
    domain={AUTH0_DOMAIN}
    clientId={AUTH0_CLIENT_ID}
    redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>
);

