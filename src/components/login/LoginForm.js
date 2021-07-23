import React, { useState } from 'react'

function LoginForm() {
    const defaultFormValues = {
        email: "",
        password: "",
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
        const res = await fetch("http://localhost:4000/api/sessions/sign_in", {
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
                <h1>Login</h1>
                <label>Email :</label><br/><input name='email' type="text" value={formValues.email} onChange={handleChange} placeholder="Email..." /><br />
                <label>Password :</label><br/><input name='password' type="text" value={formValues.password} onChange={handleChange} placeholder="Password..." /><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default LoginForm
