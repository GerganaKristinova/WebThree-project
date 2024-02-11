export default function Buttons() {
  return (
    <div className="flex bg-rock">
      <div className="flex flex-grow justify-center border border-lightgray py-10 md:py-8.5">
        <div className="h-3.5 w-3.5 self-center bg-green rounded-full border-2 border-charcoal shadow-glow shadow-green"></div>
        <button className="text-base md:text-xl text-pearlwhite pl-2 md:pl-4">
          Button 1
        </button>
      </div>
      <div className="flex flex-grow justify-center border-y border-r border-lightgray py-10 md:py-8.5">
        <div className="h-3.5 w-3.5 self-center bg-red rounded-full border-2 border-charcoal shadow-glow shadow-red"></div>
        <button className="text-base md:text-xl text-pearlwhite pl-2 md:pl-4">
          Button 2
        </button>
      </div>
    </div>
  );
}
