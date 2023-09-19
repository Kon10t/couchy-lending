import React from "react";
import Search from "./Search";
import BgImage from "./Img/BgImage.svg"

export default function Image() {

  return (
  <div className="top-bar-bg" >
    <img src={BgImage} alt="bg-pic"></img>
    <Search />
  </div>
  )
}