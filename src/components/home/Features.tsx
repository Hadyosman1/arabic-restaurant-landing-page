import Image from "next/image";
import Button from "../ui/Button";

import featuresPic1 from "@/../public/features-1.png";
import featuresPic2 from "@/../public/features-2.png";
import featuresPic3 from "@/../public/features-3.png";
import mobilePic from "@/../public/mobile.png";
import bgCircles from "@/../public/bg-circles.png";

const features = [
  {
    image: featuresPic1,
    title: "الصفقات والعروض الساخنة",
    description: `نريد أن نريك بعض الـ "يو"! الحب بإعطائك تخفيض على الطعام في مطاعمنا.`,
  },
  {
    image: featuresPic2,
    title: "التقاط ذاتي",
    description: `الالتقاط الذاتي هي خدمة تسمح لك بتقديم طلبات الالتقاط الذاتي من خلال تطبيقنا.`,
  },
  {
    image: featuresPic3,
    title: "التوصيل الأسرع",
    description: `اختر طعامك وسنوصلك بأسرع ما يمكن تنزيل التطبيق واستمتع بالطعام.`,
  },
];

const Features = () => {
  return (
    <section>
      <div className="container py-32">
        <h2 className="pb-16 text-center text-5xl font-bold md:text-7xl">
          لماذا المذاق الآسيوي؟
        </h2>

        <ul className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ image, title, description }) => (
            <li
              key={title}
              className="flex flex-col items-center gap-5 text-center md:max-lg:last:col-span-2"
            >
              <Image
                src={image}
                alt={title}
                width={250}
                height={250}
                className="aspect-square max-w-[250px]"
              />
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-balance text-muted-brown">{description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-primary/10 py-12 md:py-24">
        <div className="container relative flex flex-wrap items-center justify-center max-md:gap-10">
          {/* balls */}
          <div className="absolute z-[-1] right-[10%] top-[20%] aspect-square size-10 rounded-full bg-muted-secondary" />
          <div className="absolute z-[-1] bottom-[20%] right-[13%] aspect-square size-8 rounded-full bg-muted-secondary" />
          <div className="absolute z-[-1] left-[13%] top-[20%] aspect-square size-5 rounded-full bg-muted-secondary" />
          {/* balls */}
          <div className="w-full space-y-8 max-md:text-center md:w-2/12 md:space-y-14">
            <h2 className="text-3xl font-bold max-md:mb-10 sm:text-5xl md:text-3xl">
              كل ما تحتاجينه هو تطبيق واحـ
              <span className="hidden md:inline">ــــــــــــــــــ</span>د
            </h2>
            <Button className="hidden !bg-foreground px-10 text-lg text-primary hover:scale-105 hover:bg-foreground/80 md:inline-flex">
              التنزيل
            </Button>
          </div>
          <div className="relative flex basis-full items-center justify-center md:basis-8/12">
            <Image
              src={bgCircles}
              alt="bg circles"
              className="absolute z-[-1] max-w-full"
            />
            <Image
              src={mobilePic}
              alt="mobile picture"
              className="max-h-[110vh] object-contain"
            />
          </div>
          <div className="flex w-full flex-col flex-wrap gap-10 max-md:flex-row max-md:items-center max-md:justify-around md:w-2/12">
            <p className="text-2xl font-bold">
              <span className="font-extrabold">+85</span>
              <br />
              عنصر السوشي
            </p>
            <p className="text-2xl font-bold">
              <span className="font-extrabold">+1,000</span>
              <br />
              الأمر اليومي
            </p>
            <p className="text-2xl font-bold">
              <span className="font-extrabold">+10</span>
              <br />
              الأفرع
            </p>
          </div>

          <Button className="inline-flex w-full justify-center !bg-foreground px-10 text-lg text-primary hover:scale-105 hover:bg-foreground/80 md:hidden">
            التنزيل
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
