import React, { useState } from 'react'
import DocumentUpload from '../documents/DocumentUpload'
import API from '../../helpers/api'

function NewDocument() {

    const defaultFormValues = {
        title: "",
        document_url: "",
        house_id: "",
    }

    const [formValues, setFormValues] = useState(defaultFormValues);

    const setUrl = (newUrl) => {
        setFormValues({
            ...formValues,
            document_url: newUrl
        })
    }

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault() 

        const res = await API.request("documents", {
            method: "POST",
            data: JSON.stringify(formValues),
            headers: {
                "Content-Type": "application/json",
            },
        });
        setFormValues(defaultFormValues)  
    }

    return (
        <div class="formDiv">
            <form onSubmit={handleSubmit}>
            <h1>New Document</h1>
                <label>Title :</label><br/><input name='title' type="text" value={formValues.title} onChange={handleChange} placeholder="Document Title..." /><br />
                < DocumentUpload url={formValues.document_url} setUrl={setUrl} />
                <input type="submit" value="Create Document" />
            </form>
        </div>
    )
}

export default NewDocument