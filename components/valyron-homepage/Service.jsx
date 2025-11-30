'use client';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function Service() {
  function Playing() {
    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll('.cards .card-item');
    let stickDistance = 0;

    const firstCardST = ScrollTrigger.create({
      trigger: cards[0],
      start: 'center center',
    });

    const lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: 'bottom bottom',
    });

    cards.forEach((card, index) => {
      const scale = 1 - (cards.length - index) * 0.025;
      const scaleDown = gsap.to(card, {
        scale: scale,
        transformOrigin: '50% ' + (lastCardST.start + stickDistance),
      });

      ScrollTrigger.create({
        trigger: card,
        start: 'center center',
        end: () => lastCardST.start + stickDistance,
        pin: true,
        pinSpacing: false,
        ease: 'none',
        animation: scaleDown,
        toggleActions: 'restart none none reverse',
      });
    });
  }
  
  useEffect(() => {
    Playing();

    // Clean up function
    return () => {
      // Dispose GSAP ScrollTrigger instances
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);
  
  return (
    <section id="services" className="work-card section-padding pb-0">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Our Services</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  What We <span className="fw-200">Offer.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a
                href="#services"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>All Services</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="#services" className="tag">
                        React
                      </a>
                      <a href="#services" className="tag">
                        Node.js
                      </a>
                    </div>
                    <h4>Custom Software Development</h4>
                  </div>
                  <div>
                    <p>
                      Build tailored software solutions that address your unique business challenges and drive digital transformation.
                    </p>
                    <a href="#contact" className="underline mt-15">
                      <span className="text main-color sub-title">
                        Learn More <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/valyron/v1.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="#services" className="tag">
                        Next.js
                      </a>
                      <a href="#services" className="tag">
                        MongoDB
                      </a>
                    </div>
                    <h4>Web Application Development</h4>
                  </div>
                  <div>
                    <p>
                      Create powerful, scalable web applications that deliver exceptional user experiences and business value.
                    </p>
                    <a href="#contact" className="underline mt-15">
                      <span className="text main-color sub-title">
                        Learn More <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/valyron/v2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="#services" className="tag">
                        React Native
                      </a>
                      <a href="#services" className="tag">
                        Flutter
                      </a>
                    </div>
                    <h4>Mobile App Development</h4>
                  </div>
                  <div>
                    <p>
                      Develop native and cross-platform mobile applications that engage users and scale with your business.
                    </p>
                    <a href="#contact" className="underline mt-15">
                      <span className="text main-color sub-title">
                        Learn More <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/valyron/v3.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="#services" className="tag">
                        Figma
                      </a>
                      <a href="#services" className="tag">
                        Adobe XD
                      </a>
                    </div>
                    <h4>UI/UX Design Services</h4>
                  </div>
                  <div>
                    <p>
                      Design intuitive, beautiful interfaces that delight users and drive engagement across all digital touchpoints.
                    </p>
                    <a href="#contact" className="underline mt-15">
                      <span className="text main-color sub-title">
                        Learn More <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/valyron/v4.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="#services" className="tag">
                        AWS
                      </a>
                      <a href="#services" className="tag">
                        Docker
                      </a>
                    </div>
                    <h4>Cloud Solutions & DevOps</h4>
                  </div>
                  <div>
                    <p>
                      Implement cloud infrastructure and DevOps practices that ensure scalability, security, and continuous delivery.
                    </p>
                    <a href="#contact" className="underline mt-15">
                      <span className="text main-color sub-title">
                        Learn More <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/valyron/v5.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-bottom mt-100">
        <div className="main-bg d-flex align-items-center">
          <h6 className="fz-14 fw-400">
            Delivering <span className="fw-600"> 500+ successful projects</span> 
            for businesses worldwide
          </h6>
        </div>
      </div>
    </section>
  );
}

export default Service;