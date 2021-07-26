import React from "react";
import "./styles.scss"

import {Icon} from "@iconify/react";
import bxImageAlt from "@iconify-icons/bx/bx-image-alt";

export default function MaintenanceDisplay(props) {

    return (

        <div className="formDiv">
            <form>
                <h1>Maintenance</h1>

                <input type="submit" value="New Request"/>
                <div className="house-card">
                    <div className="card-content">
                        <h1>Dishwasher</h1>
                        <div>14/07/2021</div>
                        <div>The door on the dishwasher won’t
                            close properly.</div>
                        <div className="card-middle">
                            <div className='img-frame'>
                                <Icon icon={bxImageAlt} className="img-placeholder" color="#2A2B77"/>
                                <img src={""} height="150px"/>
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
    )
}