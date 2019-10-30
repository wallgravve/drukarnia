import React from "react";
// import './Modal.css';
import PropTypes from "prop-types";
import Crop from "./Crop";
import ImageForm from "./ImageForm";

class ModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      height: "",
      width: "",
      image: "",
      price: "",
   
      
  };
  this.changeWidth = this.changeWidth.bind(this);
  this.changeHeight = this.changeHeight.bind(this);
 // this.imageRef = React.createRef();
  console.log("props:" +this.props);
  }

  changeWidth = (e) => {
    // e.preventDefault();
    this.setState({ width: parseInt(e.target.value) || 0},
     () => {
      console.log("New state in ASYNC callback:", this.state.width);
    });

   
   
  
    console.log(this.state.width);
 
  }

  changeHeight(e) {
    let height = parseInt(e.target.value) || 0;
    this.setState({ height });
    console.log(this.state.name);
  }


  onChange = crop => {
    this.setState({ crop });
    console.log(crop);
  };
  handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state.name);
    };
    handleSubmit = (e) => {
        e.preventDefault();

    };
  render() {
    const { width } = this.props;
    return (
      <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
  <div className="Crop__container" 
     
    >
      {/* <ImageForm/> */}


        <Crop src={this.props.src} style={{width: "60%"}}
            widthOrigin={width}
        />
        {this.props.children}
        <div>{width}</div>
    
        </div>

        <form action="" 
        style={{width: "40%", 
        display: "flex", 
        flexDirection: "column",
        paddingLeft: "40px"}}>
<div className="form_content">
  <p>Po wypełnieniu i wysłaniu do nas formularza, następi przekierowanie do strony aukcji allegro, zamówienie zostanie 
    przekazane do realizacji niezwłocznie po dokonaniu zakupu na aukcji. Poniższy formularz jest nam niezbędny
     do pozyskania tylko tych informacji, które pozwalają nam świadczyć usługi najwyższych standardów.
  </p>
</div>
          {/* <h3>{this.props.width / 11.8}cm</h3> */}
                    <div className="form_group">   <label htmlFor="name" className="form_label">Imię</label>
                    <input id="name" type="text" 
                    onChange={this.handleChange}
                    value={this.state.name}
                    className="form_input"
                    />  </div>
                    <div className="form_group">    <label htmlFor="phone" className="form_label">Numer telefonu</label>
                    <input id="phone"  type="text" 
                    onChange={this.handleChange}
                    value={this.state.phone}
                    className="form_input"
                    /></div>
                    <div className="form_group">      <label htmlFor="email" className="form_label">Adres email</label>
                    <input id="email"  type="email" 
                    onChange={this.handleChange}
                    value={this.state.email}
                    className="form_input"
                    /> </div>
                        <div className="form_calc">
                          <div className="form_group"
                          style={{width:"40%"}}>
                            <label htmlFor="width" className="form_label">Szerokość</label>
                            <input id=""  type="number" 
                            onChange={this.changeWidth}
                            value={this.state.width}
                            className="form_input"
                            /></div>
                            <div className="form_group"
                            style={{width:"40%"}}>
                            <label htmlFor="height" className="form_label">Wysokość</label>
                            <input id="height"  type="number" 
                            onChange={this.changeHeight}
                            value={this.state.height}
                            className="form_input"
                            /></div>
                        </div>
                    {/* <div className="form_group"> 
                    <label htmlFor="image" className="form_label">Numer zdjęcia</label>
                    <input id="image"  type="text" 
                    onChange={this.handleChange}
                    value={this.state.image}
                    className="form_input"
                    /></div> */}
                    <div className="form_group">
                    <label htmlFor="price" className="form_label">Liczba sztuk do zakupu</label>
                    <input id="price"  type="text" 
                    onChange={this.handleChange}
                    value={this.state.price}
                    className="form_input"
                    />
</div>
                 
                
              
               <div className="form_group"
              >   
                    <button className="button_submit"  >Wyślij</button>  
                   </div>
            </form>




      </div>
    
    );
  }
}
ModalForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  children: PropTypes.node
};
export default ModalForm;