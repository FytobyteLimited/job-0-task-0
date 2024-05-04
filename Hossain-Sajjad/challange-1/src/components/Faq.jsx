const Faq = () => {
  return (
    <div
      id='faq'
      className='self-stretch flex flex-row items-start justify-start pt-0 pb-[58.5px] pr-[7px] pl-[6.8px] box-border max-w-full text-center text-29xl text-dimgray font-inter'
    >
      <div className='flex-1 flex flex-col items-end justify-start gap-[7px] max-w-full'>
        <div className='self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[27px]'>
          <button className='cursor-pointer py-[3px] pr-[19px] pl-[21px] bg-[transparent] rounded-9980xl flex flex-row items-start justify-start gap-[11.6px] border-[1px] border-solid border-gray-200'>
            <div className='relative text-5xl leading-[32px] capitalize font-medium font-inter text-gray-100 text-left'>
              Knowledge Base
            </div>
            <div className='flex flex-col items-start justify-start pt-px px-0 pb-0'>
              <img
                className='w-[30px] h-[30px] relative overflow-hidden shrink-0'
                alt=''
                src='/img.svg'
              />
            </div>
          </button>
        </div>
        <div className='self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full'>
          <div className='w-[584px] flex flex-col items-end justify-start gap-[27px] max-w-full'>
            <div className='flex flex-row items-start justify-end py-0 pr-[35.3px] pl-9'>
              <h1 className='m-0 relative text-inherit leading-[48px] font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(90deg,_#000_14.46%,_#e7e7e7)]'>
                FAQ & Documentation
              </h1>
            </div>
            <h3 className='m-0 self-stretch relative text-5xl leading-[32px] font-normal font-inherit'>
              <p className='m-0'>
                FYTOBYTE LIMITED provides customers complete entry to
              </p>
              <p className='m-0'>knowledge base API and documentation.</p>
            </h3>
          </div>
        </div>
        <div className='self-stretch flex flex-row items-start justify-center gap-[40px] max-w-full text-left text-5xl text-gray-100'>
          <img
            className='h-[400px] flex-1 relative rounded-3xl max-w-full overflow-hidden min-w-[418px] min-h-[400px]'
            loading='lazy'
            alt=''
            src='/divwfull-2@2x.png'
          />
          <div className='flex-[0.9049] rounded-3xl bg-whitesmoke box-border flex flex-col items-start justify-start pt-[19px] pb-[71px] pr-5 pl-[41px] gap-[18px] min-w-[418px] max-w-full border-[1px] border-solid border-lightgray'>
            <div className='flex flex-col items-start justify-start pt-0 px-0 pb-[11px] gap-[9px]'>
              <img
                className='w-[50px] h-[50px] relative overflow-hidden shrink-0'
                loading='lazy'
                alt=''
                src='/svg-5.svg'
              />
              <h3 className='m-0 relative text-inherit leading-[32px] font-bold font-inherit'>
                Full API Access
              </h3>
            </div>
            <div className='relative text-base leading-[24px] text-darkslategray-200 inline-block max-w-full'>
              <p className='m-0'>
                Sign up and access our intuitive platform. Upload your data
                effortlessly,
              </p>
              <p className='m-0'>
                then customize preferences. Our robust tools analyze and
                generate
              </p>
              <p className='m-0'>
                insights promptly. Collaborate seamlessly with team members
                using
              </p>
              <p className='m-0'>
                integrated communication features. Watch your operations
                optimize as
              </p>
              <p className='m-0'>
                our app streamlines workflows and drives efficiency for your
                success.
              </p>
            </div>
            <button className='cursor-pointer [border:none] py-3 pr-[39.6px] pl-10 bg-gray-200 w-[173.9px] rounded-lg overflow-hidden flex flex-row items-start justify-end box-border'>
              <div className='w-[86.3px] relative text-base leading-[24px] font-inter text-whitesmoke text-center flex items-center justify-center shrink-0 min-w-[86.3px]'>
                Learn More
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
