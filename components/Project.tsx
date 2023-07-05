import SectionTitle from './SectionTitle';
import Image from 'next/image';
import { pikup, express, estate } from '@/public/assets';
import { TbBrandGithub } from 'react-icons/tb';
import { RxOpenInNewWindow } from 'react-icons/rx';

const Project = () => {
  return (
    <section id='project' className='max-w-container mx-auto lgl:px-20 py-24'>
      <SectionTitle title='Some Projects i have built ' titleNo='III' />
      <div className='w-full flex flex-col items-center justify-between'>
      {/* project one  */}
      <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
        <div className='flex flex-col mdl:flex-row gap-6'>
          <a 
          className='w-full xl:w-1/2 h-auto relative group' 
          href="https://expressshipmentdelivery.online/" 
          target='_blank'
          >
          <div>
            <Image 
            className="w-full h-full object-contain"
            src={express}
            alt='express'
            />
          </div>
          </a>
          <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
           items-end text-right mdl:-ml-16 z-10 xl:-ml-16 z-10'>
          <p className='font-titleFont text-textGreen text-sm tracking-wide'>
            Featured Project
          </p>
          <h3 className='text-2xl font-bold'>Express Shipment Delivery</h3>
          <p className='bg-[#112240] text-sm sm:text-base md:text-base p-2 md:p-6 rounded-md'>
            Bringing you industry-specific expertise; whatever you’re shipping, wherever you’re shipping it. {" "}
           Shipper <span className='text-textGreen'> delivers </span> a professional, efficient
             <span className='text-textGreen'> service</span>
          </p>
          <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2
          md:gap-5 justify-between text-textDark'>
            <li>PHP</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>NodeJS</li>
          </ul>
          <div className='text-2xl flex gap-4'>
            <a 
            className='hover:text-textGreen duration-300'
            href="https://github.com/ObikaBless/expressdhl"
            target='_blank'
            >
              <TbBrandGithub />
            </a>
            <a 
            className='hover:text-textGreen duration-300'
            href="https://expressshipmentdelivery.online/"
            target='_blank'
            >
              <RxOpenInNewWindow />
            </a>
          </div>
        </div>
        </div>
      </div>
      {/* project two  */}
      <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
        <div className='flex flex-col mdl:flex-row-reverse gap-6'>
          <a 
          className='w-full xl:w-1/2 h-auto relative group' 
          href="https://pikup.netlify.app/" 
          target='_blank'
          >
          <div>
            <Image 
            className="w-full h-full object-contain"
            src={pikup}
            alt='pikup'
            />
          </div>
          </a>
          <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
           items-end text-right z-10'>
          <p className='font-titleFont text-textGreen text-sm tracking-wide'>
            Featured Project
          </p>
          <h3 className='text-2xl font-bold'>Pikup</h3>
          <p className='bg-[#112240] text-sm sm:text-base md:text-base p-2 mdl:-mr-16 md:p-6 rounded-md'>
            Drive around at your Comfort at all locations with our private cars and Taxis, we offer you the best and
            self comfort rides. With Pikup! Our <span className='text-textGreen'>Customer</span> Satisfaction is our <span className='text-textGreen'>Priority</span> {" "}
          </p>
          <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2
          md:gap-5 justify-between text-textDark'>
            <li>ReactJS</li>
            <li>Tailwind CSS</li>
            <li>JavaScript</li>
          </ul>
          <div className='text-2xl flex gap-4'>
            <a 
            className='hover:text-textGreen duration-300'
            href="https://github.com/ObikaBless/pikup-react-app"
            target='_blank'
            >
              <TbBrandGithub />
            </a>
            <a 
            className='hover:text-textGreen duration-300'
            href="https://pikup.netlify.app/"
            target='_blank'
            >
              <RxOpenInNewWindow />
            </a>
          </div>
        </div>
        </div>
      </div>
      {/* project three */}
      <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
        <div className='flex flex-col mdl:flex-row gap-6'>
          <a 
          className='w-full xl:w-1/2 h-auto relative group' 
          href="https://real-estate-ng.netlify.app/" 
          target='_blank'
          >
          <div>
            <Image 
            className="w-full h-full object-contain"
            src={estate}
            alt='real eatest ng'
            />
          </div>
          </a>
          <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
           items-end text-right mdl:-ml-16 z-10 xl:-ml-16 z-10'>
          <p className='font-titleFont text-textGreen text-sm tracking-wide'>
            Featured Project
          </p>
          <h3 className='text-2xl font-bold'>Part Finder</h3>
          <p className='bg-[#112240] text-sm sm:text-base md:text-base p-2 md:p-6 rounded-md'>
          We always ready to help by providijng the best services for you.
          We beleive a good <span className='text-textGreen'> place</span> to live can make your
          <span className='text-textGreen'> life better</span>
          </p>
          <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2
          md:gap-5 justify-between text-textDark'>
            <li>ReactJS</li>
            <li>CSS</li>
            <li></li>
            <li></li>
          </ul>
          <div className='text-2xl flex gap-4'>
            <a 
            className='hover:text-textGreen duration-300'
            href="https://github.com/obikabless/real-estate-ng"
            target='_blank'
            >
              <TbBrandGithub />
            </a>
            <a 
            className='hover:text-textGreen duration-300'
            href="https://real-estate-ng.netlify.app/"
            target='_blank'
            >
              <RxOpenInNewWindow />
            </a>
          </div>
        </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Project
