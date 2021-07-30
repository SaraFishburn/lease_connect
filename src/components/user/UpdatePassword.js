import React, { useState, useEffect } from 'react'
import API from '../../helpers/api';
import './styles.scss'
const UpdatePassword = () => {
    const defaultFormValues = {
        password: "",
        new_password: "",
        password_confirmation: "",
    }

    const [formValues, setFormValues] = useState(defaultFormValues);

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const res = await API.request("users", {
            method: "PATCH",
            data: JSON.stringify(formValues),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(() => alert("Password successfully updated!"))
        .catch(err => alert(err.response.data.error))
        setFormValues(defaultFormValues)
    }

    return (
        <div class="formDiv update-password-div">
            <form onSubmit={handleSubmit}>
                <h1>Update Password</h1>
                <label>Current Password:</label><input name='password' type="password" value={formValues.name} onChange={handleChange} />
                <label>New Password:</label><input name='new_password' type="password" value={formValues.email} onChange={handleChange} />
                <label>Confirm New Password:</label><input name='password_confirmation' type="password" value={formValues.phone_number} onChange={handleChange} />
                <input type="submit" value="Update Password" />
            </form>
        </div>
    )
  }

export default UpdatePassword
