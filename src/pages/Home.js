import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import heroImage from "../images/heroImage.png";
import Image1 from "../images/image1.jpg";
import Image2 from "../images/image2.jpg";
import Image3 from "../images/image3.jpg";
import Image4 from "../images/image4.jpg";
import about from "../images/about.jpg";




export default function Home() {
  return (
    <div>
      <header>
        <a href="#home" className="logo">
          Royal <span>Fitness</span>
        </a>

        <MenuIcon className="bx bx-menu" id="menu-icon"></MenuIcon>

        <ul className="navbar">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#review">Review</a>
          </li>
        </ul>
        <div className="top-btn">
          <a href="" className="nav-btn">
            Join Us
          </a>
        </div>
      </header>

      {/* Home Section */}

      <section className="home" id="home">
        <div className="home-content">
          <h3>Build Your</h3>
          <h3>Dream Physique</h3>
          <h3>
            <span className="multiple-text">Bodybuilding</span>
          </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <a href="" className="btn">
            Join Us
          </a>
        </div>
        <div className="home-img">
          <img src={heroImage} alt=""></img>
        </div>
      </section>



      {/* service Section Code */}


      <section className="service" id="service">
        <h2 className="heading">
          Our
          <span>Services</span>
        </h2>
        <div className="services-content">
          <div className="row">
            <img src={Image1}></img>
            <h4>Physical Fitness</h4>
          </div>

          <div className="row">
            <img src={Image2}></img>
            <h4>Weight Gain</h4>
          </div>

          <div className="row">
            <img src={Image3}></img>
            <h4>Strength Tranning</h4>
          </div>

          <div className="row">
            <img src={Image4}></img>
            <h4>Fat lose</h4>
          </div>

          <div className="row">
            <img src={about}></img>
            <h4>Physical Fitness</h4>
          </div>

          <div className="row">
            <img src={about}></img>
            <h4>WeightLifting</h4>
          </div>


          <div className="row">
            <img src={about}></img>
            <h4>Running</h4>
          </div>

        </div>

      </section>


      {/* About Section code */}

      <section className="about" id="about">
        <div className="about-img">
           <img src={about}></img>
        </div>

        <div  className="about-content">
          <h1 className="heading">Why Choose us</h1>
          <p>Our Diverse membership base creates a friendly and supportive atmosphere, where you can friends and stay motivated</p>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
          <a href="#" className="btn">Book a Free Class</a>
        </div>

      </section>
    </div>
  );
}
