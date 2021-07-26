import React, { useEffect, useState, useRef } from 'react'
import "./styles.scss"

import { Icon } from '@iconify/react';
import bxImageAdd from '@iconify-icons/bx/bx-image-add';
import editIcon from '@iconify-icons/akar-icons/edit';



const ImageUpload = (props) => {
    const [image, setImage ] = useState("");
    const [previewURL, setPreviewURL] = useState(props.url)
    const inputRef = useRef()

    useEffect(() => {
        setPreviewURL(props.url)
    }, [props.url])

    useEffect(() => {
        if(image === "") {
            return
        }
        setPreviewURL(URL.createObjectURL(image))
    }, [image])

    useEffect(() => {
        if(!props.setUploadImage) return

        props.setUploadImage(_ => uploadImage)
    }, [image, props.setUploadImage, previewURL])

    function uploadImage() {
        if(image === "" && !previewURL) {
            return new Promise((_, rej) => rej("No Image Supplied! :'("))
        }
        if(previewURL) {
            return new Promise(res => res(previewURL))
        } else {
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
                            e.target.files[0] != undefined && (
                                setImage(e.target.files[0])
                            )
                        }}>
                    </input>
                    <span>Click to upload image</span>
            </div>
            <div class={`image-preview ${previewURL ? "preview-background" : ""}`}>
                <img src={previewURL} height="125%"/>
            </div>

            {
                previewURL && (
                    <div className="edit-image">
                        <Icon icon={editIcon} className="edit-icon" color="#2A2B77" />
                    </div>
                )
            }
        </div>
    )
}

export default ImageUpload;