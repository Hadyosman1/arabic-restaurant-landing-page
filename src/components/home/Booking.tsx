import bookingPic from "@/../public/booking.png";
import Image from "next/image";
import Button from "../ui/Button";

const Booking = () => {
  return (
    <section id="booking">
      <div className="container flex items-center gap-10 bg-primary/10 py-14 max-md:flex-wrap">
        <div className="basis-full space-y-8 text-balance md:basis-1/2 md:space-y-16">
          <h2 className="text-4xl font-bold md:text-6xl">احجز جدولك الآن</h2>
          <p className="text-muted-brown">
            هناك الكثير من الطبخ للقيام به في عيد الشكر، لذلك جعل الليلة السابقة
            سهلة على نفسك والتقط طبق سوشي لإطعام الأسرة.
          </p>

          <Image src={bookingPic} alt="booking" className="md:hidden w-full" />

          <div className="space-y-1.5">
            <h3 className="text-lg font-semibold">ساعات العمل</h3>
            <div className="flex max-w-[400px] items-center justify-between text-muted-brown">
              <p>م. ف: 10 ص -11 م</p>
              <p>إس إس: 09 صباحا -11 مساء</p>
            </div>
          </div>
          <Button className="justify-center !bg-foreground !px-10 !py-2.5 text-xl font-semibold text-primary hover:scale-105 hover:!bg-foreground/75 max-md:w-full">
            احجز طاولة
          </Button>
        </div>
        <div className="hidden md:block md:basis-1/2">
          <Image src={bookingPic} alt="booking" />
        </div>
      </div>
    </section>
  );
};

export default Booking;
