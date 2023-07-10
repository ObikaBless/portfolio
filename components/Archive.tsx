import React, { useState } from 'react';
import ArchiveCard from './ArchiveCard';
import { motion } from 'framer-motion';

const Archive = () => {
  const [seeMore,setSeeMore] = useState(false);
  return (
    <div className='max-w-contentContainer mx-auto px-4 py-24'>
      <div className='w-full flex flex-col items-center'>
        <h2 className='text-3xl font-titleFont font-semibold'>
            Other Noteworthy Projects
        </h2>
        <p className='text-sm font-titleFont text-textGreen'>
            View the archive
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10
      lgl:px-10 '>
        <ArchiveCard 
        title='Admin Dashboard'
        des='Customer admin dashboard  '
        listItem={['FontAwesome','VueJS','Bootstrap CSS',]}
        link = 'https://github.com/obikabless/restaurant'
        />
        <ArchiveCard 
        title='Twitter Quote Generator'
        des='A Random Quotes Generator with an API that allows user share generated 
        quotes on their twitter timelines just by clicking the tweet button'
        listItem={['fontawesome','ReacJS','Tailwind CSS',]}
        link = 'https://github.com/obikabless/quotes-generator'
        />
        <ArchiveCard 
        title='HOOBank'
        des='Lorem ipsum dolor sit amet consectetur adipisicing elit.
        reiciendis tempore maxime molestias ipsam, ad atque ab?'
        listItem={['ReacJS','Tailwind CSS','HTML']}
        link = 'https://github.com/obikabless'
        />
        <ArchiveCard 
        title='Classic Restaurant'
        des='Morden Restaurant UI with Classic taste '
        listItem={['react-icons','ReacJS','Tailwind CSS',]}
        link = 'https://github.com/obikabless/restaurant'
        />
        <ArchiveCard 
        title='Educare English Learning Academy'
        des='Lorem ipsum dolor sit amet consectetur adipisicing elit.
        reiciendis tempore maxime molestias ipsam, ad atque ab?'
        listItem={['ReacJS','Tailwind CSS','HTML']}
        link = 'https://github.com/obikabless'
        />
        <ArchiveCard 
        title='Educare English Learning Academy'
        des='Lorem ipsum dolor sit amet consectetur adipisicing elit.
        reiciendis tempore maxime molestias ipsam, ad atque ab?'
        listItem={['ReacJS','Tailwind CSS','HTML']}
        link = 'https://github.com/obikabless'
        />

        {
          seeMore && (
            <>
             <motion.div
             initial={{ opacity:0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.1 }}
             >
              <ArchiveCard 
                title='Educare English Learning Academy'
                des='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                reiciendis tempore maxime molestias ipsam, ad atque ab?'
                listItem={['ReacJS','Tailwind CSS','HTML']}
                link = 'https://github.com/obikabless'
               />
             </motion.div>
             <motion.div
             initial={{ opacity:0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             >
              <ArchiveCard 
                title='Educare English Learning Academy'
                des='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                reiciendis tempore maxime molestias ipsam, ad atque ab?'
                listItem={['ReacJS','Tailwind CSS','HTML']}
                link = 'https://github.com/obikabless'
               />
             </motion.div>
             <motion.div
             initial={{ opacity:0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.3 }}
             >
              <ArchiveCard 
                title='Educare English Learning Academy'
                des='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                reiciendis tempore maxime molestias ipsam, ad atque ab?'
                listItem={['ReacJS','Tailwind CSS','HTML']}
                link = 'https://github.com/obikabless'
               />
             </motion.div>
             <motion.div
             initial={{ opacity:0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.4 }}
             >
              <ArchiveCard 
                title='Educare English Learning Academy'
                des='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                reiciendis tempore maxime molestias ipsam, ad atque ab?'
                listItem={['ReacJS','Tailwind CSS','HTML']}
                link = 'https://github.com/obikabless'
               />
             </motion.div>
             <motion.div
             initial={{ opacity:0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.5 }}
             >
              <ArchiveCard 
                title='Educare English Learning Academy'
                des='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                reiciendis tempore maxime molestias ipsam, ad atque ab?'
                listItem={['ReacJS','Tailwind CSS','HTML']}
                link = 'https://github.com/obikabless'
               />
             </motion.div>
             <motion.div
             initial={{ opacity:0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.6 }}
             >
              <ArchiveCard 
                title='Educare English Learning Academy'
                des='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                reiciendis tempore maxime molestias ipsam, ad atque ab?'
                listItem={['ReacJS','Tailwind CSS','HTML']}
                link = 'https://github.com/obikabless'
               />
             </motion.div>
            </>
          )
        }
      </div>
      <div className='mt-12 flex items-center justify-center'>
        {
           seeMore ? <button 
           onClick={() => setSeeMore(false)}
           className='w-36 h-12 rounded-md text-textGreen text-[13px] border
           border-textGreen hover:bg-hoverColor duration-300'>
            See Less
          </button> : <button 
         onClick={() => setSeeMore(true)}
         className='w-36 h-12 rounded-md text-textGreen text-[13px] border
         border-textGreen hover:bg-hoverColor duration-300'>
          See More
        </button>
        }
      </div>
    </div>
  )
}

export default Archive
