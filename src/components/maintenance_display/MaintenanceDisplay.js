import React from "react";
import "./styles.scss"

import {Icon} from "@iconify/react";
import bxImageAlt from "@iconify-icons/bx/bx-image-alt";

export default function MaintenanceDisplay(props) {

    console.log(props)

    return (

        <div className="formDiv">
            <form>
                <div className="house-card">
                    <div className="card-content">
                        <h1>{props.title}</h1>
                        <div>{new Date(props.updated_at).toDateString()}</div>
                        <div>{props.description}</div>
                        <div className="card-middle">
                            <div className='img-frame'>
                                <Icon icon={bxImageAlt} className="img-placeholder" color="#2A2B77"/>
                                <img src={props.image_url} height="150px"/>
                            </div>
                            <div>
                                <div className="radio-buttons" name='role_name'>
                                    <label htmlFor="tenant_radio_button">
                                        <input id="tenant_radio_button" name='role_name' type="radio" value="Tenant"/>
                                        <div className="custom-radio">
                                            <div className="selected-fill"></div>
                                        </div>
                                        Unread
                                    </label>
                                </div>
                                <div className="radio-buttons" name='role_name'>
                                    <label htmlFor="pm_radio_button">
                                        <input id="pm_radio_button" name='role_name' type="radio" value="Property Manager"/>
                                        <div className="custom-radio">
                                            <div className="selected-fill"></div>
                                        </div>
                                        Pending
                                    </label>
                                </div>
                                <div className="radio-buttons" name='role_name'>
                                    <label htmlFor="pm_radio_button">
                                        <input id="pm_radio_button" name='role_name' type="radio" value="Property Manager"/>
                                        <div className="custom-radio">
                                            <div className="selected-fill"></div>
                                        </div>
                                        Actioned
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )}