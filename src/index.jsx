/*-----------------------------------------------------------------------------------

    Name: Chendo Dev
    Theme URI: @soychendo
    Description: I Am Chendo - this is my website
    Author: @soychendo - chendo | developer && web designer
    Author URI: https://facebook.com/soychendo
    Github: https://github.com/soychendo
    Youtube: https://youtube.com/@iamchendo

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
