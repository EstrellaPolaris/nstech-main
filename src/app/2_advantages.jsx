"use client";

import React from "react";
import {
  Button,
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";


export function Advantages() {
  return (
    <section className="mx-auto px-6 mb-6">
      <div className="container mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card
          className="relative rounded-3xl grid h-full w-full place-items-center overflow-hidden shadow-xl border border-gray-100"
        >
          <div className="absolute inset-0 h-full w-full" />
          <CardBody className="relative w-full">
            <Typography variant="h4" className="mt-4" color="black">
            Онлайн
            </Typography>
            <Typography color="black" className="py-4 font-normal">
            Обучение проходит онлайн в удобное для вас время
            </Typography>
          </CardBody>
        </Card>
        <Card
          className="relative rounded-3xl grid h-full w-full place-items-center overflow-hidden shadow-xl border border-gray-100"
        >
          <div className="absolute inset-0 h-full w-full " />
          <CardBody className="relative w-full">
            <Typography variant="h4" className="mt-4" color="black">
            Универсальность
            </Typography>
            <Typography color="black" className="py-4 font-normal">
              Изучите не только основы, но и продвинутые инструменты
            </Typography>
          </CardBody>
        </Card>
        <Card
          className="relative rounded-3xl grid h-full w-full place-items-center overflow-hidden shadow-xl border border-gray-100"
        >
          <div className="absolute inset-0 h-full w-full " />
          <CardBody className="relative w-full">
            <Typography variant="h4" className="mt-4" color="black">
            Трудоустройство
            </Typography>
            <Typography color="black" className="py-4 font-normal">
            Поможем с поиском работы и развитием на текущем месте
            </Typography>

          </CardBody>
        </Card>
        <Card
          className="relative rounded-3xl grid h-full w-full place-items-center overflow-hidden shadow-xl border border-violet-500 bg-gradient-to-br from-violet-300 to-violet-500"
        >
          <div className="absolute inset-0 h-full w-full " />
          <CardBody className="relative w-full">
            <Typography variant="h4" className="mt-4" color="white">
              -50%
            </Typography>
            <Typography color="white" className="pt-3 font-normal">
            Скидка действует
            </Typography>
            <Typography color="white" className="pb-4 font-normal">
   
2 дня 12:49:41
            </Typography>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}


export default Advantages;