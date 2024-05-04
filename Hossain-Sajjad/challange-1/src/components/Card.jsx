const Card = ({ image, name, description1, description2 }) => {
  return (
    <div className='h-[350px] w-[643.2px] rounded-3xl bg-whitesmoke box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[221px] px-[21px] pb-[57px] gap-[20.5px] max-w-full text-left text-xl text-gray-100 font-inter border-[1px] border-solid border-lightgray'>
      <img
        className='mt-[-229.5px] ml-[-52px] w-[705.3px] h-[209px] relative overflow-hidden shrink-0 object-cover max-w-[118%]'
        alt=''
        src={image}
      />
      <div className='flex flex-col items-start justify-start gap-[11px] shrink-0'>
        <b className='w-[225.3px] h-6 relative leading-[28px] flex items-center shrink-0'>
          {name}
        </b>
        <div className='relative text-sm leading-[20px] text-darkslategray-200'>
          <p className='m-0'>{description1}</p>
          <p className='m-0'>{description2}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
