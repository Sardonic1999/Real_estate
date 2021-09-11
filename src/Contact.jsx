import React from "react";
import "./Style.css";
import icon1 from "./assets/icon-1.png";
import icon2 from "./assets/icon-2.png";
import icon3 from "./assets/icon-3.png";

function Contact() {
  return (
    <div>
      {/* <!-- contact section starts  --> */}

      <section class="contact" id="contact">
        <h1 class="heading">
          {" "}
          <span>contact</span> us{" "}
        </h1>

        <div class="icons-container">
          <div class="icons">
            <img src={icon1} alt="" />
            <h3>phone number</h3>
            <p>+998-94-456-7890</p>
            <p>+998-94-456-7890</p>
          </div>

          <div class="icons">
            <img src={icon2} alt="" />
            <h3>email address</h3>
            <p>sardonic@gmail.com</p>
            <p>example@gmail.com</p>
          </div>

          <div class="icons">
            <img src={icon3} alt="" />
            <h3>office address</h3>
            <p>Akay city, tashkent, uzbekistan - 00000</p>
          </div>
        </div>

        <div class="row">
          <form action="">
            <div class="inputBox">
              <input type="text" placeholder="name" />
              <input type="number" placeholder="number" />
            </div>
            <div class="inputBox">
              <input type="email" placeholder="email" />
              <input type="text" placeholder="subject" />
            </div>
            <textarea
              name=""
              placeholder="message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <input type="submit" value="send message" class="btn" />
          </form>
          <iframe
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51560.62250344228!2d69.22665733548001!3d41.30438227232138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQvtGI0LrQtdC90YI!5e0!3m2!1suz!2s!4v1631386459304!5m2!1suz!2s"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Contact;
