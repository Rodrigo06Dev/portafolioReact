import React from 'react'
import '../styles/about.css'
import { useTranslation } from "react-i18next";

const About = ({theme}) => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className='about__container' data-theme={theme}>
      <div className="about__container-text">
        <p>{t("about.p1")}</p>
        <br />
        <div className='container__pcenter'>
          <p className='pcenter'>{t("about.p2")}</p>
        </div>
        <br />
        <p>{t("about.p3")}</p>
        <br />
        <p>{t("about.p4")}</p>
        <br />
        <p>{t("about.p5")}</p>
      </div>
    </div>
  )
}

export default About