"use client";

import React from "react";
import {
  Button,
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";


export function CourseProgram() {
  return (
    <section className="mx-auto px-6 pb-6 bg-[#f5f5f5]">
      <Typography variant="h2" color="blue-gray" className="text-center place-items-center mb-10 !text-5xl">
        Программа курса
      </Typography>
      <div className="container p-6 mx-auto grid rounded-3xl bg-black">
        <Typography variant="h3" color="white" className="!font-normal">
          Бесплатная вводная часть
        </Typography>
        <Typography
          variant="paragraph"
          className="mb-10 mt-2 w-full font-normal !text-gray-200"
          >
            Этот модуль — введение в кибербезопасность. Мы расскажем, что это такое, из чего состоит обучение на курсе и как оно проходит.
        </Typography>

        <div className="container mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 ">
          <Card className="relative grid h-full w-full overflow-hidden">
            <div className="absolute inset-0 h-full w-full" />
              <CardBody className="relative bg-black !p-0">
            <Typography variant="h4" className="!font-normal" color="white">
            Направления в кибербезопасности
            </Typography>
            <Typography color="white" className="pt-4 font-normal">
            Узнаете, что такое информационная безопасность: что, от кого и зачем нужно защищать
            </Typography>
          </CardBody>
        </Card>
        <Card className="relative grid h-full w-full overflow-hidden">
          <div className="absolute inset-0 h-full w-full " />
          <CardBody className="relative bg-black !p-0">
            <Typography variant="h4" className="!font-normal" color="white">
            Онбординг на курс
            </Typography>
            <Typography color="white" className="pt-4 font-normal">
            О том, как и в каком формате проходит обучение на нашем курсе, ознакомитесь с подробным списком навыков, которые получите на курсе
            </Typography>
          </CardBody>
        </Card>
        <Card
          className="relative grid h-full w-full bg-black">
      
          
        </Card>
        <Card
          className="relative grid h-full w-full overflow-hidden"
        >
          <div className="absolute inset-0 h-full w-full " />
          <CardBody className="relative bg-black !p-0 content-end">
            <Typography variant="h4" className="mt-4 !font-normal text-[#85f043] antialiased">
            Разберётесь, как проходит обучение, для кого оно и чему вы научитесь по итогу курса
            </Typography>
          
          </CardBody>
        </Card>
      </div>

        </div>

    </section>
  );
}


export default CourseProgram;