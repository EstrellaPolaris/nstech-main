import { Navbar, Footer } from "@/components";

import Hero from "./1_hero";
import Advantages from "./2_advantages";
import Testimonial from "./3_about_security_specialist";
import CourseFor from "./4_course_for";
import SalaryGrowing from "./5_salary_growing";
import CourseProgram from "./6_course_program";
import MainProgram from "./7_main_course_program";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <Advantages />
      <Testimonial />
      <CourseFor />
      <SalaryGrowing />
      <CourseProgram />
      <MainProgram />
      <Footer />
    </>
  );
}
