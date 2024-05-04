const Blog = () => {
  return (
    <div
      id='blog'
      className='self-stretch flex flex-col items-end justify-start gap-[39px] max-w-full text-center text-29xl text-dimgray font-inter'
    >
      <div className='self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full'>
        <div className='w-[663.3px] flex flex-col items-start justify-start gap-[34px] max-w-full'>
          <div className='self-stretch flex flex-row items-start justify-center py-0 px-5'>
            <button className='cursor-pointer py-[3px] pr-[19px] pl-[21px] bg-[transparent] rounded-9980xl flex flex-row items-start justify-start gap-[11.6px] border-[1px] border-solid border-gray-200'>
              <div className='relative text-5xl leading-[32px] capitalize font-medium font-inter text-gray-100 text-left inline-block min-w-[127.3px]'>
                Tech News
              </div>
              <div className='flex flex-col items-start justify-start pt-px px-0 pb-0'>
                <img
                  className='w-[30px] h-[30px] relative overflow-hidden shrink-0'
                  alt=''
                  src='/svg-6.svg'
                />
              </div>
            </button>
          </div>
          <div className='self-stretch flex flex-col items-end justify-start gap-[27px]'>
            <div className='self-stretch flex flex-row items-start justify-center py-0 px-5'>
              <h1 className='m-0 w-[389.3px] relative text-inherit leading-[48px] font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(90deg,_#000_14.46%,_#e7e7e7)]'>
                Our Blog & News
              </h1>
            </div>
            <h3 className='m-0 relative text-5xl leading-[32px] font-normal font-inherit'>
              <p className='m-0'>
                We share essential insights from the technology sector, AI,
              </p>
              <p className='m-0'>and the world of software development.</p>
            </h3>
          </div>
        </div>
      </div>
      <div className='self-stretch rounded-3xl bg-whitesmoke box-border flex flex-row items-start justify-center py-0 pr-0 pl-10 gap-[42.1px] max-w-full text-left text-5xl text-gray-100 border-[1px] border-solid border-lightgray'>
        <div className='flex flex-col items-start justify-start pt-[29px] px-0 pb-0 box-border min-w-[438.8999999999997px] max-w-full'>
          <div className='flex flex-col items-start justify-start gap-[29px] max-w-full'>
            <h3 className='m-0 relative text-inherit leading-[32px] font-bold font-inherit inline-block max-w-full'>
              <p className='m-0'>Unveiling the Art of Web Design: A</p>
              <p className='m-0'>Step-by-Step Guide</p>
            </h3>
            <div className='flex flex-col items-start justify-start gap-[14px] text-base text-darkslategray-200'>
              <div className='h-[116px] relative leading-[24px] flex items-center shrink-0'>
                <span>
                  <p className='m-0'>
                    In the ever-evolving digital landscape, a visually appealing
                  </p>
                  <p className='m-0'>
                    anduser-friendly website is crucial for success. Whether
                  </p>
                  <p className='m-0'>{`you&rsquo;re aseasoned designer or a novice looking to`}</p>
                  <p className='m-0'>
                    dip your toes into the world of web design, this step-by-
                  </p>
                  <p className='m-0'>
                    step guide will help you create a stunning and effective…
                  </p>
                </span>
              </div>
              <button className='cursor-pointer [border:none] py-3 px-8 bg-gray-200 w-[153.9px] rounded-md overflow-hidden flex flex-row items-start justify-start box-border'>
                <div className='flex-1 relative text-base tracking-[0.4px] leading-[24px] font-inter text-white text-center inline-block min-w-[90.3px] shrink-0'>
                  Learn More
                </div>
              </button>
            </div>
          </div>
        </div>
        <img
          className='h-[398px] flex-1 relative rounded-3xl max-w-full overflow-hidden'
          loading='lazy'
          alt=''
          src='/link@2x.png'
        />
      </div>
    </div>
  );
};

export default Blog;
