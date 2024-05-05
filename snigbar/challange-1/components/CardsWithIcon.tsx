interface Props {
  Icon: React.FC;
  heading: string;
  subHeadingOne: string;
  subHeadingTwo?: string;
  learnMore: boolean;
  style?: string;
}
const CardsWithIcon = ({
  Icon,
  heading,
  subHeadingOne,
  subHeadingTwo,
  learnMore,
  style,
}: Props) => {
  return (
    <div
      className={`md:px-10 md:py-6 px-6 py-4 flex flex-col justify-between items-start ${style} border border-slate-200 dark:border-slate-800 rounded-2xl`}
    >
      <Icon />

      <h1 className="font-semibold">{heading}</h1>
      <p className="text-sm font-light">{subHeadingOne}</p>
      {subHeadingTwo && (
        <p className="text-sm font-light mt-1">{subHeadingTwo}</p>
      )}

      {learnMore && (
        <button className="w-24 md:w-40 h-10 bg-primary-dark dark:bg-white rounded-md text-white dark:text-primary-dark font-light text-sm text-center mx-auto md:mx-0">
          Learn More
        </button>
      )}
    </div>
  );
};

export default CardsWithIcon;
