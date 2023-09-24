"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { DATA } from "../../../utils/constants";
import { Wrapper } from "../../../components/wrapper";
import { Header } from "../../../module/header";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../../components/ui/avatar";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../../../components/ui/tooltip";
import { SewingPinFilledIcon } from "@radix-ui/react-icons";
import { Label } from "../../../components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../../components/ui/card";

export default function Profile() {
  const [pro, setPro] = useState<{
    name: string;
    profilePhoto: string;
    location: number;
    title: string;
    exeperience: number;
    education: number;
    awards: {
      id: number;
      recivedOn: string;
      certificate: string;
    }[];
    services: {
      id: number;
      priceStart: number;
    }[];
    specialization: number[];
    badges: number[];
    pastRecord: {
      title: string;
      status: string;
    }[];
  }>();

  const params = useParams();
  const slug = params.slug;

  useEffect(() => {
    const x = DATA.lsp.find(
      (x) => x.name.toLowerCase().replaceAll(" ", "-") === slug
    );
    setPro(x);
  }, []);

  if (!pro) return;

  const loc = DATA.locations.find((j) => pro.location === j.id);
  const edu = DATA.edu.find((j) => pro.education === j.id);

  return (
    <>
      <Header type="client" />
      <Wrapper className={`mt-12`}>
        <div className={`flex gap-10`}>
          <div>
            <Avatar className={`w-24 h-24 m-auto`}>
              <AvatarImage
                src={`/assets/${pro.profilePhoto === "m" ? "men" : "girl"}.jpg`}
              />
              <AvatarFallback>TP</AvatarFallback>
            </Avatar>
          </div>

          <div>
            <h1 className={`text-5xl font-extrabold mb-3 flex items-center`}>
              {pro.name}
              <span className={`text-2xl ml-4`}>
                {pro.badges.map((j) => {
                  const badge = DATA.badges.find((i) => i.id === j);

                  return (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>{j === 1 ? "✳️" : "❇️"}</TooltipTrigger>
                        <TooltipContent>
                          <p>{badge?.title}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  );
                })}
              </span>
            </h1>
            <h6 className={`text-lg text-slate-500 font-medium`}>
              {pro.title}
            </h6>
            <p className={`flex gap-1 items-center mt-4 text-sm`}>
              <SewingPinFilledIcon />
              <Label className={`font-[700]`}>Location: </Label>
              {loc?.name}
            </p>
            <p className={`flex gap-1 items-center mt-4 text-sm`}>
              <SewingPinFilledIcon />
              <Label className={`font-[700]`}>Years of Experience: </Label>
              {pro?.exeperience / 12} years
            </p>
            <Card className="bg-slate-200 mt-9">
              <CardHeader>
                <CardTitle className={`text-2xl font-extrabold mb-3 leading-9`}>
                  {edu?.name}
                </CardTitle>
                <CardDescription>{edu?.address}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
