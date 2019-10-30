import React from 'react';

class ImageForm extends React.Component {
    state = {
        name: "",
        phone: "",
        email: "",
        width: null,
        height: null,
        image: "",
        price: ""
        
    }

    handleChange = (e) => {
        this.state({
            [e.target.id]: e.target.value
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();

    };
    
    renter() {
        return (
 <div>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, mollitia?
                <form action="" onSubmit ={this.handleSubmit}>
                    <label htmlFor="name">Imię</label>
                    <input id="name" type="text" 
                    onChange={this.handleChange}
                    value={this.state.name}
                    />
                    <label htmlFor="phone">Numer telefonu</label>
                    <input id="phone"  type="text" 
                    onChange={this.handleChange}
                    value={this.state.phone}
                    />
                    <label htmlFor="email">Adres email</label>
                    <input id="email"  type="email" 
                    onChange={this.handleChange}
                    value={this.state.email}
                    /> 
                    <label htmlFor="width">Szerokość</label>
                    <input id="width"  type="text" 
                    onChange={this.handleChange}
                    value={this.state.width}
                    />
                    <label htmlFor="height">Wysokość</label>
                    <input id="height"  type="text" 
                    onChange={this.handleChange}
                    value={this.state.height}
                    />
                    <label htmlFor="image">Numer zdjęcia</label>
                    <input id="image"  type="text" 
                    onChange={this.handleChange}
                    value={this.state.image}
                    />
                    <label htmlFor="price">Cena</label>
                    <input id="price"  type="text" 
                    onChange={this.handleChange}
                    value={this.state.price}
                    />

                    <button>Wyślij</button>  
            </form>
 </div>
        )
    }
}
export default ImageForm;