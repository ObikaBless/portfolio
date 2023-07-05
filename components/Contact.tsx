import React from 'react'

const Contact = () => {
  return (
    <section 
    id='contact'
    className='max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4
    items-center justify-center'
    >
      <p className='font-titleFont text-lg text-textGreen font-semibold flex
      items-center tracking-wide'>
        IV.What&apos;s Next?
      </p>
      <h2 className='font-titleFont text-5xl font-semibold'>
        Get In Touch
      </h2>
      <p className='max-w-[600px] text-center text-textDark'>
        I am Open for Software Developer positions and currently looking for new 
        opportunities, my inbox is open. please reach out let &apos;s talk more 
        on my skills being fit for your open roles 
      </p>
       <a href="mailto:blesschinedumobika@gmail.com">
        <button className='w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm
        text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300'> Say Hello</button>
       </a>
    </section>
  )
}

export default Contact
