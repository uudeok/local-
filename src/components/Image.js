import "../css/Image.scss";
import React, { useState } from "react";

const Image = () => {
  const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];
  const choiceImg = Math.floor(Math.random() * images.length);

  const [image, setImage] = useState(false);
  console.log(image);

  return (
    <div className="Image-wrap">
      <div className="Img-inner">
        <div className={image ? "active" : ""}>
          <img src="image/0.jpg" alt="food" width="400px" heigth="300px" />
          <img src="image/1.jpg" alt="food" width="400px" heigth="300px" />
          <img src="image/2.jpg" alt="food" width="400px" heigth="300px" />
          <img src="image/3.jpg" alt="food" width="400px" heigth="300px" />
          <img src="image/4.jpg" alt="food" width="400px" heigth="300px" />
        </div>
        <div className="item"></div>
      </div>
      <button
        className="btn"
        onClick={() => {
          setImage((image) => !image);
        }}
      >
        {" "}
        {">"}{" "}
      </button>
    </div>
  );
};

export default Image;
