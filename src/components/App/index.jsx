import React from "react";
import { GlobalProvider } from '@context/GlobalProvider';
import { GlobalStyle } from '@styles/GlobalStyle';

import Home from "@components/home/";
import {Header} from "@components/header/";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <GlobalProvider>
        <Header />
        <Home />
      </GlobalProvider>
    </>
  );
}

export default App;
