import React, { useState } from 'react';
import validator from 'validator';

const About = () => {
  const [email, setEmail] = useState('');
  const [valid, setValid] = useState(0);

  const validateEmail = () => {
    console.log(email);
    if (validator.isEmail(email)) {
      setValid(1);
    } else {
      setValid(2);
    }
  };

  const emailOnChange = (e) => {
    setValid(0);
    setEmail(e.target.value);
  };

  const data = [
    {
      image: '/images/TM-Article1-img.jpg',
      heading: 'Maximise your efficiency & using Task Manager',
      body: 'In this case, the role of task manager was directly responsible for deliveririg a project on time ...',
    },
    {
      image: '/images/TM-Article2-img.jpg',
      heading: 'Effectively run your business meetings',
      body: 'Business meetings can get unnecessary long and un-productive.',
    },
    {
      image: '/images/TM-Article3-img.jpg',
      heading: 'Working across different timezones',
      body: 'Remote working has forced many of us to work across different timezones. Task manager can help.',
    },
  ];

  return (
    <section id='about'>
      <div className='container mx-auto px-8 lg:px-36 flex flex-col items-center'>
        <h1 className='header main text-lg lg:text-3xl font-extrabold'>
          Check out our latest article
        </h1>
        <div className='w-full px-12 py-16 grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {data.map((element, index) => (
            <div
              key={index}
              className='bg-white shadow-md rounded-lg max-w-sm overflow-hidden'>
              <div className='h-48'>
                <img
                  className='h-full w-full object-cover'
                  src={element.image}
                  alt=''
                />
              </div>

              <div className='p-5'>
                <h5 className='text-font-dark font-bold text-lg tracking-wide mb-2'>
                  {element.heading}
                </h5>

                <p className='text-font-light font-medium text-sm tracking-wide'>
                  {element.body}
                </p>
                <button className='text-primary bg-transparent font-bold hover:font-extrabold rounded-lg text-sm py-2 text-center inline-flex items-center'>
                  Read more
                  <svg
                    className='-mr-1 ml-2 h-4 w-4'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fillRule='evenodd'
                      d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                      clipRule='evenodd'></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className='border-2 border-primary hover:bg-primary mt-2 mb-8 py-1.5 px-4 text-xs lg:py-3 lg:px-8 lg:text-sm rounded-full font-bold text-primary hover:text-white tracking-widest'>
          View all
        </button>
      </div>
      <div className='container mx-auto px-8 lg:px-36 flex flex-col items-center mb-8'>
        <h1 className='header main text-lg lg:text-3xl font-extrabold'>
          Subscribe to our Newsletter
        </h1>
        <div className='flex flex-col lg:flex-row w-full justify-center py-12'>
          <div className='w-full lg:w-4/12'>
            <input
              type='text'
              id='email'
              className='text-font-light font-semibold border border-font-light placeholder:text-font-light text-sm rounded-lg w-full py-3 px-8 mb-4'
              placeholder='Enter your email address...'
              onChange={(e) => emailOnChange(e)}
            />
            {valid !== 0 ? (
              <p
                className={`mt-2 text-sm ${
                  valid === 1
                    ? 'text-green-600'
                    : valid === 2
                    ? 'text-red-600'
                    : ''
                }`}>
                {valid === 1
                  ? 'Thank you for subscribing to our newsletter!'
                  : valid === 2
                  ? 'Please enter a correct email and re-submit'
                  : ''}
              </p>
            ) : null}
          </div>
          <div className='w-full flex justify-center lg:w-2/12 lg:mx-6'>
            <button
              onClick={validateEmail}
              className='border-2 border-primary hover:bg-primary mb-8 py-1.5 px-4 text-xs lg:py-3 lg:px-8 lg:text-sm rounded-full font-bold text-primary hover:text-white tracking-widest'>
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
