"use client";
import { time } from "console";
import Image from "next/image";
import { describe } from "node:test";
import { title } from "process";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Event 1",
    time: "10:00 AM - 12:00 PM",
    description: "Description 1",
  },
  {
    id: 2,
    title: "Event 2",
    time: "1:00 PM - 3:00 PM",
    description: "Description 2",
  },
  {
    id: 3,
    title: "Event 3",
    time: "4:00 PM - 6:00 PM",
    description: "Description 3",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div>
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src={"/moreDark.png"} alt={"more"} width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
          >
            <div className="flex items-center justify-between">
              <p className="text-grey-600 font-semibold">{event.title}</p>
              <p className="text-xs text-gray-300 ">{event.time}</p>
            </div>
            <p className="text-sm mt-2 text-gray-400">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
