import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { experience } from '../data/content';

const Experience = () => {
  return (
    <section className="container mx-auto section py-12" id="experience">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-2xl lg:text-3xl font-bold border-b-4 border-teal-500 text-teal-500 inline">
            {experience.heading}
          </p>
          <p className="py-6 text-md lg:text-lg">{experience.intro}</p>
        </div>

        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center py-8"
        >
          {experience.skills.map((skill) => (
            <div
              key={skill.name}
              className={`${skill.glow} shadow-md hover:scale-105 duration-500 py-2 rounded-full`}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-20 h-20 mx-auto hover:scale-105 rounded-full duration-500"
              />
              <p className="pt-4 text-sm md:text-md uppercase font-bold"> {skill.name} </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
