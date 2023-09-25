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
import {
  CalendarIcon,
  InfoCircledIcon,
  SewingPinFilledIcon,
} from "@radix-ui/react-icons";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../../../components/ui/table";
import clsx from "clsx";
import { Textarea } from "../../../components/ui/textarea";

export default function Profile() {
  const [hasRequested, setHasRequested] = useState(false);
  const [pro, setPro] = useState<{
    name: string;
    profilePhoto: string;
    location: number;
    title: string;
    experience: number;
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
      status: "ONGOING" | "FINISHED" | "DISMISSED";
    }[];
  }>();

  const params = useParams();
  const slug = params.slug;

  useEffect(() => {
    const x: any = DATA.lsp.find(
      (x) => x.name.toLowerCase().replaceAll(" ", "-") === slug
    );
    setPro(x);
  }, []);

  if (!pro) return;

  const specializations = pro.specialization.map((i) => {
    return DATA.specialization.find((j) => i === j.id);
  });
  const loc = DATA.locations.find((j) => pro.location === j.id);

  const edu = DATA.edu.find((j) => pro.education === j.id);

  const services = pro.services.map((ser) => {
    const data = DATA.services.find((j) => ser.id === j.id);

    return { priceStart: ser.priceStart, ...data };
  });

  const awards = pro.awards.map((awd) => {
    const data = DATA.awards.find((j) => awd.id === j.id);

    return { ...awd, ...data };
  });

  return (
    <>
      <Header type="client" />
      <Wrapper className={`mt-12 mb-40`}>
        <div className={`flex gap-10`}>
          <div className={`basis-[30%]`}>
            <div className="fixed flex flex-col items-center gap-4">
              <div>
                <Avatar className={`w-24 h-24 m-auto`}>
                  <AvatarImage src={`/assets/${pro.profilePhoto}`} />
                  <AvatarFallback>TP</AvatarFallback>
                </Avatar>
              </div>

              <div>
                <h1 className={`text-2xl font-extrabold`}>{pro.name}</h1>
              </div>

              <div className={`mt-8`}>
                <Button
                  onClick={() => {
                    setHasRequested(true);
                  }}
                >
                  Request Consultation
                </Button>
              </div>
            </div>
          </div>

          <div className={`basis-[70%]`}>
            <h1 className={`text-5xl font-extrabold mb-3 flex items-center`}>
              {pro.name}
              <span className={`text-2xl ml-4`}>
                {pro.badges.map((j) => {
                  const badge = DATA.badges.find((i) => i.id === j);

                  return (
                    <TooltipProvider key={j}>
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
            <div className={`flex flex-col gap-2 mt-8 text-sm`}>
              <p className={`font-[800]`}>Specialization</p>
              <div className={`flex gap-2`}>
                {specializations.map((sep, i) => {
                  return (
                    <TooltipProvider delayDuration={0} key={i}>
                      <Tooltip>
                        <TooltipTrigger>
                          <Badge>{sep?.name}</Badge>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                          <p className={`w-[350px] leading-6 text-sm`}>
                            {sep?.description}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  );
                })}
              </div>
            </div>
            <p className={`flex gap-1 items-center mt-10 text-sm`}>
              <SewingPinFilledIcon />
              <p className={`font-[800]`}>Location: </p>
              {loc?.name}
            </p>
            <p className={`flex gap-1 items-center mt-4 text-sm`}>
              <CalendarIcon />
              <p className={`font-[800]`}>Years of Experience: </p>
              {pro?.experience / 12} years
            </p>
            <div className={`mt-20`}>
              <p className={`font-[800] text-3xl`}>Education background </p>
              <Card className="bg-slate-200 mt-6">
                <CardHeader>
                  <CardTitle
                    className={`text-2xl font-extrabold mb-3 leading-9`}
                  >
                    {edu?.name}
                  </CardTitle>
                  <CardDescription>
                    <div className={`flex gap-10 justify-between`}>
                      <div className={`flex-1`}>
                        <p className={`leading-5`}>{edu?.description}</p>
                        <p className={`mt-4`}>
                          <p className={`font-[800]`}>Address: </p>{" "}
                          {edu?.address}
                        </p>
                      </div>
                      <div className={`flex-1`}>
                        <img
                          src={edu?.img}
                          alt={`${edu?.name}'s logo`}
                          className={`m-auto`}
                        />
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div className={`mt-20`}>
              <p className={`font-[800] text-4xl`}>Services</p>
              <div className="mt-6">
                {services.map((service, i) => {
                  return (
                    <Card className="bg-slate-200 mt-1 mb-8" key={i}>
                      <CardHeader>
                        <CardTitle
                          className={`text-2xl mb-3 leading-9 font-[800]`}
                        >
                          {service?.title}
                        </CardTitle>
                        <CardDescription>
                          <p className={`leading-5`}>{service?.description}</p>
                          <p className={`mt-4`}>
                            <p className={`font-[800]`}>Price Starts: </p> ₹
                            {service?.priceStart.toLocaleString()}
                          </p>
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  );
                })}
              </div>
            </div>
            <div className={`mt-20`}>
              <p className={`font-[800] text-3xl`}>Case History</p>
              <Table className={`mt-6`}>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Sr. No.</TableHead>
                    <TableHead>Case Name</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pro.pastRecord.map((rec, i) => {
                    const badgeColor =
                      rec.status === "ONGOING"
                        ? "bg-yellow-500"
                        : rec.status === "DISMISSED"
                        ? "bg-red-600"
                        : rec.status === "FINISHED"
                        ? "bg-green-600"
                        : null;

                    return (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{i + 1}</TableCell>
                        <TableCell>{rec.title}</TableCell>
                        <TableCell>
                          <Badge className={clsx("font-medium", badgeColor)}>
                            {rec.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
            <div className={`flex flex-col gap-2 mt-20 text-sm`}>
              <p className={`font-[800] text-3xl`}>Awards</p>
              <div className="mt-6 grid grid-cols-2 gap-6">
                {awards.reverse().map((awd, i) => {
                  return (
                    <Card className="bg-slate-200 mt-6" key={i}>
                      <CardHeader>
                        <CardTitle
                          className={`text-2xl font-extrabold mb-3 leading-9 flex gap-4`}
                        >
                          {awd?.name}
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <InfoCircledIcon />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className={`w-[350px] leading-6 text-sm`}>
                                  {awd?.description}
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </CardTitle>
                        <CardDescription className={`mt-4`}>
                          <div
                            className={`flex flex-col gap-8 justify-between mt-4`}
                          >
                            <div className={`flex-1`}>
                              <img
                                src={`/assets/${awd?.certificate}`}
                                alt={`${awd?.name}'s Certificate`}
                                className={`m-auto`}
                              />
                            </div>
                            <div className={`flex-1`}>
                              {/* <p className={`leading-5`}>{awd?.description}</p> */}
                              <p>
                                <p className={`font-[800]`}>Recived On: </p>{" "}
                                {awd?.recivedOn}
                              </p>
                            </div>
                          </div>
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      {hasRequested ? (
        <Card className="bg-slate-900 text-slate-50 mt-6 w-[400px] fixed bottom-0 right-8 rounded-b-none">
          <CardHeader>
            <CardTitle
              className={`text-2xl font-extrabold mb-3 leading-9 flex gap-4`}
            >
              Request Consultation
            </CardTitle>
            <CardDescription>
              <Textarea
                placeholder="Current Address"
                value="Hi, My name is Tripti Prasad. I am in need of your legal service."
                className={`bg-slate-300 my-4`}
                draggable={false}
              />
              <Button
                variant={"secondary"}
                className={`mt-2`}
                onClick={() => {
                  setHasRequested(false);
                  alert("Your request has been sent.");
                }}
              >
                Request Consultation
              </Button>
            </CardDescription>
          </CardHeader>
        </Card>
      ) : null}
    </>
  );
}
