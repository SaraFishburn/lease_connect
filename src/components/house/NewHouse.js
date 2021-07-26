import ImageUpload from '../image/ImageUpload'
import "./styles.scss"

function NewHouse(props) {

    return (
        <div class="formDiv">
            <form onSubmit={props.handleSubmit}>
            <h1>Create Property</h1>
                <label>Title :</label><input id='title' name='title' type="text" value={props.formValues.title} onChange={props.handleChange} placeholder="Property Title..." /><br />
                <label>Address :</label><input id='address' name='address' type="text" value={props.formValues.address} onChange={props.handleChange} placeholder="Property Address..." /><br />
                <ImageUpload setUploadImage={props.setUploadImage}/>
                <input type="submit" value="Create Property" />
            </form>
        </div>
    )
}

export default NewHouse