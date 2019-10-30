import React from "react";
import PropTypes from "prop-types";
// import ReactCrop from "react-image-crop";
// import "react-image-crop/dist/ReactCrop.css";
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import {
  base64StringtoFile,
  downloadBase64File,
  extractImageFileExtensionFromBase64,
  image64toCanvasRef
} from "./ResuableUtils";

// class oldCrop extends React.Component {
//   constructor(props) {
  
//       // this.changeWidth = this.changeWidth.bind(this);
//   // this.changeHeight = this.changeHeight.bind(this);
//     super(props);
//     this.state = {
//     src: null,
//     crop: {
//   unit: '%',
//   width: 50,
//   height: 50,
  
//   x: 25,
//   y: 25
//     }
//     };
//     // this.changeWidth = this.changeWidth.bind(this);


//   };


//   onImageLoaded = image => {
//     this.imageRef = image;

    
//   };

//   onCropComplete = crop => {
//     this.makeClientCrop(crop);
    
//   };
//   // onCropChange = (crop, percentCrop) => this.setState({ crop: percentCrop });
//   onCropChange = (crop) => {
//     this.setState({ crop });
//   };

//   async makeClientCrop(crop) {
//     if (this.imageRef && crop.width && crop.height) {
//       const croppedImageUrl = await this.getCroppedImg(
//         this.imageRef,
//         crop,
//         "newFile.jpeg"
//       );
//       this.setState({ croppedImageUrl });
//     }
//   }

//   getCroppedImg(image, crop, fileName) {
//     const canvas = document.createElement("canvas");
//     const scaleX = image.naturalWidth / image.width;
//     const scaleY = image.naturalHeight / image.height;
//     canvas.width = crop.width;
//     canvas.height = crop.height;
//     const ctx = canvas.getContext("2d");

//     ctx.drawImage(
//       image,
//       crop.x * scaleX,
//       crop.y * scaleY,
//       crop.width * scaleX,
//       crop.height * scaleY,
//       0,
//       0,
//       crop.width,
//       crop.height,
     
//     );
//     console.log(crop.width / image.width);
//     console.log(crop.height / image.height);
//     console.log(crop.x / image.width );
//     console.log(crop.y / image.height );
// let percentWidth = crop.width / image.width;
// let percentHight = crop.height / image.height;
// let originX = crop.x / image.width;
// let originY = crop.y / image.height;
//     // console.log(src);
//   }
//   changeWidth = (e) => {
//     // e.preventDefault();
//     this.setState({ width: parseInt(e.target.value) || 0},
//      () => {
//       console.log("New state in ASYNC callback:", this.state.width);
    
//     });


   
//   };
//   handleChange = (e) => {
//     this.setState({
//         [e.target.id]: e.target.value
//     })
//     console.log(this.state.name);
// };
// handleSubmit = (e) => {
//     e.preventDefault();

// };
  
//   render() {
//     const { crop, croppedImageUrl, src, width, } = this.state;
// const {widthOrigin, image, percentWidth} = this.props
//     // const { width } = this.props.width;

//     return (
//       <div className="">
//         <div>
//         <h3>{widthOrigin}</h3>
//         <h3>{}</h3>

//         <label htmlFor="width"></label>
//                     <input id="width"  type="number" 
//                     onChange={this.handleChange}
//                     value={this.state.crop}
//                     />
//         </div>
//         {this.props.src && (
//           <ReactCrop
//             src={this.props.src}
//             crop={this.state.crop}
//             onImageLoaded={this.onImageLoaded}
//             onComplete={this.onCropComplete}
//             onChange={this.onCropChange}
            
//           ></ReactCrop>
//         )}
//         {croppedImageUrl && (
//           <img alt="Crop" style={{ maxWidth: "100%" }} src={croppedImageUrl} />
//         )}
       
//       </div>
//     );
//   }
// }

// Crop.propTypes = {
//   children: PropTypes.node
// };


import image from "../assets/images/1.jpg";
// const cropper = React.createRef(null);
 
class Crop extends React.Component {
  constructor(props) {
 
    super(props);
       this.handleChange = this.handleChange.bind(this);
    this.state = {
      croppedImage: "",
      cropBoxData: {
        left: "",
        top: "",
        width: "",
        height: ""
      }
      
  
  
    }
  }
  crop(){
    // image in dataUrl
    this.setState({
      croppedImage: this.refs.cropper.getCroppedCanvas().toDataURL()
    });       
  }

  componentDidMount() {
    setTimeout(()=>{
      const cropBoxData = { left: 200, top: 75, width: 100, height: 100 };
      this.setState({ cropBoxData });
    }, 100)
    console.log("cos");
  }
    handleChange (event, cropBoxData)  {
      const width = this.state.cropBoxData.width;
    this.setState({ width: event.target.value });

      console.log(width);
      
};
 
  render() {
  
    return (
      <React.Fragment>
      <Cropper
        ref="cropper"
        src={image}
        style={{height: "auto", width: 500}}
        // Cropper.js options
        // aspectRatio={16 / 9}
        guides={false}
        cropBoxData={ this.state.cropBoxData }
        crop={this.crop.bind(this)

        
        
        } />
        {/* <img width="100px" src={this.state.croppedImage} /> */}

        <label htmlFor="width"></label>
        <input id="width"  type="number" 
          onChange={this.handleChange}
          value={this.state.width}
                   /> 
        </React.Fragment>
    );
  }
}




export default Crop;
