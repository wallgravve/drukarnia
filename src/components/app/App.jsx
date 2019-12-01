import React, { useState, useEffect, useRef, Component } from "react";
import axios from "axios";
import Pagination from "react-js-pagination";
import SearchBar from "../SearchBar";
import Footer from "../footer";
// import Welcome from "../Bestsellers";
import NavBar from "../NavBar";
import Welcome from "../Welcome";
import Basic from "../Bestsellers";
import { animateScroll as scroll, scroller } from "react-scroll";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import dotenv from "dotenv";
import grey from "@material-ui/core/colors/grey";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import ListImages from "../ListImages";
import List from "@material-ui/core/List";
import FileSystemNavigator from "../TreeView";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Slider from "../Slider";
import InfiniteScroll from "react-infinite-scroller";
import usePaginatedRequest from "react-fetch-hook";

// import fetchData from "./fetchData";
dotenv.config();


const App = (props) => {
  const classes = useStyles();
  const [images, setImages] = useState([]);
  const [words, setWords] = useState("koteczek");
  const [offset, setOffset] = useState(0);
  const [perPage, setPerPage] = useState(55);
  const [totalPhotos, setTotalPhotos] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState([])
  const [transform, setTransform] = useState("translateY(200px)");
  const [boxShadow, setBoxShadow] = useState("none");
  const [drawerTransfer, setDrawerTransfer] = useState("translateY(300px)");
  const [error, setError] = useState('');
  const inputRef = useRef();
 

// const categoryBaseUrl = 
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


const fetchData = async (inputValue, offset, currentPage, words) => {
  const baseUrl =
    `https://stock.adobe.io/Rest/Media/1/Search/Files?locale=pl_PL&search_parameters[words]=${words}&search_parameters[limit]=${perPage}}&search_parameters[offset]=${offset}&search_parameters[category]=${category}`;

  const options = {
    headers: {
      "x-api-key": "f176122c443e4569817bd6a18071adc3", // replace with your api-key
      "X-Product": "adobe-api/0.1.0",

    },
    params: {
      "search_parameters[words]": words,
      "search_parameters[limit]": perPage,
      "search_parameters[offset]": offset * 55
      // "search_parameters[filters][orientation]": inputOrientation
    }
  };
  
  try {
    const response =  await fetch (baseUrl, options)
    const data  = await response.json()
    setImages(data.files)
  
    setTotalPhotos(data.nb_results)
    setCurrentPage(offset)

    // const { currentPage } = await offset

  console.log("I am beign rendered again and again")
  console.log(images)


  } catch (e) {
    if (e) {
      setError(e.message)
      console.log("error")
    }
  }
  
}


 

  const result = usePaginatedRequest(
    fetchData({ words }),
    100,
    words
  );
  console.log(result.data);



const onInputChange = (e) => {
e.preventDefault();
setWords(e.target.value)
console.log(words)
};

  useEffect( () => {
    fetchData();
  }, [words]);

  const listenScrollEvent = props => {
    const { pageYOffset } = window;
    const pageIsOffset = pageYOffset > 20;
    if (pageIsOffset) {
      setTransform("translateY(120px)");
      setBoxShadow("0px 7px 14px -10px rgba(0,0,0, 0.35)");
      setDrawerTransfer("translateY(170px)");
    } else if (!pageIsOffset) {
      setTransform("translateY(200px)");
      setBoxShadow("none");
      setDrawerTransfer("translateY(300px)");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Welcome></Welcome>
      <div
        style={
          {
            //  transitionDuration: ".5s !important",
            //   AnimationTimingFunction: "ease !important",
            // transform: transform
          }
        }
        className={classes.root}
      >
        <AppBar
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
          style={{
            backgroundColor: "white",
            boxShadow: boxShadow,

            transform: transform
          }}
        >
          <Toolbar
            className={classes.toolbar}
            style={{
              display: "flex",
              flexDirection: "column"
            }}
          >
            <form
            // onSubmit={onSubmitHandler}
            className="ui form">
              <div className={classes.search}>-
                <div className={classes.searchIcon}>
                  <SearchIcon className={classes.svgIcon} type="submit" />
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
                  value={words}
                  onChange={onInputChange}

                />
              </div>
            </form>
            <div style={{display: "flex", flexDirection: "row" }}>
              <IconButton
              style={{  position: "absolute", left: 20, bottom: 10}}
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <label htmlFor="">KATEGORIE</label>
                   <ChevronRightIcon />
              </IconButton>
              <Typography variant="subtitle1" className={classes.numOfImg}>
                Znaleźliśmy dla Ciebie: {totalPhotos} Zdjęć
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
      </div>
   
        <InfiniteScroll
          pageStart={0}
          loadMore={result.loadMore}
          hasMore={result.hasMore}
          loader={<div />}
        >
          {/* {result.data &&
            result.data.map(images => (
              <li key={images.id}>
                {images.title}
                 {item.name} ({item.stargazers_count}) 
              </li>
            ))} */}
      
 
      <ListImages
        images={images}
        // loading={this.state.loading}
        // get_data={this.get_data}

      />

        </InfiniteScroll>
      {/* <div style={{ marginTop: "150px" }}>
        {" "}
        <Pagination
          prevPageText="prev"
          nextPageText="next"
          firstPageText="first"
          lastPageText="last"
          activePage={currentPage}
          totalItemsCount={totalPhotos}
          itemsCountPerPage={perPage}
          words={words}
          onChange={page => fetchData(words, page)}
          pageRangeDisplayed={5}
          page={props.page}
        />
      </div> */}

      <Footer></Footer>
    </div>
  );
}




const drawerWidth = 240;
//  const API_KEY_ADOBE = `${process.env}`;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    transitionDuration: ".5s",
    AnimationTimingFunction: "ease",
    zIndex: "1000",
    transition: "0.5s",
    position: "fixed",
    width: "100vw",

    flexDirection: "row",
    // top: 0,
    alignItems: "center",
    justifyContent: "center"
  },

  // appBar: {
  //   color: grey[900],
  //   justifySelf: "flex-end",
  //   zIndex: theme.zIndex.drawer + 1,
  //   transition: theme.transitions.create(["width", "margin"], {
  //     easing: theme.transitions.easing.easeInOut,
  //     duration: theme.transitions.duration.complex
  //   })
  // },
  // appBarShift: {
  //   marginLeft: drawerWidth,
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   transitionDuration: ".5s !important",
  //   AnimationTimingFunction: "ease !important",
  //   transition: theme.transitions.create(["width", "margin"], {
  //     easing: theme.transitions.easing.easeInOut,
  //     duration: theme.transitions.duration.complex
  //   })
  // },

  // menuButton: {
  //   transform: "translate(-20vw, -10px)"
  // },
  // hide: {
  //   display: "none"
  // },

  // drawer: {
  //   width: drawerWidth,
  //   flexShrink: 0,
  //   whiteSpace: "nowrap"
  // },
  // drawerOpen: {
  //   width: drawerWidth,

  //   transition: theme.transitions.create("width", {
  //     easing: theme.transitions.easing.easeInOut,
  //     duration: theme.transitions.duration.complex
  //   })
  // },
  // drawerClose: {
  //   transition: theme.transitions.create("width", {
  //     easing: theme.transitions.easing.easeInOut,
  //     duration: theme.transitions.duration.complex
  //   }),
  //   overflowX: "hidden",
  //   width: theme.spacing(7) + 1,
  //   [theme.breakpoints.up("sm")]: {
  //     width: theme.spacing(9) + 1
  //   }
  // },
  appBar: {
    color: grey[900],
    transitionDuration: ".5s !important",
    AnimationTimingFunction: "ease !important",
    transition: theme.transitions.create(["margin", "width"], {
          transitionDuration: ".5s",
        AnimationTimingFunction: "ease",
    })
  },
  appBarShift: {
    transitionDuration: ".5s !important",
    AnimationTimingFunction: "ease !important",
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
        transitionDuration: ".5s",
        AnimationTimingFunction: "ease",
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },

  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  search: {
    border: "solid 1.5px",
    borderColor: grey[900],
    width: "60vw",
    display: "flex",
    flexDirection: "row-reverse",
    height: "54px",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,

    [theme.breakpoints.up("sm")]: {
      width: "calc(55vw + 120px)"
    }
  },

  searchIcon: {
    gridArea: "icon",
    border: "2px solid #000",
    outline: "1px solid #fff",
    outlineOffset: "-3px",
    color: grey[300],
    width: 54,
    height: 54,
    marginLeft: 15
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
    fontSize: 22
  },
  numOfImg: {
    color: grey[500],
    paddingBottom: 20
  }
}));


