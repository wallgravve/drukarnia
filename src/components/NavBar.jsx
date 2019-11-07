import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import { fade, withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

import grey from '@material-ui/core/colors/grey';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const styles = theme => ({
  root: {
 

  },
  appBar: {
    backgroundColor: "white", 
    color: "black",

  },
  menuButton: {},
  title: {},
  search: {
    border: "solid 1.5px black",
    width: "80vw",
    display: "grid",
    gridTemplateColumns: "1fr 64px",
    gridTemplateArea: "search icon",
    height: "64px",
    [theme.breakpoints.up('sm')]: {
      width: "calc(60vw + 120px)"
    },
  },
  searchIcon: {
 gridArea: "icon",
  },
  inputRoot: {
  
  },
  title: {},
  inputInput: {
    gridArea: "search",
    width: "100%",
    height: "100%",
  },
  orientation: { display: "none" },
  span: { padding: "20px", fontFamily: "sans-serif" },
  "input:checked + span": { backgroundColor: "#444", color: "#fff" }


});

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.listenScrollEvent = this.listenScrollEvent.bind(this);

    this.state = {
      inputValue: "",
      inputCategory: {},
      inputOrientation: "horizontal",
      marginTop: "-40px"
    };
  }
  listenScrollEvent = e => {
    const { pageYOffset } = window;
    if (pageYOffset > 20) {
      this.setState({ marginTop: "-95px" });
    } else if (pageYOffset < 20) {
      this.setState({ marginTop: "-80px" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }
  handleFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    // this.props.onSubmit(this.state.inputCategory);

    console.log(this.state.inputOrientation);
  };

  handleFormOriantation = value => {
    this.setState({ inputOrientation: value });
  };
  render(props) {
    const { classes } = this.props;
    const primary = grey[900]; 
    return (
      <div
        style={{ position: "sticky" }}
        className={classes.root}
        style={{ marginTop: this.state.marginTop }}
      >
        <AppBar className={classes.appBar} position="static">
          <Toolbar style={{
            display: "flex", 
            flexDirection: "column",
            }}> 
            <form onSubmit={this.handleFormSubmit} className="ui form">
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  component="input"
                  name="query"
                  placeholder="Szukaj w naszej kolekcji ponad 100 000 zdjęć lub grafik"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  type="text"
                  inputProps={{ "aria-label": "search" }}
                  value={this.state.inputValue}
                  onChange={e => this.setState({ inputValue: e.target.value })}
                />
              </div>
            </form>
            <ButtonGroup 
       
            style={{padding: "20px 10px"}}
       
            >
             <label for="POZIOMA">
  <input id="POZIOMA" style={{display: "none" }}
   type="checkbox" />
  <span style={{padding: "20px", 
  fontFamily: "sans-serif",
  border: "solid 1px black",
  borderRadius: "2px"
  }}>POZIOMA</span>
  </label>
  <label for="PIONOWA">
  <input id="PIONOWA"  style={{display: "none" }}
  type="checkbox" />
   <span style={{padding: "20px", 
  fontFamily: "sans-serif",
  border: "solid 1px black",
  borderRadius: "2px"
  }}>POZIOMA</span>
  </label>
  <label for="KWADRAT">
  <input id="KWADRAT" style={{display: "none" }}
   type="checkbox" />
   <span style={{padding: "20px", 
  fontFamily: "sans-serif",
  border: "solid 1px black",
  borderRadius: "2px"
  }}>POZIOMA</span>
  </label>
  <label for="WSZYSTKIE">
  <input id="WSZYSTKIE"  style={{display: "none" }}
  type="checkbox"
   checked/>
   <span style={{padding: "20px", 
  fontFamily: "sans-serif",
  border: "solid 1px black",
  borderRadius: "2px"
  }}>POZIOMA</span>
  </label>
            </ButtonGroup>
          </Toolbar>

        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
