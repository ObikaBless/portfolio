import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti"

const TecLabs = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ delay: 0.1}}
    className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Software Developer <span className="text-textGreen tracking-wide">@TEC-Labs</span>
        </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        08/2022 - 12/2022
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
                <TiArrowForward />
            </span>
            Performed software testing, provided 24/7 support to clients, 
            and developed plans for future software development
        </li>
        <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
                <TiArrowForward />
            </span>
            Maintained software products including programs, 
            webpages, and databases
        </li>
        <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
                <TiArrowForward />
            </span>
            Helped increase the adoption of new software tools and 
            techniques that increased the effectiveness of a Web application
        </li>
      </ul>
    </motion.div>
  )
}

export default TecLabs
