import About from './sections/About';
import Apps from './sections/Apps';
import Features from './sections/Features';
import Footer from './sections/Footer';
import Landing from './sections/Landing';
import Testimonials from './sections/Testimonials';

const Main = () => {
  return (
    <>
      <main className='bg-white font-mulish'>
        <Landing />
        <Features />
        <Apps />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default Main;
