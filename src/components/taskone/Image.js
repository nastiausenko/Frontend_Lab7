import React from "react";

const Image = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div id="images">
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