import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import FormLabel from "@material-ui/core/FormLabel";
import grey from "@material-ui/core/colors/grey";
import Typography from "@material-ui/core/Typography";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { scaleDown } from "react-stack-grid/lib/animations/transitions";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Welcome from "./Welcome";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import useForm from "react-hook-form";






const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",

    width: "80vw"
  },


  appBar: {
                transitionDuration: ".5s !important",
            AnimationTimingFunction: "ease !important",
    color: grey[900],
    justifySelf: "flex-end",
            transitionDuration: "0.5s !important",
            AnimationTimingFunction: "ease !important",
  },

  toolbar: {
    // display: "flex",
    // flexDirection: "column",
    backgroundColor: "white"
  },
  navigation: {
    display: "flex",
    flexDirection: "row"
  },
  leftNav: {
    display: "flex",
    flexDirection: "column"
  },
  search: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    border: "solid",
    borderColor: grey[400],
    borderWidth: 1,
    marginBottom: 14
  },

  inputInput: {
    marginLeft: theme.spacing(1),
    flex: 1,
  width: 700,
    margin: "auto",
    display: "flex",
    flexDirection: "row"
  },
  iconButton: {
    padding: 10
  },
  fab: {
    margin: theme.spacing(1),
    background: "white",
    color: grey[700],
    boxShadow: "none"
  },

  numOfImg: {
    color: grey[500],
    paddingBottom: 20
  }
}));

