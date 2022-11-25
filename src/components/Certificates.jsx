import React from 'react'
import '../styles/certificates.css'

const Certificates = ({name, img, urlDomain}) => {
  return (
    <div className='card__certificate'>
      <a href={urlDomain} target='__blank'>
        <img className='card__certificate-img' src={img} alt={name} />
      </a>
    </div>
  )
}

export default Certificates