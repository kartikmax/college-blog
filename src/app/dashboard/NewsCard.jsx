import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card"; 

const NewsCard = ({ imageSrc, title, institute, date }) => {
  return (
    <Card className="w-full">
      <Image src={imageSrc} alt={title} width={300} height={200} className="rounded-t-md" />
      <CardContent>
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-600">{institute}</p>
          </div>
          <div className="text-sm text-gray-500 mt-2">
            <span className="mr-2">📅</span>{date}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
