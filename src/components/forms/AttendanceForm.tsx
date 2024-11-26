"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
  username: z
    .string()
    .min(4, "Username must be at least 4 characters")
    .max(20, "Username must be at most 20 characters"),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(100, { message: "Password must be at most 100 characters" }),
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" }),
  bloodType: z
    .string()
    .min(2, { message: "Blood type must be at least 2 characters" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 characters" }),
  address: z
    .string()
    .min(10, { message: "Address must be at least 10 characters" }),
  birthday: z.date({ message: "Birthday must be at least 10 characters" }),
  sex: z.enum(["male", "female"], { message: "Sex is required." }),
  img: z.instanceof(File, { message: "Image is required." }),
});

type Inputs = z.infer<typeof schema>;

const AttendanceForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Create a new teacher.</h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentication Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Username"
          name="username"
          defaultValue={data?.username}
          register={register}
          error={errors.username}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          defaultValue={data?.email}
          register={register}
          error={errors.email}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          defaultValue={data?.password}
          register={register}
          error={errors.password}
        />
      </div>
      <p className="text-xs text-gray-400 font-medium">Personal Information</p>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="First Name"
          name="firstname"
          defaultValue={data?.firstname}
          register={register}
          error={errors.firstName}
        />
        <InputField
          label="Last name"
          name="lastname"
          type="lastname"
          defaultValue={data?.lastName}
          register={register}
          error={errors.lastName}
        />
        <InputField
          label="Phone"
          name="phone"
          type="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors.phone}
        />
        <InputField
          label="Address"
          name="address"
          type="address"
          defaultValue={data?.address}
          register={register}
          error={errors.address}
        />
        <InputField
          label="Blood Type"
          name="bloodType"
          type="bloodType"
          defaultValue={data?.bloodType}
          register={register}
          error={errors.bloodType}
        />
        <InputField
          label="Phone"
          name="phone"
          type="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors.phone}
        />
        <InputField
          label="Birthday"
          name="birthday"
          type="date"
          defaultValue={data?.birthday}
          register={register}
          error={errors.birthday}
        />
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-400">Sex</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("sex")}
            defaultValue={data?.sex}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.sex?.message && (
            <span className="text-red-400 text-xs">
              {errors.sex.message.toString()}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
          <label
            className="text-xs text-gray-400 flex items-center gap-2 cursor-pointer"
            htmlFor="img"
          >
            <Image src="/upload.png" alt="upload" width={16} height={16} />
            <span>Upload a photo</span>
          </label>
          <input id="img" type="file" {...register("img")} className="hidden" />
          {errors.img?.message && (
            <span className="text-red-400 text-xs">
              {errors.img.message.toString()}
            </span>
          )}
        </div>
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {" "}
        {type === "create" ? "Create" : "Update"}{" "}
      </button>
    </form>
  );
};

export default AttendanceForm;
