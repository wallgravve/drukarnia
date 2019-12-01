import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { data } from "../Constants/data";

const useStyles = makeStyles(theme => ({
  root: {},
  container: {},
  slider: {   
    height: "100vh", 
  width: "100vw"  },
  sliderItem: {
    //   position: "absolute",
   height: "100%", 
   width: "100%"  
  }
}));

function Slider(props) {
  const classes = useStyles();
    const [index, setIndex] = useState(1);
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.slider}>
        {data.map(
          (item, index) => ( 
            <div key={index}
            className={classes.sliderItem}
            style={{
                backgroundImage: `url(${item.image})` 
            }}
            >

              </div>
            )
            )}
        </div>
      </div>
    </div>
  );
}
export default Slider;
