export default function Buttons() {
  return (
    <div className="flex h-25">
      <div className="flex flex-grow justify-center bg-rock border border-lightgray">
        <div className="h-3.5 w-3.5 self-center bg-green rounded-full border-2 border-charcoal shadow-glow shadow-green"></div>
        <button className="text-base md:text-xl lg:text-xl text-pearlwhite pl-2 md:p-4 lg:p-4">Button 1</button>
      </div>
      <div className="flex flex-grow justify-center bg-rock border-b border-t border-r border-lightgray">
        <div className="h-3.5 w-3.5 self-center bg-red rounded-full border-2 border-charcoal shadow-glow shadow-red"></div>
        <button className="text-base md:text-xl lg:text-xl text-pearlwhite pl-2 md:p-4 lg:p-4">Button 2</button>
      </div>
    </div>
  );
}