class OldApp extends React.Component {
  constructor(props) {
    super(props);
    // this.listenScrollEvent = this.listenScrollEvent.bind(this);
    // this.listenScrollEventNav = this.listenScrollEventNav.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.state = {
      images: [],
      totalPhotos: 0,
      perPage: 55,
      currentPage: 1,
      words: null ,
      offset: 0,
      inputOrientation: "all",
      // transform: "",

      loading: false
    };
  }

  componentDidMount() {
    this.fetchPhotos("uliczki lizbona", this.state.currentPage);
    // window.addEventListener('scroll', this.listenScrollEvent);
    window.addEventListener("scroll", this.listenScrollEventNav);
  }

  fetchPhotos = (inputValue, offset, inputOrientation) => {
    const baseUrl =
      "https://stock.adobe.io/Rest/Media/1/Search/Files?locale=pl_PL&";

    const options = {
      headers: {
        "x-api-key": "cee38b39ef864704b1b189444ebf7fe6", // replace with your api-key
        "X-Product": "adobe-api/0.1.0",
        "Retry-After": "400"
      },
      params: {
        "search_parameters[words]": inputValue,
        "search_parameters[limit]": this.state.perPage,
        "search_parameters[offset]": offset * 55,
        "search_parameters[filters][orientation]": this.state.inputOrientation
      }
    };

    axios
      .get(baseUrl, options)
      .then(response => {
        this.setState({
          images: response.data.files,
          totalPhotos: response.data.nb_results,
          currentPage: offset,
          words: inputValue
        });
        console.log(response.data.files);
      })

      .catch(() => {
        console.log("Error");
      });
  };

  onClickMoreDown = () => {
    scroll.scrollMore(900, { smooth: true });
  };
  onClickMoreUp = () => {
    scroll.scrollMore(-900, { smooth: true });
  };


  onSearchChange = (e) => {
     e.preventDefault();
    const { words, value } = e.target;
    this.setState({ [words]: value });
  }

  render() {
  const { words } = this.state;

    return (
      <div className="app">
        <Welcome style={{ backgroundColor: "white" }}></Welcome>
        <NavBar style={{ width: "100vw" }}
        onChange={this.onSearchChange}
        words={words}
        onSubmit={this.fetchPhotos} 
        >
        {/* {this.props.children} */}
        </NavBar>
          <Drawer></Drawer>
          <ListImages
            images={this.state.images}
          
          
          />
         
        {/* <div>
          <div
            style={{
              position: "sticky",

              top: "80vh",
              width: "80px",
              display: "flex",
              flexDirection: "column",

              justifyContent: "center"
            }}
          >
            <a className="more-up" onClick={this.onClickMoreUp}>
              <span></span>
              <span></span>
              <span></span>
            </a>

            <a
              className="more-down"
              style={{ transform: "translateY(-40px)" }}
              onClick={this.onClickMoreDown}
            >
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
          <Basic></Basic> */}
        {/* <ListItem
            images={this.state.images}
            loading={this.state.loading}
            get_data={this.get_data}
          />
          <Pagination
            prevPageText="prev"
            nextPageText="next"
            firstPageText="first"
            lastPageText="last"
            activePage={this.state.currentPag}
            totalItemsCount={this.state.totalPhotos}
            itemsCountPerPage={this.state.perPage}
            words={this.state.words}
            onChange={page => this.fetchPhotos(this.state.words, page)}
            pageRangeDisplayed={5}
            page={this.props.page}
          />
          <Footer></Footer> 
        </div>*/}
      </div>
    );
  }
}

export default App;
