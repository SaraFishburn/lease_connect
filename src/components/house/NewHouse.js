import ImageUpload from '../image/ImageUpload'
import "./styles.scss"

function NewHouse(props) {

    console.log(props.url)

    return (
        <div class="formDiv">
            <form onSubmit={props.handleSubmit}>
            <h1>{`${props.action}`}</h1>
                <label>Title :</label>
                <input 
                    name='title' 
                    type="text" 
                    value={props.formValues.title} 
                    onChange={props.handleChange} 
                    placeholder={`${props.formValues.title != "" ? `${props.formValues.title}` : ""}`}/>

                <label>Address :</label>
                <input 
                    name='address' 
                    type="text" 
                    value={props.formValues.address}
                    onChange={props.handleChange} 
                    placeholder={`${props.formValues.address != "" ? `${props.formValues.address}` : ""}`} />

                <ImageUpload setUploadImage={props.setUploadImage} url={props.url}/>

                {props.children}
                <input type="submit" value={`${props.action}`} />

            </form>
        </div>
    )
}

export default NewHouse