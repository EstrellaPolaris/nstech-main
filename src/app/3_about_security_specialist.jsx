"use client";

import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";


function Testimonial() {
  return (
    <section className="mx-auto px-6 py-32 bg-[#f5f5f5]">
      <div className="container mx-auto">
        <Card color="transparent" shadow={false} className="relative grid h-full w-full place-items-center">
          <CardBody className="!p-0 col-span-full gap-6 place-items-center overflow-visible grid grid-cols-1 lg:grid-cols-4">
            <div className=" w-full flex items-center overflow-hidden rounded-xl justify-center col-span-2 h-full">
              <Image
                width={1000}
                height={1000}
                src="/image/blogs/blog6.svg"
                alt="testimonial image"
                className="w-full h-full scale-110 object-cover"
              />
            </div>
            <div className="col-span-2 w-full">
              <Typography variant="h2" className="mb-8 !text-5xl text-gray-900 antialiased"
              >
                Чем занимается специалист ИБ
              </Typography>
              <Typography className="mb-4 w-full font-normal !text-gray-900">
              Специалист по информационной безопасности — это профессионал, который обеспечивает конфиденциальность любой информации, касающейся как самой компании, так и её сотрудников. Также этот человек строит и внедряет систему защиты в ИТ-инфраструктуру организации, предотвращает и блокирует попытки проникнуть в нее извне. На курсе вы узнаете кикие бывают уязвимости, как отражать атаки. Освоите навыки, спрос на которые растёт и в России, и в мире:
              </Typography>
              <div className="grid mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-gray-800 rounded-full" />
                  <Typography className="w-full font-semibold !text-gray-900">
                    Кибератак становится больше
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-gray-800 rounded-full" />
                  <Typography className="w-full font-semibold !text-gray-900">
                    Бизнесу нужны специалисты, которые работают с отечественным ПО
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-gray-800 rounded-full" />
                  <Typography className="w-full font-semibold !text-gray-900">
                    Отрасль кибербезопасности будет развиваться
                  </Typography>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Testimonial;