"use client";

import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

export function SalaryGrowing() {
  return (
    <section className="mx-auto px-6 pb-32 bg-[#f5f5f5]">
      <div className="container mx-auto grid place-items-center text-center">
        <Typography variant="h2" className="mb-10 !text-5xl text-gray-900 antialiased">
          Заработок будет расти вместе с опытом
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-6 lg:grid-cols-3 ">
        <Card className="rounded-3xl relative grid h-full w-full place-items-center overflow-hidden text-center" >
          <div className="rounded-3xl absolute inset-0 h-full w-full bg-gradient-to-br from-lime-400 to-lime-600" />
          <CardBody className="relative w-full">
            <Typography color="white" className="text-xs font-bold">
            Поддержка отрасли государством
            </Typography>
            <Typography variant="h4" className="mt-9" color="white">
            Сможете претендовать на более высокую зарплату
            </Typography>
            <Typography
              color="white"
              className="mt-4 mb-14 font-normal"
            >
              К 2035 году в России будет более 2,5 млн вакансий для специалистов из сферы ИТ
            </Typography>
            <Typography color="white" className="text-xs font-bold">
            Источник: Минцифры России
            </Typography>
          </CardBody>
        </Card>
        <div className="col-span-1 flex flex-col gap-6">
      
        <CardBody className="rounded-3xl relative w-full h-full bg-white">
            <Typography variant="h4" className="mt-6 text-gray-900">
            Junior
            </Typography>
            <Typography
              color="white"
              className="mt-4 mb-14 font-normal text-gray-900"
            >
              от 80 000 ₽
            </Typography>
          </CardBody>
          <CardBody className="rounded-3xl relative w-full h-full bg-white ">
            <Typography variant="h4" className="mt-6 text-gray-900">
            Middle
            </Typography>
            <Typography
              color="white"
              className="mt-4 mb-14 font-normal text-gray-900"
            >
             200 000 ₽ 
            </Typography>
          </CardBody>
      
        </div>
        <div className="col-span-1 flex flex-col gap-6">
        <CardBody className="rounded-3xl relative w-full h-full bg-white">
            <Typography variant="h4" className="mt-6 text-gray-900">
            Senior
            </Typography>
            <Typography
              color="white"
              className="mt-4 mb-14 font-normal text-gray-900"
            >
              400 000 ₽ 
            </Typography>
          </CardBody>
          <CardBody className="rounded-3xl relative w-full h-full bg-black">
            <Typography variant="h4" className="mt-6" color="white">
            Lead
            </Typography>
            <Typography
              color="white"
              className="mt-4 mb-14 font-normal"
            >
            от 400 000 ₽ 
            </Typography>
          </CardBody>
        </div>
      </div>
    </section>
  );
}

export default SalaryGrowing;
