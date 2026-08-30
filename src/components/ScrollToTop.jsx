import { HiArrowNarrowUp } from 'react-icons/hi';
import { Link } from 'react-scroll';

const ScrollToTop = () => {
  return (
    <div>
      <div className="hidden lg:block fixed bottom-0 rounded-full right-0 bg-teal-500 z-40">
        <Link to="home" smooth duration={500} className="text-white font-bold cursor-pointer" aria-label="Back to top">
          <HiArrowNarrowUp size={26} />
        </Link>
      </div>
    </div>
  );
};

export default ScrollToTop;
