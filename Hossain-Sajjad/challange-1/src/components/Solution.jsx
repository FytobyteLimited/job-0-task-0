import Card from "./Card";

const Solution = () => {
  return (
    <div
      id='solution'
      className='self-stretch flex flex-row items-start justify-start pt-0 pb-[58.5px] pr-[7px] pl-[6.8px] box-border max-w-full text-center text-29xl text-dimgray font-inter'
    >
      <div className='flex-1 flex flex-col items-end justify-start gap-[40px] max-w-full'>
        <div className='self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full'>
          <div className='w-[651.5px] flex flex-col items-start justify-start gap-[34px] max-w-full'>
            <div className='self-stretch flex flex-row items-start justify-center py-0 px-5'>
              <button className='cursor-pointer py-[3px] px-5 bg-[transparent] rounded-9980xl flex flex-row items-start justify-start gap-[11.2px] border-[1px] border-solid border-gray-200'>
                <div className='relative text-5xl leading-[32px] capitalize font-medium font-inter text-gray-100 text-left'>
                  Our Solution
                </div>
                <div className='flex flex-col items-start justify-start pt-px px-0 pb-0'>
                  <img
                    className='w-[30px] h-[30px] relative overflow-hidden shrink-0'
                    alt=''
                    src='/svg-4.svg'
                  />
                </div>
              </button>
            </div>
            <div className='flex flex-col items-end justify-start gap-[26px]'>
              <h1 className='m-0 relative text-inherit leading-[48px] font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(90deg,_#000_14.46%,_#e7e7e7)]'>
                <p className='m-0'>Streamlining operations,</p>
                <p className='m-0'>unleashing seamless digital</p>
                <p className='m-0'>solutions</p>
              </h1>
              <div className='flex flex-row items-start justify-end py-0 px-2.5 text-5xl'>
                <h3 className='m-0 relative text-inherit leading-[32px] font-normal font-inherit'>
                  Innovative solutions for seamless digital transformation.
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className='self-stretch flex flex-row items-start justify-center gap-[40px] max-w-full text-left text-xl text-gray-100'>
          <Card
            image='/image-1@2x.png'
            name='FYTOBYTE LIMITED Solutions'
            description1='A comprehensive business service app offering efficient solutions for seamless operations'
            description2='and growth.'
          />
          <Card
            image='/image-2@2x.png'
            name='FYTOBYTE LIMITED Innovate'
            description1='A comprehensive business service app offering efficient solutions for seamless operations'
            description2='and growth.'
          />
        </div>
        <div className='self-stretch flex flex-row items-start justify-center gap-[40px] max-w-full'>
          <Card
            image='/image-3@2x.png'
            name='FYTOBYTE LIMITED Connect'
            description1='A networking app facilitating connections, bridging users, and businesses for enhanced'
            description2='communication and partnerships.'
          />
          <Card
            image='/image-4@2x.png'
            name='FYTOBYTE LIMITED Sphere'
            description1='A collaborative platform connecting businesses and users in a unified, innovative'
            description2='ecosystem for streamlined interaction.'
          />
        </div>
      </div>
    </div>
  );
};

export default Solution;
