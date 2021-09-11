import React from "react";
import "./Style.css";
import pic1 from "./assets/pic-1.png";
import pic2 from "./assets/pic-2.png";
import pic3 from "./assets/pic-3.png";
import pic4 from "./assets/pic-4.png";

function Agents() {
  return (
    <div>
      {/* <!-- agents section starts  --> */}

      <section class="agents" id="agents">
        <h1 class="heading">
          {" "}
          professional <span>agents</span>{" "}
        </h1>

        <div class="box-container">
          <div class="box">
            <a href="#" class="fas fa-envelope"></a>
            <a href="#" class="fas fa-phone"></a>
            <img src={pic1} alt="" />
            <h3>john deo</h3>
            <span>agent</span>
            <div class="share">
              <a href="#" class="fab fa-facebook-f"></a>
              <a href="#" class="fab fa-twitter"></a>
              <a href="#" class="fab fa-instagram"></a>
              <a href="#" class="fab fa-linkedin"></a>
            </div>
          </div>

          <div class="box">
            <a href="#" class="fas fa-envelope"></a>
            <a href="#" class="fas fa-phone"></a>
            <img src={pic2} alt="" />
            <h3>john deo</h3>
            <span>agent</span>
            <div class="share">
              <a href="#" class="fab fa-facebook-f"></a>
              <a href="#" class="fab fa-twitter"></a>
              <a href="#" class="fab fa-instagram"></a>
              <a href="#" class="fab fa-linkedin"></a>
            </div>
          </div>

          <div class="box">
            <a href="#" class="fas fa-envelope"></a>
            <a href="#" class="fas fa-phone"></a>
            <img src={pic3} alt="" />
            <h3>john deo</h3>
            <span>agent</span>
            <div class="share">
              <a href="#" class="fab fa-facebook-f"></a>
              <a href="#" class="fab fa-twitter"></a>
              <a href="#" class="fab fa-instagram"></a>
              <a href="#" class="fab fa-linkedin"></a>
            </div>
          </div>

          <div class="box">
            <a href="#" class="fas fa-envelope"></a>
            <a href="#" class="fas fa-phone"></a>
            <img src={pic4} alt="" />
            <h3>john deo</h3>
            <span>agent</span>
            <div class="share">
              <a href="#" class="fab fa-facebook-f"></a>
              <a href="#" class="fab fa-twitter"></a>
              <a href="#" class="fab fa-instagram"></a>
              <a href="#" class="fab fa-linkedin"></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Agents;
