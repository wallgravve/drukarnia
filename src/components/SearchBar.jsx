import React, { Component, useState } from "react";

import { Form, Field } from 'react-final-form';
import categories from '../Constants/categories';
import orientation from '../Constants/orientation';
import Select from 'react-select';


// const handleFormSubmit = e => {
//   e.preventDefault();
//   this.props.onSubmit(this.state.inputValue);
// };

const ReactSelectAdapter = ({ input, ...rest }) => (
  <Select {...input} {...rest} searchable />
)




class SearchBar extends Component {
  constructor(props) {
    super(props);
  this.state = {
    inputValue: "",
    inputCategory: {},
    inputOrientation: "horizontal",
  };

 

  }

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    // this.props.onSubmit(this.state.inputCategory); 

    console.log(this.state.inputOrientation);
  };

  handleFormOriantation = (value) => {

    this.setState({inputOrientation: value});
  }


  render() {
    return (
      <div className="header">
        <h1></h1>
        <form onSubmit={this.handleFormSubmit} className="ui form">
    
          <input
            className="SearchInput"
            component="input"
            type="text"
            placeholder="Szukane zdjęcie"
            value={this.state.inputValue}
            onChange={e => this.setState
              ({ inputValue: e.target.value })}
          />
          
          {/* <Select
                name="Kategoria"
                component={ReactSelectAdapter}
                options={categories}
                value={this.state.inputCategory}
                onChange={e => this.setState
                  ({ inputCategory: e.target.value })}
              /> */}
            
                           <Select
               name="Orientacja"
              component={ReactSelectAdapter}
               options={orientation}
               value={this.state.inputOrientation}
             onChange={this.handleFormOriantation}
              /> 
                 <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SearchBar;


///@@@@@@@@@@@@@@@@@@@@
// const SearchBar = () => {
// const [inputValue, setInputValue] = useState("");

// const handleSearchInputChanges = (e) => {
//   setInputValue(e.target.value);
// }


// return( <Form
//   onSubmit={SearchBar}
//   render={({ handleSubmit, form, submitting, pristine, values}) =>(
//     <form onSubmit={handleSubmit}>
//            <input
//              className="SearchInput"
//              component="input"
//             type="text"
//             placeholder="Szukane zdjęcie"
//             value={inputValue}
//             onChange={handleSearchInputChanges}
//             // value={this.state.inputValue}
//             // onChange={e => this.setState({ inputValue: e.target.value })}
//           />
     
       
//               <Field
//                 name="Kategoria"
//                 component={ReactSelectAdapter}
//                 options={categories}
//               />
//                 <Field
//                 name="Orientacja"
//                 component={ReactSelectAdapter}
//                 options={orientation}
             
//               />
//                <input type="submit" value="Submit" />

//     </form>
           
//   )
// }
//  />)

// };
 
