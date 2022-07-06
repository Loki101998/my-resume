import React, { useState } from "react";
import { Button } from "reactstrap";
import memeData from "./data";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("https://i.imgflip.com/2vnb44.jpg");

  function getMemeImage() {
    const imageArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * imageArray.length);
    setMemeImage(imageArray[randomNumber].url);
  }

  return (
    <>
      <div>
        <Button onClick={getMemeImage}>Get a random image</Button>
      </div>

      <div className="center">
        <img src={memeImage} width="300px" />
      </div>
    </>
  );
}