/*-----------------------------------------------------------------------------------

    Name: Soy Chendo
    Theme URI: @soychendo
    Description: Chendo Dev - Web Site
    Author: @soychendo | developer && nomadic freelancer
    Author URI: https://facebook.com/soychendo
    Github: https://github.com/soychendo
    Youtube: https://youtube.com/@soy.chendo

-----------------------------------------------------------------------------------*/
import React from 'react';
import ReactDom from "react-dom/client";
import App from '@components/App/';
import '@styles/style.scss';

const root = ReactDom.createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
)
