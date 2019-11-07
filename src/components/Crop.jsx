import React from "react";
import PropTypes from "prop-types";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import "cropperjs/dist/cropper.css";
import ModalForm from "./ModalForm";
import { fade, withStyles } from "@material-ui/core/styles";
// import {
//   base64StringtoFile,
//   downloadBase64File,
//   extractImageFileExtensionFromBase64,
//   image64toCanvasRef
// } from "./app/utils/ResuableUtils";
const styles = theme => ({
  rootinput: {
    padding: "15px",
    maxHeight: "120px"
  },

})
class Crop extends React.Component {
  constructor(props) {
    super(props);
   this.state = {
    src: "",
    price: null,
    NoProducts: null,
    crop: {
      unit: "%",
      x: 25,
      y: 25,
      width: 50,
      height: 50
    }
  }
  };

  changeIt = (crop, percentCrop) => {
    console.log(this.state);
    this.setState({ crop: percentCrop });
  };

  setWidth = event => {
    this.setState({
      crop: {
        unit: "%",
        x: this.state.crop.x,
        y: this.state.crop.y,
        width: parseInt(event.target.value),
        height: this.state.crop.height
      }
    });
  };

  setHeight = (event, widthOrigin) => {
    this.setState({
      crop: {
        unit: "%",
        x: this.state.crop.x,
        y: this.state.crop.y,
        width: this.state.crop.width,
        height: parseInt(event.target.value)
      }
    });
  };

  render(props) {
    const { widthOrigin, heightOrigin } = this.props;
    const { classes } = this.props;
    return (
      <div className="crop">
        <div className="crop-left-side">
          {this.props.src && (
            <ReactCrop
              src={this.props.src}
              crop={this.state.crop}
              onChange={this.changeIt}
            />
          )}
        <form
          className=""
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div className="form_group">
            <p>SZEROKOŚĆ</p>
            <input
              className={classes.rootinput}
              type="text"
              onChange={this.setWidth}
              value={this.state.crop.width}
            />
          </div>
          <div className="form_group">
            <p>WYSOKOŚĆ</p>
            <input
              className={classes.rootinput}
              type="text"
              onChange={this.setHeight}
              value={this.state.crop.height}
            />
          </div>
        </form>
        </div>

       
        <ModalForm className="crop-right-side"/>
      </div>
    );
  }
}

export default withStyles(styles)(Crop);
