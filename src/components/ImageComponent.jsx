import { Component } from "react";

class ImageComponent extends Component {
  render() {
    console.log(this.props);
    return <img src={this.props.src} alt={this.props.alt} style={this.props.style} />;
  }
}

export default ImageComponent;
