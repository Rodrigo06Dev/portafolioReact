import projects from '../json/projects.json'
import CardProject from './CardProject'
import '../styles/listproject.css'



const ListProject = () => {


  return (
    <section className='container__projects'>
          {
          projects.map(project => (
            <CardProject 
            key = {project.name}
            name = {project.name} 
            img = {project.img}
            domain = {project.urlDomain}
            description = {project.description}        
            />
          ))
          }
    </section>
  )
}

export default ListProject