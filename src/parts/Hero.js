import React from "react";
import ImageHero from "assets/images/heroImage/img_hero.jpg";
import ImageHeroFrame from "assets/images/heroImage/img_frame_hero.jpg";
import IconTreasure from "assets/images/icons/icon-treasure.svg";
import IconTraveller from "assets/images/icons/icon-traveler.svg";
import IconCities from "assets/images/icons/icon-cities.svg";
import numberFormat from 'utils/FormatNumber'
import Fade from 'react-reveal/Fade'

import Button from "elements/button";

export default function Hero(props) {

  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  

  return (
    <Fade bottom>
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 530 }}>
          <h1 className="font-weight-bold line-height-1 mb-3">
            Forget Busy Work, <br /> Start Next Vacation
          </h1>
          <p
            className="mb-4 font-weight-light text-gray-500 w-75"
            style={{ lineHeight: "170%" }}
          >
            We provide what you need to enjoy your holiday with family time to
            make another memorable moments
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show Me Now
          </Button>
          <div className="row" style={{ marginTop: 80 }}>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                width="36"
                height="36"
                src={IconTraveller}
                alt={`${props.data.travellers} Travellers`}
              />
              <h6 className="mt-3">
                {numberFormat(props.data.travelers)}{" "}
                <span className="text-gray-500 font-weight-light">
                  Travellers
                </span>
              </h6>
            </div>

            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                width="36"
                height="36"
                src={IconCities}
                alt={`${props.data.cities} Travellers`}
              />
              <h6 className="mt-3">
                {numberFormat(props.data.cities)}{" "}
                <span className="text-gray-500 font-weight-light">Cities</span>
              </h6>
            </div>

            <div className="col-auto">
              <img
                width="36"
                height="36"
                src={IconTreasure}
                alt={`${props.data.treasures} `}
              />
              <h6 className="mt-3">
                {numberFormat(props.data.treasures) }{" "}
                <span className="text-gray-500 font-weight-light">
                  Treasures
                </span>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-6 pl-5">
          <div style={{ width: 520, height: 410 }}>
            <img
              src={ImageHero}
              className="img-fluid position-absolute"
              alt="Room with couches"
              style={{ margin: "-20px 0 0 -20px", zIndex: 1 }}
            />
            <img
              src={ImageHeroFrame}
              className="img-fluid position-absolute"
              alt="Room with couches frame"
              style={{ margin: "0 -15px -15px 0" }}
            />
          </div>
        </div>
      </div>
    </section>
    </Fade>
  );
}
