import React from "react";
import TopBar from "./Banner/TopBar";
import Headline from "./Banner/Headline";
import Search from "./Banner/Search";
import Image from "./Banner/Image";

import './components.css';

export default function Banner() {



  return (
    <div>
      <header>
        <TopBar />
        <Headline />
        {/* <Search /> */}
        <Image />
      </header>
    </div>
  )
}