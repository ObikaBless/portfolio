import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Ztad = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Frontend Developer{" "}
        <span className="text-textGreen tracking-wide">@ZTAD</span>
      </h3>
      <span>Project: E-commerce Website Redesign</span>
      <p className="text-sm mt-1 font-medium text-textDark">
        11/2021 - 05/2022
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          • E-Commerce Website redesign: Led the frontend development efforts
          for a major redesign of an e-commerce website with 2,000+ monthly
          visitors. Collaborated closely with a cross-functional team of
          designers, backend developers, to deliver a seamless user experience
          and boost conversion rates.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          • Responsive Design: Implemented a mobile-first approach, resulting in
          a 30% increase in mobile sales within the first quarter after launch.
        </li>
        {/* <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
                <TiArrowForward />
            </span>
            Managed project executions.
        </li> */}
      </ul>
    </motion.div>
  );
};

export default Ztad;
