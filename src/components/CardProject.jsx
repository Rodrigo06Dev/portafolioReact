import React from 'react'
import '../styles/cardproject.css'
import { MdRemoveRedEye } from 'react-icons/md';


const CardProject = ({name, img, domain, description}) => {
  

  return (
    
    <article className='card__project' style={{backgroundImage: `url(${img})`}}>
      <div className='card__content'>
        <div className='content_titles'>
          <h2 className='card__title'>{name}</h2>
          <span>{description}</span>
        </div>
          <div className='content__icons'>
          <a className='card__link' href={domain} target="_blank"><MdRemoveRedEye/></a>
          </div>          
       </div>
    </article>

  )
}

export default CardProject