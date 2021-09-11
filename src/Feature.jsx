import React from "react";
import "./Style.css";
import img1 from "./assets/img-1.jpg";
import img2 from "./assets/img-2.jpg";
import img3 from "./assets/img-3.jpg";
import img4 from "./assets/img-4.jpg";
import img5 from "./assets/img-5.jpg";
import img6 from "./assets/img-6.jpg";

function Feature() {
  return (
    <div>
      {/* <!-- featured section starts  --> */}

      <section class="featured" id="featured">
        <h1 class="heading">
          {" "}
          <span>featured</span> properties{" "}
        </h1>

        <div class="box-container">
          <div class="box">
            <div class="image-container">
              <img src={img1} alt="" />
              <div class="info">
                <h3>3 days ago</h3>
                <h3>for rent</h3>
              </div>
              <div class="icons">
                <a href="#" class="fas fa-film">
                  <h3>1</h3>
                </a>
                <a href="#" class="fas fa-camera">
                  <h3>4</h3>
                </a>
              </div>
            </div>
            <div class="content">
              <div class="price">
                <h3>$25,000/mo</h3>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-envelope"></a>
                <a href="#" class="fas fa-phone"></a>
              </div>
              <div class="location">
                <h3>modern apartments</h3>
                <p>Akay city, tashkent, uzbekistan - 00000</p>
              </div>
              <div class="details">
                <h3>
                  {" "}
                  <i class="fas fa-expand"></i> 3500 sqft{" "}
                </h3>
                <h3>
                  {" "}
                  <i class="fas fa-bed"></i> 3 beds{" "}
                </h3>
                <h3>
                  {" "}
                  <i class="fas fa-bath"></i> 2 baths{" "}
                </h3>
              </div>
              <div class="buttons">
                <a href="#" class="btn">
                  request info
                </a>
                <a href="#" class="btn">
                  view details
                </a>
              </div>
            </div>
          </div>

          <div class="box">
            <div class="image-container">
              <img src={img2} alt="" />
              <div class="info">
                <h3>6 days ago</h3>
                <h3>for sell</h3>
              </div>
              <div class="icons">
                <a href="#" class="fas fa-film">
                  <h3>2</h3>
                </a>
                <a href="#" class="fas fa-camera">
                  <h3>7</h3>
                </a>
              </div>
            </div>
            <div class="content">
              <div class="price">
                <h3>$25,000/mo</h3>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-envelope"></a>
                <a href="#" class="fas fa-phone"></a>
              </div>
              <div class="location">
                <h3>modern apartments</h3>
                <p>Akay city, tashkent, uzbekistan - 00000</p>
              </div>
              <div class="details">
                <h3>
                  {" "}
                  <i class="fas fa-expand"></i> 3500 sqft{" "}
                </h3>
                <h3>
                  {" "}
                  <i class="fas fa-bed"></i> 3 beds{" "}
                </h3>
                <h3>
                  {" "}
                  <i class="fas fa-bath"></i> 2 baths{" "}
                </h3>
              </div>
              <div class="buttons">
                <a href="#" class="btn">
                  request info
                </a>
                <a href="#" class="btn">
                  view details
                </a>
              </div>
            </div>
          </div>

          <div class="box">
            <div class="image-container">
              <img src={img3} alt="" />
              <div class="info">
                <h3>1 days ago</h3>
                <h3>for rent</h3>
              </div>
              <div class="icons">
                <a href="#" class="fas fa-film">
                  <h3>1</h3>
                </a>
                <a href="#" class="fas fa-camera">
                  <h3>6</h3>
                </a>
              </div>
            </div>
            <div class="content">
              <div class="price">
                <h3>$25,000/mo</h3>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-envelope"></a>
                <a href="#" class="fas fa-phone"></a>
              </div>
              <div class="location">
                <h3>modern apartments</h3>
                <p>Akay city, tashkent, uzbekistan - 00000</p>
              </div>
              <div class="details">
                <h3>
                  {" "}
                  <i class="fas fa-expand"></i> 3500 sqft{" "}
                </h3>
                <h3>
                  {" "}
                  <i class="fas fa-bed"></i> 3 beds{" "}
                </h3>
                <h3>
                  {" "}
                  <i class="fas fa-bath"></i> 2 baths{" "}
                </h3>
              </div>
              <div class="buttons">
                <a href="#" class="btn">
                  request info
                </a>
                <a href="#" class="btn">
                  view details
                </a>
              </div>
            </div>
          </div>

          <div class="box">
            <div class="image-container">
              <img src={img4} alt="" />
              <div class="info">
                <h3>9 days ago</h3>
                <h3>for rent</h3>
              </div>
              <div class="icons">
                <a href="#" class="fas fa-film">
                  <h3>2</h3>
                </a>
                <a href="#" class="fas fa-camera">
                  <h3>6</h3>
                </a>
              </div>
            </div>
            <div class="content">
              <div class="price">
                <h3>$25,000/mo</h3>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-envelope"></a>
                <a href="#" class="fas fa-phone"></a>
              </div>
              <div class="location">
                <h3>modern apartments</h3>
                <p>Akay city, tashkent, uzbekistan - 00000</p>
              </div>
              <div class="details">
                <h3>
                  {" "}
                  <i class="fas fa-expand"></i> 3500 sqft{" "}
                </h3>
                <h3>
                  {" "}
                  <i class="fas fa-bed"></i> 3 beds{" "}
                </h3>
                <h3>
                  {" "}
                  <i class="fas fa-bath"></i> 2 baths{" "}
                </h3>
              </div>
              <div class="buttons">
                <a href="#" class="btn">
                  request info
                </a>
                <a href="#" class="btn">
                  view details
                </a>
              </div>
            </div>
          </div>

          <div class="box">
            <div class="image-container">
              <img src={img5} alt="" />
              <div class="info">
                <h3>10 days ago</h3>
                <h3>for sell</h3>
              </div>
              <div class="icons">
                <a href="#" class="fas fa-film">
                  <h3>3</h3>
                </a>
                <a href="#" class="fas fa-camera">
                  <h3>8</h3>
                </a>
              </div>
            </div>
            <div class="content">
              <div class="price">
                <h3>$25,000/mo</h3>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-envelope"></a>
                <a href="#" class="fas fa-phone"></a>
              </div>
              <div class="location">
                <h3>modern apartments</h3>
                <p>Akay city, tashkent, uzbekistan - 00000</p>
              </div>
              <div class="details">
                <h3>
                  {" "}
                  <i class="fas fa-expand"></i> 3500 sqft{" "}
                </h3>
                <h3>
                  {" "}
                  <i class="fas fa-bed"></i> 3 beds{" "}
                </h3>
                <h3>
                  {" "}
                  <i class="fas fa-bath"></i> 2 baths{" "}
                </h3>
              </div>
              <div class="buttons">
                <a href="#" class="btn">
                  request info
                </a>
                <a href="#" class="btn">
                  view details
                </a>
              </div>
            </div>
          </div>

          <div class="box">
            <div class="image-container">
              <img src={img6} alt="" />
              <div class="info">
                <h3>3 days ago</h3>
                <h3>for sell</h3>
              </div>
              <div class="icons">
                <a href="#" class="fas fa-film">
                  <h3>1</h3>
                </a>
                <a href="#" class="fas fa-camera">
                  <h3>4</h3>
                </a>
              </div>
            </div>
            <div class="content">
              <div class="price">
                <h3>$25,000/mo</h3>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-envelope"></a>
                <a href="#" class="fas fa-phone"></a>
              </div>
              <div class="location">
                <h3>modern apartments</h3>
                <p>Akay city, tashkent, uzbekistan - 00000</p>
              </div>
              <div class="details">
                <h3>
                  {" "}
                  <i class="fas fa-expand"></i> 3500 sqft{" "}
                </h3>
                <h3>
                  {" "}
                  <i class="fas fa-bed"></i> 3 beds{" "}
                </h3>
                <h3>
                  {" "}
                  <i class="fas fa-bath"></i> 2 baths{" "}
                </h3>
              </div>
              <div class="buttons">
                <a href="#" class="btn">
                  request info
                </a>
                <a href="#" class="btn">
                  view details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Feature;
