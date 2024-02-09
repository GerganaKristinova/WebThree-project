export default function Header() {
  return (
    <header className="md:flex md:bg-dark">
      <div className="flex items-center bg-dark pl-6 md:pl-7.5 py-2">
        <div className="w-10.5 md:w-13">
          <img
            className="rounded-full"
            src="logo.jpg"
            alt="logo"
          />
        </div>
        <h4 className="font-sans text-sm md:text-xl lg:text-2xl leading-5 md:leading-6 text-white pl-3">
          Logo
        </h4>
      </div>
      <div className="flex flex-col justify-center text-center sm:bg-gray md:bg-dark pt-2 pb-1">
        <h1 className="uppercase text-xl md:text-4xl text-white text-shadow-glow text-shadow-green">
          Lorem Ipsum
        </h1>
        <p className="uppercase font-normal leading-5 sm:text-xxs md:text-sm lg:text-xl tracking-long text-darkwhite">
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </p>
      </div>
    </header>
  );
}

//pt-2 pb-2 md:pr-32 lg:pr-28 m-auto
