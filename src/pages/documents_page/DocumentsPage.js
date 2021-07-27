import { useState, useEffect } from "react"
import {
  Link,
} from "react-router-dom";

import DocumentCard from "../../components/documents/DocumentCard"
import CardContainer from "../../components/card_container/CardContainer"

import API from "../../helpers/api";
import './styles.scss'

const DocumentsPage = (props) => {

  const [documents, setDocuments] = useState([])

  useEffect(() => {
    console.log(props)
    if(!props.id) return

    API.request(`houses/${props.id}/documents`)
    .then(res => setDocuments(res.data))
  }, [props.id])


  return (
    <div className="documents-page">
      <h1>Documents</h1>
      <CardContainer>
        {documents.map((_, i) => (
            <DocumentCard {...documents[documents.length - 1 - i]} />
        ))}
      </CardContainer>
    </div>
  )
}

export default DocumentsPage
