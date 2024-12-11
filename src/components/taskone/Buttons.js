import React, { Component } from "react";
import Image from "./Image";

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isImageAdded: true, 
    };
    this.imgRef = React.createRef();
  }

  handleAdd = () => {
    this.setState({ isImageAdded: true });
  };

  handleZoomIn = () => {
    const ref = this.imgRef.current;
    if (ref) {
      const currentWidth = ref.clientWidth;
      ref.style.width = currentWidth + 100 + "px";
    }
  };

  handleZoomOut = () => {
    const ref = this.imgRef.current;
    if (ref) {
      const currentWidth = ref.clientWidth;
      ref.style.width = currentWidth - 100 + "px";
    }
  };

  handleDelete = () => {
    this.setState({ isImageAdded: false });
  };

  render() {
    const { isImageAdded } = this.state;

    return (
      <div>
        <Image isVisible={isImageAdded} imgRef={this.imgRef} />
        <div id="buttons">
          <button
            id="addButton"
            onClick={this.handleAdd}
            disabled={isImageAdded}
          >
            Додати
          </button>
          <button
            id="zoomInButton"
            onClick={this.handleZoomIn}
            disabled={!isImageAdded}
          >
            Збільшити
          </button>
          <button
            id="zoomOutButton"
            onClick={this.handleZoomOut}
            disabled={!isImageAdded}
          >
            Зменшити
          </button>
          <button
            id="deleteButton"
            onClick={this.handleDelete}
            disabled={!isImageAdded}
          >
            Видалити
          </button>
        </div>
      </div>
    );
  }
}

export default Buttons;
