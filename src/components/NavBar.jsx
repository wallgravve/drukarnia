import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import { fade, withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

import grey from "@material-ui/core/colors/grey";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { scaleDown } from "react-stack-grid/lib/animations/transitions";

const styles = theme => ({
  root: {},
  appBar: {
    backgroundColor: "white",
    color: grey[900]
  },
  menuButton: {},
  title: {},
  search: {
    border: "solid 1.5px",
    borderColor: grey[300],
    width: "80vw",
    display: "flex",
    flexDirection: "row-reverse",
    height: "64px",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,


    [theme.breakpoints.up("sm")]: {
      width: "calc(60vw + 120px)"
    }
  },

  searchIcon: {
    gridArea: "icon",
    color: grey[300]
  },
  svgIcon: {
    margin: 6,
    width: 46,
    height: 46
  },
  inputRoot: {
    gridArea: "search",
    width: "100%",
    paddingLeft: 12,
    fontSize: 22,
  },
  title: {},

  radioWhite: {
    border: "10px solid #90DDD0"
  },
  radioPink: {
    border: "10px solid #EF959D"
  },
  radioRed: {
    border: "10px solid #90DDD0"
  }
});

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.listenScrollEvent = this.listenScrollEvent.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    this.state = {
      inputValue: "",
      inputCategory: {},
      inputOrientation: "horizontal",
      marginTop: "-40px",
      ischecked: false,
      transform: "scale(1)"
    };
  }
  listenScrollEvent = e => {
    const { pageYOffset } = window;
    if (pageYOffset > 20) {
      this.setState({ marginTop: "-120px", transform: "scale(0.78)" });
    } else if (pageYOffset < 20) {
      this.setState({ marginTop: "-40px", transform: "scale(1)" });
    }
  };

  handleChecked() {
    this.setState({
      ischecked: !this.state.checked
    });
  }
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
    this.setState({
      inputOrientation: value
    });
  };
  render(props) {
    const { classes } = this.props;

    return (
      <div
        style={{ position: "sticky" }}
        className={classes.root}
        style={{ 
          marginTop: this.state.marginTop,
          transform: this.state.transform,
        }}
      >
        <AppBar className={classes.appBar} position="static">
          <Toolbar
            style={{
              display: "flex",
              flexDirection: "column"
            }}
          >
            <form onSubmit={this.handleFormSubmit} className="ui form">
              <div className={classes.search}
              
              style={{}}>
                <div className={classes.searchIcon}>
                  <SearchIcon className={classes.svgIcon} />
                </div>
                <InputBase
                  component="input"
                  name="query"
                  placeholder="Szukaj w naszej kolekcji ponad 100 000 000 zdjęć lub grafik"
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
            <ButtonGroup style={{ 
              padding: "20px 10px",
              marginBottom: 12
              }}>
              <label for="POZIOMA">
                <input
                  id="POZIOMA"
                  style={{ display: "none" }}
                  type="checkbox"
                />
                <span
                  style={{
                    padding: "20px",
                    fontFamily: "sans-serif",
                    border: "solid 1px black",
                    borderRadius: "2px"
                  }}
                >
                  POZIOMA
                </span>
              </label>
              <label for="PIONOWA">
                <input
                  id="PIONOWA"
                  style={{ display: "none" }}
                  type="checkbox"
                />
                <span
                  style={{
                    padding: "20px",
                    fontFamily: "sans-serif",
                    border: "solid 1px black",
                    borderRadius: "2px"
                  }}
                >
                  PIONOWA
                </span>
              </label>
              <label for="KWADRAT">
                <input
                  id="KWADRAT"
                  style={{ display: "none" }}
                  type="checkbox"
                />
                <span
                  style={{
                    padding: "20px",
                    fontFamily: "sans-serif",
                    border: "solid 1px black",
                    borderRadius: "2px"
                  }}
                >
                  KWADRAT
                </span>
              </label>
              <label for="WSZYSTKIE">
                <input
                  id="WSZYSTKIE"
                  style={{ display: "none" }}
                  type="checkbox"
                  checked
                />
                <span
                  style={{
                    padding: "20px",
                    fontFamily: "sans-serif",
                    border: "solid 1px black",
                    borderRadius: "2px"
                  }}
                >
                  WSZYSTKIE
                </span>
              </label>
            </ButtonGroup>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
