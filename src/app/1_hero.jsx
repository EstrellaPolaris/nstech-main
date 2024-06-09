"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <section className="mx-auto px-6 mb-6">
      <div className="container relative mx-auto rounded-3xl bg-black grid h-full min-h-[65vh] w-full grid-cols-1 place-items-center gap-y-10 lg:grid-cols-2">
        <div className="z-40 row-start-2 lg:row-auto px-6">
          <Typography
            variant="h1"
            color="white"
            className="font-medium mb-2 text-3xl leading-10 lg:mb-3 lg:text-6xl pt-10"
          >
            Курс «Специалист по информационной безопасности: быстрый старт»
          </Typography>
          <Typography
            variant="lead"
            className="font-normal text-gray-200 lg:text-1xl"
          >
            Освойте лучшие практики в области кибербезопасности
            и начнете карьеру в перспективном направлении — с нуля за 3 месяца
          </Typography>
          <Button className="w-full lg:w-9/12 mx-auto bg-lime-400 hover:bg-lime-500 text-black text-base font-normal normal-case my-10 md:mb-6 sm:mb-6 py-4">
          Записаться со скидкой
          </Button>
        </div>
        <div className="-mt-2 -mb-20 grid z-30">
          <div className="">
            <Image
              width={1400}
              height={1300}
              src="/image/cover-security-main.png"
              className=""
              alt="flowers"
            />
          
          </div>
          
        </div>
      </div>
    </section>
  );
}
export default Hero;
