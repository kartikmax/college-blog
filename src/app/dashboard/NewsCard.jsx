import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const NewsCard = ({ imageSrc, title, institute, date }) => {
  return (
    <Card className="w-full p-2">
      <Image
        src={imageSrc}
        alt={title}
        width={300}
        height={200}
        className="rounded-t-md"
      />
      <CardContent className="flex flex-col mt-2 w-full justify-between">
        <div>
          <h3 className="text-[12px] font-semibold">{title}</h3>
          <p className="text-[12px] text-gray-600">{institute}</p>
        </div>
        <div className="text-[10px] text-gray-500 mt-2">
          <span className="mr-2">📅</span>
          {date}
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
