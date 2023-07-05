import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti"

const Bivindi = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ delay: 0.1}}
    className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Software Engineering intern <span className="text-textGreen tracking-wide">@Bivindi</span>
        </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        1/2023 - 5/2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
                <TiArrowForward />
            </span>
        Developed a novel technology platform that enables the company
        to sell more products and services.
        </li>
        <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
                <TiArrowForward />
            </span>
            Conducted 10 interviews over the course of 2 months to hire
            candidates for the software engineering internship program.
        </li>
        <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
                <TiArrowForward />
            </span>
            Collected data and conducted 10 usability tests, redesigning
            the user experience to increase the number of sales leads generated per month by 13%.
        </li>
        <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
                <TiArrowForward />
            </span>
            Planned and implemented a webinar series 
            to train 30 junior web developers.
        </li>
      </ul>
    </motion.div>
  )
}

export default Bivindi
