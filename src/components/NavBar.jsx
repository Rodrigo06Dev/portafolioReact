import React from 'react'
import '../styles/navBar.css'
import { useTranslation } from "react-i18next";


const NavBar = ({handleShow}) => {
  const [t, i18n] = useTranslation("global");
  return (
    <ul className='list__menu'>
        <li className='list__menu-li menu__info' onClick={() => handleShow(1)}>Info</li>
        <li className='list__menu-li' onClick={() => handleShow(2)}>{t("navbar.li2")}</li>
        <li className='list__menu-li' onClick={() => handleShow(3)}>{t("navbar.li3")}</li>
        <li className='list__menu-li' onClick={() => handleShow(4)}>About</li>
    </ul>
  )
}

export default NavBar