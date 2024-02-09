export default function PriceChange() {
  return (
    <div className="lg:flex ">
      <div className="flex-grow bg-gray lg:border-r lg:border-lightgray">
        <h3 className="uppercase text-s md:text-lg md:font-semibold text-pearlwhite py-3 pl-6 md:pl-7.5 lg:pl-10">
          Lorem Ipsum
        </h3>
        <div className="flex justify-evenly items-center overflow-hidden bg-dark relative border-b border-b-lightgray py-9 md:py-13.5 lg:py-10.5">
          <div className="h-44 md:h-60 w-4 overflow-hidden bg-gray absolute rotate-35"></div>
          <div className="wrapper">
            <p className="text-xl md:text-2xl lg:text-xl sm:font-semibold md:font-bold text-center text-red pb-3 md:pb-2">
              30%
            </p>
            <h3 className="uppercase text-s md:text-2xl lg:text-xl text-pearlwhite">
              Lorem Ipsum
            </h3>
          </div>
          <div className="wrapper">
            <p className="text-xl md:text-2xl lg:text-xl sm:font-semibold md:font-bold text-center text-green pb-3 md:pb-2">
              70%
            </p>
            <h3 className="uppercase text-s md:text-2xl lg:text-xl text-pearlwhite">
              Lorem Ipsum
            </h3>
          </div>
        </div>
      </div>

      <div className="sm:max-lg:w-1/2 sm:max-lg:float-right flex-grow bg-gray">
        <div className="border-r border-b border-lightgray">
          <div className="bg-gray">
            <h3 className="uppercase text-s md:text-lg md:font-semibold text-pearlwhite py-3 pl-6 md:pl-7.5 lg:pl-10">
              Lorem Ipsum
            </h3>
          </div>
          <div className="bg-dark text-center py-9">
            <h3 className="text-s md:text-2xl text-pearlwhite py-2.5">
              <span className="font-bold">3,000</span> Lorem
            </h3>
            <p className="text-xs md:text-s font-light text-darkwhite">
              Lorem Ipsum Lorem Ipsum
            </p>
          </div>
        </div>
      </div>

      <div className="sm:max-lg:w-1/2 flex-grow bg-gray">
        <div className="border-r border-b border-lightgray">
          <div className="bg-gray">
            <h3 className="uppercase text-s md:text-lg md:font-semibold text-pearlwhite py-3 pl-6 md:pl-7.5 lg:pl-10">
              Lorem Ipsum
            </h3>
          </div>
          <div className="bg-dark text-center py-9">
            <h3 className="text-s md:text-2xl text-pearlwhite py-2.5">
              <span className="font-bold">7,000</span> Lorem
            </h3>
            <p className="text-xs md:text-s font-light text-darkwhite">
              Lorem Ipsum Lorem Ipsum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
