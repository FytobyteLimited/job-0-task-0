const About = () => {
  return (
    <div className='w-[1500px] flex flex-col items-start justify-start pt-0 px-20 pb-20 box-border max-w-full z-[1] text-center text-5xl text-black font-roboto lg:pl-10 lg:pr-10 lg:pb-[34px] lg:box-border'>
      <div className='self-stretch flex flex-row items-start justify-center px-5 pb-5 box-border max-w-full z-[1] text-53xl'>
        <h1 className='m-0 flex-1 relative text-inherit leading-[72px] font-normal font-inherit inline-block max-w-full z-[1] text-[56px]'>
          About Us
        </h1>
      </div>
      <div className='self-stretch flex flex-row items-start justify-center max-w-full z-[1] text-dimgray'>
        <div className='w-[938px] flex flex-row items-start justify-start pt-px px-[34px] pb-0 box-border max-w-full z-[1]'>
          <h3 className='m-0 flex-1 relative text-inherit leading-[32px] font-normal font-inherit inline-block max-w-full z-[1]'>
            Watch your operations optimize as our apps streamline workflows and
            drives efficiency for your success.
          </h3>
        </div>
      </div>
      <div className='self-stretch flex flex-row items-start justify-center py-10 pr-[13px] pl-3.5 box-border gap-[40px] max-w-full z-[1] text-left text-gray-100 lg:flex-wrap lg:pt-[49.60000000000037px] lg:pb-[26px] lg:box-border'>
        <div className='flex-1 flex flex-col items-start justify-start relative gap-[128px] min-w-[523px] max-w-full z-[1]'>
          <div className="self-stretch h-[1206px] relative rounded-4xl bg-[url('/public/frame@3x.png')] bg-cover bg-no-repeat bg-[top] z-[1]"></div>
          <div className='flex-1 rounded-3xl bg-whitesmoke box-border flex flex-col items-start justify-start py-[39px] px-10 gap-[20px] max-w-full z-[1] border-[1px] border-solid border-lightgray'>
            <div className='self-stretch flex flex-col items-start justify-start'>
              <img
                className='w-[50px] h-[50px] relative overflow-hidden shrink-0 z-[1]'
                loading='lazy'
                alt=''
                src='/frame1.svg'
              />
              <div className='self-stretch flex flex-row items-start justify-start py-2 px-0 relative z-[1]'>
                <h3 className='m-0 relative text-inherit leading-[32px] font-normal font-inherit inline-block min-w-[92px] z-[1]'>
                  Mission
                </h3>
              </div>
            </div>
            <div className='self-stretch flex flex-row items-start justify-start pt-0.5 px-0 pb-0 box-border relative max-w-full z-[1] text-base'>
              <div className='flex-1 relative leading-[24px] inline-block max-w-full z-[1]'>
                At FYTOBYTE LIMITED, our mission is to revolutionize the
                business landscape by delivering innovative SaaS solutions that
                empower growth and efficiency. We strive to create seamless,
                user-centric software that simplifies complex processes,
                enabling businesses to thrive in a rapidly evolving digital
                world. With a commitment to excellence and technological
                advancement, we aim to be the driving force behind our clients
                success and transformation.
              </div>
            </div>
          </div>
        </div>
        <div className='w-[469px] flex flex-col items-start justify-start py-5 px-0 box-border gap-[40px] min-w-[469px] max-w-full z-[1] lg:flex-1'>
          <div className='self-stretch rounded-3xl bg-whitesmoke box-border flex flex-col items-start justify-start py-[39px] px-10 gap-[20px] max-w-full z-[1] border-[1px] border-solid border-lightgray'>
            <div className='self-stretch flex flex-col items-start justify-start max-w-full'>
              <img
                className='w-[50px] h-[50px] relative overflow-hidden shrink-0 z-[1]'
                loading='lazy'
                alt=''
                src='/frame-1.svg'
              />
              <div className='self-stretch flex flex-row items-start justify-start py-2 px-0 box-border max-w-full z-[1]'>
                <h3 className='m-0 relative text-inherit leading-[32px] font-normal font-inherit inline-block min-w-[73px] z-[1]'>
                  Vision
                </h3>
              </div>
            </div>
            <div className='self-stretch flex flex-row items-start justify-start pt-0.5 pb-0 pr-2.5 pl-0 box-border max-w-full z-[1] text-base'>
              <div className='flex-1 relative leading-[24px] inline-block max-w-full z-[1]'>
                FYTOBYTE LIMITED envisions a future where businesses harness the
                power of technology effortlessly. We aim to be the vanguard in
                creating adaptable, user-centric SaaS solutions that propel
                enterprises towards success. We envision a digital landscape
                where our innovative tools and services revolutionize
                operations, enabling organizations to flourish and stay ahead in
                an ever-evolving, competitive market, setting new benchmarks for
                excellence.
              </div>
            </div>
          </div>
          <div className='self-stretch rounded-3xl bg-whitesmoke box-border overflow-hidden flex flex-row items-start justify-start max-w-full z-[1] border-[1px] border-solid border-lightgray'>
            <div className="h-[1176px] flex-1 relative rounded-4xl bg-[url('/public/frame2@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[1]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
