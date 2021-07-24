import React, { useEffect, useState, useRef } from 'react'
import "./styles.scss"

import { Icon } from '@iconify/react';
import bxImageAdd from '@iconify-icons/bx/bx-image-add';
import editIcon from '@iconify-icons/akar-icons/edit';



const ImageUpload = (props) => {
    const [image, setImage ] = useState("");
    const [previewURL, setPreviewURL] = useState(props.URL || '')
    const inputRef = useRef()

    useEffect(() => {
        if(image === "") {
            return
        }
        setPreviewURL(URL.createObjectURL(image))
    }, [image])

    useEffect(() => {
        if(!props.setUploadImage) return

        props.setUploadImage(_ => uploadImage)
    }, [image, props.setUploadImage])

    function uploadImage() { 
        if(image === "") {
            return new Promise((_, rej) => rej("No Image Supplied! :'("))
        }
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", process.env.REACT_APP_IMAGE_PRESET )
        data.append("cloud_name", process.env.REACT_APP_IMAGE_ACCOUNT )
        return fetch( process.env.REACT_APP_IMAGE_FETCH , {
            method:"post",
            body: data
        })
        .then(res => res.json())
        .then(image_data => image_data.url)
    }

    return (
        <div class="image-div">
            <div 
                class={ `image-upload ${image === "" ? "upload-mode" : ""}`} 
                onClick={() => inputRef.current.click()}>

                    <Icon icon={bxImageAdd} className="image-icon" color="#2A2B77"/>
                    <input
                        ref={inputRef}
                        class="image-upload-input" 
                        type="file" 
                        onChange={(e)=> {
                            setImage(e.target.files[0])
                            console.log('changed image')
                        }}>
                    </input>
                    <span>Click to upload image</span>
            </div>
            <div class={`image-preview ${image != "" ? "preview-background" : ""}`}>
                <img src={previewURL} height="125%"/>
            </div>

            {
                image != "" && (
                    <div className="edit-image">
                        <Icon icon={editIcon} className="edit-icon" color="#2A2B77" />
                    </div>
                )
            }
        </div>
    )
}

export default ImageUpload;