import React, { Component } from 'react'
import "./styles.css"

class NewUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            password: "",
            phone_number: "",
            role_name: "",
            house_id: "",
            houses: [],
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.getHouses();
    }

    getHouses() {
        fetch('http://localhost:4000/api/houses')
            .then (results => results.json())
            .then (results => this.setState({houses: results}))
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = async (event) => {
        alert(`${this.state.name} Registered Successfully!`);
        event.preventDefault() 
        const res = await fetch("http://localhost:4000/api/users", {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json",
                "Authorization": ``,
            },
        });  
        this.setState({
            name: "",
            email: "",
            password: "",
            phone_number: "",
            role_name: "",
            house_id: "",
            houses: []
        })
        this.getHouses()
    }

    render() {
        return (
            <div class="formDiv">
              
                <form onSubmit={this.handleSubmit}>
                    <h1>Create Account</h1>
                    <label>Role :</label><br/>
                    <select name='role_name' onChange={this.handleChange} defaultValue="Select Role">
                        <option defaultValue>Select Role</option>
                        <option value="Tenant">Tenant</option>
                        <option value="Property Manager">Property Manager</option>
                    </select><br/>
                    <label>Name :</label><br/><input name='name' type="text" value={this.state.name} onChange={this.handleChange} placeholder="Name..." /><br />
                    <label>Email :</label><br/><input name='email' type="text" value={this.state.email} onChange={this.handleChange} placeholder="Email..." /><br />
                    <label>Temporary Password :</label><br/><input name='password' type="text" value={this.state.password} onChange={this.handleChange} placeholder="Password..." /><br />
                    <label>Phone :</label><br/><input name='phone_number' type="text" value={this.state.phone_number} onChange={this.handleChange} placeholder="Phone Number..." /><br />
                    <label>Property :</label><br/>
                    <select name='house_id' onChange={this.handleChange} defaultValue="Select Property">
                        <option defaultValue>Select Property</option>
                    {this.state.houses.map(house => (
                        <option value={house.id}>{house.id}- {house.title}</option>
                    ))}
                    </select><br/>
                    <input type="submit" value="Create & Email" />
                </form>

            </div>
            
        )
    }
}

export default NewUser
