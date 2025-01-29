import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from '@context/GlobalContext';
import { MenuSocialDiv, ContainerHeader } from "./styles";
import { ContextProps } from "@context/types";

const MenuSocial = (): JSX.Element => {

  const { getYear, date } = useContext<ContextProps>(GlobalContext);
  // Render
  useEffect(() => {
    getYear();
  }, [])

  return(
    <MenuSocialDiv className="menu-social">
      <ContainerHeader className="menu-header">
        <a href="https://www.youtube.com/@iamchendo" aria-label="youtube" target="_blank"><i className="fab fa-youtube"></i></a>
        <a href="https://www.facebook.com/soychendo" aria-label="facebook" target="_blank"><i className="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/chendospertus" aria-label="instagram" target="_blank"><i className="fab fa-instagram"></i></a>
      </ContainerHeader>
      <footer>Copyright @ {date}</footer>
    </MenuSocialDiv>
  );
}

export { MenuSocial };
