import React, { Component } from 'react'
import "./styles.css"

class NewHouse extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            address: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    titleHandler = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    addressHandler = (event) => {
        this.setState({
            address: event.target.value
        })
    }
    
    handleSubmit = async (event) => {
        alert(`${this.state.title} Registered Successfully!`)
        console.log(this.state);
        event.preventDefault() 
        const res = await fetch("http://localhost:4000/api/houses", {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json",
                "Authorization": ``,
            },
        });  
        console.log(this.state);
        this.setState({
            title: "",
            address: "",
        })
    }

    render() {
        return (
            <div class="formDiv">

                <form onSubmit={this.handleSubmit}>
                    <h1>Create House</h1>
                    <label>Title :</label><br/><input type="text" value={this.state.title} onChange={this.titleHandler} placeholder="Property Title..." /><br />
                    <label>Address :</label><br/><input type="text" value={this.state.address} onChange={this.addressHandler} placeholder="Property Address..." /><br />
                    <input type="submit" value="Create House" />
                </form>

            </div>
            
        )
    }
}

export default NewHouse