import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";

import API from '../../helpers/api'
import './styles.scss'

function LoginForm(props) {
    const defaultFormValues = {
        email: "",
        password: "",
    }

    const history = useHistory()
    const [formValues, setFormValues] = useState(defaultFormValues);

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        API.request("sessions/sign_in", {
            method: "POST",
            data: formValues,
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res) => {
            props.setUser(true)
            props.setUserData(res.data.user)
            props.setRole(res.data.user.role_name)
            history.push("/")
        },
        (error) => {
                alert(error)
            }
        )
        }

    return (
        <div className="formDiv">
            <form onSubmit={handleSubmit}>
                <label>Email :</label><input name='email' type="text" value={formValues.email} onChange={handleChange} />
                <label>Password :</label><input name='password' type="password" value={formValues.password} onChange={handleChange} />
                <input type="submit" value="LOGIN" />
            </form>
        </div>
    )
}

export default LoginForm
