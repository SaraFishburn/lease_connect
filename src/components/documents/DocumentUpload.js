import React, { useState } from 'react'

const DocumentUpload = (props) => {
    const [document, setDocument ] = useState("");

    const uploadDocument = () => { 
        const data = new FormData()
        data.append("file", document)
        data.append("upload_preset", process.env.REACT_APP_IMAGE_PRESET )
        data.append("cloud_name", process.env.REACT_APP_IMAGE_ACCOUNT )
        fetch( process.env.REACT_APP_IMAGE_FETCH , {
            method:"post",
            body: data
        })
        .then(resp => resp.json())
        .then(data => {
            props.setUrl(data.url.replace('.pdf','.png'))
        })
        .catch(err => console.log(err))
    }

    return (
        <div class="document-div">
        <div class="document-container">
            <div class="document-upload">
                <input class="document-upload-input" type="file" onChange= {(e)=> setDocument(e.target.files[0])}></input>
                <button class="document-upload-button" onClick={uploadDocument}>Upload</button>
            </div>
            <div class="document-preview">
                <h1>Uploaded DocumentUpload will be displayed here</h1>
                <img src={props.url} width="100rem"/>
            </div>
        </div>
        </div>
    )
}

export default DocumentUpload;