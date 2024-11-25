import React, { useState } from "react";
import { MediaContainer, SocialMedia, ContainerButton } from "./style";

const SocialMobile = (): JSX.Element => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <MediaContainer>
            <SocialMedia isOpen={isOpen}>
                <a href="https://www.youtube.com/@chendodiesel" className="fa fa-youtube" target="_blank"></a>
                <a href="https://www.facebook.com/soychendo/" className="fa fa-facebook" target="_blank"></a>
                <a href="https://www.instagram.com/chendodiesel/" className="fa fa-instagram" target="_blank"></a>
            </SocialMedia>
            <ContainerButton onClick={toggleMenu} isOpen={isOpen}>
                <span className="fa fa-plus"></span>
            </ContainerButton>
        </MediaContainer>
    );
   }
   
   export { SocialMobile };