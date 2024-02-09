export default function PercentageRates() {
  return (
    <>
      <div className="md:flex">
        <div className="md:flex md:flex-col md:flex-grow md:border-r md:border-lightgray">
          <div className="bg-gray">
            <h3 className="uppercase text-s md:text-lg md:font-semibold text-pearlwhite py-3 pl-6 md:pl-7.5 lg:pl-10">
              Lorem Ipsum
            </h3>
          </div>
          <div className="flex border-b border-lightgray">
            <div className="bg-dark flex-grow justify-center items-center py-6 md:py-9">
              <div className="flex flex-col items-center">
                <p className="text-xl text-pearlwhite">2,171,00</p>
                <hr className="text-darkwhite my-2 px-20"></hr>
                <p className="text-xl text-pearlwhite">21.71%</p>
              </div>
            </div>
            <div className="bg-dark flex flex-grow flex-col justify-center text-center">
              <h3 className="text-xl text-pearlwhite pb-4">Lorem Ipsum</h3>
              <p className="text-s font-semibold tracking-wider text-darkwhite">
                Lorem Ipsum Lorem
              </p>
            </div>
          </div>
        </div>
        <div className="md:flex md:flex-col md:flex-grow">
        <div className="bg-gray">
          <h3 className="uppercase text-s md:text-lg md:font-semibold text-pearlwhite py-3 pl-6 md:pl-7.5 lg:pl-10">
            Lorem Ipsum
          </h3>
        </div>
        <div className="flex border-b border-lightgray">
          <div className="bg-dark flex-grow justify-center items-center py-6 md:py-9">
            <div className="flex flex-col items-center">
              <p className="text-xl text-pearlwhite">2,171,00</p>
              <hr className="text-darkwhite my-2 px-20"></hr>
              <p className="text-xl text-pearlwhite">21.71%</p>
            </div>
          </div>
          <div className="bg-dark flex flex-grow flex-col justify-center text-center">
            <h3 className="text-xl text-pearlwhite pb-4">Lorem Ipsum</h3>
            <p className="text-s font-semibold tracking-wider text-darkwhite">
              Lorem Ipsum Lorem
            </p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
