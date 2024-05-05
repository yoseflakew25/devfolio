import React from 'react';
import Projects from './Projects';
import Projects2 from './Projects2';
import aurora from '../../assets/projects/Aurora.jpg';

const MainProjects = () => {
  const projects = [
    {
      projectUrlLink: "https://notion-clone-yosef-coder.vercel.app/",
      projectGithubRepo: "https://github.com/example/project",
      projectImage: aurora,
      projectTitle: "Sample Project",
      projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel ex sit amet nisi ullamcorper tristique.",
      projectTechStack: ["React", "Node.js", "Express"],
      odd: true,
    },
    {
      projectUrlLink: "#",
      projectGithubRepo: "https://github.com/example/project",
      projectImage: aurora,
      projectTitle: "Sample Project",
      projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel ex sit amet nisi ullamcorper tristique.",
      projectTechStack: ["React", "Node.js", "Express"],
      odd: false,
    },
    {
      projectUrlLink: "#",
      projectGithubRepo: "https://github.com/example/project",
      projectImage: aurora,
      projectTitle: "Sample Project",
      projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel ex sit amet nisi ullamcorper tristique.",
      projectTechStack: ["React", "Node.js", "Express"],
      odd: true,
    },
  ];

  return (
    <div className='mt-32' id='projects'>
      <h2 className='section__title underline underline-offset-8 mb-16'><span className='rollno'>04. Projects</span></h2>
      <div className='flex flex-col gap-8 pl-64 pr-16'>
        {projects.map((project) => {
          return project.odd ? <Projects key={project.projectTitle} project={project} /> : <Projects2 key={project.projectTitle} project={project} />;
        })}
      </div>
    </div>
  );
};

export default MainProjects;
