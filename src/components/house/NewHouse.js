import React, { useState } from 'react'
import ImageUpload from '../image/ImageUpload'
import "./styles.css"


function NewHouse() {

    const defaultFormValues = {
        title: "",
        address: "",
        image_url: "",
    }

    const [formValues, setFormValues] = useState(defaultFormValues);

    const setUrl = (newUrl) => {
        setFormValues({
            ...formValues,
            image_url: newUrl
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
        const res = await fetch("http://localhost:4000/api/houses", {
            method: "POST",
            body: JSON.stringify(formValues),
            headers: {
                "Content-Type": "application/json",
            },
        });
        setFormValues(defaultFormValues)  
    }

    return (
        <div class="formDiv">
            <form onSubmit={handleSubmit}>
            <h1>Create House</h1>
                <label>Title :</label><br/><input name='title' type="text" value={formValues.title} onChange={handleChange} placeholder="Property Title..." /><br />
                <label>Address :</label><br/><input name='address' type="text" value={formValues.address} onChange={handleChange} placeholder="Property Address..." /><br />
                < ImageUpload url={formValues.image_url} setUrl={setUrl} />
                <input type="submit" value="Create House" />
            </form>
        </div>
    )
}

export default NewHouse
