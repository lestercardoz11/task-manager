import Leading from '../assets/Leading';
import Mobile from '../assets/Mobile';

const Apps = () => {
  return (
    <section id='apps'>
      <div className='container mx-auto px-8 lg:px-36 py-24 relative flex flex-col lg:flex-row items-center'>
        <div className='w-full lg:w-13/25'>
          <Leading />
        </div>
        <div className='lg:w-12/25 flex flex-col items-center lg:items-start lg:pr-16'>
          <h1 className='header sub mx-20 text-left text-xl sm:text-3xl font-extrabold text-font-dark leading-tight mb-4'>
            Leading Task Manager
          </h1>
          <p className='text-center text-sm lg:text-left lg:ml-20 text-font-light leading-relaxed'>
            Task Manager provides a progressive, cutting-edge and accessible way
            to manage your tasks from anywhere. To us, it's not just work. We
            take pride in the solutions we deliver
          </p>
          <button className='border-2 border-primary mx-20 hover:bg-primary mt-8 py-1.5 px-4 text-xs lg:py-3 lg:px-8 lg:text-sm rounded-full font-bold text-primary hover:text-white tracking-widest'>
            Learn more
          </button>
        </div>
      </div>
      <div className='container mx-auto px-8 lg:px-36 py-24 relative flex flex-col lg:flex-row items-center'>
        <div className='lg:w-12/25 flex flex-col items-center lg:items-start lg:pr-16 mb-8'>
          <h1 className='header sub mx-20 text-left text-xl sm:text-3xl font-extrabold text-font-dark leading-tight mb-4'>
            Download our mobile apps
          </h1>
          <p className='text-center text-sm lg:text-left lg:mx-20 text-font-light leading-relaxed'>
            Our dedicated mobile app and web portal allow you to access
            information instantaneously and securely
          </p>
          <button className='border-2 border-primary mx-20 hover:bg-primary mt-8 py-1.5 px-4 text-xs lg:py-3 lg:px-8 lg:text-sm rounded-full font-bold text-primary hover:text-white tracking-widest'>
            Download <span className='ml-2 lg:text-xl font-bold'>↓</span>
          </button>
        </div>
        <div className='w-full lg:w-13/25'>
          <Mobile />
        </div>
      </div>
    </section>
  );
};

export default Apps;
