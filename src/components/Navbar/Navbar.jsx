import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";

export default function Navbar() {
  const navItems = [
    { label: "Restaurant", href: "#restaurant" },
    { label: "Reservas", href: "#reservas" },
  ];

  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 bg-neutral-900/80 backdrop-blur shadow-sm"
    >
      {({ open }) => (
        <>
          {/* contenedor principal */}
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* logo */}
              <Link to="/" className="flex items-center gap-2">
                <img src="/img/logo1.png" alt="Qente logo" className="h-10" />
              </Link>

              {/* icono hamburguesa */}
              <div className="flex lg:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white">
                  {open ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>

              {/* menú desktop */}
              <div className="hidden lg:flex items-center gap-6">
                {navItems.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    className="text-sm font-medium text-white hover:text-gold transition"
                  >
                    {label}
                  </a>
                ))}

                <a
                  href="https://wa.me/54911XXXXYYYY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 rounded-lg bg-emerald-500/90 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-500 transition"
                >
                  <BsWhatsapp size={16} /> WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* menú mobile */}
          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 bg-neutral-900 px-4 pb-4 pt-2">
              {navItems.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-white/10"
                  onClick={() => setTimeout(() => window.scrollTo({ top: 0 }))} // cierra y navega
                >
                  {label}
                </a>
              ))}

              <a
                href="https://wa.me/54911XXXXYYYY"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md bg-emerald-500/90 px-3 py-2 text-base font-medium text-white hover:bg-emerald-500"
              >
                <BsWhatsapp size={18} /> WhatsApp
              </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
