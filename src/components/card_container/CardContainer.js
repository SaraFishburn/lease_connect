import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import caretDown from '@iconify-icons/ci/caret-down';
import caretRight from '@iconify-icons/ci/caret-right';
import './styles.scss'

const CardContainer = (props) => {

  const [collapseDiv, setCollapseDiv] = useState(false)

  return (
    <div className={`container ${collapseDiv ? "collapse" : ""}`}>
      <div 
        className="heading"
        onClick={() => {setCollapseDiv(val => !val)}}>
          {`${props.heading}`}
          {
            props.uploadIcon &&
            <div 
              className="upload-button"
              onMouseEnter={() => props.setUploadHover(true)}
              onMouseLeave={() => props.setUploadHover(false)}
              onClick={() => {
                props.handleClick()
                setCollapseDiv(val => !val)}}>
              {props.uploadIcon}
              Upload
            </div>
          }
        {
          collapseDiv ? 
          <Icon icon={caretRight} className="dropdown-icon" color="#2A2B77" />
          :
          <Icon icon={caretDown} className="dropdown-icon" color="#2A2B77" />
        }
      </div>
      {props.children}
    </div>
  )
}

export default CardContainer
