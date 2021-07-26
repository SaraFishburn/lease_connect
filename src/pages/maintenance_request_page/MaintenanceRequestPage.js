import React, {useState} from 'react'
import {MaintenanceRequest} from "../../components/maintenance_request/MaintenanceRequest";
import API, {request} from "../../helpers/api";


export const MaintenanceRequestPage = () => {
    const [uploadImage, setUploadImage] = useState(() => () => {})

    const defaultFormValues = {
        title: "",
        description: "",
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
                API.request("maintenances", {
                    method: "POST",
                    data: {...formValues, image_url: url},
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
            })
            .catch(err => console.log(err))
        setFormValues(defaultFormValues)
    }

    return (
        <MaintenanceRequest
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            formValues={formValues}
            setUploadImage={setUploadImage}
            action={"Create Property"} />
    )
}

export default MaintenanceRequestPage
