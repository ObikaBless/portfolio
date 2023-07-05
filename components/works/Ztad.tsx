import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti"

const Ztad = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ delay: 0.1}}
    className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Software Developer <span className="text-textGreen tracking-wide">@ZTAD</span>
        </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        11/2021 - 05/2022
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
                <TiArrowForward />
            </span>
            Developed applications for client enterprise and individual firms.
        </li>
        <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
                <TiArrowForward />
            </span>
            Managed servers and web services.
        </li>
        <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
                <TiArrowForward />
            </span>
            Managed project executions.
        </li>
      </ul>
    </motion.div>
  )
}

export default Ztad
