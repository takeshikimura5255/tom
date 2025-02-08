import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import CertificationSlider from "../../components/CertificationSlider";
import { fadeIn } from "../../variants";

const Certification = () => {
  return (
    <div className="h-full bg-primary/30 pt-[15%] py-36 items-center">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-center xl:w-[100vw]"
            >
              認証 <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 text-center max-w-[100vw] mx-auto pb-[50px] pt-[30px] text-[24px] lg:mx-0"
            >
             多くのプログラマ資格認証を受けたので、お客様の案件に十分に対応できるスキルと資格を持っていると自負しています。
            </motion.p>
      <Circles />
      <div className="container mx-auto text-center">
        <div className="flex justify-center xl:flex-row gap-x-8">
          {/* text */}

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <CertificationSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Certification;
