"use client";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { motion } from "framer-motion";
import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";
import { FaClipboardList, FaUserCheck, FaHandshake } from "react-icons/fa";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const stats = [
  {
    title: "Tell Us What You Need",
    description:
      "Share your talent requirements or project goals — whether it's a single role or an entire team.",
    icon: <FaClipboardList size={34} className="text-blue-500" />,
  },
  {
    title: "Get Matched with Experts",
    description:
      "We shortlist top-tier professionals tailored to your exact needs, ready to hit the ground running.",
    icon: <FaUserCheck size={34} className="text-yellow-500" />,
  },
  {
    title: "Start Collaborating",
    description:
      "Seamlessly onboard and integrate them into your workflow. Scale up or down anytime.",
    icon: <FaHandshake size={34} className="text-green-600" />,
  },
];

const AboutSectionOne = () => {
  return <section id="how-it-works" className="relative dark:bg-gray-dark bg-gradient-to-b  from-blue-50 to-white dark:from-gray-dark dark:to-gray-dark overflow-hidden py-16">
    <div className="container z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <SectionTitle
        title="How It Works"
        paragraph=""
        center
      />
      <div className="grid sm:grid-cols-3 gap-8">

        {stats.map(stat => (
          <div key={stat.title} className="text-center sm:text-left max-w-md sm:max-w-full mx-auto dark:text-white">
            {/* <h3 className="mb-5 flex items-center gap-2 text-3xl font-semibold justify-center sm:justify-start">
              {stat.title}
            </h3> */}

            <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
              {stat.icon}
              {stat.title}
            </h3>
            <p className="text-body-color pr-[10px] text-base leading-relaxed font-medium dark:text-whitess">
              {stat.description}
            </p>

          </div>
        ))}
      </div>
    </div>

  </section>
};

export default AboutSectionOne;