const Navbar = (props) => {
  // const [transform, setTransform] = useState("translateY(-200px)");
  // const [boxShadow, setBoxShadow] = useState("none");
  // const [drawerTransfer, setDrawerTransfer] = useState("translateY(300px)");
  // const listenScrollEvent = props => {
  //   const { pageYOffset } = window;
  //   const pageIsOffset = pageYOffset > 20;
  //   if (pageIsOffset) {
  //     setTransform("translateY(110px)");
  //     setBoxShadow("0px 7px 14px -10px rgba(0,0,0, 0.35)");
  //     setDrawerTransfer("translateY(170px)");
  //   } else if (!pageIsOffset) {
  //     setTransform("translateY(-200px)");
  //     setBoxShadow("none");
  //     setDrawerTransfer("translateY(300px)");
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", listenScrollEvent);
  //   return () => {
  //     window.removeEventListener("scroll", listenScrollEvent);
  //   };
  // }, []);

  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };


  const classes = useStyles();
  const theme = useTheme();
  const { words, onClick, onChange } = props;

  return (
    <div className={classes.root}
    
    >
      <AppBar
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
   
      >
        <Toolbar className={classes.toolbar}>
          <div className={classes.navigation}>
            {/* <div className={classes.drawerBtn}>
          <label htmlFor="">KATEGORIE</label>
            <IconButton
              color="inherit"
              
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              
              <ChevronRightIcon />
            </IconButton></div> */}

            <Fab
              nClick={handleDrawerOpen}
              variant="extended"
              aria-label="like"
              className={classes.fab}
            >
              <MenuOpenIcon className={classes.extendedIcon} />
              KATEGORIE
            </Fab>

            <div className={classes.leftNav}>
              <div className={classes.search}>
                <InputBase
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  placeholder="Szukaj w naszej kolekcji ponad 100 000 000 zdjęć lub grafik"
                  inputProps={{
                    "aria-label":
                      "Szukaj w naszej kolekcji ponad 100 000 000 zdjęć lub grafik"
                  }}
                     value={words}
                   onChange={onChange}

                />
                <IconButton className={classes.searchIcon} aria-label="search">
                  <SearchIcon />
                </IconButton>
              </div>
              <Typography variant="subtitle1" className={classes.numOfImg}>
                Znaleźliśmy dla Ciebie:
                {/* {totalPhotos}  */}
                Zdjęć
              </Typography>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: "flex",
//         transitionDuration: ".5s",
//         AnimationTimingFunction: "ease",
//         zIndex: "1000",
//         transition: "0.5s",
//         position: "fixed",
//         width: "100vw",
//         backgroundColor: "red",
//         flexDirection: "row",
//         // top: 0,
//         alignItems: "center",
//         justifyContent: "center",

//   },
//   // appBar: {
//   //   color: grey[900]
//   // },

//   appBar: {

//       color: grey[900],
//       justifySelf:"flex-end",

//   },

//   menuButton: {
//     marginRight: 36,
//   },
//   hide: {
//     display: 'none',
//   },

//   toolbar: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     padding: theme.spacing(0, 1),
//     ...theme.mixins.toolbar,
//   },
//   search: {
//     border: "solid 1.5px",
//     borderColor: grey[900],
//     width: "60vw",
//     display: "flex",
//     flexDirection: "row-reverse",
//     height: "54px",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 12,
//     '&:hover': {
//       border: "solid 3px",
//       borderColor: grey[900],

//    },

//     [theme.breakpoints.up("sm")]: {
//       width: "calc650vw + 120px)"
//     }
//   },

//   searchIcon: {
//     gridArea: "icon",
//     border:"2px solid #000",
//     outline: "1px solid #fff",
//     outlineOffset: "-3px",
//     color: grey[300],
//     width: 54,
//     height: 54,
//     marginLeft: 15,
//     '&:hover': {
//       background:  grey[900],
//       color: grey[100],
//    },
//   },
//   svgIcon: {
//     margin: 6,
//     width: 46,
//     height: 46
//   },
//   inputRoot: {
//     gridArea: "search",
//     width: "100%",
//     paddingLeft: 12,
//     fontSize: 22
//   },
//   numOfImg: {
//     color: grey[500],
//     paddingBottom: 20
//   },

// }));

// function OldNavbar(props) {
//   const classes = useStyles();

//   const [inputValue, setInputValue] = useState("");

//   const [words, setWords] = useState("");

//   const [category, setCategory] = useState({});

//   const [orientation, setOrientation] = useState("horizontal");

//   const [transform, setTransform] = useState("translateY(40px)");

//   const [checked, setChecked] = useState(false);

// const [height, setHeight] = useState(200)
// const [boxShadow, setBoxShadow] = useState("none");

//   // const [BoxShadow, setBoxShadow] = useState("0 0 0 45px rgba(0,0,0,0)");

//   const listenScrollEvent = (props) => {
//     const { pageYOffset } = window;
//     const pageIsOffset = pageYOffset > 20;
//     if (pageIsOffset) {

//       setTransform("translateY(-80px)");
//       setBoxShadow("0px 7px 13px -4px rgba(0,0,0, 0.35)");

//     } else if (!pageIsOffset) {

//       setTransform("translateY(40px)");
//       setBoxShadow("none");
//     }
//   };

// const handleSearchInputChange = (e) => {
//   setInputValue(e.target.value);
// }

// const resetInputValue = (e) => {
//   setInputValue("")
// }

// const callSearchFunction = (e) => {
//   e.preventDefaoult();
//   props.Navbar(inputValue);
//   resetInputValue();
// }

//   useEffect(() => {
//     window.addEventListener("scroll", listenScrollEvent);
//     return () => {
//       window.removeEventListener("scroll", listenScrollEvent);
//     };
//   }, []);

//   return (
//     <div
//       style={{
//       transitionDuration: ".5s",
//       AnimationTimingFunction: "ease",
//       transform: transform,

//       }}
//       className={classes.root}
//     >

//       <AppBar
//          className={classes.appBar}
//         style={{
//           backgroundColor: "white",

//         }}
//       >
//         <Toolbar
//             className={classes.toolbar}
//           style={{
//             boxShadow: boxShadow,
//             display: "flex",
//             flexDirection: "column"
//           }}
//         >

//           <form
//             // onSubmit={handleSearch}
//             className="ui form"
//           >
//             <div className={classes.search}>
//               <div className={classes.searchIcon}>
//                 <SearchIcon className={classes.svgIcon}
//                 onClick={callSearchFunction} type="submit"/>
//               </div>
//               <InputBase
//                 component="input"
//                 name="query"
//                 placeholder="Szukaj w naszej kolekcji ponad 100 000 000 zdjęć lub grafik"
//                 classes={{
//                   root: classes.inputRoot,
//                   input: classes.inputInput
//                 }}
//                 type="text"
//                 inputProps={{ "aria-label": "search" }}
//                 value={inputValue}
//                 onChange={handleSearchInputChange}
//                 type="text"
//               />
//             </div>
//           </form>
//           <Typography
//         variant="subtitle1"
//         className={classes.numOfImg}
//           >
//             Znaleźliśmy dla Ciebie: {props.totalPhotos} Zdjęć

//        </Typography>
//         </Toolbar>

//       </AppBar>

//     </div>
//   );
// }

// class OldNavBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.listenScrollEvent = this.listenScrollEvent.bind(this);
//     this.handleChecked = this.handleChecked.bind(this);
//     this.state = {
//       inputValue: "",
//       inputCategory: {},
//       inputOrientation: "horizontal",
//       marginTop: "-40px",
//       ischecked: false,
//       transform: "scale(1)"
//     };
//   }
//   listenScrollEvent = e => {
//     const { pageYOffset } = window;
//     if (pageYOffset > 20) {
//       this.setState({ marginTop: "-130px", transform: "scale(0.78)" });
//     } else if (pageYOffset < 20) {
//       this.setState({ marginTop: "-40px", transform: "scale(1)" });
//     }
//   };

//   handleChecked() {
//     this.setState({
//       ischecked: !this.state.checked
//     });
//   }
//   componentDidMount() {
//     window.addEventListener("scroll", this.listenScrollEvent);
//   }
//   handleFormSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state.inputValue);
//     // this.props.onSubmit(this.state.inputCategory);

//     console.log(this.state.inputOrientation);
//   };

//   handleFormOriantation = value => {
//     this.setState({
//       inputOrientation: value
//     });
//   };
//   render(props) {
//     const { classes } = this.props;

//     return (
//       <div
//         style={{ position: "sticky" }}
//         className={classes.root}
//         style={{
//           marginTop: this.state.marginTop,
//           transform: this.state.transform
//         }}
//       >
//         <AppBar className={classes.appBar} position="static">
//           <Toolbar
//             style={{
//               display: "flex",
//               flexDirection: "column"
//             }}
//           >
//             <form onSubmit={this.handleFormSubmit} className="ui form">
//               <div className={classes.search} style={{}}>
//                 <div className={classes.searchIcon}>
//                   <SearchIcon className={classes.svgIcon} />
//                 </div>
//                 <InputBase
//                   component="input"
//                   name="query"
//                   placeholder="Szukaj w naszej kolekcji ponad 100 000 000 zdjęć lub grafik"
//                   classes={{
//                     root: classes.inputRoot,
//                     input: classes.inputInput
//                   }}
//                   type="text"
//                   inputProps={{ "aria-label": "search" }}
//                   value={this.state.inputValue}
//                   onChange={e => this.setState({ inputValue: e.target.value })}
//                 />
//               </div>
//             </form>
//             <FormLabel component="legend"
//             style={{paddingBottom: "3px",
//             float: "left"
//             }}
//             >
//               Assign responsibility
//               </FormLabel>
//             <ButtonGroup style={{
//               padding: "10px 5px",
//               margin: 5
//               }}>
//               <label for="POZIOMA">
//                 <input
//                   id="POZIOMA"
//                   style={{ display: "none" }}
//                   type="checkbox"
//                 />
//                 <span
//                   style={{
//                     padding: "15px",
//                     fontFamily: "sans-serif",
//                     border: "solid 1px black",
//                     borderRadius: "2px"
//                   }}
//                 >
//                   POZIOMA
//                 </span>
//               </label>
//               <label for="PIONOWA">
//                 <input
//                   id="PIONOWA"
//                   style={{ display: "none" }}
//                   type="checkbox"
//                 />
//                 <span
//                   style={{
//                     padding: "15px",
//                     fontFamily: "sans-serif",
//                     border: "solid 1px black",
//                     borderRadius: "2px"
//                   }}
//                 >
//                   PIONOWA
//                 </span>
//               </label>
//               <label for="KWADRAT">
//                 <input
//                   id="KWADRAT"
//                   style={{ display: "none" }}
//                   type="checkbox"
//                 />
//                 <span
//                   style={{
//                     padding: "15px",
//                     fontFamily: "sans-serif",
//                     border: "solid 1px black",
//                     borderRadius: "2px"
//                   }}
//                 >
//                   KWADRAT
//                 </span>
//               </label>
//               <label for="WSZYSTKIE">
//                 <input
//                   id="WSZYSTKIE"
//                   style={{ display: "none" }}
//                   type="checkbox"
//                   checked
//                 />
//                 <span
//                   style={{
//                     padding: "15px",
//                     fontFamily: "sans-serif",
//                     border: "solid 1px black",
//                     borderRadius: "2px"
//                   }}
//                 >
//                   WSZYSTKIE
//                 </span>
//               </label>
//             </ButtonGroup>
//           </Toolbar>
//         </AppBar>
//       </div>
//     );
//   }
// }

// export default makeStyles(useStyles) (Navbar);
export default Navbar;
