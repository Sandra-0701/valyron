"use client"; 
import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; 

const SERVICE_ID = 'service_ak79w9e';
const TEMPLATE_ID = 'template_tgeub2w';
const PUBLIC_KEY = 'jQSlGMzLjn_jgKW5_';

function Contact() {
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Please try again.");
      });
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 valign">
            <div className="sec-head info-box full-width md-mb80">
              <div className="phone fz-30 fw-600 underline main-color">
                <a href="#0">+1 840 841 25 69</a>
              </div>
              <div className="morinfo mt-50 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Address</h6>
                <p>Besòs 1, 08174 Sant Cugat del Vallès, Barcelona</p>
              </div>
              <div className="morinfo mt-30 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Email</h6>
                <p>Support@UiCamp.com</p>
              </div>
              <div className="social-icon mt-50">
                <a href="#0"><i className="fab fa-facebook-f"></i></a>
                <a href="#0"><i className="fab fa-dribbble"></i></a>
                <a href="#0"><i className="fab fa-behance"></i></a>
                <a href="#0"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1 valign">
            <div className="full-width">
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">Let&apos;s Chat</h6>
                <h3 className="text-u ls1">
                  Send a <span className="fw-200">message</span>
                </h3>
              </div>
              <form id="contact-form" className="form2" onSubmit={sendEmail}>
                <div className="messages"></div>
                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input id="form_name" type="text" name="name" placeholder="Name" required="required" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input id="form_email" type="email" name="email" placeholder="Email" required="required" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input id="form_subject" type="text" name="subject" placeholder="Subject" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea id="form_message" name="message" placeholder="Message" rows="4" required="required"></textarea>
                    </div>
                    <div className="mt-30">
                      <button type="submit" className="butn butn-full butn-bord radius-30" disabled={status === "Sending..."}>
                        <span className="text">{status ? status : "Let's Talk"}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;