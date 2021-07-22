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

render() {
    return (
        <form>
            <div>
                <label>Request Summary</label>
                <input 
                type ='text' 
                value = {this.state.requestSummary} 
                onChange={this.handleRequestSummary} />
            </div>
        </form>
      )
    }
    
   }

export default Maintenance;