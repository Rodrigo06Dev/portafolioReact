import React from 'react'
import certificates from '../json/certificates.json'
import Certificates from './Certificates'


const ListCertificates = () => {
  return (
    <section className='container__certificates'>
        {
          certificates.map(certificate => (
            <Certificates
            key = {certificate.name}
            name = {certificate.name} 
            img = {certificate.img}
            urlDomain = {certificate.urlDomain}
            />
          ))
          }
    </section>
  )
}

export default ListCertificates