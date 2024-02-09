export default function PriceChange() {
  return (
    <>
      <div className="bg-gray">
        <h3 className="uppercase text-s md:text-lg md:font-semibold text-pearlwhite py-3 pl-6 md:pt-2.5 md:pl-7.5 lg:pl-10">
          Lorem Ipsum
        </h3>
      </div>
      <div className="flex items-center justify-center bg-dark relative border-b border-b-lightgray py-9">
        <div className="h-40 w-4 bg-gray absolute rotate-35"></div>
        <div className="flex flex-grow flex-col text-center">
          <p className="text-xl sm:font-semibold md:text-2xl md:font-bold lg:text-xl text-red pb-3 md:pb-2">
            30%
          </p>
          <h3 className="uppercase text-s md:text-2xl lg:text-xl text-pearlwhite">
            Lorem Ipsum
          </h3>
        </div>
        <div className="flex flex-grow flex-col text-center">
          <p className="text-xl sm:font-semibold md:text-2xl md:font-bold lg:text-xl text-green pb-3 md:pb-2">
            70%
          </p>
          <h3 className="uppercase text-s md:text-2xl lg:text-xl text-pearlwhite">
            Lorem Ipsum
          </h3>
        </div>
      </div>

      <div className="flex border-b border-lightgray">
        <div className="flex-grow border-r border-r-lightgray">
          <div className="bg-gray">
            <h3 className="uppercase text-s md:text-lg md:font-semibold text-pearlwhite py-3 pl-6 md:pt-2.5 md:pl-7.5 lg:pl-10">
              Lorem Ipsum
            </h3>
          </div>
          <div className="bg-dark flex flex-col justify-center text-center py-9">
            <h3 className="text-s text-pearlwhite pt-5">
              <span className="font-bold">3,000</span> Lorem
            </h3>
            <p className="text-xs font-light text-darkwhite">
              Lorem Ipsum Lorem Ipsum
            </p>
          </div>
        </div>
        <div className="flex-grow">
          <div className="bg-gray">
            <h3 className="uppercase text-s md:text-lg md:font-semibold text-pearlwhite py-3 pl-6 md:pt-2.5 md:pl-7.5 lg:pl-10">
              Lorem Ipsum
            </h3>
          </div>
          <div className="bg-dark flex flex-col justify-center text-center py-9">
            <h3 className="text-s text-pearlwhite pt-5">
              <span className="font-bold">7,000</span> Lorem
            </h3>
            <p className="text-xs font-light text-darkwhite">
              Lorem Ipsum Lorem Ipsum
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
