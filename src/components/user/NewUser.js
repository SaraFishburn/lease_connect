import React, { useState, useEffect } from 'react'
import './styles.scss'

function NewUser() {
    const defaultFormValues = {
        name: "",
        email: "",
        password: "",
        phone_number: "",
        role_name: "Tenant",
        house_id: "",
        houses: [],
    }

    const [formValues, setFormValues] = useState(defaultFormValues);

    const getHouses = () => {
        fetch('http://localhost:4000/api/houses')
            .then (results => results.json())
            .then (results => setFormValues({
                ...formValues,
                houses: results
            }))
    }

    useEffect(() => {
        getHouses()
    }, [])


    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (event) => {
        alert(`${formValues.name} Registered Successfully!`)
        event.preventDefault()
        const res = await fetch("http://localhost:4000/api/users", {
            method: "POST",
            body: JSON.stringify(formValues),
            headers: {
                "Content-Type": "application/json",
            },
        });
        setFormValues(defaultFormValues)
    }

    return (
        <div class="formDiv">
            <form onSubmit={handleSubmit}>
                <h1>Create Account</h1>
                <label>Role :</label>
                <div className="radio-buttons" name='role_name' onChange={handleChange} defaultValue="Select Role">
                    <label htmlFor="tenant_radio_button">
                        <input id="tenant_radio_button" name='role_name' type="radio" value="Tenant" checked={formValues.role_name === "Tenant"} onChange={handleChange}/>
                        <div className="custom-radio">
                            <div className="selected-fill"></div>
                        </div> Tenant
                    </label>
                    <label htmlFor="pm_radio_button">
                        <input id="pm_radio_button" name='role_name' type="radio" value="Property Manager" checked={formValues.role_name === "Property Manager"} onChange={handleChange} />
                        <div className="custom-radio">
                            <div className="selected-fill"></div>
                        </div> PM
                    </label>
                </div>
                <label>Name :</label><input name='name' type="text" value={formValues.name} onChange={handleChange} />
                <label>Email :</label><input name='email' type="text" value={formValues.email} onChange={handleChange} />
                <label>Temp Password :</label><input name='password' type="text" value={formValues.password} onChange={handleChange} />
                <label>Phone :</label><input name='phone_number' type="text" value={formValues.phone_number} onChange={handleChange} />
                <select name='house_id' value={formValues.house_id} onChange={handleChange}>
                    <option value='' disabled selected>Select Property</option>
                    {formValues.houses.map(house => (
                        <option value={house.id}>{house.title}</option>
                    ))}
                </select>
                <input type="submit" value="Create Account" />
            </form>
        </div>
    )
}



export default NewUser


// import React, { Component } from 'react'
// import "./styles.css"

// class NewUser extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             name: "",
//             email: "",
//             password: "",
//             phone_number: "",
//             role_name: "",
//             house_id: "",
//             houses: [],
//         }
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }

//     componentDidMount() {
//         this.getHouses();
//     }

//     getHouses() {
//         fetch('http://localhost:4000/api/houses')
//             .then (results => results.json())
//             .then (results => this.setState({houses: results}))
//     }

//     handleChange = (event) => {
//         this.setState({
//             [event.target.name] : event.target.value
//         })
//     }

//     handleSubmit = async (event) => {
//         alert(`${this.state.name} Registered Successfully!`);
//         event.preventDefault() 
//         const res = await fetch("http://localhost:4000/api/users", {
//             method: "POST",
//             body: JSON.stringify(this.state),
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": ``,
//             },
//         });  
//         this.setState({
//             name: "",
//             email: "",
//             password: "",
//             phone_number: "",
//             role_name: "",
//             house_id: "",
//             houses: []
//         })
//         this.getHouses()
//     }

//     render() {
//         return (
//             <div class="formDiv">
              
//                 <form onSubmit={this.handleSubmit}>
//                     <h1>Create Account</h1>
//                     <label>Role :</label><br/>
//                     <select name='role_name' onChange={this.handleChange} defaultValue="Select Role">
//                         <option defaultValue>Select Role</option>
//                         <option value="Tenant">Tenant</option>
//                         <option value="Property Manager">Property Manager</option>
//                     </select><br/>
//                     <label>Name :</label><br/><input name='name' type="text" value={this.state.name} onChange={this.handleChange} placeholder="Name..." /><br />
//                     <label>Email :</label><br/><input name='email' type="text" value={this.state.email} onChange={this.handleChange} placeholder="Email..." /><br />
//                     <label>Temporary Password :</label><br/><input name='password' type="text" value={this.state.password} onChange={this.handleChange} placeholder="Password..." /><br />
//                     <label>Phone :</label><br/><input name='phone_number' type="text" value={this.state.phone_number} onChange={this.handleChange} placeholder="Phone Number..." /><br />
//                     <label>Property :</label><br/>
//                     <select name='house_id' onChange={this.handleChange} defaultValue="Select Property">
//                         <option defaultValue>Select Property</option>
//                     {this.state.houses.map(house => (
//                         <option value={house.id}>{house.title}</option>
//                     ))}
//                     </select><br/>
//                     <input type="submit" value="Create & Email" />
//                 </form>

//             </div>
            
//         )
//     }
// }

// export default NewUser


