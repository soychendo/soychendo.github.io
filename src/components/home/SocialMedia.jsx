import React from "react";

const SocialMedia = () => {

  return (
    <div className="col-md-6 pd-l">
      <div className="col-content">
        <div className="content__img">
          <div className="content-top-icon">
            <div className="cirdown">
              <a href="https://linkedin.com/in/soychendo" aria-label="linkedin" target="_blank"><i className="fab fa-linkedin-in icono"></i></a>
            </div>
            <div className="cirdown">
              <a href="https://behance.net/chendo" aria-label="behance" target="_blank"><i className="fab fa-behance icono"></i></a>
            </div>
          </div>
          <div className="content-med-icon">
            <div className="cirdown">
              <a href="https://www.youtube.com/@chendodiesel" aria-label="twitter" target="_blank"><i className="fab fa-youtube icono"></i></a>
            </div>
            <div className="cirdown">
              <a href="https://github.com/soychendo" aria-label="github" target="_blank"><i className="fab fa-github-alt icono"></i></a>
            </div>
            <div className="cirdown">
              <a href="https://facebook.com/soychendo" aria-label="facebook" target="_blank"><i className="fab fa-facebook-f icono"></i></a>
            </div>
          </div>
          <div className="content-bottom-icon mb-4">
            <div className="cirdown">
              <a href="https://tiktok.com/@chendodiesel" aria-label="tiktok" target="_blank"><i className="fab fa-tiktok icono"></i></a>
            </div>
            <div className="cirdown">
              <a href="https://www.instagram.com/chendodiesel" aria-label="codepen" target="_blank"><i className="fab fa-instagram icono"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { SocialMedia };