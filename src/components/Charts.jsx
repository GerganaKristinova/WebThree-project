export default function Charts() {
  return (
    <div className="md:flex">
      <div className="md:flex-grow">
        <div className="bg-gray md:border-r md:border-lightgray">
          <h2 className="uppercase text-s md:text-lg md:font-semibold md:text-center text-pearlwhite sm:max-md:pl-6 sm:max-md:pb-3 sm:pt-3 md:pt-1">
            Lorem Ipsum
          </h2>
          <p className="text-xs md:text-sm md:text-center text-darkwhite sm:max-md:pl-6 pb-3">
            Sample text
          </p>
        </div>
        <div className="h-85 bg-dark border-b md:border-r border-lightgray"></div>
      </div>
      <div className="md:flex-grow">
        <div className="bg-gray">
          <h2 className="uppercase text-s md:text-lg md:font-semibold md:text-center text-pearlwhite sm:max-md:pl-6 sm:max-md:pb-3 sm:pt-3 md:pt-1">
            Lorem Ipsum
          </h2>
          <p className="text-xs md:text-sm md:text-center text-darkwhite sm:max-md:pl-6 pb-3">
            Sample text
          </p>
        </div>
        <div className="h-85 bg-dark border-b border-lightgray"></div>
      </div>
    </div>
  );
}
