import Members from '../icons/Members';
import Groups from '../icons/Groups';
import Forum from '../icons/Forum';
import ListBuilding from '../icons/ListBuilding';
import Scroll from '../icons/Scroll';
import Custom from '../icons/Custom';

const Features = () => {
  const data = [
    {
      icon: <Members />,
      heading: 'Members',
      body: 'Invite your team members and allow them to view your tasks while you view thiers',
    },
    {
      icon: <Groups />,
      heading: 'Groups',
      body: 'Create groups and shore tasks with multiple members at once',
    },
    {
      icon: <Forum />,
      heading: 'Forum',
      body: 'Discuss your tasks with your teammates and get work done in no time!',
    },
    {
      icon: <ListBuilding />,
      heading: 'List Builder',
      body: 'Build a list of your most important tasks and keep track of them',
    },
    {
      icon: <Scroll />,
      heading: 'Scroll Effects',
      body: '8 different scroll effects for your different tasks',
    },
    {
      icon: <Custom />,
      heading: 'Custom Module',
      body: 'Add custom modules to your tasks using our easy to use drag and drop builder',
    },
  ];

  return (
    <section id='features' className='py-2 flex items-center bg-secondary'>
      <div className='container mx-auto px-8 lg:px-36 flex flex-col items-center'>
        <h1 className='header main text-lg lg:text-3xl font-extrabold'>
          Features
        </h1>
        <p className='px-12 text-center text-sm lg:text-base text-font-light font-semibold leading-relaxed'>
          We provide you the best features to manage all of your tasks. Adjust
          it to your needs and make sure you use it to collaborate effectively
          with your teamgates.
        </p>
        <div className='w-full px-12 py-16 grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {data.map((element, index) => (
            <div key={index} className='p-4 bg-white rounded-2xl shadow-sm'>
              <div className='flex flex-col px-4'>
                <div className='py-4'>
                  <div className='w-16 h-16 p-4 flex justify-center items-center bg-gradient-to-bl from-gradient-light to-gradient-dark rounded-2xl'>
                    {element.icon}
                  </div>
                </div>
                <span className='text-xl font-extrabold'>
                  {element.heading}
                </span>
                <p className='pt-4 pb-6 text-sm text-font-light font-semibold leading-relaxed'>
                  {element.body}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className='border-2 border-primary hover:bg-primary mt-2 mb-8 py-1.5 px-4 text-xs lg:py-3 lg:px-8 lg:text-sm rounded-full font-bold text-primary hover:text-white tracking-widest'>
          Learn more
        </button>
      </div>
    </section>
  );
};

export default Features;
