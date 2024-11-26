import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import FormModal from "@/components/FormModal";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";

const SingleTeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col xl:flex-row gap-4">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-lamaSky py-6 rounded-md px-4 flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src={
                  "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                }
                alt={"teacher"}
                width={112}
                height={112}
                className="rounded-full w-32 h-32 oject-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">Leonard Snyder</h1>
                <FormModal table="teacher" type="update" data={{}} />
              </div>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3  flex items-center gap-2">
                  <Image
                    src={"/blood.png"}
                    alt={"phone"}
                    width={14}
                    height={14}
                  />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3  flex items-center gap-2">
                  <Image
                    src={"/date.png"}
                    alt={"date"}
                    width={14}
                    height={14}
                  />
                  <span>January 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3  flex items-center gap-2">
                  <Image
                    src={"/mail.png"}
                    alt={"mail"}
                    width={14}
                    height={14}
                  />
                  <span>user@email.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3  flex items-center gap-2">
                  <Image
                    src={"/phone.png"}
                    alt={"phone"}
                    width={14}
                    height={14}
                  />
                  <span>+1 234 5678</span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARD */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* CARD */}
            <div className="w-full bg-white p-4 rounded-md gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src={"/singleAttendance.png"}
                alt={"card"}
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="tex-sm text-gray-400 ">Attendance</span>
              </div>
            </div>
            {/* CARD */}
            <div className="w-full bg-white p-4 rounded-md gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src={"/singleLesson.png"}
                alt={"card"}
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6</h1>
                <span className="tex-sm text-gray-400 ">Lessons</span>
              </div>
            </div>
            {/* CARD */}
            <div className="w-full bg-white p-4 rounded-md gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src={"/singleBranch.png"}
                alt={"card"}
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">2</h1>
                <span className="tex-sm text-gray-400 ">Branches</span>
              </div>
            </div>
            {/* CARD */}
            <div className="w-full bg-white p-4 rounded-md gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src={"/singleClass.png"}
                alt={"card"}
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6</h1>
                <span className="tex-sm text-gray-400 ">Classes</span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Teacher&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link
              className="p-3 rounded-md bg-lamaSkyLight"
              href="/dashboard/list/teachers"
            >
              Teacher&apos;s Classes
            </Link>
            <Link
              className="p-3 rounded-md bg-lamaPurpleLight"
              href="/dashboard/list/teachers"
            >
              Teacher&apos;s Students
            </Link>
            <Link
              className="p-3 rounded-md bg-lamaYellowLight"
              href="/dashboard/list/teachers"
            >
              Teacher&apos;s Lessons
            </Link>
            <Link
              className="p-3 rounded-md bg-pink-50"
              href="/dashboard/list/teachers"
            >
              Teacher&apos;s Exams
            </Link>
            <Link
              className="p-3 rounded-md bg-lamaSkyLight"
              href="/dashboard/list/teachers"
            >
              Teacher&apos;s Assignments
            </Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default SingleTeacherPage;
