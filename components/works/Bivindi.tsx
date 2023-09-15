import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Bivindi = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Software Engineering intern{" "}
        <span className="text-textGreen tracking-wide">@Bivindi</span>
      </h3>
      <span>Project: Weather Dashboard Application</span>
      <p className="text-sm mt-1 font-medium text-textDark">1/2023 - 5/2023</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          • Led the development of a weather dashboard application that provides
          real-time weather information worldwide. Collaborated with a small
          team to create a user-friendly frontend interface.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          • API Integration: Integrated multiple weather data APIs, allowing
          users to search and view weather conditions and historical data for
          any location.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          • Data Caching: Implemented client-side data caching to reduce API
          calls, improving application performance and responsiveness.
        </li>
        {/* <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Planned and implemented a webinar series to train 30 junior web
          developers.
        </li> */}
      </ul>
    </motion.div>
  );
};

export default Bivindi;
