import React from "react";

import PropTypes from "prop-types";
import Crop from "./Crop";

import useForm from "react-hook-form";
import axios from 'axios';


// Messages
const required = "This field is required";
const maxLength = "Your input exceed maximum length";

// Error Component
const errorMessage = error => {
  return <div className="invalid-feedback">{error}</div>;
};



const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}



function ModalForm () {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async data => 
 { 
   console.log(data);
    const form = await axios.post('/api',{
      data
    })
  }

  return (
    
    <div className="container"
    style={{maxWidth: "700px"}}
    >

      <div className="ModalForm"
          style={{maxWidth: "700px",
          display: "flex",
          flexDirection: "column",}}
      >
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="form-group">
            <label htmlFor="Name">Nazwa użytkownika</label>
            <input
              className="form-control"
              type="text"
        
              name="Name"
              ref={register({ required: true, maxLength: 50 })}
              
              
            />
            {errors.Name &&
              errors.Name.type === "required" &&
              errorMessage(required)}
            {errors.Name &&
              errors.Name.type === "maxLength" &&
              errorMessage(maxLength)}
          </div>
          <div className="form-group">
          <label htmlFor="MobileNumber">Telefon</label>

            <input
              className="form-control"
              type="tel"
            
              name="MobileNumber"
              ref={register({ required: false, maxLength: 12 })}
            />
            {errors.MobileNumber &&
              errors.MobileNumber.type === "maxLength" &&
              errorMessage(maxLength)}
          </div>
          <div className="form-group">
          <label htmlFor="Email">Email</label>

            <input
              className="form-control"
              type="email"
           
              name="Email"
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.Email &&
              errors.Email.type === "required" &&
              errorMessage(required)}
          </div>
         
        
          <div className="form-group">
          <label htmlFor="City">Miasto</label>

            <input
              className="form-control"
              type="text"
      
              name="City"
              ref={register({ required: false, maxLength: 50 })}  
            />
          </div>
         
         
        
          <div className="form-group">
          <label htmlFor="Message">Wiadomość</label>
            <textarea className="form-control" 
            name="Message"  
             ref={register({ required: false, maxLength: 1600 })} />
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              placeholder="Subscribe to Newsletter"
              name="Subscribe to Newsletter"
              id="customCheck1"
              ref={register}
            />
          </div>
         
          <div className="form-group checkform">
          <label htmlFor="customCheck1"> Proszę o kontakt</label>
            <input className="btn btn-primary" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );

}

class oldModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      widthOrigin: "",
      heightOrigin: "",
  
   
      ContactForm: {
        name: "sasa",
        phone: "sasa",
        email: "",
        message: "",
        city: "",
      },

      errors: {
        name: null,
        phone: null,
        email: null,
        message: null,
        city: null,
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
   handleChange = (event) => {
    event.preventDefault()
    this.setState({
      ContactForm: {
        [event.target.id]: event.target.value
      }
  
    })
  };
  async handleSubmit(e){
    console.log("działam");
    
 
}

  render() {
    const { widthOrigin, heightOrigin, src } = this.props;
    const {ContactForm} = this.state;

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <div className="Crop__container">
          {/* <ImageForm/> */}

          <Crop
            src={src}
            style={{ width: "60%" }}
            widthOrigin={widthOrigin}
            heightOrigin={heightOrigin}
          />
          {this.props.children}
        </div>

        <form
          id="contact-form"
          action="/form"
          style={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            paddingLeft: "40px"
          }}
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          {/* <div className="form_content">
  <p>Po wypełnieniu i wysłaniu do nas formularza, następi przekierowanie do strony aukcji allegro, zamówienie zostanie 
    przekazane do realizacji niezwłocznie po dokonaniu zakupu na aukcji. Poniższy formularz jest nam niezbędny
     do pozyskania tylko tych informacji, które pozwalają nam świadczyć usługi najwyższych standardów.
  </p>
</div> */}
          {/* <h3>{this.props.width / 11.8}cm</h3> */}
          <div className="form_group">
            {" "}
            <label htmlFor="name" className="form_label">
              Imię
            </label>
            <input
              id="name"
              type="text"
              onChange={this.handleChange}
              value={ContactForm.name}
              className="form_input"
            />{" "}
          </div>
          <div className="form_group">
            {" "}
            <label htmlFor="city" className="form_label">
              Miasto
            </label>
            <input
              id="city"
              type="text"
              onChange={this.handleChange}
              value={ContactForm.city}
              className="form_input"
            />
          </div>
          <div className="form_group">
            {" "}
            <label htmlFor="email" className="form_label">
              Adres email
            </label>
            <input
              id="email"
              type="email"
              onChange={this.handleChange}
              value={ContactForm.email}
              className="form_input"
            />{" "}
          </div>
          <div className="form_group">
            {" "}
            <label htmlFor="phone" className="form_label">
              Numer telefonu
            </label>
            <input
              id="phone"
              type="text"
              onChange={this.handleChange}
              value={ContactForm.phone}
              className="form_input"
            />
          </div>
          <div className="form_group">
            {" "}
            <label htmlFor="message" className="form_label">
          Uwagi
            </label>
            <input
              id="message"
              type="text"
              onChange={this.handleChange}
              value={ContactForm.message}
              className="form_input"
            />
          </div>

          <div className="form_group">
            <button className="button_submit">Wyślij</button>
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
