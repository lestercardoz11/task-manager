import IconWhite from '../icons/IconWhite';

const Footer = () => {
  return (
    <footer className='font-mulish bg-gradient-to-bl from-gradient-light to-gradient-dark'>
      <div className='container mx-auto px-8 lg:px-36 py-12 lg:pt-24 lg:pb-12 flex flex-col lg:flex-row'>
        <div className='w-full lg:w-1/3 flex-col mb-8'>
          <IconWhite />
          <p className='mt-6 text-sm text-white'>
            Task Manager provides a progressive, cutting-edge and accessible way
            to manage your tasks from anywhere.
          </p>
          <p className='mt-6 text-sm text-white'>
            @TaskManager PTY LTD 2022. All rights reserved.
          </p>
        </div>
        <div className='lg:pl-20 w-full lg:w-2/3 flex flex-col lg:flex-row'>
          <div className='w-full lg:w-1/3 lg:px-4'>
            <p className='font-bold text-white tracking-widest mb-5'>Company</p>
            <nav className='list-none mb-10'>
              <li>
                <button className='text-white font-xs lg:font-sm mb-1 lg:mb-2 font-light hover:font-normal'>
                  About
                </button>
              </li>
              <li>
                <button className='text-white font-xs lg:font-sm mb-1 lg:mb-2 font-light hover:font-normal'>
                  Testimonials
                </button>
              </li>
              <li>
                <button className='text-white font-xs lg:font-sm mb-1 lg:mb-2 font-light hover:font-normal'>
                  Features
                </button>
              </li>
              <li>
                <button className='text-white font-xs lg:font-sm mb-1 lg:mb-2 font-light hover:font-normal'>
                  Apps
                </button>
              </li>
            </nav>
          </div>
          <div className='w-full lg:w-1/3 lg:px-4'>
            <p className='font-bold text-white tracking-widest mb-5'>Region</p>
            <nav className='list-none mb-10'>
              <li>
                <button className='text-white font-xs lg:font-sm mb-1 lg:mb-2 font-light hover:font-normal'>
                  Oman
                </button>
              </li>
              <li>
                <button className='text-white font-xs lg:font-sm mb-1 lg:mb-2 font-light hover:font-normal'>
                  Saudi Arabia
                </button>
              </li>
              <li>
                <button className='text-white font-xs lg:font-sm mb-1 lg:mb-2 font-light hover:font-normal'>
                  Hongkong
                </button>
              </li>
              <li>
                <button className='text-white font-xs lg:font-sm mb-1 lg:mb-2 font-light hover:font-normal'>
                  Canada
                </button>
              </li>
            </nav>
          </div>
          <div className='w-full lg:w-1/3 lg:px-4'>
            <p className='font-bold text-white tracking-widest mb-5'>Help</p>
            <nav className='list-none mb-10'>
              <li>
                <button className='text-white font-xs lg:font-sm mb-1 lg:mb-2 font-light hover:font-normal'>
                  Help center
                </button>
              </li>
              <li>
                <button className='text-white font-xs lg:font-sm mb-1 lg:mb-2 font-light hover:font-normal'>
                  Contact support
                </button>
              </li>
              <li>
                <button className='text-white font-xs lg:font-sm mb-1 lg:mb-2 font-light hover:font-normal'>
                  Instructions
                </button>
              </li>
              <li>
                <button className='text-white font-xs lg:font-sm mb-1 lg:mb-2 font-light hover:font-normal'>
                  How it works
                </button>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
