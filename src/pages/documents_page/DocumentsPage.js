import { useState, useEffect } from "react"
import {
  Link,
} from "react-router-dom";

import DocumentCard from "../../components/documents/DocumentCard"
import CardContainer from "../../components/card_container/CardContainer"
import './styles.scss'

const DocumentsPage = () => {

  const [documents, setDocuments] = useState([])

  const placeholderDocuments = [
    {
      id: '1',
      title: 'document1' 
    },
    {
      id: '2',
      title: 'document2' 
    },
    {
      id: '3',
      title: 'document3' 
    },
    {
      'id': '4',
      title: 'document4' 
    },
    { 
      id: '5',
      title: 'document5' 
    }
  ]

  useEffect(() => {
    setDocuments(placeholderDocuments)
  })

  return (
    <div className="documents-page">
      <h1>Documents</h1>
      <CardContainer>
      {documents.map(document => (
          <Link to={`/documents/view/${document.id}`}><DocumentCard {...document} /></Link>
        ))}
      </CardContainer>
    </div>
  )
}

export default DocumentsPage
