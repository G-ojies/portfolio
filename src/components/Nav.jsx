import { Link } from 'react-scroll';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsGearFill, BsPersonWorkspace, BsChatDotsFill } from 'react-icons/bs';
import { MdWorkHistory } from 'react-icons/md';

const items = [
  { to: 'home', Icon: BiHomeAlt, label: 'Home' },
  { to: 'about', Icon: BiUser, label: 'About' },
  { to: 'service', Icon: BsGearFill, label: 'Services' },
  { to: 'portfolio', Icon: MdWorkHistory, label: 'Portfolio' },
  { to: 'experience', Icon: BsPersonWorkspace, label: 'Experience' },
  { to: 'contact', Icon: BsChatDotsFill, label: 'Contact' },
];

const Nav = () => {
  return (
    <nav className="fixed bottom-[-2px] lg:bottom-8 w-full overflow-hidden z-50">
      <div className="mx-auto">
        <div className="bg-gradient-to-l h-[7vh] lg:h-[60px] md:h-[60px] backdrop-blur-2xl md:rounded-full lg:rounded-full max-w-full md:max-w-[400px] lg:max-w-[400px] xl:max-w-[400px] mx-auto px-5 flex justify-between items-center text-white hover:bg-gradient-to-r from-black/60 to-black/100 lg:dark:border border-teal-500">
          {items.map(({ to, Icon, label }) => (
            <div key={to} className="text-2xl md:text-3xl lg:text-3xl xl:text-3xl">
              <Link
                to={to}
                smooth
                spy
                duration={500}
                offset={-70}
                activeClass="bg-teal-500 rounded-full"
                aria-label={label}
                className="cursor-pointer drop-shadow-2xl lg:w-[50px] lg:h-[50px] w-[40px] h-[40px] flex items-center justify-center hover:text-teal-500"
              >
                <Icon />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
