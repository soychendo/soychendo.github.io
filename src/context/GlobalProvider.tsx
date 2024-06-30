
import { useState } from 'react';
import { GlobalContext } from "@context/GlobalContext";
import { GlobalProviderTypes } from './types';

const GlobalProvider = ({children}: GlobalProviderTypes ) => {

  const [menuBtn, setMenuBtn] = useState(false);

  const valueContext = {
    setMenuBtn,
    menuBtn,
  }

  return (
    <GlobalContext.Provider value={valueContext}>
      {children}
    </GlobalContext.Provider>
  )
}

export {GlobalProvider};
