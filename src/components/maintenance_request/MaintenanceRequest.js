import React, {useState} from 'react'
import ImageUpload from "../image/ImageUpload";

export function MaintenanceRequest(props) {

    console.log(props)

    return (
        <div className="formDiv">
            <form onSubmit={props.handleSubmit}>
                <h1>New Maintenance Request</h1>

                <label>Request Summary :</label>

                <input
                    name='title'
                    type="text"
                    value={props.formValues.title}
                    onChange={props.handleChange}
                    placeholder={`${props.formValues.title !== "" ? `${props.formValues.title}` : ""}`}/>

                <label>Description: </label>

                <textarea
                    name='description'
                    type="text"
                    value={props.formValues.description}
                    onChange={props.handleChange}
                    placeholder={`${props.formValues.description !== "" ? `${props.formValues.description}` : ""}`} />

                <ImageUpload setUploadImage={props.setUploadImage} url={props.url}/>

                <input type="submit" value="Send Request" />
            </form>
        </div>
    )
}