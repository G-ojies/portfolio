import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { BsChevronRight } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter, FaTelegram } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';
import { BsPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import { fadeIn } from '../variants';
import { profile, socials } from '../data/content';
import logo from '../assets/greyat-labs-logo.jpg';

// Shown only on small screens, where the fixed left rail is hidden.
const inlineSocials = [
  { href: socials.resume, Icon: BsPersonLinesFill, label: 'Resume' },
  { href: socials.github, Icon: FaGithub, label: 'GitHub' },
  { href: socials.linkedin, Icon: FaLinkedin, label: 'LinkedIn' },
  { href: socials.mail, Icon: HiOutlineMail, label: 'Mail' },
  { href: socials.twitter, Icon: FaXTwitter, label: 'X' },
  { href: socials.telegram, Icon: FaTelegram, label: 'Telegram' },
];

const Banner = () => {
  return (
    <div className="md:container lg:container xl:container 2xl:container 2xl:mx-auto lg:mx-auto md:mx-auto">
      <section className="min-h-[80vh] lg:min-h-[75vh] section" id="home">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mt-12 gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
            <div className="flex-1 text-center lg:text-left">
              <motion.h1
                variants={fadeIn('up', 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className="text-3xl mb-2 font-bold leading-[0.8] lg:text-5xl dark:text-white"
              >
                {profile.firstName} <span>{profile.lastName}</span>
              </motion.h1>

              <motion.div
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className="uppercase mb-6 text-md lg:text-3xl leading-[1]"
              >
                <span className="mr-4"> I am a</span>
                <TypeAnimation
                  sequence={profile.roles}
                  speed={50}
                  repeat={Infinity}
                  className="text-teal-500"
                  wrapper="span"
                />
              </motion.div>

              <motion.p
                variants={fadeIn('up', 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className="md:max-w-[600px] text-sm md:text-md lg:text-lg text-justify"
              >
                {profile.intro}
              </motion.p>

              <div className="flex justify-center lg:justify-start space-x-3 text-2xl text-black lg:text-4xl my-8 lg:hidden dark:text-white">
                {inlineSocials.map(({ href, Icon, label }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                    <Icon className="hover:text-teal-500 hover:scale-105 duration-300" />
                  </a>
                ))}
              </div>

              <motion.div
                variants={fadeIn('up', 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className="mt-8"
              >
                <Link to="portfolio" smooth duration={500} offset={-70}>
                  <button className="group flex mx-auto p-1 lg:p-2 rounded-xl text-white bg-teal-500 drop-shadow-lg lg:m-0 cursor-pointer items-center px-4 lg:px-5">
                    <span>PORTFOLIO</span>
                    <span className="group-hover:rotate-90 duration-300">
                      <BsChevronRight className="text-2xl" />
                    </span>
                  </button>
                </Link>
              </motion.div>
            </div>

            <motion.div
              variants={fadeIn('down', 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="dark:hidden"
            >
              <img
                src={logo}
                alt="GreYat Labs"
                className="max-w-[200px] max-h-[200px] lg:max-w-[350px] lg:max-h-[350px] rounded-full"
              />
            </motion.div>

            <motion.div
              variants={fadeIn('down', 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="hidden dark:block"
            >
              <img
                src={logo}
                alt="GreYat Labs"
                className="max-w-[150px] max-h-[150px] lg:max-w-[300px] lg:max-h-[300px] rounded-full hover:scale-105 duration-300"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
