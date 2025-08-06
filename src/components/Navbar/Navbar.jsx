// src/components/Navbar/Navbar.jsx
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const navItems = [
    { label: "Restaurant", href: "#restaurant", internal: true },
    { label: "Historia", href: "#historia", internal: true },
    {
      label: "Menú",
      href: "https://drive.google.com/file/d/10VIbJ6-3hAnZDF1yirGkq68N44fHpUoY/preview",
      internal: false,
    },
    { label: "Productos", href: "#productos", internal: true },
    {
      label: "Reservas",
      href: "https://wa.me/5491161804991", // WhatsApp
      internal: false,
    },
  ];

  const linkClasses =
    "font-sansBrand text-sm font-medium text-white hover:text-gold transition-colors duration-300";

  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 bg-neutral-900/80 backdrop-blur shadow-sm"
    >
      {({ open }) => (
        <>
          {/* ────────── Barra principal ────────── */}
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* logo */}
              <HashLink to="#hero" className="flex items-center gap-2">
                <img src="/img/logo1.png" alt="Qente logo" className="h-10" />
              </HashLink>

              {/* botón hamburguesa (mobile) */}
              <div className="flex lg:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white">
                  {open ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>

              {/* links desktop */}
              <nav className="hidden lg:flex items-center gap-6">
                {navItems.map(({ label, href, internal }) => (
                  <a
                    key={href}
                    href={href}
                    {...(!internal && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className={linkClasses}
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* ────────── Menú mobile ────────── */}
          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 bg-neutral-900 px-4 pb-4 pt-2">
              {navItems.map(({ label, href, internal }) => (
                <a
                  key={href}
                  href={href}
                  {...(!internal && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className={`block rounded-md px-3 py-2 text-base ${linkClasses}`}
                >
                  {label}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
