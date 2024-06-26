
"use client";
import React from "react";

import { Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
const MODULES = [
  {
    num: "Модуль 1",
    title: "Принципы кибербезопасности",
    subtitle: "Этот модуль поможет узнать основополагающие концепции информационной безопасности. Научитесь управлять рисками и классифицировать типы средств контроля безопасности.",
    a: "Тема 1: Концепции информационной безопасности",
    b: "Тема 2: Управления рисками",
    c: "Тема 3: Средства контроля безопасности",
    d: "Тема 4: Процессы и элементы управления",
    f: "Тема 5: Основные правовые аспекты",
  },
  {
    num: "Модуль 2",
    title:"Реагирование на инциденты и аварийное восстановление",
    subtitle: "В этом модуле узнаете про компоненты реагирования на инциденты, как организации реагируют на незапланированные сбои и какие бывают компоненты аварийного восстановления.",
    a: "Тема 1: Реагирование на инциденты",
    b: "Тема 2: Непрерывность бизнеса",
    c: "Тема 3: Аварийное восстановление",
    d: "",
    f: "",
  },
  {
    num: "Модуль 3",
    title: "Концепции контроля доступа",
    subtitle: "Здесь мы расскажем, кто и к чему получает доступ, зачем он нужен и как этим доступом управлять. Обсудим физический и логический контроль и то, как они сочетаются для укрепления общей безопасности организации.",
    a: "Тема 1: Контроль доступа",
    b: "Тема 2: Физические средства контроля доступа",
    c: "Тема 3: Логические средства контроля доступа",
    d: "",
    f: "",
  },
  {
    num: "Модуль 4",
    title: "Сетевая безопасность",
    subtitle: "Этот модуль мы посвятили темам сетей, угроз и атак на сеть. Сетевая безопасность сама по себе может быть специализацией в кибербезопасности, однако все специалисты по информационной безопасности должны понимать, как работают и эксплуатируются сети, чтобы лучше их защищать.",
    a: "Тема 1: Компьютерные сети",
    b: "Тема 2: Сетевые киберугрозы и атаки",
    c: "Тема 3: Инфраструктура сетевой безопасности",
    d: "",
    f: "",
  },
  {
    num: "Модуль 5",
    title: "Операции безопасности",
    subtitle: "В этом модуле рассмотрим повседневное, ежеминутное активное использование средств контроля безопасности и стратегий снижения рисков, применяемых в организации. Мы рассмотрим способы защиты данных и систем, в которых они хранятся, а также способы безопасной практики среди людей, которые взаимодействуют с данными и системами в ходе выполнения своих повседневных обязанностей.",
    a: "Тема 1: Безопасность данных",
    b: "Тема 2: Усиление безопасности системы",
    c: "Тема 3: Передовые политики безопасности",
    d: "Тема 4: Обучение навыкам кибербезопасности в организациях",
    f: "",
  },
  {
    num: "Модуль 6",
    title: "Завершение курса",
    subtitle: "Повторите полученные знания и получите Сертификат",
    a: "Тема 1: Итоги курса",
    b: "Тема 2: Сертификат об успешном завершении обучения ",
    c: "Тема 3: Карьерный трек",
    d: "",
    f: "",
    
  },
];

export function MainProgram() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className="px-6 bg-[#f5f5f5] pb-28">
      <div className="container mx-auto">
        <div className="mx-auto">
          {MODULES.map(({ num, title, subtitle, a, b, c, d, f}, key) => (
            <Accordion
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
              className="rounded-3xl mb-6 px-6 bg-white  hover:shadow-xl"
            >
              <AccordionHeader className="text-left w-full border-opacity-0">
                <div className="grid grid-cols-1">
                <Typography color="blue-gray" className="font-normal text-gray-700">
                  {num}
                </Typography>
              <Typography variant="h3" color="black" className="!font-medium !subpixel-antialiased">
                {title}
              </Typography>
            
                <Typography color="blue-gray" className="font-normal text-gray-700">
                  {subtitle}
                </Typography>
                </div>
              </AccordionHeader>
              <AccordionBody className="list-none text-xl font-normal text-black">
                <li>{a}</li>
                <li>{b}</li>
                <li>{c}</li>
                <li>{d}</li>
                <li>{f}</li>
             
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}


export default MainProgram;
