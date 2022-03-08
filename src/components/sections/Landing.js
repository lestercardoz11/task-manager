import Hero from '../assets/Hero';
import Icon from '../icons/Icon';

const Landing = () => {
  const scrollToElement = (id) => {
    document
      .getElementById(id)
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id='home'>
      <header className='py-12 flex items-center'>
        <div className='container mx-auto px-8 lg:px-36 flex items-center justify-center lg:justify-between'>
          <div className='text-gray-800 flex items-center'>
            <Icon />
          </div>
          <div className='flex items-center'>
            <nav className='text-gray-900 tracking-widest text-sm lg:flex items-center hidden'>
              <button
                className='py-2 px-5 font-bold text-font-light hover:text-font-dark'
                onClick={(e) => scrollToElement('home')}>
                Home
              </button>
              <button
                className='py-2 px-5 font-bold text-font-light hover:text-font-dark'
                onClick={(e) => scrollToElement('features')}>
                Features
              </button>
              <button
                className='py-2 px-5 font-bold text-font-light hover:text-font-dark'
                onClick={(e) => scrollToElement('apps')}>
                Apps
              </button>
              <button
                className='py-2 px-5 font-bold text-font-light hover:text-font-dark'
                onClick={(e) => scrollToElement('testimonials')}>
                Testimonials
              </button>
              <button
                className='py-2 px-5 font-bold text-font-light hover:text-font-dark'
                onClick={(e) => scrollToElement('about')}>
                About us
              </button>
            </nav>
          </div>
        </div>
      </header>
      <div className='container mx-auto px-8 lg:px-36 py-12 relative flex flex-col lg:flex-row items-center'>
        <div className='w-full lg:w-12/25 flex flex-col items-center lg:items-start lg:pr-16'>
          <h1 className='text-center lg:text-left text-3xl sm:text-4.5xl font-extrabold text-font-dark leading-tight mb-4'>
            Manage your tasks from anywhere!
          </h1>
          <p className='text-center lg:text-left sm:text-lg text-font-light leading-relaxed'>
            Task Manager provides a progressive, cutting-edge and accessible way
            to manage your tasks from anywhere.
          </p>
          <button className='border-2 border-primary hover:bg-primary mt-8 py-1.5 px-4 text-xs lg:py-3 lg:px-8 lg:text-sm rounded-full font-bold text-primary hover:text-white tracking-widest'>
            Try it now!
          </button>
        </div>
        <div className='w-full my-12 lg:mx-0 lg:w-13/25'>
          <Hero />
        </div>
      </div>
    </section>
  );
};

export default Landing;
