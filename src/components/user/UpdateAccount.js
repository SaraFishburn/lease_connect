import React, { useState, useEffect } from 'react'
import API from '../../helpers/api';
import './styles.scss'

function UpdateAccount(props) {
    
    const defaultFormValues = {
        name: props.user.name,
        email: props.user.email,
        password: "",
        phone_number: props.user.phone_number,
    }
    const [formValues, setFormValues] = useState(defaultFormValues)
    const [roleName, setRoleName] = useState('')

    useEffect(() => {
        if(props.user.role_name === undefined){return}
        let role = props.user.role_name
        role = role.split(' ')
        role[0] = role[0].charAt(0).toUpperCase() + role[0].slice(1)
        if(role.length > 1){
            role[1] = role[1].charAt(0).toUpperCase() + role[1].slice(1)
        }
        setRoleName(role.join(' '))
    }, [props.user])

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
        .then(alert(`${formValues.name} account updated!`))
        setFormValues(defaultFormValues)
    }

    return (
        <div class="formDiv my-account-div">
            <form onSubmit={handleSubmit}>
                <h1>My {roleName} Account</h1>
                <label>Name :</label><input name='name' type="text" value={formValues.name} onChange={handleChange} />
                <label>Email :</label><input name='email' type="text" value={formValues.email} onChange={handleChange} />
                <label>Phone :</label><input name='phone_number' type="text" value={formValues.phone_number} onChange={handleChange} />
                <input type="submit" value="Update Details" />
            </form>
        </div>
    )
}

export default UpdateAccount
