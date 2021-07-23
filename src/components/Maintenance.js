import React, { Component } from "react"

class Maintenance extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        requestSummary:'',
        description:''
      };
    };
    
    handleRequestSummary = (event) => {
        this.setState({
            requestSummary: event.target.value
        })
    }

    handleDescription = (event) => {
        this.setState({
            description: event.target.value
        })
    }

render() {
    return (
        <form>
            <div>
                <label>Request Summary</label>
                <input 
                type ='text' 
                value = {this.state.requestSummary} 
                onChange ={this.handleRequestSummary} />

                <label>Description</label>
                <input
                type = 'text'
                value = {this.state.description}
                onChange = {this.handleDescription} />
                
            </div>
        </form>
      ) 
    }
    
   }

export default Maintenance;