import React from "react";

const Image = ({ isVisible, imgRef}) => {
  if (!isVisible) return null;

  return (
    <div id="images" ref={imgRef}>
      <a
        className="image"
        href="https://travel.chernivtsi.ua/"
        title="Детальніше про Чернівці"
      >
        <img
          src="chernivtsi.png"
          alt="View of Chernivtsi city"
        />
      </a>
    </div>
  );
};

export default Image;
