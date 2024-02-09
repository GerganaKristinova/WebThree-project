import priceDown from '../assets/down.svg'
import priceUp from '../assets/up.svg'

export default function ChangeInDollars() {
  return (
    <div className="flex">
      <section className="flex-grow border-r border-lightgray">
        <div className="sm:max-md:flex items-center justify-center bg-gray py-3 md:pl-7.5 lg:pl-10">
          <h3 className="uppercase text-s md:text-lg md:font-semibold text-pearlwhite md:">
            Lorem Ipsum
          </h3>
        </div>
        <div className="flex justify-center items-center text-center bg-dark py-5">
          <div className='md:flex items-center pr-2 md:pr-3'>
            <h4 className="text-base md:text-xl font-semibold text-pearlwhite md:pr-3">17724</h4>
            <p className="text-xs md:text-s font-normal text-darkwhite">-6 in 24H</p>
          </div>
          <img src={priceDown} alt="price down"></img>
        </div>
      </section>
      <section className="flex-grow border-r border-lightgray">
        <div className="sm:max-md:flex items-center justify-center bg-gray py-3 md:pl-7.5 lg:pl-10">
          <h3 className="uppercase text-s md:text-lg md:font-semibold text-pearlwhite">
            Lorem Ipsum
          </h3>
        </div>
        <div className="flex justify-center items-center text-center bg-dark py-5">
          <div className='md:flex items-center pr-2 md:pr-3'>
            <h4 className="text-base md:text-xl font-semibold text-pearlwhite md:pr-3">$2,210</h4>
            <p className="text-xs md:text-s font-normal text-darkwhite">-in 7D</p>
          </div>
          <img src={priceUp} alt="price down"></img>
        </div>
      </section>
      <section className="flex-grow border-r border-lightgray">
        <div className="sm:max-md:flex items-center justify-center bg-gray py-3 md:pl-7.5 lg:pl-10">
          <h3 className="uppercase text-s md:text-lg md:font-semibold text-pearlwhite">
            Lorem Ipsum
          </h3>
        </div>
        <div className="flex justify-center items-center text-center bg-dark py-5">
          <div className='md:flex items-center pr-2 md:pr-3'>
            <h4 className="text-base md:text-xl font-semibold text-pearlwhite md:pr-3">$2,210</h4>
            <p className="text-xs md:text-s font-normal text-darkwhite">-in 7D</p>
          </div>
          <img src={priceDown} alt="price down"></img>
        </div>
      </section>
    </div>
  );
}
