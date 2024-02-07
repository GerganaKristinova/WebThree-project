export default function Change() {
  return (
    <>
      <div className="h-10 bg-gray">
        <h3 className="text-s md:text-lg md:font-semibold lg:text-lg lg:font-semibold text-pearlwhite pt-3 pl-6 md:pt-2.5 md:pl-7.5 lg:pt-2.5 lg:pl-10">LOREM IPSUM</h3>
      </div>
      <div className="flex h-30 relative overflow-hidden">
        <div className="h-48 w-4 absolute m-auto left-0 right-0 top-0 bottom-0 rotate-35 bg-gray">
        </div>
        <div className="bg-dark flex-grow text-center border-b-lightgray p-8"> 
          <p className="text-xl sm:font-semibold md:text-2xl md:font-bold lg:text-xl lg:font-bold text-red pb-3.5 md:pb-2 lg:pb-2">30%</p>
          <h3 className="text-s md:text-2xl lg:text-xl text-pearlwhite">LOREM IPSUM</h3>
        </div>
        <div className="bg-dark flex-grow text-center border-b-lightgray p-8">
          <p className="text-xl sm:font-semibold md:text-2xl md:font-bold lg:text-xl lg:font-bold text-green pb-3.5 md:pb-2 lg:pb-2">70%</p>
          <h3 className="text-s md:text-2xl lg:text-xl text-pearlwhite">LOREM IPSUM</h3>
        </div>
      </div>
    </>
  );
}
