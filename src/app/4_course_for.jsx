"use client";


import React from "react";
import {
  Button,
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";


export function CourseFor() {
  return (
    <section className="px-6 pb-32 bg-[#f5f5f5]">
      <div className="grid place-items-center text-center">
        <Typography variant="h2" className="mb-10 !text-5xl text-gray-900 antialiased">
          Кому подойдет этот курс
        </Typography>
      </div>
      <div className="container mt-0 mx-auto grid grid-cols-1 items-start gap-6 md:grid-cols-2 xl:grid-cols-3">
      <Card
          className="relative rounded-3xl grid h-full w-full overflow-hidden !shadow-none"
        >
          <div className="absolute inset-0 h-full w-full" />
          <CardBody className="relative w-full">
            <Typography variant="h5" className="mt-4" color="black">
            Новичкам
            </Typography>
            <Typography color="black" className="py-4 font-normal">
            которые хотят стать специалистами кибербезопасности, трудоустроиться или узнать больше о специальности
            </Typography>
          </CardBody>
        </Card>
        <Card
          className="relative gap-12 rounded-3xl grid h-full overflow-hidden !shadow-none"
        >
          <div className="absolute inset-0 h-full gap-12" />
          <CardBody className="relative">
            <Typography variant="h5" className="mt-4" color="black">
              Начинающим разработчикам
            </Typography>
            <Typography color="black" className="py-4 font-normal">
            которые ищут перспективное направление для профессионального развития
            </Typography>
          </CardBody>
        </Card>
        <Card
          className="relative rounded-3xl grid h-full w-full overflow-hidden !shadow-none"
        >
          <div className="absolute inset-0 h-full w-full " />
          <CardBody className="relative w-full">
            <Typography variant="h5" className="mt-4" color="black">
              Специалистам смежных IT-специальностей
            </Typography>
            <Typography color="black" className="py-4 font-normal">
              которые хотят освоить новую профессию и стать более востребованными
            </Typography>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default CourseFor;
