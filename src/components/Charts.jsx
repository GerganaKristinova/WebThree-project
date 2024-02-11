import { useState } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  LineChart,
  Line,
} from "recharts";

export default function Charts() {
  const weeklyData = [
    { week: "24/11", year: "2023", stat: 35 },
    { week: "01/12", year: "2023", stat: 40 },
    { week: "8/12", year: "2023", stat: 80 },
    { week: "15/12", year: "2023", stat: 35 },
    { week: "22/12", year: "2023", stat: 50 },
    { week: "29/12", year: "2023", stat: 35 },
    { week: "05/01", year: "2024", stat: 60 },
    { week: "12/01", year: "2024", stat: 45 },
    { week: "19/01", year: "2024", stat: 40 },
    { week: "Today", year: "2024", stat: 0 },
  ];

  const yearlyData = [
    { year: 2021, value: 9.6 },
    { year: 2022, value: 8.3 },
    { year: 2023, value: 7.5 },
    { year: 2024, value: 6 },
  ];

  const [chartData, setchartData] = useState(0);

  function calculateNumberOfBars() {
    const windowSize = window.innerWidth;
    let reversedData = weeklyData.reverse();
    let barsToShow = 0;

    if (windowSize < 500) {
      barsToShow = 4;
    } else if (windowSize < 768) {
      barsToShow = 6;
    } else if (windowSize < 1100) {
      barsToShow = 8;
    } else {
      barsToShow = 10;
    }

    const slicedData = reversedData.slice(0, barsToShow);
    setchartData(slicedData.reverse());
  }

  const BarWithBorder = ({ borderHeight, borderColor, ...props }) => {
    const { fill, x, y, width, height } = props;

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          stroke="none"
          fill={fill}
        />
        <rect
          x={x}
          y={y + height - borderHeight}
          rx={1}
          ry={1}
          width={width}
          height={borderHeight}
          stroke={borderColor}
          strokeWidth={1}
          fill="none"
        />
      </g>
    );
  };

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
        <div className="bg-dark border-b md:border-r border-lightgray p-5 lg:p-7.5">
          <ResponsiveContainer
            width="100%"
            height={300}
            onResize={calculateNumberOfBars}
          >
            <BarChart data={chartData} barSize={33}>
              <XAxis
                className="sm:text-xxs lg:text-base"
                xAxisId="0"
                dataKey="week"
                axisLine={false}
                tickLine={false}
              />
              <XAxis
                className="sm:text-xs lg:text-base"
                xAxisId="1"
                dataKey="year"
                tickLine={false}
                allowDuplicatedCategory={false}
                fill="#ECEAE3"
                axisLine={{ strokeDasharray: "3 3", stroke: "#31303F" }}
                stroke={"#ECEAE3"}
              />
              <YAxis type="number" hide={true} domain={[0, 100]} />
              <Bar
                dataKey="stat"
                fill="#3F3F4C"
                stroke="#ECEAE3"
                strokeWidth={1}
                shape={<BarWithBorder borderHeight={1} borderColor="#ECEAE3" />}
              ></Bar>
            </BarChart>
          </ResponsiveContainer>
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
        <div className="bg-dark border-b md:border-r border-lightgray p-5 lg:p-7.5">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={yearlyData}>
              <XAxis
                className="sm:text-xs md:text-base"
                dataKey="year"
                allowDuplicatedCategory={false}
                tickLine={false}
                axisLine={{ stroke: "#ECEAE3", strokeWidth: 2 }}
                stroke={"#929292"}
              />
              <YAxis
              className="sm:text-xxs md:text-sm"
                dataKey="value"
                domain={[6, 10]}
                tickCount={9}
                axisLine={{ stroke: "#ECEAE3", strokeWidth: 2 }}
                tickLine={{ stroke: "#ECEAE3", strokeWidth: 2 }}
                tickSize={10}
                stroke={"#929292"}
                tickFormatter={(value) => `${value}M`}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#0BDA20"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
