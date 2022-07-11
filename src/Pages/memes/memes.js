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
    <div class="p-3 mb-2 text-white" 
    style={{
        
        height:"95vh",
    }}
    
    >
      <div class="d-grid col-4 mx-auto">
        <Button onClick={getMemeImage} class="btn btn-info btn-lg">Click to get Meme templates</Button>
      </div>

      <div class="text-center">
        <img src={memeImage} class="img-thumbnail" width="25%" margin-top="30px" 
        style={{
          marginTop: "30px",
        }}
        />
      </div>
    </div>
  );
}