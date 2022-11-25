import React from 'react'
import '../styles/navInfo.css'
import { useTranslation } from "react-i18next";

const NavInfo = ({show, theme}) => {
  const [t, i18n] = useTranslation("global");
  return (
    <div data-theme={theme} className={`nav__info ${show === 1 ? 'show' : ''}`} >
      <div className='nav__info-about'>
          <h3 className='nav__info-title m-bottom'>{t("navinfo.title")}</h3>
          <span className='m-bottom'>{t("navinfo.span")}</span>
          <ul className='nav__info-list m-bottom'>
              <li className='nav__info-item'> — {t("navinfo.li1")}</li>
              <li className='nav__info-item'> — {t("navinfo.li2")}</li>
              <li className='nav__info-item'> — Scrum</li>
              <li className='nav__info-item'> — FullStack Dev (JS | React | SQLServer | HTML | CSS | GIT | .NET)</li>
          </ul>
        </div>
        <h3 className='nav__info-title m-bottom'>{t("navinfo.contact")}</h3>
        <ul className='info__contact m-bottom'>
            <li><span>Telf: +527341687879</span></li> 
            <li><span>Email: rodrigouribe061290@gmail.com</span></li>
        </ul>
    </div>
  )
}

export default NavInfo