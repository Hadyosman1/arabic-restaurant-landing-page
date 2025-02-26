import Image from "next/image";

import aboutPic from "@/../public/about.png";
import chefAvatarPic1 from "@/../public/chef-avatar-1.png";
import chefAvatarPic2 from "@/../public/chef-avatar-2.png";
import chefAvatarPic3 from "@/../public/chef-avatar-3.png";

const About = () => {
  return (
    <section>
      <div className="container relative flex flex-col items-center gap-14 py-24 md:flex-row">
        {/* balls */}
        <div className="absolute bottom-[20%] left-[10%] z-[-1] aspect-square size-10 rounded-full bg-light-green" />
        <div className="absolute bottom-5 left-[35%] z-[-1] aspect-square size-8 rounded-full bg-light-green" />
        <div className="absolute left-[13%] top-[20%] z-[-1] aspect-square size-5 rounded-full bg-muted-secondary" />
        {/* balls */}
        <div className="shrink grow">
          <Image src={aboutPic} alt="about" />
        </div>
        <div className="grow space-y-16 md:basis-3/5">
          <h2 className="text-3xl font-bold md:text-6xl">حول المذاق الآسيوي</h2>
          <div className="space-y-10 text-balance text-muted-brown">
            <p>
              في مطعم المذاق الآسيوي نقدّم وجبات ذات نوعية ممتازة وندعوكم الى
              تذوق طعامنا اللذيذ. إن المفتاح إلى نجاحنا بسيط: توفير طعام عالي
              الجودة ومتسق ومذاقه رائع في كل مرة.
            </p>
            <p>
              تناول الطعام اللذيذ. أحضري شراباً ولكن الأهم من ذلك كله،
              الاسترخاء! ونشكركم من أعماق قلوبنا على دعمكم المستمر.
            </p>
          </div>
          <div className="flex items-center gap-5">
            <p>قابلي الطاهي المؤهل</p>
            <div className="flex items-center">
              <Image
                src={chefAvatarPic1}
                alt="chef avatar 1"
                width={60}
                height={60}
              />
              <Image
                src={chefAvatarPic2}
                alt="chef avatar 2"
                className="-mx-4"
                width={60}
                height={60}
              />
              <Image
                src={chefAvatarPic3}
                alt="chef avatar 3"
                width={60}
                height={60}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
