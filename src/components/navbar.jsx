import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  Typography,
} from "@material-tailwind/react";


const NAV_MENU = [
  {
    name: "О курсе",
    href: "#",
  },
  {
    name: "Программа",
    href: "#",
  },
  {
    name: "Стоимость",
    href: "#",
  },
];



export function Navbar(NAV_MENU) {
  return (
    <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Typography color="blue-gray" className="text-lg font-bold">
          NS-Tech
        </Typography>

        <ul className="ml-10 hidden items-center gap-8 lg:flex">

        </ul>
        <div className="hidden items-center gap-2 lg:flex">

          <a href="#" target="_blank">
            <Button color="gray">Войти</Button>
          </a>
        </div>

      </div>
      
    </MTNavbar>
  );
}

export default Navbar;
