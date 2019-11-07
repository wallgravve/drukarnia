import React from "react";
import PropTypes from "prop-types";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import 'cropperjs/dist/cropper.css';
// import {
//   base64StringtoFile,
//   downloadBase64File,
//   extractImageFileExtensionFromBase64,
//   image64toCanvasRef
// } from "./app/utils/ResuableUtils";

class Crop extends React.Component {
  state = {
    src: "",
    price: null,
    NoProducts: null,
    crop: {
      unit: '%',
      x: 25,
      y: 25,
      width: 50,
      height: 50
    }
    
  };




  changeIt = (crop, percentCrop) => {
    console.log(this.state);
    this.setState({ crop: percentCrop });
   

  };

  setWidth = (event) => {

  

    this.setState({
      crop: {
        unit: '%',
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
        unit: '%',
        x: this.state.crop.x,
        y: this.state.crop.y,
        width: this.state.crop.width * widthOrigin / 11.8,
        height: parseInt(event.target.value)
     
      }
     
    });
   
  };



  render() {
    const { widthOrigin, heightOrigin } = this.props;

    
    return (

  
      <div className='crop'>
        <div className='crop-left-side'>
        {this.props.src && (
          <ReactCrop 
          src={this.props.src}
          crop={this.state.crop} 
          onChange={this.changeIt} />
          )}
        </div>
      
          <form className='crop-right-form'
          style={{display: "flex", flexDirection: "row"}}>
              <div className='form_group'>
                <p>SZEROKOŚĆ</p>
                <input type='text' 
                  className="form_input"
                onChange={this.setWidth} 
                value={this.state.crop.width} />
              </div>
              <div className='form_group'>
                <p>WYSOKOŚĆ</p>
                <input type='text' 
                className="form_input"
                onChange={this.setHeight} 
                value={this.state.crop.height} />
              </div>
          </form>
     
      </div>
    );
  }
}



export default Crop;
