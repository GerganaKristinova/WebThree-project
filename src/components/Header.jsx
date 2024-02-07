export default function Header() {
  return (
    <header className="md:flex lg:flex md:bg-dark lg:bg-dark">
      <div className="flex bg-dark h-13.5 md:h-20 pl-6 pt-2 md:pl-7.5 md:pt-3">
        <img className="w-10.5 h-10.5 md:w-13 md:h-13 rounded-full" src="logo.jpg" alt="logo" />
        <h4 className="font-sans text-white text-sm md:text-xl lg:text-2xl pl-2 pt-3 md:pl-3 md:pt-4 lg:pl-3 lg:pt-3.5">Logo</h4>
      </div>
      <div className="sm:bg-gray md:bg-dark lg:bg-dark pt-2 pb-2 md:pr-32 lg:pr-28 m-auto text-center">
        <h1 className="text-xl md:text-4xl text-white text-shadow-glow text-shadow-green">LOREM IPSUM</h1>
        <p className="text-darkwhite sm:text-xxs md:text-sm lg:text-xl tracking-long">LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM</p>
      </div>
    </header>
  );
}
