import Image from "next/image";
import koraMobilePic from "@/../public/kora-mobile.png";
import koraDesktopPic from "@/../public/kora-desktop.png";

const Kora = () => {
  return (
    <section>
      <div className="container flex flex-wrap items-center gap-10 py-14 md:flex-nowrap">
        <h2 className="block text-5xl font-bold md:hidden">تجربة كورا</h2>

        <div className="basis-full md:basis-1/2">
          <Image src={koraMobilePic} alt="kora" className="block md:hidden" />
          <Image src={koraDesktopPic} alt="kora" className="hidden md:block" />
        </div>
        <div className="basis-full md:basis-1/2 md:space-y-28">
          <h2 className="hidden font-bold md:block md:text-6xl">تجربة كورا</h2>

          <div className="space-y-10">
            <div className="flex items-start gap-6">
              <span className="inline-grid aspect-square place-content-center rounded-full bg-primary px-3 py-1.5 font-bold">
                01
              </span>
              <div className="space-y-1">
                <h3 className="text-xl font-semibold">المكونات الممتازة</h3>
                <p className="text-balance text-muted-brown">
                  من السوشي إلى المرق وحتى الحلويات، جميع أطباقنا خالية من
                  المحليات الصناعية والتوابل والمواد الحافظة والألوان.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <span className="inline-grid aspect-square place-content-center rounded-full bg-primary px-3 py-1.5 font-bold">
                02
              </span>
              <div className="space-y-1">
                <h3 className="text-xl font-semibold">اليابانية الممتازة</h3>
                <p className="text-balance text-muted-brown">
                  أطباقنا تلتزم بالفضيلة اليابانية في تقديم الوجبات الطبيعية
                  والصحية. نحن نستخدم فقط مكونات متميزة جديدة للتذوق.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <span className="inline-grid aspect-square place-content-center rounded-full bg-primary px-3 py-1.5 font-bold">
                03
              </span>
              <div className="space-y-1">
                <h3 className="text-xl font-semibold">اليابانية الأصلية</h3>
                <p className="text-balance text-muted-brown">
                  أطباقنا تلتزم بالفضيلة اليابانية في تقديم الوجبات الطبيعية
                  والصحية. نحن نستخدم فقط مكونات متميزة جديدة للتذوق.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kora;
