import { footer } from '../data/content';

const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-t from-black to-black/95">
      <div className="text-center min-h-[200px] text-white text-sm lg:text-md">
        <p className="pt-12">
          Developed by <span className="text-teal-500"> {footer.developedBy} </span> &copy; {footer.year}
        </p>
      </div>
    </div>
  );
};

export default Footer;
