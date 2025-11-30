'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import loadBackgroudImages from '@/common/loadBackgroudImages';
function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    return () => tl.kill();
  }, []);
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <div id="home"
      className="header header-personal valign bg-img"
      data-background="/assets/imgs/header/v2.jpg"
      data-overlay-dark="8"
    >
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-7">
            <div className="caption">
              <h1 className="fw-700 mb-10">
                We&apos;re <span className="main-color">Valyron</span>
              </h1>
              <h3>Your Digital Transformation Partner</h3>
              <div className="row">
                <div className="col-lg-9">
                  <div className="text mt-30">
                    <p>
                      From software development to web solutions, UI/UX design to graphics, 
                      we deliver comprehensive digital experiences that drive business growth.
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-60">
                    <a
                      href="/page-contact"
                      className="butn butn-md butn-bord radius-30"
                    >
                      <span className="text">Get Started</span>
                    </a>
                    <div className="icon-img-60 ml-20">
                      <img
                        src="/assets/imgs/icon-img/arrow-down-big.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info d-flex align-items-center justify-content-end mt-100">
          <div className="item">
            <h6 className="sub-title mb-10">Services :</h6>
            <span className="p-color">Software Development & Web Solutions</span>
          </div>
          <div className="item">
            <h6 className="sub-title mb-10">Expertise :</h6>
            <span className="p-color">UI/UX Design & Graphics</span>
          </div>
          <div className="item">
            <h6 className="sub-title mb-10">Focus :</h6>
            <span className="p-color">Digital Transformation</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;