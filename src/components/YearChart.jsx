export default function YearChart() {
    return (
      <div className="md:flex-grow lg:flex-grow">
        <div className="h-17 md:h-12 lg:h-12 bg-gray">
          <h2 className="text-s md:text-lg md:font-semibold lg:text-lg lg:font-semibold text-pearlwhite sm:pl-6 sm:pt-3 md:pl-0 md:pt-0 lg:pl-0 lg:pt-0 md:text-center lg:text-center">LOREM IPSUM</h2>
          <p className="text-xs md:text-sm lg:text-sm md:text-center lg:text-center text-darkwhite sm:pl-6 md:pl-0 lg:pl-0">Sample text</p>
        </div>
        <div className="h-85 bg-dark border-b border-lightgray">
        </div>
      </div>
    );
  }