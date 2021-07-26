import React from 'react'
import ImageUpload from "../image/ImageUpload";

export default function MaintenanceRequest(props) {
    return (
        <div className="formDiv">
            <form>
                <h1>New Maintenance Request</h1>

                <label>Request Summary :</label>
                <input name='name' type="text" />

                <label>Description: </label>
                <textarea name='name' type="text" />

                <ImageUpload/>

                <input type="submit" value="Send Request" />
            </form>
        </div>
    )
}