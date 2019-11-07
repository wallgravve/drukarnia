import React, {useState} from "react";
import welcome from "../assets/images/fotodream.jpg";



class Welcome extends React.Component {
constructor(props) {
    super(props);
    this.listenScrollEvent = this.listenScrollEvent.bind(this);    
    this.state = {
        transform: "scale(0.65)",
     
    
    }
}
    listenScrollEvent = e => {
        const { pageYOffset } = window;
        if (pageYOffset > 20) {
            this.setState({ 
            transform: "scale(0.24)",
         
       
               });
        } else if (pageYOffset < 20) {
            this.setState({
                transform: "scale(0.65)", 
     
                });
        }
    };



    componentDidMount() {
        setTimeout(() => {
            window.addEventListener('scroll', this.listenScrollEvent);

        }, 100)
}

render() {
  
    return(

        <div className="Welcome" style={{  
            display: "flex",
            top: "0px",
            justifyContent: "center",
            padding: "30px 0",
         
         
          
            // overflow: "auto",
            resize: "both",
            transitionDuration: ".2s",
            AnimationTimingFunction: "ease",
            }}>
            <img src={welcome} alt="" 
            style={{ 
            transform: this.state.transform,
         
            }}
         
            />
        </div>
    )
}
}



//  function oldWelcome ()  {

// const [scale, setScale] = useState(1);

// function scaleMe() {
//     if (window.scrollY > 100) {
//         setScale(0.324);
//     }
// } scaleMe()
// let style = {scale: scale};
// return (
//     <div className="Welcome" style={{  
//         display: "flex",
//         justifyContent: "center",
//         padding: "120px 0",
       
//         }}>
//         <img src={welcome} alt="" style={style}/>
//     </div>
// )
// };


export default Welcome;