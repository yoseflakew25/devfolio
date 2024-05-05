import uniqid from 'uniqid'
import projects  from './projects'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'
import Button from '../UI/Button'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects mt-32'>
<h2 className='section__title underline underline-offset-8 mb-16'><span className='rollno'>06. Other Noteworthy Projects</span></h2>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
      <div className='flex justify-center my-16'>
      <Button text='Check out more projects' />

      </div>
    </section>
  )
}

export default Projects
