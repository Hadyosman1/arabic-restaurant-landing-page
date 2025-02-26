import Image from "next/image";
import Link from "next/link";

import footerPic1 from "@/../public/footer-1.png";
import footerPic2 from "@/../public/footer-2.png";
import googlePlayPic from "@/../public/google-play.png";
import appStorePic from "@/../public/app-store.png";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

const links = [
  { label: "حول", href: "#" },
  { label: "امر", href: "#" },
  { label: "القائمة", href: "#" },
  { label: "العضوية", href: "#" },
  { label: "التنزيل", href: "#" },
];

const socials = [
  { label: "facebook", href: "#", icon: FacebookIcon },
  { label: "instagram", href: "#", icon: InstagramIcon },
  { label: "twitter", href: "#", icon: TwitterIcon },
  { label: "youtube", href: "#", icon: YoutubeIcon },
];

const Footer = () => {
  return (
    <footer>
      <div className="relative isolate grid min-h-[300px] place-content-center overflow-clip bg-primary py-16">
        <Image
          src={footerPic1}
          alt="footer pic"
          className="absolute right-0 top-20 z-[-1] max-h-full max-w-[50%] md:max-w-[33.33%]"
        />
        <Image
          src={footerPic2}
          alt="footer pic"
          className="absolute left-0 top-20 z-[-1] max-h-full max-w-[50%] md:max-w-[33.33%]"
        />

        <div className="container">
          <div className="mb-10 space-y-6 text-center">
            <h2 className="text-4xl font-bold md:text-6xl">
              قم بتنزيل التطبيق
            </h2>
            <p className="text-balance text-lg font-semibold">
              ابحثوا عن الطعام في اي مكان وفي اي وقت واحصلوا على طعامكم بسرعة.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
            <button title="app store">
              <Image src={appStorePic} alt="app store" />
            </button>
            <button title="google play">
              <Image src={googlePlayPic} alt="google play" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-foreground">
        <div className="container flex flex-wrap items-center justify-between gap-10 py-6 text-white max-md:justify-center">
          <Link href="#" className="text-xl">
            المذاق <span className="text-primary">الآسيوي</span>
          </Link>

          <nav className="flex flex-wrap items-center gap-5">
            {links.map(({ label, href }) => (
              <Link
                className="hover:text-primary hover:underline"
                href={href}
                key={label}
              >
                {label}
              </Link>
            ))}
          </nav>
          <nav className="flex items-center gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <Link
                className="grid aspect-square size-7 place-content-center rounded-full bg-background text-foreground transition-all duration-200 hover:text-primary"
                href={href}
                key={label}
              >
                <Icon size={20} />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
