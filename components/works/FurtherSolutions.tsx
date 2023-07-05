import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const FurtherSolutions = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ delay: 0.1}}
    className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Front-End Developer <span className="text-textGreen tracking-wide">@Further Solutions Group</span>
        </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        07/2020 - 01/2021
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
                <TiArrowForward />
            </span>
            Improved the scalability of the product by creating a new product component that 
            completed a full integration test in less than one day.
        </li>
        <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
                <TiArrowForward />
            </span>
            Led the development of a new product 
            that allowed users to complete tasks on their own.
        </li>
        <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
                <TiArrowForward />
            </span>
            Maintained accurate inventory levels and improved customer service 
            through the implementation of a multi- channel ordering system.
        </li>
      </ul>
    </motion.div>
  )
}

export default FurtherSolutions
