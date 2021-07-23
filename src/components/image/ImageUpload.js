import React, { useState } from 'react'
import "./styles.css"

const ImageUpload = (props) => {
    const [image, setImage ] = useState("");

    const uploadImage = () => { 
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", process.env.REACT_APP_IMAGE_PRESET )
        data.append("cloud_name", process.env.REACT_APP_IMAGE_ACCOUNT )
        fetch( process.env.REACT_APP_IMAGE_FETCH , {
            method:"post",
            body: data
        })
        .then(resp => resp.json())
        .then(data => {
            props.setUrl(data.url)
        })
        .catch(err => console.log(err))
    }

    return (
        <div class="image-div">
        <div class="image-container">
            <div class="image-upload">
                <input class="image-upload-input" type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>
                <button class="image-upload-button" onClick={uploadImage}>Upload</button>
            </div>
            <div class="image-preview">
                <h1>Uploaded image will be displayed here</h1>
                <img src={props.url} width="100rem"/>
            </div>
        </div>
        </div>
    )
}

export default ImageUpload;