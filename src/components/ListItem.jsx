import React from "react";
import ImageCard from "./ImageCard";
import StackGrid from "react-stack-grid";
import ResizeDetector from "react-resize-detector";

const ListItem = props => {
  const images = props.images.map((image) => {
    return <ImageCard
            key={image.id}
            image={image}
           
        
          />
  });
  return    <StackGrid className="list" 
  columnWidth={420}
  appearDelay={400}
  monitorImagesLoaded={true}
  >
  
       {images}
  
 </StackGrid>;
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
//     </div>
//   );
// };

export default ListItem;
