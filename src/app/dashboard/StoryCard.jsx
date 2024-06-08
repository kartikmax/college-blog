import * as React from "react";
import Image from "next/image";
// import { cn } from "@/lib/utils";

const StoryCard = ({ imageSrc, title, institute, date }) => {
  return (
    <div className="flex border-b pb-4 mb-4">
      <div className="w-1/4 h-auto mr-4 relative">
        <Image
          src={imageSrc}
          alt={title}
          // layout="fill"
          // objectFit="cover"
          className="rounded"
          width={410}
          height={170}
        />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{institute}</p>
        </div>
        <div className="text-sm text-gray-500">
          <span className="mr-2">📅</span>{date}
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
