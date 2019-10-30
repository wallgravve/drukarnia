import React, { Component } from "react";
import ClassNames from "classnames";
import Slider from "react-slick";
import Responsive from "react-responsive";

import "./style.scss";
import { data } from "../Constants/data";

const DesktopTablet = props => <Responsive {...props} minWidth={768} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

const sliderSettings = {
  autoplay: true,
  dots: false,
  infinite: true,
  arrows: false,
  speed: 600,
  utoplaySpeed: 5200,
  draggable: false,
  swipeToSlide: false,
  touchMove: false,
  slidesToShow: 1,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        draggable: true,
        swipeToSlide: true,
        touchMove: true,
        vertical: true
      }
    }
  ]
};

class Basic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
    this.changeIndex = this.changeIndex.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.beforeChangeHandler = this.beforeChangeHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener("touchstart", this.touchStart);
    window.addEventListener("touchmove", this.preventTouch, { passive: false });
  }

  componentWillUnmount() {
    window.removeEventListener("touchstart", this.touchStart);
    window.removeEventListener("touchmove", this.preventTouch, {
      passive: false
    });
  }

  touchStart(e) {
    this.firstClientX = e.touches[0].clientX;
    this.firstClientY = e.touches[0].clientY;
  }

  preventTouch(e) {
    const minValue = 5; // threshold

    this.clientX = e.touches[0].clientX - this.firstClientX;
    this.clientY = e.touches[0].clientY - this.firstClientY;

    // Vertical scrolling does not work when you start swiping horizontally.
    if (Math.abs(this.clientX) > minValue) {
      e.preventDefault();
      e.returnValue = false;
      return false;
    }
  }

  changeIndex(number) {
    this.setState({ index: number }, () => {
      this.slider.slickGoTo(number);
    });
  }

  handleNext(number) {
    if (number < data.length) {
      this.setState({ index: number }, () => {
        this.slider.slickNext();
      });
    } else {
      this.setState({ index: 0 }, () => {
        this.slider.slickNext();
      });
    }
  }

  beforeChangeHandler(currentSlide, nextSlide) {
    if (currentSlide === 0 && nextSlide === data.length - 1) {
      this.setState({ index: data.length - 1 });
    } else if (
      nextSlide > currentSlide ||
      (currentSlide === data.length - 1 && nextSlide === 0)
    ) {
      currentSlide + 1 < data.length
        ? this.setState({ index: currentSlide + 1 })
        : this.setState({ index: 0 });
    } else {
      this.setState({ index: currentSlide - 1 });
    }
  }

  render() {
    return (
      <div className="container">
        <DesktopTablet>
          <div className="section__box">
            <div className="section__content">
              {data.map(
                (item, index) =>
                  this.state.index === index && (
                    <div key={index}>
                      <div className="description">
                        <p className="label--title">{item.name}</p>
                        <p className="label--subtitle">{item.company}</p>
                        <p className="label--quotes">
                          {'"' + item.quotes + '"'}
                        </p>
                      </div>
                      <div
                        className="circle"
                        onClick={() => this.handleNext(index + 1)}
                      >
                        <i className="arrow arrow--right" />
                      </div>
                    </div>
                  )
              )}
            </div>
            <div className="section__slider">
              <div className="title">Bestselery</div>
              <div className="counter">
                0{this.state.index + 1}/0{data.length}
              </div>
              <Slider ref={c => (this.slider = c)} {...sliderSettings}>
                {data.map((item, index) => (
                  <div className="img" key={index}>
                    <div className="img__wrapper">
                      <div className="img__position">
                        <div
                          style={{ backgroundImage: `url(${item.image})` }}
                          className={ClassNames("img__content", {
                            "img__content--selected": this.state.index === index
                          })}
                          onClick={() => this.changeIndex(index)}
                        />
                        <div className="img__text">
                          <hr className="line" />
                          <p className="label--title">{item.name}</p>
                          <p className="label--subtitle">{item.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </DesktopTablet>
        <Mobile>
          <div className="section__slider">
            <div className="section__title">People</div>
            <Slider
              ref={c => (this.slider = c)}
              {...sliderSettings}
              beforeChange={this.beforeChangeHandler}
            >
              {data.map((item, index) => (
                <div className="img" key={index}>
                  <div className="img__wrapper">
                    <div className="img__position">
                      <div
                        style={{ backgroundImage: `url(${item.image})` }}
                        className={ClassNames("img__content", {
                          "img__content--selected": this.state.index === index
                        })}
                        onClick={() => this.changeIndex(index)}
                      >
                        {this.state.index === index && (
                          <div className="desc">
                            <p className="label--title">{item.name}</p>
                            <p className="label--subtitle">{item.company}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="txt__wrapper">
                    <hr
                      className={ClassNames("line", {
                        "line--active": this.state.index === index
                      })}
                    />
                    <p
                      className={ClassNames("label", {
                        "label--active": this.state.index === index
                      })}
                    >
                      {item.quotes}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </Mobile>
      </div>
    );
  }
}

export default Basic;
