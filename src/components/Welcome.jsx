import React, { useState, useEffect } from "react";
import welcome from "../assets/images/fotodream.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {

        backgroundColor: "white",
        width: "100vw",
        position: "fixed",
        zIndex: 300,
        top: 0,
         display: "flex",
  flexDirection: "column",
  justifyContent: "center",  /* Centering y-axis */
  alignItems :"center",
  },
  container: {
    width: 700,
 
   
    align:"center", 
    valign:"center",
    position: "relative",

 
 display: "flex",
  flexDirection: "column",
  justifyContent: "center",  /* Centering y-axis */
  alignItems :"center", /* Centering x-axis */
  }
}));

function Welcome(props) {
const [transform, setTransform] = useState("translateY(0px) scale(0.52)");
const [height, setheight] = useState(200);
const [boxShadow, setBoxShadow] = useState("none");
// const [width, setWidth] = useState()
const classes = useStyles();

const listenScrollEvent = () => {
    const { pageYOffset } = window;
    const pageIsOffset = pageYOffset > 20;
    if (pageIsOffset) {
      setTransform("translateY(0px) scale(0.34)");
      setheight(130)
      
    }
  else if  (!pageIsOffset) {
      setTransform("translateY(0px) scale(0.52)"); 
 setheight(200)
    };
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    }
  }, []);


  return (
    <div
      className={classes.root}
      style={{ 
           
          transitionDuration: ".5s",
          AnimationTimingFunction: "ease",
         }}
    >
   <div className={classes.container}
   style={{ height: height,
            transitionDuration: ".5s",
            AnimationTimingFunction: "ease",}}>
   <img
        src={welcome}
        alt=""
        style={{
        position: "absolute",
        transform: transform,
        transitionDuration: ".5s",
        AnimationTimingFunction: "ease",
        }}
      />
   </div>
    </div>
  );
}



export default Welcome;
