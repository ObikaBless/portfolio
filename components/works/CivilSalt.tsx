import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const CivilSalt = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Frontend Developer / part-time{" "}
        <span className="text-textGreen tracking-wide">@Civil Salt</span>
      </h3>
      <span>Team Lead</span>
      <p className="text-sm mt-1 font-medium text-textDark">
        03/2021 - 11/2021
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          • Directed a team of junior Devs in accomplishing solid desktop
          applications for businesses and educational sectors
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          • Worked in hand with Backend Developers in the development of a
          banking system for online transfers.
        </li>
      </ul>
    </motion.div>
  );
};

export default CivilSalt;
