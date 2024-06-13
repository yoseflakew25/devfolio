import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import './FeatureSection.css'; // Import CSS file
import imgSrc from '../../assets/mypic.jpg'

const FeatureSection = () => {
  const featuresData = {
    title: "About Me",
    description: "Our company is dedicated to helping landlords and property developers to rent and sell out their properties. If you want to save time and money, while expanding, you might want to be interested in our professional services. Our company could be your ideal partner for renting or selling your property. We are committed to our customers and promoters, and our main objective is to be transparent while achieving results.",
    btnLink: "https://www.linkedin.com/in/yosef-lakeww/",
    btnLabel: "Visit My LinkedIn",
   
  };

  const { title, description, btnLink, btnLabel } = featuresData;

  return (
    <div className="feature-section-container group " id='aboutme' >
      <div className="feature-section-content">
        <div className="md:p-8 rounded-2xl flex-col flex md:flex-row gap-8 md:gap-16 justify-center items-center">
          <div className="feature-section-text">
            <h2 className='section__title underline underline-offset-8'><span className='rollno'>01. {title}</span></h2>
            <p className="feature-section-description">{description}</p><br />
            <p className="feature-section-description">{description}</p>
            {/* If you want to display description twice, you can duplicate the paragraph */}
            {/* <p className="feature-section-description">{description}</p> */}
          </div>
          <div className="feature-section-image">
            <img
              src={imgSrc}
              alt="image"
              loading="lazy"
              className='group-hover:scale-105 transition-all ease-in-out duration-300'
            />
          </div>
        </div>
        <div className='flex justify-center my-8'>
          <Link to={btnLink} target='_blank'>
            <Button text={btnLabel} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
