import React, { useState } from "react";
import ImageCard from "./ImageCard";
import StackGrid from "react-stack-grid";
import ResizeDetector from "react-resize-detector";
import styled from "styled-components";
import { makeStyles, useTheme } from "@material-ui/core/styles";

// import Loader from "./server/loader/Loader";
// import ImageLoader from "./ImageLoader";

// class OldListItem extends React.Component {
//   state = { images };

//   render_images() {
//     return this.props.images.map((image) => (
//     <ImageCard
//     key={image.id}
//     image={image}
//   />
//     ));
// }
// render () {
//   return (
//     <StackGrid className="list"
//   columnWidth={420}
//   monitorImagesLoaded={true}
//   // gutterHeight={200}
//   >
//   {this.render_images()}
//  {/* {this.props.loading && <Loader />} */}
//  </StackGrid>
//   );
// }
// }
const useStyles = makeStyles(theme => ({
  root: {}
}));
const ListImages = props => {
  const classes = useStyles();
  const [transform, setTransform] = useState("translateY(160px)");

  const listenScrollEvent = () => {
    const { pageYOffset } = window;
    const pageIsOffset = pageYOffset > 20;
    if (pageIsOffset) {
      setTransform("translateY(60px)");
      // setBoxShadow("0 0 0 0 rgba(0,0,0,0.7)")
    } else if (!pageIsOffset) {
      setTransform("translateY(160px)");
      // setBoxShadow(" 0 0 0 45px rgba(0,0,0,0)")
    }
  };

  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });

  return (
    <StackGrid
      className={classes.root}
      style={{
        transform: transform
      }}
      className="list"
      columnWidth={400}
      gutterHeight={40}
    >
      {images}
    </StackGrid>
  );
};
// const ListItem = ({ photo }) => {
//   return (
//     <div key={photo.id} className="grid__item card">
//       <div className="card__body">
//         <img src={photo.thumbnail_url} alt="" />
//       </div>
//       {/* <div className="card__footer media">
//         <img
//           src={photo.user.profile_image.small}
//           alt=""
//           className="media__obj"
//         />
//         <div className="media__body">
//           <a
//             href={photo.user.portfolio_url}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             {photo.user.name}
//           </a>
//         </div>
//       </div> */}
//     </div
//   );
// };

export default ListImages;
