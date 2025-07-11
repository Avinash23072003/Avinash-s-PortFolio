import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { MY_PROFILEPHOTO } from "../assets";
const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
    

        <div className="flex flex-col items-center gap-4">
  <img
    src={ MY_PROFILEPHOTO}
    alt="Avinash Chitare"
    className="w-32 h-32 rounded-full object-cover shadow-lg"
  />

  <h1 className="text-white text-lg font-semibold">Want to stay in touch? Just mail me!</h1>

  <a
    href="mailto:chitareavinash6@gmail.com?subject=Let's Connect&body=Hi Avinash,"
    className="inline-block bg-tertiary text-white font-bold py-2 px-5 rounded-xl shadow-md hover:bg-tertiary/90 transition"
  >
    Click to Mail
  </a>
</div>

      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
