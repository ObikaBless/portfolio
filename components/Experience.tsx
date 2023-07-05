import { useState } from 'react';
import SectionTitle from './SectionTitle';
import Bivindi from './works/Bivindi';
import TecLabs from './works/TecLabs';
import Ztad from './works/Ztad';
import CivilSalt from './works/CivilSalt';
import FurtherSolutions from './works/FurtherSolutions';

const Experience = () => {
  const [workBivindi, setWorkBivindi] = useState(true);
  const [workTeclabs, setWorkTeclabs] = useState(false);
  const [workZtad, setWorkZtad] = useState(false);
  const [workCivilsalt, setWorkCivilsalt] = useState(false);
  const [workFurthersolutions, setWorkFurthersolutions] = useState(false);

  const handleBivindi = () => {
    setWorkBivindi(true);
    setWorkTeclabs(false);
    setWorkZtad(false);
    setWorkCivilsalt(false);
    setWorkFurthersolutions(false);
  };
  const handleTeclabs = () => {
    setWorkBivindi(false);
    setWorkTeclabs(true);
    setWorkZtad(false);
    setWorkCivilsalt(false);
    setWorkFurthersolutions(false);
  };
  const handleZtad = () => {
    setWorkBivindi(false);
    setWorkTeclabs(false);
    setWorkZtad(true);
    setWorkCivilsalt(false);
    setWorkFurthersolutions(false);
  };
  const handleCivilsalt = () => {
    setWorkBivindi(false);
    setWorkTeclabs(false);
    setWorkZtad(false);
    setWorkCivilsalt(true);
    setWorkFurthersolutions(false);
  };
  const handleFurthersolutions = () => {
    setWorkBivindi(false);
    setWorkTeclabs(false);
    setWorkZtad(false);
    setWorkCivilsalt(false);
    setWorkFurthersolutions(true);
  };
  return (
    <section 
    id="experience"
    className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4'>
      <SectionTitle title='Where i have Worked' titleNo='II' />
      <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
        <ul className='md:w-32 flex flex-col'>
            <li 
            onClick={handleBivindi}
            className= {` ${workBivindi 
            ? "Border-l-textGreen text-textGreen" 
            : "border-l-hoverColor text-hoverColor"}
            border-l-2 bg-transparent 
            hover:bg-[#112240] py-3 text-sm
            cursor-pointer duration-300 px-8 font-medium
            `}>
                Bivindi
            </li>
            <li 
            onClick={handleTeclabs}
              className= {` ${workTeclabs 
              ? "Border-l-textGreen text-textGreen" 
              : "border-l-hoverColor text-hoverColor"}
              border-l-2 bg-transparent 
              hover:bg-[#112240] py-3 text-sm
              cursor-pointer duration-300 px-8 font-medium
              `}>
                TECLabs
            </li>
            <li
            onClick={handleZtad}
            className= {` ${workZtad 
              ? "Border-l-textGreen text-textGreen" 
              : "border-l-hoverColor text-hoverColor"}
              border-l-2 bg-transparent 
              hover:bg-[#112240] py-3 text-sm
              cursor-pointer duration-300 px-8 font-medium
              `}>
                ZTAD
            </li>
            <li 
            onClick={handleCivilsalt}
            className= {` ${workCivilsalt 
              ? "Border-l-textGreen text-textGreen" 
              : "border-l-hoverColor text-hoverColor"}
              border-l-2 bg-transparent 
              hover:bg-[#112240] py-3 text-sm
              cursor-pointer duration-300 px-8 font-medium
              `}>
                Civil Salt
            </li>
            <li 
            onClick={handleFurthersolutions}
            className= {` ${workFurthersolutions 
              ? "Border-l-textGreen text-textGreen" 
              : "border-l-hoverColor text-hoverColor"}
              border-l-2 bg-transparent 
              hover:bg-[#112240] py-3 text-sm
              cursor-pointer duration-300 px-8 font-medium
              `}>
                4DA Soltutions
            </li>
        </ul>
        {workBivindi && <Bivindi />}
        {workTeclabs && <TecLabs />}
        {workZtad && <Ztad />}
        {workCivilsalt && <CivilSalt />}
        {workFurthersolutions && <FurtherSolutions />}
      </div>
    </section>
  )
}

export default Experience
