import React, { Component } from 'react'

export class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    
    handleSubmit = async (event) => {
        event.preventDefault() 
        const res = await fetch("http://localhost:4000/api/sessions/sign_in", {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json",
                "Authorization": ``,
            },
        });  
        this.setState({
            email: "",
            password: "",
        })
    }

    render() {
        return (
            <div class="formDiv">
                <form onSubmit={this.handleSubmit}>
                    <h1>Login</h1>
                    <label>Email :</label><br/><input name='email' type="text" value={this.state.email} onChange={this.handleChange} placeholder="Email..." /><br />
                    <label>Password :</label><br/><input name='password' type="text" value={this.state.password} onChange={this.handleChange} placeholder="Password..." /><br />
                    <input type="submit" value="Login" />
                </form>
            </div>
        )
    }
}

export default LoginForm

