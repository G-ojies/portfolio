import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import { fadeIn } from '../variants';
import { services } from '../data/content';

const Services = () => {
  return (
    <section
      className="w-full pt-8 pb-4 lg:pb-12 dark:bg-gradient-to-t from-black/95 to-black dark:text-gray-300 section"
      id="service"
    >
      <div className="lg:container mx-auto">
        <div className="container flex flex-col justify-between lg:flex-row">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center flex-1 lg:bg-service_new bg-cover lg:max-w-[600px] lg:bg-center lg:mb-0 lg:bg-no-repeat rounded-2xl overflow-hidden lg:hover:scale-110 duration-300"
          >
            {/* The art behind this panel is busy, so the heading sits on its own
                dark scrim on desktop to stay legible. */}
            <div className="lg:bg-gradient-to-b lg:from-black/80 lg:via-black/50 lg:to-transparent lg:pb-28">
              <h2 className="text-teal-500 lg:text-white font-bold text-2xl uppercase mb-6 pt-4 lg:text-5xl lg:pt-10 lg:drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                {services.heading}
              </h2>
              <h3 className="dark:text-white text-md mb-16 lg:text-xl lg:text-white lg:mb-0 lg:drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                {services.subheading}
              </h3>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div>
              {services.items.map((service) => (
                <div
                  key={service.name}
                  className="border border-b border-teal-500 dark:border-white mb-4 hover:scale-105 duration-300"
                >
                  <div className="lg:max-w-[450px] ml-4">
                    <h4 className="text-teal-500 mt-2 text-xl lg:text-2xl">{service.name}</h4>
                    <p className="mb-4 text-sm lg:text-lg text-justify pr-2">{service.description}</p>
                  </div>
                  <div className="flex text-sm mb-2 ml-4 text-teal-500 items-center">
                    <a href={service.link}>Learn more</a>
                    <BsArrowRight className="ml-2" size={8} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
