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
        <div className="document-div">
        <div className="document-container">
            <div className="document-upload">
                <input className="document-upload-input" type="file" onChange= {(e)=> setDocument(e.target.files[0])}></input>
                <button className="document-upload-button" onClick={uploadDocument}>Upload</button>
            </div>
            <div className="document-preview">
                <h1>Uploaded DocumentUpload will be displayed here</h1>
                <img src={props.url} width="100rem"/>
            </div>
        </div>
        </div>
    )
}

export default DocumentUpload;