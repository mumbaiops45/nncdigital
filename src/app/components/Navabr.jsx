"use client";
import { Fragment, useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const solutions = [
  {
    title: "Build & Develop",
    items: ["CRM Development", "ERP Development", "Web Development", "Mobile App Development", "Salesforce CRM"],
  },
  {
    title: "Automate & Grow",
    items: ["Marketing Automation", "SEO & Digital Marketing"],
  },
  {
    title: "Scale & Transform",
    items: ["Digital Transformation", "Hire CRM Developers", "Pricing"],
  },
];

const industries = ["Healthcare", "Real Estate", "E-Commerce", "Manufacturing", "Professional Services"];


function HoverDropdown({ label, children, panelClass = "" }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
          open ? "text-green-400" : "text-white/90 hover:text-white"
        }`}
      >
        {label}
        <ChevronDownIcon
          className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 origin-top ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className={panelClass}>{children}</div>
      </div>
    </div>
  );
}

const navLinks = ["Case Studies", "About Us", "Blog", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/30"
          : "bg-[#050816]/40 backdrop-blur-md border-b border-transparent"
      }`}
    >
      {({ open }) => (
        <>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />

          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <div
              className={`flex items-center justify-between transition-all duration-300 ${
                scrolled ? "h-16" : "h-20"
              }`}
            >
              <a href="/" className="flex items-center group">
                <img
                  src="/nnclogo.webp"
                  alt="NNC Digital"
                  className={`w-auto transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.5)] ${
                    scrolled ? "h-10" : "h-12"
                  }`}
                />
              </a>
              <div className="hidden lg:flex items-center gap-7">
                <a href="/" className="relative group text-sm font-medium text-white/90 hover:text-white transition-colors">
                  Home
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gradient-to-r from-green-400 to-green-500 transition-all duration-300 group-hover:w-full" />
                </a>
                <HoverDropdown
                  label="Solutions"
                  panelClass="w-[820px] max-w-[90vw] rounded-3xl border border-green-500/20 bg-[#071426]/95 backdrop-blur-xl shadow-2xl shadow-green-500/10 p-8"
                >
                  <div className="grid grid-cols-4 gap-7">
                    {solutions.map((col) => (
                      <div key={col.title}>
                        <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-green-400 mb-5">
                          <span className="h-3 w-1 rounded-full bg-gradient-to-b from-green-400 to-green-500" />
                          {col.title}
                        </h3>
                        <div className="space-y-1">
                          {col.items.map((item) => (
                            <a
                              key={item}
                              href="#"
                              className="group flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-gray-300 hover:bg-green-500/10 hover:text-green-400 transition-all"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-green-500/0 group-hover:bg-green-400 transition-all" />
                              {item}
                            </a>
                          ))}
                        </div>
                  </div>
                    ))}
                    <div className="relative overflow-hidden rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-500/10 to-green-600/5 p-6">
                      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-green-500/20 blur-2xl" />
                      <span className="inline-block rounded-full bg-green-500/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-green-300">
                        Case Study
                      </span>
                      <h4 className="mt-4 text-lg font-bold leading-snug text-white">
                        Manufacturing CRM Overhaul
                      </h4>
                      <div className="mt-4 bg-gradient-to-r from-green-400 to-green-400 bg-clip-text text-4xl font-bold text-transparent">
                        35%
                      </div>
                      <p className="mt-2 text-xs text-gray-400">
                        Efficiency gain in 90 days for a mid-size manufacturer.
                      </p>
                      <a href="#" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-green-400 hover:gap-2 transition-all">
                        Read More →
                      </a>
                    </div>
                  </div>
                </HoverDropdown>
                <HoverDropdown
                  label="Industries"
                  panelClass="w-64 rounded-2xl border border-white/10 bg-[#071426]/95 backdrop-blur-xl shadow-2xl shadow-black/40 p-2"
                >
                  {industries.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="group flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm text-gray-300 hover:bg-green-500/10 hover:text-green-400 transition-all"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500/0 group-hover:bg-green-400 transition-all" />
                      {item}
                    </a>
                  ))}
                </HoverDropdown>

                {navLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="relative group text-sm font-medium text-white/90 hover:text-white transition-colors"
                  >
                    {link}
                    <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gradient-to-r from-green-400 to-green-500 transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </div>
              <div className="hidden lg:block">
                <button className="relative rounded-xl bg-gradient-to-r from-green-500 to-green-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-105 hover:shadow-green-500/50">
                  Book Free Call
                </button>
              </div>
              <Disclosure.Button className="lg:hidden rounded-lg p-2 text-white hover:bg-white/10 transition">
                {open ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
              </Disclosure.Button>
            </div>
          </div>
          <Disclosure.Panel className="lg:hidden border-t border-white/10 bg-[#050816]/95 backdrop-blur-xl">
            <div className="space-y-1 px-4 py-5">
              <a href="/" className="block rounded-xl px-4 py-3 text-white hover:bg-white/5">Home</a>
              <Disclosure>
                {({ open: subOpen }) => (
                  <div>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-white hover:bg-white/5">
                      Solutions
                      <ChevronDownIcon className={`h-5 w-5 transition-transform ${subOpen ? "rotate-180" : ""}`} />
                    </Disclosure.Button>
                    <Disclosure.Panel className="space-y-3 px-4 pb-3 pt-1">
                      {solutions.map((col) => (
                        <div key={col.title}>
                          <p className="px-2 text-xs font-semibold uppercase tracking-wider text-green-400">{col.title}</p>
                          {col.items.map((item) => (
                            <a key={item} href="#" className="block rounded-lg px-2 py-2 text-sm text-gray-300 hover:text-green-400">
                              {item}
                            </a>
                          ))}
                        </div>
                      ))}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
              <Disclosure>
                {({ open: subOpen }) => (
                  <div>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-white hover:bg-white/5">
                      Industries
                      <ChevronDownIcon className={`h-5 w-5 transition-transform ${subOpen ? "rotate-180" : ""}`} />
                    </Disclosure.Button>
                    <Disclosure.Panel className="space-y-1 px-4 pb-3 pt-1">
                      {industries.map((item) => (
                        <a key={item} href="#" className="block rounded-lg px-2 py-2 text-sm text-gray-300 hover:text-green-400">
                          {item}
                        </a>
                      ))}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
              {navLinks.map((link) => (
                <a key={link} href="#" className="block rounded-xl px-4 py-3 text-white hover:bg-white/5">
                  {link}
                </a>
              ))}

              <button className="mt-2 w-full rounded-xl bg-gradient-to-r from-green-500 to-green-600 py-3 font-semibold text-white shadow-lg shadow-green-500/30">
                Book Free Call
              </button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}