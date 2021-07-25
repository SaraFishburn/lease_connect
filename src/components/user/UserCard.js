import React, {useState, useEffect, useRef} from 'react'

import { Icon } from '@iconify/react';
import delete24Regular from '@iconify-icons/fluent/delete-24-regular';

import './styles.scss'

export default function UserCard(props) {

    const [hover, setHover] = useState(false)

    return (
        <div class="user-card">
            <div class="card-content">
                <h1>{props.name}</h1>
                <div class="card-middle">
                    <p>{props.email}</p>
                    <p>{props.phone_number}</p>
                </div>
            </div>     
            <div
              class="card-icons"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}> 
              {
                hover ?
                <Icon
                    className="delete-icon-white" 
                    icon={delete24Regular} 
                    color="#FFFFFF"/>
                :
                <Icon
                    className="delete-icon" 
                    icon={delete24Regular} 
                    color="#2A2B77"/>

              }
            </div> 
        </div>
  
    )
}

// var Link = React.createClass({
//     getInitialState: function(){
//       return {hover: false}
//     },
//     toggleHover: function(){
//       this.setState({hover: !this.state.hover})
//     },
//     render: function() {
//       var linkStyle;
//       if (this.state.hover) {
//         linkStyle = {backgroundColor: 'red'}
//       } else {
//         linkStyle = {backgroundColor: 'blue'}
//       }
//       return(
//         <div>
//           <a style={linkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>Link</a>
//         </div>
//       )