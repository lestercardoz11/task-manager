import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from '../icons/Arrows';

const Testimonials = () => {
  const [counter, setCounter] = useState(0);

  const data = [
    {
      image: './images/TM-User1-profile.png',
      name: 'Edward Newgate',
      designation: 'Sales And Marketing',
      quote:
        '"Our dedicated task management app and web portal allows us to access information instantaneously and securely"',
    },
    {
      image: './images/TM-User2-profile.jpg',
      name: 'John Smith',
      designation: 'HR',
      quote: '"It really helped optimize our onboarding process"',
    },
    {
      image: './images/TM-User3-profile.jpg',
      name: 'Kevin James',
      designation: 'Project Management',
      quote: '"We no longer miss our deadlines!"',
    },
  ];

  const prev = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const next = () => {
    if (counter < data.length - 1) {
      setCounter(counter + 1);
    }
  };

  return (
    <section id='testimonials'>
      <div className='container mx-auto px-8 lg:px-48'>
        <div className='w-full mt-12 mb-6 flex flex-col items-center bg-gradient-to-bl from-gradient-light to-gradient-dark rounded-2xl'>
          <h1 className='header main-white text-lg lg:text-3xl font-extrabold text-white'>
            What our users are saying
          </h1>
          <div className='w-full px-8 lg:px-24 pt-8 pb-16 flex flex-col lg:flex-row'>
            <div className='flex flex-col lg:flex-row items-center w-full lg:w-1/2 mb-6'>
              <div className='w-28 h-28 bg-white rounded-full overflow-hidden border-4 border-white'>
                <img
                  className='w-full object-contain'
                  src={data[counter].image}
                  alt=''
                />
              </div>
              <div className='flex flex-col lg:ml-8'>
                <p className='mt-2 text-lg font-bold text-white text-center lg:text-left'>
                  {data[counter].name}
                </p>
                <p className='mt-2 text-sm text-white text-center lg:text-left'>
                  {data[counter].designation}
                </p>
              </div>
            </div>
            <div className='w-full lg:w-1/2 flex items-center'>
              <p className='text-white lg:pl-6 text-center lg:text-left'>
                {data[counter].quote}
              </p>
            </div>
          </div>
        </div>
        <div className='flex justify-between items-center w-48 mx-auto pb-16'>
          <button
            className={
              counter === 0 ? 'text-primary opacity-40' : 'text-primary'
            }
            onClick={prev}>
            <ArrowLeft />
          </button>
          <div className='flex w-1/3 justify-between'>
            <button
              className={`bg-primary rounded-full w-2 h-2 p-1 ${
                counter === 0 ? '' : 'opacity-40'
              }`}
              onClick={() => setCounter(0)}></button>
            <button
              className={`bg-primary rounded-full w-2 h-2 p-1 ${
                counter === 1 ? '' : 'opacity-40'
              }`}
              onClick={() => setCounter(1)}></button>
            <button
              className={`bg-primary rounded-full w-2 h-2 p-1 ${
                counter === 2 ? '' : 'opacity-40'
              }`}
              onClick={() => setCounter(2)}></button>
          </div>
          <button
            className={
              counter === data.length - 1
                ? 'text-primary opacity-40'
                : 'text-primary'
            }
            onClick={next}>
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
