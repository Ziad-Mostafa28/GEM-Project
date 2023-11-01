import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter } from 'react-router-dom';
import i18n from "i18next";
import global_en from './translations/en/global.json';
import global_ar from './translations/ar/global.json'

const root = ReactDOM.createRoot(document.getElementById('root'));
const lang = localStorage.getItem('language')

if (lang === 'en') {
  document.querySelector('html').dir = 'ltr'
} else {
  document.querySelector('html').dir = 'rtl'

}

i18n
  .init({
    resources: {
      en: {
        global: global_en
      },
      ar: {
        global: global_ar
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
 
  });


root.render(
  < BrowserRouter>
      <App />
  </ BrowserRouter>
);
