import { Icon } from '@iconify/react';
import documentIcon from '@iconify-icons/carbon/document';

import './styles.scss'

const DocumentCard = (props) => {
  return (
    <div className="document-card" onClick={() => window.location.href = props.document_url} >
      <h1>{props.title}</h1>
      <Icon icon={documentIcon} className="doc-icon" color="#2A2B77"/>
    </div>
  )
}

export default DocumentCard
