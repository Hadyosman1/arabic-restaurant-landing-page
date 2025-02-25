"use client";

import Link from "next/link";
import Button from "./ui/Button";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

const navLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "قائمة هذا الشهر", href: "#" },
  { label: "الحجز", href: "#" },
];
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <div className="container flex items-center justify-between py-5">
        <Link href="/">
          المذاق <span className="text-primary">الآسيوي</span>
        </Link>

        <nav className="hidden items-center gap-12 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="text-muted-brown transition-colors hover:text-primary"
            >
              {label}
            </Link>
          ))}
        </nav>

        <Button className="hidden px-8 py-3 hover:scale-105 md:inline-block">
          الاتصال
        </Button>

        <Button
          onClick={() => setShowMenu(!showMenu)}
          className="hidden max-md:block"
        >
          <MenuIcon />
          <span className="sr-only"> اظهار القائمة</span>
        </Button>

        <div
          className={clsx(
            "fixed inset-0 bg-secondary p-4 transition-all duration-200 z-30",
            showMenu ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <Button onClick={() => setShowMenu(false)} className="ms-auto block">
            <XIcon />
            <span className="sr-only">اخفاء القائمة</span>
          </Button>

          <nav className="flex flex-col items-center gap-4 py-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="text-muted-brown transition-colors hover:text-primary"
              >
                {label}
              </Link>
            ))}
            <Button>الاتصال</Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
