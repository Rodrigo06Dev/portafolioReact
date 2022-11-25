import React from 'react'
import '../styles/cardinfo.css'
import picture from '../assets/picture.png'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import { AiFillGithub } from 'react-icons/ai'
import { BiMap } from 'react-icons/bi'
import { FiMail } from 'react-icons/fi'
import { BsWhatsapp } from 'react-icons/bs'
import { useTranslation } from "react-i18next";

const CardInfo = ({theme}) => {
  const [t, i18n] = useTranslation("global");
  return (
    <article className='card__info'>
      <div className='card__img'>
        <img src={picture} alt="" />
      </div>
      <div className='lenguage'>
          <img className='spain' onClick={() => i18n.changeLanguage("es")} src="../img/spain.svg"/>
          <img className='usa' onClick={() => i18n.changeLanguage("en")} src="../img/unitedstates.svg"/>
        </div>
        
        <h1 className='card__title' >Rodrigo Uribe</h1>
        <ul >
          <li className='card__description'>{t("preload.span")} (JS | React | HTML | CSS | SQLServer | C# | .Net)</li>
          <li className='card__email'>rodrigouribe061290@gmail.com</li>
        </ul>
<div className='card__icons'>
            <a data-theme={theme} className='icon__linkedin' href="https://www.linkedin.com/in/rodrigo-uribe-580807247/" target="_blank"><TiSocialLinkedinCircular/></a>
            <a data-theme={theme} className='icon__gitHub' href="https://github.com/Rodrigo06Dev" target="_blank"><AiFillGithub/></a>
            
        </div>
        <div className='card__ubication'>
        <BiMap/>
          <p>Mexico City</p>
        </div>

        <div className='card__button'>
        <a href="mailto:rodrigouribe061290@gmail.com" target="blank"><button className='btn__mail card__btn'>
                <FiMail/>
            </button></a>
        <a href="https://wa.link/mn6pz1" target="blank"><button className='btn__wpp card__btn'>
                <BsWhatsapp/>
            </button></a>
        </div>
    </article>
  )
}

export default CardInfo