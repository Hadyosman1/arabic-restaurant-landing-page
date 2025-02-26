import Image from "next/image";
import Button from "../ui/Button";

import heroMealPic from "@/../public/hero-meal.png";
import heroSushiPic1 from "@/../public/hero-sushi-1.png";
import heroSushiPic2 from "@/../public/hero-sushi-2.png";

const Hero = () => {
  return (
    <section className="relative">
      <div className="container relative flex items-center py-10">
        <div className="absolute left-[38%] size-14 -translate-x-1/2 translate-y-14 animate-ping rounded-full bg-gradient-to-bl from-primary to-transparent [animation-duration:3s;] [animation-timing-function:ease-out]" />
        <Image
          className="absolute left-1/2 top-3 -translate-x-1/2 max-sm:size-[4.5rem]"
          src={heroMealPic}
          alt="hero meal"
          width={155}
          height={155}
          priority
        />
        <div className="relative basis-3/5 space-y-8 sm:basis-1/2 md:space-y-14">
          <div className="absolute right-0 z-[-3] aspect-square w-full translate-x-1/2 rounded-full bg-primary lg:translate-x-[65%]" />
          <h1 className="text-6xl font-extrabold md:text-8xl lg:text-9xl">
            المذاق
            <br />
            <span className="mt-3 inline-block">الآسيوي</span>
          </h1>
          <p className="text-xl font-semibold text-muted-brown sm:text-2xl">
            أنقى تجربة السوشي التركيز على <br className="max-sm:hidden" />{" "}
            مكونات الجودة الممتازة.
          </p>
          <Button className="relative z-[2] !bg-foreground text-primary hover:scale-105 hover:!bg-foreground/80">
            تحقق من القائمة
          </Button>
        </div>
        <div className="self-stretch sm:basis-1/2 lg:relative">
          <div className="absolute left-0 z-[-1] aspect-square w-[60vw] -translate-x-1/2 rounded-full bg-primary opacity-20 blur-md lg:w-full lg:-translate-x-[65%]" />
        </div>
      </div>
      <div className="absolute -top-16 left-0 z-[-1] w-3/5 sm:w-1/2 lg:-left-32 xl:-left-52 xl:-top-28">
        <Image
          src={heroSushiPic1}
          alt="hero sushi 1"
          width={560}
          height={375}
          className="max-sm:translate-y-20"
          priority
        />
        <Image
          src={heroSushiPic2}
          alt="hero sushi 2"
          width={460}
          height={375}
          className="max-sm:-translate-y-[25%] sm:-translate-x-[30%] sm:-translate-y-[60%] md:-translate-y-[50%]"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
