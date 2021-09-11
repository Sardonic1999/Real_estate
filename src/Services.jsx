import React from "react";
import "./Style.css";
import s1 from "./assets/s-1.png";
import s2 from "./assets/s-2.png";
import s3 from "./assets/s-3.png";

function Services() {
  return (
    <div>
      {/* <!-- services section starts  --> */}

      <section class="services" id="services">
        <h1 class="heading">
          {" "}
          our <span>services</span>{" "}
        </h1>

        <div class="box-container">
          <div class="box">
            <img src={s1} alt="" />
            <h3>buying home</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              distinctio ipsa ab cum error quas fuga ad? Perspiciatis, autem
              officiis?
            </p>
            <a href="#" class="btn">
              learn more
            </a>
          </div>

          <div class="box">
            <img src={s2} alt="" />
            <h3>renting home</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              distinctio ipsa ab cum error quas fuga ad? Perspiciatis, autem
              officiis?
            </p>
            <a href="#" class="btn">
              learn more
            </a>
          </div>

          <div class="box">
            <img src={s3} alt="" />
            <h3>selling home</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              distinctio ipsa ab cum error quas fuga ad? Perspiciatis, autem
              officiis?
            </p>
            <a href="#" class="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
