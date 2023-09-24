"use client";

import Image from "next/image";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../../components/ui/card";
import { Header } from "../../../module/header";
import { useState } from "react";

import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import { Textarea } from "../../../components/ui/textarea";
import Link from "next/link";

export default function ClientSignUp() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <section
      className={`my-20 w-[calc(100vw - 20px)] flex gap-10 justify-center`}
    >
      {!loggedIn ? (
        <Card className={`w-[300px]`}>
          <CardHeader className={`text-center`}>
            <CardTitle className={`text-2xl font-extrabold mb-3 leading-9`}>
              Create new account
            </CardTitle>
            <CardDescription>
              Create new Individuals or Businesses account
            </CardDescription>
          </CardHeader>
          <CardContent className={`flex flex-col gap-4 mt-6`}>
            <Button
              className={`flex gap-2`}
              variant={"digilocker"}
              onClick={() => {
                setLoggedIn(true);
              }}
            >
              <Image
                alt="digilocker logo"
                src={"/assets/digilocker-logo.png"}
                width={30}
                height={13}
              />
              Sign up with DigiLocker
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card className={`w-[450px]`}>
          <CardHeader className={`text-center`}>
            <CardTitle className={`text-2xl font-extrabold mb-3 leading-9`}>
              Profile Details
            </CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </CardDescription>
          </CardHeader>
          <CardContent className={`flex flex-col gap-6 mt-6`}>
            <div>
              <Avatar className={`w-32 h-32 m-auto`}>
                <AvatarImage src="/assets/girl.jpg" />
                <AvatarFallback>TP</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                type="name"
                id="name"
                value="Tripti Prasad"
                placeholder="Name"
                disabled
              />
            </div>
            <div>
              <Label htmlFor="aadhaar">Aadhaar Number</Label>
              <Input
                type="text"
                id="aadhaar"
                value="8632 3454 9900"
                placeholder="Aadhaar"
                disabled
              />
            </div>
            <div>
              <Label htmlFor="mobile">Phone No</Label>
              <Input
                type="text"
                id="mobile"
                value="8632345490"
                placeholder="Phone No"
                disabled
              />
            </div>
            <div>
              <Label htmlFor="address">Current Address</Label>
              <Textarea
                id="address"
                placeholder="Current Address"
                value="Plot Nos 8-11, TechZone 2, Greater Noida, Uttar Pradesh, 201310"
                disabled
                draggable={false}
              />
            </div>
            <Button asChild>
              <Link href={"/client"}>Register Account</Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </section>
  );
}
