import React from "react"
import Mapa from '@assets/mapa.png';
import { Description } from "./Description";
import { SocialMedia } from "./SocialMedia";
import useMediaQuery from '@hooks/useMediaQuery';

const Home = () => {
  const matches = useMediaQuery('(min-width: 768px)');

  return(
    <main className="container-menu">
      <div  className="map"><img src={Mapa} alt="Background Image - @soychendo" /></div>
      <div className="grid-menu mb-4 Home">
        <Description />
        { matches ? <SocialMedia /> : null }
      </div>
    </main>
  );
}

export default Home;

