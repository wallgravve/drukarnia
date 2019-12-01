import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    bottom: 0,
    backgroundColor: "white",
    
    width: "100vw",
      fontSize: "12px",
    padding: "0 1rem 0 0",

    textRendering: "optimizeLegibility"
  },
  container: {
    color: "#231f20",
    width: "80vw",
    margin: "2vw 5vw",
    display: "grid",
    gridTemplateColumns: "0.8fr 0.5fr 0.5fr 0.5fr 0.5fr !important",
   
  },
  small: {
    
    fontWeight: 100,
    lineHeight: 1.75,
  },
  border: {
  borderLeft: "1px solid #d4d4d4",
  padding: "0 1rem"
}
}));

function Footer(props) {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.small}>
          <p>
            © 2019 CropDrop & MiD-media All rights <br /> reserved
          </p>
          <h4>Website by fly.</h4>
        </div>

        <div className={classes.small, classes.border}>
          <p>Kontakt</p>
          <p>Telefon: +48 733 020 636</p>
          <p>allegro@fotodream.pl</p>
        </div>

        <div className={classes.small, classes.border}>
          <p>
            FAQ  Najczęściej zadawane pytania
          </p>
          <p>Reklamacje</p>
        </div>

        <div className={classes.small, classes.border}>
        <p>Regulamin</p>
          <p>
            Polityka prywatności
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
