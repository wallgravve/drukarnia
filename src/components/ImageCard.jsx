import React,  { Component } from "react";
import Crop from "./Crop";
// import Card from "@material-ui/core/Card";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Modal from "react-modal";
import { ModalContainer, ModalRoute } from 'react-router-modal';
Modal.setAppElement('#root');

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      modalIsOpen: false,
      isHovering: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.imageRef = React.createRef();
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  handleOutMouseHover () {
    this.setState(this.toggleOutHoverState);
  }

  toggleOutHoverState(state) {
    return {
      isHovering:state.isHovering
    };
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }

  render() {
    const url = "/galeria";
    const { title, thumbnail_url, id, height, width } = this.props.image;

    return (
      <BrowserRouter>
      <div
   
        style={{ position: "relative" }}
        //   style={{
        //     gridRowEnd: `span ${this.state.spans}`,
        //     // paddingTop: "30px"
        //    }}
        // className={classes.card}
        // className="grid__item card"
        onRequestClose={this.closeModal}
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
      >
        <img
          style={{
            width: "360px",
            height: "320px",
            boxShadow:
              "0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22)",
            borderRadius: "10px"
          }}
          alt={title}
          src={thumbnail_url}
          ref={this.imageRef}
        />{" "}
        {this.state.isHovering && (
               <Link to={`${url}/form`}
                // variant="outlined"
                // size="medium"
                // color="primary"
                className="Btn-crop"
                onClick={this.openModal}
                // style={{ display: "inline-flex" }}
              >
          <div className="image-teaser"
            style={{
              position: "absolute",
              top: "20%",
              color: "white",
            }}
          >
      
              <p className="Btn-text">Przejdź do zdjęcia</p>
              <div className="icon">
                <svg
                  height="22pt"
                  fill="#fff"
                  viewBox="0 0 512 512"
                  width="22pt"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m234.667969 192c0 23.5625-19.105469 42.667969-42.667969 42.667969s-42.667969-19.105469-42.667969-42.667969 19.105469-42.667969 42.667969-42.667969 42.667969 19.105469 42.667969 42.667969zm0 0" />
                  <path d="m490.667969 405.332031h-42.667969v-277.332031c0-35.285156-28.714844-64-64-64h-277.332031v-42.667969c0-11.773437-9.539063-21.332031-21.335938-21.332031s-21.332031 9.558594-21.332031 21.332031v42.667969h-42.667969c-11.796875 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.535156 21.335938 21.332031 21.335938h42.667969v277.332031c0 35.285156 28.714844 64 64 64h277.332031v42.667969c0 11.773437 9.539063 21.332031 21.335938 21.332031s21.332031-9.558594 21.332031-21.332031v-42.667969h42.667969c11.796875 0 21.332031-9.558594 21.332031-21.332031 0-11.777344-9.535156-21.335938-21.332031-21.335938zm-106.667969-298.664062c11.777344 0 21.332031 9.578125 21.332031 21.332031v148.054688l-48.210937-48.214844c-14.082032-14.101563-38.828125-14.101563-52.90625 0l-101.546875 101.546875-26.882813-26.878907c-14.078125-14.101562-38.824218-14.101562-52.90625 0l-16.210937 16.191407v-212.03125zm0 0" />
                </svg>
              </div>
{/*             
            <div className="imageCapture-container imageCapture-animation ">
              <div className="imageCapture-content imageCapture-animation ">
                najlepsza jakość do:
                {(width / 11.8).toFixed(0)} cm x {(height / 11.8).toFixed(0)} cm
              </div>
              <div className="imageCapture-content imageCapture-animation ">
                numer zdjęcia: {id}
              </div>
            </div> */}
          </div></Link>
        
        )}
            <Switch>
            <Route path={`${url}/form`} component={Modal} />
            </Switch>
        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
          <button onClick={this.closeModal}>close</button>
          <Crop
            src={thumbnail_url}
            widthOrigin={width}
            heightOrigin={height}
          ></Crop>
        </Modal>
      </div>
      </BrowserRouter>
    );
  }
}
export default ImageCard;
