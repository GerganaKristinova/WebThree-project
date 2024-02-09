import { BarChart, Bar } from "recharts";

export default function Charts() {
  const data = [
    {
      name: "22/12",
      week: 1000,
    },
    {
      name: "29/12",
      week: 2000,
    },
    {
      name: '05/01',
      week: 3000,
    },
    {
      name: '12/01',
      week: 4000,
    },
    {
      name: '12/01',
      week: 5000,
    },
  ];

  return (
    <div className="md:flex">
      <div className="md:flex-grow">
        <div className="bg-gray md:border-r md:border-lightgray md:py-1 sm:max-md:pb-3 sm:max-md:pt-3">
          <h2 className="uppercase text-s md:text-lg md:font-semibold md:text-center text-pearlwhite sm:max-md:pl-6 sm:max-md:pb-1">
            Lorem Ipsum
          </h2>
          <p className="text-xs md:text-sm md:text-center text-darkwhite sm:max-md:pl-6">
            Sample text
          </p>
        </div>
        <div className="bg-dark border-b md:border-r border-lightgray">
          <BarChart width={400} height={300} data={data}>
            <Bar dataKey="week" fill="#3F3F4C" />
          </BarChart>
        </div>
      </div>
      <div className="md:flex-grow">
        <div className="bg-gray md:py-1 sm:max-md:pb-3 sm:max-md:pt-3">
          <h2 className="uppercase text-s md:text-lg md:font-semibold md:text-center lg:tracking-widest text-pearlwhite sm:max-md:pl-6 sm:max-md:pb-1">
            Lorem Ipsum
          </h2>
          <p className="text-xs md:text-sm md:text-center text-darkwhite sm:max-md:pl-6">
            Sample text
          </p>
        </div>
        <div className="bg-dark border-b border-lightgray">

        </div>
      </div>
    </div>
  );
}
