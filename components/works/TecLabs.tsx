import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const TecLabs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Frontend Developer{" "}
        <span className="text-textGreen tracking-wide">@TEC-Labs</span>
      </h3>
      <span>Project: Real-Time Task Management Application</span>
      <p className="text-sm mt-1 font-medium text-textDark">
        08/2022 - 12/2022
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          • Spearheaded the frontend development of a real-time task management
          web application designed for collaborative teams. Worked closely with
          backend developers to create a seamless and efficient user interface
          that enabled users to manage tasks collaboratively.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          • User Authentication: Implemented secure user authentication and
          authorization systems, ensuring data privacy and user account
          security.
        </li>
        {/* <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
                <TiArrowForward />
            </span>
            Helped increase the adoption of new software tools and 
            techniques that increased the effectiveness of a Web application
        </li> */}
      </ul>
    </motion.div>
  );
};

export default TecLabs;
