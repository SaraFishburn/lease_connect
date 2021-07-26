import React, { useState, useEffect } from 'react'
import './styles.scss'

function NewUser() {
    const defaultFormValues = {
        name: "",
        email: "",
        password: "",
        phone_number: "",
    }

    const [formValues, setFormValues] = useState(defaultFormValues);

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (event) => {
        alert(`${formValues.name} account updated!`)
        event.preventDefault()
        const res = await fetch("http://localhost:4000/api/users", {
            method: "PATCH",
            body: JSON.stringify(formValues),
            headers: {
                "Content-Type": "application/json",
            },
        });
        setFormValues(defaultFormValues)
    }

    return (
        <div class="formDiv my-account-div">
            <form onSubmit={handleSubmit}>
                <h1>My Account</h1>
                <label>Name :</label><input name='name' type="text" value={formValues.name} onChange={handleChange} />
                <label>Email :</label><input name='email' type="text" value={formValues.email} onChange={handleChange} />
                <label>Phone :</label><input name='phone_number' type="text" value={formValues.phone_number} onChange={handleChange} />
                <input type="submit" value="Update Details" />
            </form>
        </div>
    )
}



export default NewUser
