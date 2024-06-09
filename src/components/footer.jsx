import { Typography, Button, Input } from "@material-tailwind/react";

const LINKS = ["О курсе", "Программа", "Стоимость"];
const SUB_LINKS = ["Договор оферты", "Политика конфиденциальности"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-end justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <Typography
              as="a"
              href="#"
              target="_blank"
              variant="h4"
              className="mb-6"
            >
              NS-Tech
            </Typography>
            <ul className="flex flex-wrap items-center justify-center md:justify-start">
              {LINKS.map((link, idx) => (
                <li key={link}>
                  <Typography
                    as="a"
                    href="#"
                    className={`py-1 font-medium !text-gray-700 transition-colors hover:!text-gray-900 ${
                      idx === 0 ? "pr-3" : "px-3"
                    }`}
                  >
                    {link}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full sm:w-[24rem] sm:min-w-[24rem]">
            <Typography variant="h6" color="blue-gray" className="mb-3">
              Узнай о скидках раньше других!
            </Typography>
            <div className="flex flex-col gap-3 sm:flex-row">
              {/* @ts-ignore */}
              <Input color="gray" label="Enter your email" />
              <Button color="gray" className="flex-shrink-0">
                подписаться
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-blue-gray-50 py-6 md:justify-between">
          <Typography className="text-center font-normal !text-gray-700">
          NS-Tech® {CURRENT_YEAR} Все права защищены{" "}
            <a href="" target="_blank">
              
            </a>{" "}
        
          </Typography>

          <ul className="flex items-center">
            {SUB_LINKS.map((link, idx) => (
              <li key={link}>
                <Typography
                  as="a"
                  href="#"
                  className={`py-1 font-normal !text-gray-700 transition-colors hover:!text-gray-900 ${
                    idx === SUB_LINKS.length - 1 ? "pl-2" : "px-2"
                  }`}
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
