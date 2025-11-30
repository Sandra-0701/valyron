import React from 'react';

function Footer() {
  return (
    <footer id="contact" className="clean-footer crev">
      <div className="container pb-40 pt-40 ontop">
        <div className="row justify-content-between">
          <div className="col-lg-3">
            <div className="logo icon-img-100 md-mb80">
              <img src="/assets/imgs/logo-light.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Contact</h6>
              <h6 className="p-color fw-400">
                Get in touch with our team to discuss your next project
              </h6>
              <h6 className="mt-30 mb-15">
                <a href="mailto:hello@valyron.com">hello@valyron.com</a>
              </h6>
              <a href="#contact" className="underline">
                <span className="fz-22 main-color">Start Your Project</span>
              </a>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="column">
              <h6 className="sub-title mb-30">Follow Us</h6>
              <ul className="rest social-icon d-flex align-items-center">
                <li className="hover-this cursor-pointer">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-30 pb-30 mt-80 bord-thin-top">
          <div className="text-center">
            <p className="fz-14">
              © 2025 Valyron is Proudly Powered by{' '}
              <span className="underline main-color">
                <a href="#0">Valyron Team</a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <img src="/assets/imgs/patterns/blur1.png" alt="" />
      </div>
    </footer>
  );
}

export default Footer;