import React, { useState, useEffect } from 'react'
import ImageUpload from '../image/ImageUpload'
import "./styles.scss"

function NewHouse(props) {
    const [uploadImage, setUploadImage] = useState(() => () => {})

    const defaultFormValues = {
        title: "",
        address: "",
        image_url: "",
    }

    const [formValues, setFormValues] = useState(defaultFormValues);

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        uploadImage()
        .then(url => {
            fetch("http://localhost:4000/api/houses", {
                method: "POST",
                body: JSON.stringify({...formValues, image_url: url}),
                headers: {
                    "Content-Type": "application/json",
                },
            })
        })
        .catch(err => console.log(err))
        setFormValues(defaultFormValues)
    }

    return (
        <div class="formDiv">
            <form onSubmit={handleSubmit}>
            <h1>Create House</h1>
                <label>Title :</label><br/><input name='title' type="text" value={formValues.title} onChange={handleChange} placeholder="Property Title..." /><br />
                <label>Address :</label><br/><input name='address' type="text" value={formValues.address} onChange={handleChange} placeholder="Property Address..." /><br />
                <ImageUpload setUploadImage={setUploadImage}/>
                <input type="submit" value="Create House" />
            </form>
        </div>
    )
}

export default NewHouse