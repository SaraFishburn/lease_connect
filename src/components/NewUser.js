import React, { Component } from 'react'

class NewUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            password: "",
            phoneNumber: "",
            roleName: "",
            houseId: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    nameHandler = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    emailHandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    passwordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    phoneHandler = (event) => {
        this.setState({
            phoneNumber: event.target.value
        })
    }

    roleHandler = (event) => {
        this.setState({
            roleName: event.target.value
        })
    }

    houseHandler = (event) => {
        this.setState({
            houseId: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            name: "",
            email: "",
            password: "",
            phoneNumber: "",
            roleName: "",
            houseId: "",
        })
     event.preventDefault()
        
    }

    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>Create Account</h1>
                    <label>Role :</label><select onChange={this.roleHandler} defaultValue="Select Role">
                        <option defaultValue>Select Role</option>
                        <option value="Tenant">Tenant</option>
                        <option value="Property Manager">Property Manager</option>
                    </select><br/>
                    <label>Name :</label> <input type="text" value={this.state.name} onChange={this.nameHandler} placeholder="Name..." /><br />
                    <label>Email :</label> <input type="text" value={this.state.email} onChange={this.emailHandler} placeholder="Email..." /><br />
                    <label>Temporary Password :</label> <input type="password" value={this.state.password} onChange={this.passwordHandler} placeholder="Password..." /><br />
                    <label>Phone :</label> <input type="text" value={this.state.phoneNumber} onChange={this.phoneHandler} placeholder="Phone Number..." /><br />
                    <label>Property :</label><select onChange={this.houseHandler} defaultValue="Select Property">
                        <option defaultValue>Select Property</option>
                        <option value="Tamarama Beach Unit">Tamarama Beach Unit</option>
                        <option value="Vaucluse Family Retreat">Vaucluse Family Retreat</option>
                    </select><br/>
                    <input type="submit" value="Create & Email" />
                </form>

            </div>
            
        )
    }
}

export default NewUser




// import React from "react"

// const NewUser = () => {

//     const submit = async (event) => {

//     }

//     return (
//         <>
//         <h1>Create Account</h1>
//         <h3>Role:</h3>
//         <form onSubmit={submit}>
//             <label>
//                 Name:
//                 <input type="text" name="name" />
//             </label>
//             <select>
//                 <option value="grapefruit">Grapefruit</option>
//                 <option value="lime">Lime</option>
//                 <option selected value="coconut">Coconut</option>
//                 <option value="mango">Mango</option>
//             </select>
//                 <label for="email">Email:</label>
//                 <input type="email" />
//                 <label for="password">Temporary Password:</label>
//                 <input type="password" />
//                 <label for="phone_number">Phone:</label>
//                 <input type="phone_number" />
//                 <label for="house_id">Property:</label>
//                 <input type="house_id" />
//                 <button type="submit">Create & Email</button>
//         </form>
//         </>
//     )
// }

// export default NewUser