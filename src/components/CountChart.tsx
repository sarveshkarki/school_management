"use client";
import Image from "next/image";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Total",
    count: 120,
    fill: "white",
  },
  {
    name: "Girls",
    count: 55,
    fill: "#fae27c",
  },
  {
    name: "Boys",
    count: 65,
    fill: "#c3ebfa",
  },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between ">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src={"/moreDark.png"} alt={"more"} width={20} height={20} />
      </div>
      {/* CHARTS */}
      <div className="w-full h-[75%] relative">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar
              label={{ position: "insideStart", fill: "#fff" }}
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src={"/maleFemale.png"}
          width={50}
          height={50}
          alt="malefemale"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaSky rounded-full" />
          <h1 className="font-bold">1,1234</h1>
          <h2 className="text-xs text-gray-300">Boys (54%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaYellow rounded-full" />
          <h1 className="font-bold">1,1234</h1>
          <h2 className="text-xs text-gray-300">Girls (46%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
