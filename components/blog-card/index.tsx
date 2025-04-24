import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  src1: StaticImageData;
  src2: StaticImageData;
  description: string;
  name: string;
};
const BlogCard = ({ description, name, src1, src2 }: Props) => {
  return (
    <div className="font-open-sans">
      <div>
        <Image src={src1} alt="First Image " className="w-full object-cover" />
      </div>
      <div className=" flex items-center gap-4 my-3.5 text-sm">
        <span className="font-bold text-primary ">Category</span>
        <span className="font-normal text-gray-500">November 22, 2021</span>
      </div>
      <p className="max-w-[15rem] sm:h-14 font-normal ">{description}</p>
      <div className="flex items-center gap-3 mt-3.5 sm:mt-8 text-sm">
        <Image src={src2} alt="User Image" className="size-6" />
        <span className=" font-normal">{name}</span>
      </div>
    </div>
  );
};

export default BlogCard;
