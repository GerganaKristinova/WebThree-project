import priceDown from '../assets/down.svg'
import priceUp from '../assets/up.svg'

export default function ChangeInDollars() {
  return (
    <div className="flex">
      <section className="flex-grow">
        <div className="flex items-center justify-center bg-gray py-3">
          <h3 className="uppercase text-s md:text-lg md:font-semibold text-pearlwhite">
            Lorem Ipsum
          </h3>
        </div>
        <div className="flex justify-center items-center text-center bg-dark py-5">
          <div className='pr-2'>
            <h4 className="text-base font-semibold text-pearlwhite">17724</h4>
            <p className="text-xs font-normal text-darkwhite">-6 in 24H</p>
          </div>
          <img src={priceDown} alt="price down"></img>
        </div>
      </section>
      <section className="flex-grow">
        <div className="flex items-center justify-center bg-gray py-3">
          <h3 className="uppercase text-s md:text-lg md:font-semibold text-pearlwhite">
            Lorem Ipsum
          </h3>
        </div>
        <div className="flex justify-center items-center text-center bg-dark py-5">
          <div className='pr-2'>
            <h4 className="text-base font-semibold text-pearlwhite">$2,210</h4>
            <p className="text-xs font-normal text-darkwhite">-in 7D</p>
          </div>
          <img src={priceUp} alt="price down"></img>
        </div>
      </section>
      <section className="flex-grow">
        <div className="flex items-center justify-center bg-gray py-3">
          <h3 className="uppercase text-s md:text-lg md:font-semibold text-pearlwhite">
            Lorem Ipsum
          </h3>
        </div>
        <div className="flex justify-center items-center text-center bg-dark py-5">
          <div className='pr-2'>
            <h4 className="text-base font-semibold text-pearlwhite">$2,210</h4>
            <p className="text-xs font-normal text-darkwhite">-in 7D</p>
          </div>
          <img src={priceDown} alt="price down"></img>
        </div>
      </section>
    </div>
  );
}
