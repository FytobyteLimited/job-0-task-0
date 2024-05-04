import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <div className='w-[1384.7px] [backdrop-filter:blur(19.5px)] rounded-25xl bg-gray-300 flex flex-row items-start justify-between py-[15px] px-[47px] box-border top-[0] z-[99] sticky gap-[20px] max-w-full'>
      <Link to='/'>
        <img
          className='h-[50.6px] w-[234px] relative'
          alt=''
          src='/group.svg'
        />
      </Link>
      <div className='w-[552px] flex flex-col items-start justify-start pt-[13.3px] px-0 pb-0 box-border max-w-full'>
        <nav className='m-0 w-[480.4px] flex flex-row items-start justify-between gap-[20px] max-w-full text-left text-base text-darkslateblue font-inter'>
          <div className='h-6 w-[44.6px] relative overflow-hidden shrink-0'>
            <Link
              to='/'
              style={{ textDecoration: "none" }}
              className='absolute top-[0px] left-[0px] leading-[24px] flex items-center w-full h-full min-w-[45px] text-darkslateblue'
            >
              Home
            </Link>
            <div className='absolute top-[23px] left-[0px] bg-darkslateblue w-[44.6px] h-[1px] ' />
          </div>
          <div className='overflow-hidden flex flex-row items-start justify-start'>
            <HashLink
              to='#service'
              style={{ textDecoration: "none" }}
              className='relative leading-[24px] inline-block min-w-[66px] shrink-0 text-darkslateblue'
              smooth
            >
              Services
            </HashLink>
          </div>
          <div className='overflow-hidden flex flex-row items-start justify-start'>
            <HashLink
              to='#solution'
              style={{ textDecoration: "none" }}
              className='relative leading-[24px] inline-block min-w-[62px] shrink-0 text-darkslateblue'
              smooth
            >
              Solution
            </HashLink>
          </div>
          <div className='overflow-hidden flex flex-row items-start justify-start'>
            <HashLink
              to='#faq'
              style={{ textDecoration: "none" }}
              className='relative leading-[24px] inline-block min-w-[31px] shrink-0 text-darkslateblue'
              smooth
            >
              FAQ
            </HashLink>
          </div>
          <div className='overflow-hidden flex flex-row items-start justify-start'>
            <Link
              to='/about'
              style={{ textDecoration: "none" }}
              className='relative leading-[24px] inline-block min-w-[46px] shrink-0 text-darkslateblue'
            >
              About
            </Link>
          </div>
          <div className='overflow-hidden flex flex-row items-start justify-start'>
            <HashLink
              to='#blog'
              style={{ textDecoration: "none" }}
              className='relative leading-[24px] inline-block min-w-[34px] shrink-0 text-darkslateblue'
              smooth
            >
              Blog
            </HashLink>
          </div>
        </nav>
      </div>
      <div className='flex flex-col items-start justify-start pt-[5.3px] px-0 pb-0'>
        <div className='flex flex-row items-start justify-start gap-[22.7px]'>
          <img
            className='w-14 relative rounded-9980xl max-h-full min-h-[40px]'
            alt=''
            src='/button--switch.svg'
          />
          <button className='cursor-pointer py-2 pr-[15px] pl-4 bg-gray-200 rounded-9980xl overflow-hidden flex flex-row items-start justify-start'>
            <div className='relative text-base leading-[24px] font-inter text-lightgray text-center inline-block min-w-[95px]'>
              Talk with us
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
