import React from 'react';
import './Experiance.css';

const TimelineItem = ({ title, date, organization, description }) => (
  <li className="timeline-item">
    <h4 className="h4 timeline-item-title text-[#64FFDA] mb-4">{title}</h4>
    {organization && <p className="timeline-text mb-2" style={{ color: "blanchedalmond" }}>{organization}</p>}
    <span style={{ color: "blanchedalmond" }}>{date}</span>
    <p className="timeline-text mt-4 mb-8">{description}</p>
  </li>
);

const Experiance = () => {
  return (
    <article className="resume mx-8 lg:mx-80 pb-16 pt-32" id='experinace'>
      <h2 className='section__title underline underline-offset-8'><span className='rollno'>03. Education & Experience</span></h2>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3 text-[#64FFDA]">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="BACHELOR OF SCIENCE IN SOFTWARE ENGINEERING"
            date="2019 — 2024"
            organization="Addis Ababa Science and Technology University, AA."
            description=""
          />
          <TimelineItem
            title="AWS Cloud Practitioner by ALX"
            date="2024 —"
            organization="ALX"
            description="ALX is an Amazon Web Services (AWS) Academy member institution. This programme is developed and maintained by AWS, a world leader in cloud technologies."
          />
          <TimelineItem
            title="Data Structure and Algorithm"
            date="2015 — 2016"
            organization="Africa to Silicon Valley (A2SV) Organization"
            description="A2SV is a social enterprise that enables high-potential university students to create digital solutions to Africa's most pressing problems."
          />
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="code-working-outline"></ion-icon>
          </div>
          <h3 className="h3 text-[#64FFDA]">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Web Developer"
            date="03/2025 – present"
            organization="Akil LLC, Addis Ababa, Ethiopia"
            description={
              <>
                • Implemented secure user authentication using JWT access and refresh tokens, enhancing system security by approximately 40%.<br/>
                • Conducted 15+ user interviews to uncover user pain points and preferences, leading to the development of 5 new features that significantly improved website usability and overall functionality.<br/>
                • Designed and deployed 10+ new features and functionalities, contributing to a more robust and user-friendly platform experience.
              </>
            }
          />
          
          <TimelineItem
            title="UI/UX Designer and Front-End Developer"
            date="11/2024 – present"
            organization="DossieScholar, Addis Ababa, Ethiopia"
            description={
              <>
                • Played a key role in designing and developing the user interface and experience for DossieScholar — a digital platform that centralizes and digitizes research papers from Ethiopian universities using advanced LLM-powered text extraction and Agentic RAG technology.<br/>
                • Created a clean, intuitive, responsive UI using Next.js, Tailwind CSS, and Vercel, improving user engagement and accessibility.<br/>
                • Built key site features highlighting DossieScholar's offerings such as AI-powered retrieval, efficient digitization, and searchable academic databases.<br/>
                • Collaborated with the backend development team to deploy fast, secure, and scalable solutions tailored for students, researchers, and academic institutions.
              </>
            }
          />
          
          <TimelineItem
            title="Technical support and assistant"
            date="08/2024 – 01/2025"
            organization="Golden Visa Solutions - Airsun Trading PLC, Addis Ababa, Ethiopia"
            description={
              <>
                • Provided technical support and maintenance for the Visa Applicants Management System.<br/>
                • Troubleshoot issues, assisted users, and ensured smooth daily operations.<br/>
                • Identified bugs, applied minor fixes, and escalated complex problems.<br/>
                • Collaborated with operations to maintain secure, up-to-date applicant records.<br/>
                • Helped improve internal workflows and enhance the digital experience.
              </>
            }
          />
          
          <TimelineItem
            title="Software Developer Intern – UI/UX Designer & Web Developer"
            date="07/2023 – 10/2023"
            organization="Eskalate (by A2SV), Addis Ababa, Ethiopia"
            description={
              <>
                • Collaborated with the Eskalate team to design and develop a modern, responsive web platform connecting businesses with top-tier offshore software developers.<br/>
                • Led the UI/UX design process for core pages including Home, Our Services, About, Success Stories, and Contact, ensuring consistent branding, intuitive navigation, and an engaging user experience.<br/>
                • Designed and implemented dynamic web interfaces using modern front-end frameworks, prioritizing performance, scalability, and accessibility.<br/>
                • Worked with developers and stakeholders to deliver features like talent discovery, project initiation flows, and developer showcases, boosting user engagement and conversion rates.
              </>
            }
          />
          
          <TimelineItem
            title="Full-Stack Developer"
            date="07/2022 – 12/2022"
            organization="Ethiopian Rock-Library Website, Addis Ababa, Ethiopia"
            description={
              <>
                • Developed a public dataset platform for Ethiopian mineral rocks using Vue.js and Node.js.<br/>
                • Simplified researcher uploads and access, boosting data submissions by 50%.<br/>
                • Improved workflow efficiency by 30% through optimized data handling.<br/>
                • Built a responsive, scalable, and user-friendly system for academic use.
              </>
            }
          />
        </ol>
      </section>
    </article>
  );
}

export default Experiance;