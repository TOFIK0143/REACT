import { ThemeProvider } from '@mui/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';

import './index.css';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = "dev-seflivdt.us.auth0.com";
const clientId = "pPVub2pskTVZxVpxiiOCF2d51RlVvr3W";



ReactDOM.render(
    <Auth0Provider
    domain = {domain}
    clientId ={ clientId}
    redirectUri = {window.location.origin}>
      <Router >
      <Routes>
          <Route path="/explore" element={<Page2 />} />
          <Route path="/" element={<App />} />
          <Route path="/bookdetail" element={<Page3 />} />
      </Routes>
    </Router> 
   </Auth0Provider>
     
   ,
    document.getElementById('root')
  );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
