import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { portfolio } from '../data/content';

const Portfolio = () => {
  return (
    <section className="container mx-auto section" id="portfolio">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-center text-teal-500 text-2xl lg:text-3xl font-bold lg:inline lg:border-b-4 lg:border-teal-500">
            {portfolio.heading}
          </p>
          <p className="text-center py-6 lg:text-start lg:text-lg text-md">{portfolio.intro}</p>
        </div>

        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {portfolio.projects.map((project) => (
            <div
              key={project.title}
              className={`max-h-[300px] lg:max-h-[270px] rounded-lg duration-200 hover:animate-pulse hover:scale-105 lg:text-md ${project.glow} shadow-lg`}
            >
              <img src={project.image} alt={project.title} className="w-full h-[170px] mx-auto rounded-md object-cover" />
              <div className="mx-auto text-center">
                <p className="lg:text-sm px-2 m-2 text-black dark:text-white font-bold">{project.title}</p>
                <a
                  className="text-sm md:text-md m-2 text-teal-500 font-bold uppercase pb-12 lg:pb-2 inline-block"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Verify
                </a>
              </div>
            </div>
          ))}
        </motion.div>

        <p className="text-center pt-8">{portfolio.footnote}</p>
      </div>
    </section>
  );
};

export default Portfolio;
