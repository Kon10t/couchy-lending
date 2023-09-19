import React from "react";
import star from "./Img/star.svg"

export default function Headline() {

  return (
    <div className="headline">
      <div className="title">
        <p>Transform Your Space with</p>
        <p className="descr-star-icon">Exquisite Furniture
          <span>
            <img src={star} alt="descr-star" />
          </span>
        </p>
      </div>
      <div className="descr">
        <p>Whether you're seeking a touch of sophistication or a cozy ambiance, our carefully curated range of furniture</p>
        <p>pieces will captivate your senses and breathe new life into your home or office.</p>
      </div>
    </div>
  )
}