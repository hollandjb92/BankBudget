import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./carousel.styles.scss";

class HomeCarousel extends Component {
  render() {
    return (
      <Carousel className="carousel" autoPlay>
        <div>
          <img
            src="https://dfi.wa.gov/sites/default/files/budget-16x9.jpg"
            alt="budgeting"
          />
          <p className="legend">CREATE A BUDGET</p>
        </div>
        <div>
          <img
            src="https://files.consumerfinance.gov/f/images/savings-checkings-accounts_illustration.original.png"
            alt="banking"
          />
          <p className="legend">MANAGE YOUR ACCOUNTS</p>
        </div>
        <div>
          <img
            src="https://threatmodeler.com/wp-content/uploads/2017/05/Secure-Online-Banking-915x660.jpg"
            alt="mobile"
          />
          <p className="legend">MOBILE FRIENDLY</p>
        </div>
      </Carousel>
    );
  }
}

export default HomeCarousel;
