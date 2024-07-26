import React, { useState } from 'react';
import Button from "../UI/Button";
import { Icon } from "@iconify/react";
import crm from '../../assets/projects/crm.png';
import eskalate from '../../assets/projects/eskalate.png';
import job from '../../assets/projects/job portal.png';
import events from '../../assets/projects/events.png';
import brana from '../../assets/projects/brana.png';
import purple from '../../assets/projects/purple.png';
import cloud from '../../assets/projects/cloud.png';
import education from '../../assets/projects/education.png';

const UiProjects = () => {
  const projects = [
    {
      id: 1,
      title: "CRM Platform Design",
      description: "The CRM platform design focuses on a seamless and user-friendly experience, emphasizing efficient contact management, dynamic email integration, and enhanced team collaboration. The interface is intuitive, with clear navigation and visually appealing elements that guide users through key functionalities such as task assignment and tracking, email communication, and contact organization. The design prioritizes ease of use and accessibility, ensuring that users can effortlessly manage their customer relationships and improve their workflow productivity.",
      imgSrc: crm,
      figmaLink: "https://www.figma.com/design/pfeOEdqjWsPEeDtAHb8ATD/CRM?node-id=14609-3&t=Vlo9FSPS7dPUYpF8-1",
      livePreviewLink: "https://www.figma.com/proto/pfeOEdqjWsPEeDtAHb8ATD/CRM?page-id=14609%3A3&node-id=14896-22909&viewport=407%2C138%2C0.02&t=cGB6OgCl7kJuFWLF-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=14896%3A22734"
    },
    {
      id: 2,
      title: "Company Website Design For A2SV",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta eius laborum mollitia pariatur tempore harum quae quia quos non, repellendus quidem tempora ullam eos aspernatur? Libero veritatis labore eum quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cum sunt necessitatibus omnis recusandae ipsum porro, reiciendis, natus inventore dolores et esse suscipit harum rerum laboriosam corporis non perferendis quia!",
      imgSrc: eskalate,
      figmaLink: "https://www.figma.com/design/5bQ0qNXLfP5538NdO8kSah/Eskalate?node-id=3-1040&t=5CiJpeMnApstlZQK-1",
      livePreviewLink: "https://www.figma.com/proto/5bQ0qNXLfP5538NdO8kSah/Eskalate?page-id=3%3A1040&node-id=115-1963&viewport=650%2C-203%2C0.07&t=0PINXblsLCqYw2G4-1&scaling=min-zoom&content-scaling=fixed"
    },
    {
      id: 3,
      title: "Job Finding Portal Website Design",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta eius laborum mollitia pariatur tempore harum quae quia quos non, repellendus quidem tempora ullam eos aspernatur? Libero veritatis labore eum quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cum sunt necessitatibus omnis recusandae ipsum porro, reiciendis, natus inventore dolores et esse suscipit harum rerum laboriosam corporis non perferendis quia!",
      imgSrc: job,
      figmaLink: "https://www.figma.com/design/PRGsKA4KITU5IacE59klky/JobPort%3A-A-solution-for-connecting-talent-with-business?node-id=501-49194&t=jBvV3NZ6oIoFgVHN-1",
      livePreviewLink: "https://www.figma.com/proto/PRGsKA4KITU5IacE59klky/JobPort%3A-A-solution-for-connecting-talent-with-business?page-id=501%3A49194&node-id=501-49195&viewport=526%2C366%2C0.52&t=Qbq1kAN5tk9v7k0w-1&scaling=contain&content-scaling=fixed"
    },
    {
      id: 4,
      title: "Events Booking App UI Design",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta eius laborum mollitia pariatur tempore harum quae quia quos non, repellendus quidem tempora ullam eos aspernatur? Libero veritatis labore eum quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cum sunt necessitatibus omnis recusandae ipsum porro, reiciendis, natus inventore dolores et esse suscipit harum rerum laboriosam corporis non perferendis quia!",
      imgSrc: events,
      figmaLink: "https://www.figma.com/design/5IcBUCt3Pq8uGG9QvidtbW/Event-Booking-App?node-id=1-4&t=CZbpmugemWnhW5O8-1",
      livePreviewLink: "https://www.figma.com/proto/5IcBUCt3Pq8uGG9QvidtbW/Event-Booking-App?page-id=1%3A4&node-id=14-1576&viewport=298%2C151%2C0.13&t=oGlYBHqHtqsu2oSi-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=14%3A1576&show-proto-sidebar=1"
    },
    {
      id: 5,
      title: "Education App UI Design",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta eius laborum mollitia pariatur tempore harum quae quia quos non, repellendus quidem tempora ullam eos aspernatur? Libero veritatis labore eum quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cum sunt necessitatibus omnis recusandae ipsum porro, reiciendis, natus inventore dolores et esse suscipit harum rerum laboriosam corporis non perferendis quia!",
      imgSrc: education,
      figmaLink: "https://www.figma.com/design/7jonxT3eXUwBs7k49T5t4p/TimirtBet-Wireframe-and-Ui-Design-Prototype?node-id=1395-2655&t=bWBglTpAuRntF99i-1",
      livePreviewLink: "https://www.figma.com/proto/7jonxT3eXUwBs7k49T5t4p/TimirtBet-Wireframe-and-Ui-Design-Prototype?page-id=1395%3A2655&node-id=1395-3339&viewport=526%2C365%2C0.15&t=XN7x7YkFARZRoHmX-1&scaling=min-zoom&content-scaling=fixed"
    },

    {
      id: 6,
      title: "Brana : A Bookstore App UI Design",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta eius laborum mollitia pariatur tempore harum quae quia quos non, repellendus quidem tempora ullam eos aspernatur? Libero veritatis labore eum quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cum sunt necessitatibus omnis recusandae ipsum porro, reiciendis, natus inventore dolores et esse suscipit harum rerum laboriosam corporis non perferendis quia!",
      imgSrc: brana,
      figmaLink: "https://www.figma.com/design/DgRNtq3OzP4pwxamFYl5yw/Brana---Books-Mobile-App?node-id=3861-5106&t=i1I6QRt45uZMOhEL-1",
      livePreviewLink: "https://www.figma.com/proto/DgRNtq3OzP4pwxamFYl5yw/Brana---Books-Mobile-App?page-id=3861%3A5106&node-id=4044-3006&viewport=443%2C-286%2C0.52&t=LTCuO0lIDQXPMALF-1&scaling=contain&content-scaling=fixed&starting-point-node-id=4044%3A3006"
    },

    {
      id: 7,
      title: "Fitness Tracking App UI Design",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta eius laborum mollitia pariatur tempore harum quae quia quos non, repellendus quidem tempora ullam eos aspernatur? Libero veritatis labore eum quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cum sunt necessitatibus omnis recusandae ipsum porro, reiciendis, natus inventore dolores et esse suscipit harum rerum laboriosam corporis non perferendis quia!",
      imgSrc: purple,
      figmaLink: "https://www.figma.com/design/bNamFmAF8srjOkcUuJ9KRv/Assesment-Yosef-Lakew?node-id=0-1&t=xEussVUDtrpCET96-1",
      livePreviewLink: "https://www.figma.com/proto/bNamFmAF8srjOkcUuJ9KRv/Assesment-Yosef-Lakew?page-id=0%3A1&node-id=3-19873&viewport=14%2C4091%2C0.38&t=fxJBMxrtHe5tfAXs-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3%3A19873"
    },

    {
      id: 8,
      title: "Cloud Storage App UI Design",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta eius laborum mollitia pariatur tempore harum quae quia quos non, repellendus quidem tempora ullam eos aspernatur? Libero veritatis labore eum quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cum sunt necessitatibus omnis recusandae ipsum porro, reiciendis, natus inventore dolores et esse suscipit harum rerum laboriosam corporis non perferendis quia!",
      imgSrc: cloud,
      figmaLink: "https://www.figma.com/design/gGIoxd1PaAs7kM0LjNpWzb/dribbox-online-cloud-storage?node-id=0-1&t=IB8MRNGv9QrOvEms-1",
      livePreviewLink: "https://www.figma.com/proto/gGIoxd1PaAs7kM0LjNpWzb/dribbox-online-cloud-storage?page-id=0%3A1&node-id=0-299&viewport=329%2C365%2C0.34&t=DBokNo0MBjTC9heS-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=0%3A299"
    }


    // Add more projects as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  const currentProject = projects[currentIndex];

  return (
    
    <div className='flex flex-col gap-4 mx-32 pt-32 pb-16 items-center justify-center' id="ui-projects">
      <h2 className='section__title underline underline-offset-8 mb-8'>
        <span className='rollno'>05. UI / UX Design Projects</span>
      </h2>
      <div className='flex items-center justify-center'>
        <Icon
          icon="gg:arrow-left-r"
          className="text-[14rem] cursor-pointer text-[#64FFDA] hover:text-white"
          onClick={handlePrevClick}
        />
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center my-4 px-16 py-4'>
          <a href={currentProject.figmaLink} target='_blank'>

          <img src={currentProject.imgSrc} alt="" className="rounded-xl" />
          </a>
          <div className='flex flex-col items-start justify-start'>
            <h3 className='font-bold text-primary-500 mb-8 text-[#64FFDA]'>
              {currentProject.title}
            </h3>
            <p className='flex flex-col items-start justify-start'>
              {currentProject.description}
            </p>
            <div className='flex gap-4 items-center justify-center mt-8'>
            <a href={currentProject.figmaLink} target='_blank'><Button text='Figma file'  /> </a>
            <a href={currentProject.livePreviewLink} target='_blank'>  <Button text='Live Preview' link={currentProject.livePreviewLink} /> </a>
            </div>
          </div>
        </div>
        <Icon
          icon="gg:arrow-right-r"
          className="text-[14rem] cursor-pointer text-[#64FFDA] hover:text-white"
          onClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default UiProjects;
