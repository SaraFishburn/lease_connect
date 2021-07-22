import React, { Component } from 'react'

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

    // componentDidMount() { 
    //     fetch('http://localhost:4000/houses/index')
    //     .then(res=>res.json())
    //     .then(json=>console.log(json))
    // }

    componentDidMount() { 
        fetch('http://localhost:4000/houses/index')
        .then(res=>res.json())
        .then(json=>{ this.setState({ houses: json })})
        console.log(this.houses)
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
            phone_number: event.target.value
        })
    }

    roleHandler = (event) => {
        this.setState({
            role_name: event.target.value
        })
    }


    handleSubmit = async (event) => {
        alert(`${this.state.name} Registered Successfully!`)
        console.log(this.state);
        event.preventDefault() 
        const res = await fetch("http://localhost:4000/api/users", {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json",
                "Authorization": ``,
            },
        });  
        console.log(this.state);
        this.setState({
            name: "",
            email: "",
            password: "",
            phone_number: "",
            role_name: "",
            house_id: "",
        })
    }

    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>Create Account</h1>
                    <label>Role :</label>
                    <select onChange={this.roleHandler} defaultValue="Select Role">
                        <option defaultValue>Select Role</option>
                        <option value="Tenant">Tenant</option>
                        <option value="Property Manager">Property Manager</option>
                    </select><br/>
                    <label>Name :</label> <input type="text" value={this.state.name} onChange={this.nameHandler} placeholder="Name..." /><br />
                    <label>Email :</label> <input type="text" value={this.state.email} onChange={this.emailHandler} placeholder="Email..." /><br />
                    <label>Temporary Password :</label> <input type="password" value={this.state.password} onChange={this.passwordHandler} placeholder="Password..." /><br />
                    <label>Phone :</label> <input type="text" value={this.state.phone_number} onChange={this.phoneHandler} placeholder="Phone Number..." /><br />
                    <label>Property :</label>
                    {/* <select defaultValue="Select Property">
                        <option defaultValue>Select Property</option>
                        {this.data.map(house => (
                            <option value={this.house.id}>{this.house.address}</option>
                        ))}
                    </select><br/> */}
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