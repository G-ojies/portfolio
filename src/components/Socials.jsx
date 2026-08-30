import { BsPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter, FaTelegram } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';
import { socials } from '../data/content';

// The rail sits mostly off-canvas and slides in on hover, so the label is
// hidden until you reach for it.
const links = [
  {
    label: 'Resume',
    href: socials.resume,
    Icon: BsPersonLinesFill,
    style: 'rounded-tr-md bg-gradient-to-r from-teal-400 to-teal-700',
    download: true,
  },
  { label: 'GitHub', href: socials.github, Icon: FaGithub, style: 'bg-gradient-to-r from-gray-600 to-github' },
  { label: 'LinkedIn', href: socials.linkedin, Icon: FaLinkedin, style: 'bg-gradient-to-r from-blue-400 to-blue-700' },
  { label: 'Mail', href: socials.mail, Icon: HiOutlineMail, style: 'bg-gradient-to-r from-black to-gray-600' },
  { label: 'X', href: socials.twitter, Icon: FaXTwitter, style: 'bg-gradient-to-r from-gray-700 to-black' },
  {
    label: 'Telegram',
    href: socials.telegram,
    Icon: FaTelegram,
    style: 'rounded-br-md bg-gradient-to-r from-sky-400 to-telegram',
    tight: true,
  },
];

const Socials = () => {
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-40">
      <ul>
        {links.map(({ label, href, Icon, style, tight, download }) => (
          <li
            key={label}
            className={`${style} flex justify-between items-center w-40 h-14 ${
              tight ? 'px-4' : 'px-3'
            } ml-[-75px] ${
              tight ? 'hover:ml-[-5px]' : 'hover:ml-[-10px]'
            } hover:rounded-md duration-300 hover:scale-110`}
          >
            <a
              className="flex justify-between items-center w-full text-white"
              href={href}
              target="_blank"
              rel="noreferrer"
              {...(download ? { download: true } : {})}
            >
              {label}
              <Icon size={30} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
