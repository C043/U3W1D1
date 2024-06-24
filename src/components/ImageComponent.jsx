import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return <img className="mb-5" src={this.props.src} alt={this.props.alt} style={this.props.style} />;
  }
}

export default ImageComponent;
