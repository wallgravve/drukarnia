import React, { Component } from "react";
import axios from "axios";
import Pagination from "react-js-pagination";
import SearchBar from "../SearchBar";
import ListItem from "../ListItem";
// import Welcome from "../Bestsellers";
import NavBar from "../NavBar";
import Welcome from "../Welcome";
import Basic from "../Bestsellers";
import {animateScroll as scroll, scroller }from 'react-scroll';

class App extends Component {
  constructor(props) {
    super(props);
    this.listenScrollEvent = this.listenScrollEvent.bind(this);  
    this.listenScrollEventNav = this.listenScrollEventNav.bind(this);

    this.state = {
    images: [],
    totalPhotos: 0,
    perPage: 55,
    currentPage: 1,
    words: null,
    offset: 0,
    inputOrientation: "all",
    transform: "",
    height: "",
    loading: false
  }}

  componentDidMount() {
    this.fetchPhotos("uliczki lizbona", this.state.currentPage);
  window.addEventListener('scroll', this.listenScrollEvent);
  window.addEventListener('scroll', this.listenScrollEventNav);

  };
  get_data = item => {
    item = item || this.state.words;
    this.setState({
      words: item,
      loading: true
    });
    this.fetchPhotos(item, images => {
      images = this.state.images.concat(images);
      this.setState({
        images,
        loading: false
      });
    });
  };
 
  fetchPhotos = (inputValue, offset, inputOrientation) => {
    const baseUrl =
      "https://stock.adobe.io/Rest/Media/1/Search/Files?locale=pl_PL&";

    const options = {
      headers: {
        "x-api-key": "f176122c443e4569817bd6a18071adc3", // replace with your api-key
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
          words: inputValue,
        });
console.log(response.data.files);
        console.log("words from state", this.state.words);
        console.log("perPage from state", this.state.perPage);
        console.log("currentPage from state", this.state.currentPage);
        console.log("Page inside App", this.props.page);
        console.log("Page inside App", this.state.currentPage);
        console.log("---------------------");
        console.log("total results is:", this.state.totalPhotos);
      })
      
      .catch(() => {
        console.log("Error");
      });
  };

  listenScrollEventNav = e => {
    const { pageYOffset } = window;
    if (pageYOffset > 20) {
        this.setState({  height: "80px)",
           });
    } else if (pageYOffset < 20) {
        this.setState({ height: "300px", 
            });
    }
  };

  listenScrollEvent = e => {
    const { pageYOffset } = window;
    if (pageYOffset > 20) {
  
        this.setState({  transform: "translateY(-100px)",
           });
    } else if (pageYOffset < 20) {
        this.setState({ transform: "translateY(-60px)", 
            });
    }
};
onClickMoreDown = () => {
  scroll.scrollMore(
    900, 
    { smooth: true })
};
onClickMoreUp = () => {
  scroll.scrollMore(
    -900, 
    { smooth: true })
};
  render() {
    return (
      <div className="app">
        {/* <SearchAppBar onSubmit={this.fetchPhotos} /> */}
     
       {/* <SearchAppBar onSubmit={this.fetchPhotos} />
        <SearchBar 
          onSubmit={this.fetchPhotos} /> */}
              
    <div className="topbar" style=
    {{position: "sticky",
    top: "0px",
    zIndex: 2000,
    transform: this.state.transform,
    transitionDuration: ".4s",
    AnimationTimingFunction: "ease",
    height: this.state.height,
    backgroundColor: "white",
 }}> 
      <Welcome     style=
    {{backgroundColor: "white",}}>

        </Welcome> 
        <NavBar onSubmit={this.fetchPhotos} 
     
        />
        </div>

       <div style={{
        position: "sticky",
  
        top: "80vh",
        width: "80px",
        display: "flex",
        flexDirection: "column",
      
        justifyContent: "center"
     
        }}> 
         <a className="more-up"
            
         onClick={this.onClickMoreUp}><span></span><span></span><span></span></a>
  
       
        <a className="more-down" 
        style={{transform: "translateY(-40px)"}}
        onClick={this.onClickMoreDown}><span></span><span></span><span></span></a>
        </div>

<Basic></Basic>
        <ListItem 
        images={this.state.images}
        loading={this.state.loading}
        get_data={this.get_data}
        
        />
        <Pagination
          prevPageText='prev'
          nextPageText='next'
          firstPageText='first'
          lastPageText='last'
          activePage={this.state.currentPag}
          totalItemsCount={this.state.totalPhotos}
          itemsCountPerPage={this.state.perPage}
          words={this.state.words}
          onChange={page => this.fetchPhotos(this.state.words, page)}
          pageRangeDisplayed={5}
          page={this.props.page}
        />
      </div>
    );
  }
}











export default App;
