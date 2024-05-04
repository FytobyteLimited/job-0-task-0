const Footer = () => {
  return (
    <footer className='pt-0 px-5 pb-4 box-border max-w-full text-dimgray font-inter'>
      <div className='w-[1227.4px] flex flex-row items-start justify-between gap-[20px] max-w-full'>
        <div className='flex flex-col items-start justify-start gap-[30px]'>
          <h3 className='m-0 relative text-5xl leading-[32px] font-bold text-black'>
            Explore
          </h3>
          <div>About FYTOBYTE LIMITED</div>
          <div>Our Solutions</div>
          <div>Our Blog</div>
        </div>
        <div className='flex flex-col items-start justify-start gap-[30px]'>
          <h3 className='m-0 relative text-5xl leading-[32px] font-bold text-black'>
            Expertise
          </h3>
          <div>Cloud Integration Solutions</div>
          <div>Custom Web Development</div>
          <div>Data Analytics and Insights</div>
        </div>
        <div className='flex flex-col items-start justify-start gap-[30px]'>
          <h3 className='m-0 relative text-5xl leading-[32px] font-bold text-black'>
            Services
          </h3>
          <div>Cybersecurity & Compliance</div>
          <div>AI-Powered Automation</div>
          <div>User Experience Design</div>
        </div>
        <div className='flex flex-col items-start justify-start gap-[30px]'>
          <h3 className='m-0 relative text-5xl leading-[32px] font-bold text-black'>
            Info
          </h3>
          <div>FAQ</div>
          <div>Documentation</div>
          <div>Get in touch</div>
        </div>
      </div>
      <div className='w-[1211.2px] mt-[100px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-sm text-black'>
        <div className='w-[253px] flex flex-col items-start justify-start gap-[34.5px]'>
          <div className='self-stretch flex flex-row items-start justify-start py-0 pr-9 pl-[35px]'>
            <div className='flex-1 flex flex-col items-start justify-start gap-[20.9px]'>
              <img
                className='self-stretch h-[118.1px] relative max-w-full overflow-hidden shrink-0'
                loading='lazy'
                alt=''
                src='/logomark.svg'
              />
              <div className='self-stretch flex flex-row items-start justify-start py-0 px-px'>
                <div className='flex-1 flex flex-row items-start justify-center gap-[20px]'>
                  <img
                    className='h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]'
                    loading='lazy'
                    alt=''
                    src='/svg-7.svg'
                  />
                  <img
                    className='h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]'
                    loading='lazy'
                    alt=''
                    src='/svg-8.svg'
                  />
                  <img
                    className='h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]'
                    loading='lazy'
                    alt=''
                    src='/svg-9.svg'
                  />
                  <img
                    className='h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]'
                    loading='lazy'
                    alt=''
                    src='/svg-10.svg'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='relative leading-[20px]'>
            © 2023 Fytobyte. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
