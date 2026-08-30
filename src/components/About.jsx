import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { about } from '../data/content';
import aboutSmall from '../assets/about.jpg';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <section className="lg:container lg:mx-12 section pt-8 lg:min-h-screen pb-12" id="about" ref={ref}>
      <div className="container mx-auto h-full">
        <div className="flex flex-col-reverse lg:flex-row lg:gap-x-12 lg:gap-y-0 lg:items-start">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="hidden md:block flex-1 bg-about_new h-[200px] md:h-[300px] lg:h-[300px] xl:h-[500px] bg-cover bg-no-repeat bg-center rounded-2xl hover:scale-105 duration-300"
          />

          <div className="md:hidden">
            <img
              src={aboutSmall}
              className="rounded-lg w-full max-h-[320px] object-cover object-center"
              alt="At work"
            />
          </div>

          <div className="flex-1">
            <motion.h2
              variants={fadeIn('left', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="text-2xl uppercase text-primary lg:text-3xl font-bold mb-4"
            >
              {about.heading}
            </motion.h2>

            <motion.h3
              variants={fadeIn('left', 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="mb-8 font-bold text-md md:text-xl"
            >
              {about.lead}
            </motion.h3>

            <motion.p
              variants={fadeIn('left', 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="mb-4 text-justify text-sm md:text-md lg:text-lg"
            >
              {about.body[0]}
              <br />
              <br />
              {about.body[1]}
            </motion.p>

            <motion.div
              variants={fadeIn('left', 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="flex gap-x-4 lg:gap-x-10 mb-12"
            >
              {about.stats.map((stat) => (
                <div key={stat.label.join(' ')} className="grid grid-cols-3 gap-2">
                  <div>
                    <div className="text-xl md:text-3xl text-primary font-bold mb-2">
                      {inView ? <CountUp start={0} end={stat.value} duration={3} /> : null}
                      {stat.suffix}
                    </div>
                    <div className="text-sm tracking-[0px] font-bold whitespace-nowrap">
                      <p>
                        {stat.label[0]} <br />
                        {stat.label[1]}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
