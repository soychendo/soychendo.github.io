import React from "react";

const Description = () => {
  return (
    <div className="col-md-6 pd-l">
      <div className="col-content">
        <div className="container-type"><br />
          <span className="hello">Hola,</span>
          <small> Soy <div id="soychendo">Chendo</div></small>
          <p>
            Que la vida no termine sin dejar huellas,<br/>  
            cada momento que brindas,<br/> 
            siempre será una historia para recordar.
          </p>
          <div className="btn_home">
            <a 
              href="mailto:chendoec@live.com" 
              className="btn btn-chendo btn-block mb-4">
                Contáctame
            </a>
            <a
              href="https://www.patreon.com/chendo"
              aria-label="Enchufe Virtual"
              target="_blank"
              className="btn btn-chendo btn-patreon btn-block mb-4">
                Patreon
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Description };
