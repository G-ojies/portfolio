import { motion } from 'framer-motion';
import { MdOutlineEmojiEmotions } from 'react-icons/md';
import { fadeIn } from '../variants';
import { contact, socials } from '../data/content';

// Until `contact.action` points at a real endpoint, posting the form would just
// navigate to a 404. In that case we hand the message off to the mail client
// instead, so the form still does something useful.
const endpointIsPlaceholder = contact.action.includes('YOUR-FORM-ID');

const Contact = () => {
  const handleSubmit = (event) => {
    if (!endpointIsPlaceholder) return;
    event.preventDefault();
    const data = new FormData(event.target);
    const body = `${data.get('message')}\n\n-- \n${data.get('name')}\n${data.get('email')}`;
    const to = socials.mail.replace('mailto:', '');
    window.location.href =
      `mailto:${to}?subject=${encodeURIComponent(`Portfolio message from ${data.get('name')}`)}` +
      `&body=${encodeURIComponent(body)}`;
  };

  return (
    <div
      className="w-full h-screen bg-gradient-to-b p-4 text-white dark:bg-gradient-to-t from-black/80 to-black/100 dark:text-gray-300 section"
      id="contact"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-2xl lg:text-3xl font-bold inline border-b-4 text-teal-500 border-gray-500">
            {contact.heading}
          </p>
          <p className="py-6 text-md lg:text-xl">{contact.intro}</p>
        </div>

        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="flex justify-center items-center"
        >
          <form
            action={contact.action}
            method="POST"
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder={contact.placeholders.name}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <input type="hidden" name="_gotcha" />
            <input
              type="email"
              name="email"
              placeholder={contact.placeholders.email}
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <textarea
              name="message"
              rows="10"
              placeholder={contact.placeholders.message}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <button className="group text-white hover:outline hover:outline-teal-500 px-4 py-2 lg:px-6 lg:py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300 text-md lg:text-lg">
              DM
              <MdOutlineEmojiEmotions className="ml-2 text-2xl lg:text-3xl text-yellow-200 group-hover:text-pink-600 animate-bounce" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
