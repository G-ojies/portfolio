import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { profile } from '../data/content';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <div className="mx-10 lg:mx-0 md:mx-0 xl:mx-0">
      <div className="lg:container md:container xl:container mx-auto min-h-[15vh] lg:min-h-[30vh]">
        <nav className="lg:container md:container xl:container py-10 flex justify-between">
          <h1 className="text-md md:text-3xl hover:scale-110 duration-200 font-signature dark:text-white">
            {profile.signature} <sup>&#8482;</sup>
          </h1>
          <ul className="flex items-center">
            <li>
              {darkMode ? (
                <BsSunFill
                  onClick={() => setDarkMode(false)}
                  aria-label="Switch to light mode"
                  role="button"
                  className="cursor-pointer text-md md:text-2xl hover:text-teal-400 hover:scale-110 duration-200"
                />
              ) : (
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(true)}
                  aria-label="Switch to dark mode"
                  role="button"
                  className="cursor-pointer text-md md:text-2xl hover:text-teal-400 hover:scale-110 duration-200"
                />
              )}
            </li>
            <li>
              <a
                href={profile.hireMeLink}
                className="bg-gradient-to-r from-cyan-400 to-teal-600 text-white text-xl px-2 py-2 rounded-md ml-8 md:ml-12 md:px-2 md:py-2 md:text-xl hover:bg-gradient-to-l hover:scale-105 duration-200 cursor-pointer"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
