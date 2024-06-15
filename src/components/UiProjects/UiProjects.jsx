import { useState } from "react";
import testimonals from "./data";
import Button from "../UI/Button";

const UiProjects = () => {


  const handleClickAnimation = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 500);
  };

  const handleSubjectClick = (key) => {
    setSubject(key);
    handleClickAnimation();
  };

  return (
    <div className='flex flex-col gap-4 mx-32 my-16 items-center justify-center'>
      <h2 className='section__title underline underline-offset-8 mb-8'><span className='rollno'>05. UI / UX Design Projects</span></h2>

      <div className='flex flex-wrap gap-4 items-center mx-2 md:mx-0 justify-center'>
        {Object.keys(testimonals).map((key) => (
          <Button text={key} key={key}  onClick={() => handleSubjectClick(key)} />
        ))}
      </div>
     
      <div className='flex flex-col gap-4'>
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center my-4 px-16 py-4`}>
          <img src="https://global.toyota/pages/news/images/2023/06/21/1330/20230621_01_01_s.jpg" alt="" className="rounded-xl" />
          <div className='flex flex-col items-start justify-start'>
            <h3 className='font-bold text-primary-500 mb-8 text-['>
              Fetena.com's Integrated exam tools for your subjects include:
            </h3>
            <p className='flex flex-col items-start justify-start'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta eius laborum mollitia pariatur tempore harum quae quia quos non, repellendus quidem tempora ullam eos aspernatur? Libero veritatis labore eum quasi!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cum sunt necessitatibus omnis recusandae ipsum porro, reiciendis, natus inventore dolores et esse suscipit harum rerum laboriosam corporis non perferendis quia!
            </p>
          </div>
        </div>
        <div className='flex gap-4 items-center justify-center mt-8'>
          <Button text='view more on figma'/>
        </div>
      </div>
    </div>
  );
};

export default UiProjects;
