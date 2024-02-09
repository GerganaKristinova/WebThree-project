export default function Header() {
  return (
    <header className="md:flex md:bg-dark">
      <div className="flex items-center md:absolute bg-dark pl-6 md:pl-7 py-2">
        <div className="w-10.5 md:w-13">
          <img
            className="rounded-full"
            src="logo.jpg"
            alt="logo"
          />
        </div>
        <h4 className="font-sans text-sm md:text-xl lg:text-2xl leading-5 md:leading-7 text-white pl-3">
          Logo
        </h4>
      </div>
      <div className="text-center sm:bg-gray md:bg-dark m-auto py-2">
        <h1 className="uppercase text-xl md:text-4xl text-white text-shadow-glow text-shadow-green pb-1">
          Lorem Ipsum
        </h1>
        <p className="uppercase font-normal tracking-wide sm:text-xxs md:text-sm lg:text-xl text-darkwhite">
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </p>
      </div>
    </header>
  );
}
