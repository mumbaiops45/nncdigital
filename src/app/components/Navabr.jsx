"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const solutions = [
  {
    title: "Build & Develop",
    items: [
      { name: "CRM Development", href: "/solutions/crm-development" },
      { name: "ERP Development", href: "/solutions/erp-development" },
      { name: "Web Development", href: "/solutions/web-development" },
      { name: "Mobile App Development", href: "/solutions/mobile-app-development" },
      { name: "Salesforce CRM", href: "/solutions/salesforce-crm" },
    ],
  },
  {
    title: "Automate & Grow",
    items: [
      { name: "Marketing Automation", href: "/solutions/marketing-automation" },
      { name: "SEO & Digital Marketing", href: "/solutions/seo-digital-marketing" },
    ],
  },
  {
    title: "Scale & Transform",
    items: [
      { name: "Digital Transformation", href: "/solutions/digital-transformation" },
      { name: "Hire CRM Developers", href: "/solutions/hire-crm-developers" },
      { name: "Pricing", href: "/pricing" },
    ],
  },
];

const industries = [
  { name: "Healthcare", href: "/industries/healthcare" },
  { name: "Real Estate", href: "/industries/real-estate" },
  { name: "E-Commerce", href: "/industries/e-commerce" },
  { name: "Manufacturing", href: "/industries/manufacturing" },
  { name: "Professional Services", href: "/industries/professional-services" },
];

const navLinks = [
  { name: "Case Studies", href: "/case-studies" },
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

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
          open ? "text-cyan-300" : "text-white/90 hover:text-white"
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
      className={`fixed top-0 bg-black inset-x-0 z-50 transition-all duration-300 `}
      // className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      //   scrolled
      //     ? "bg-[#020617]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.8)]"
      //     : "bg-transparent"
      // }`}
    >
      {({ open }) => (
        <>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <div
              className={`flex items-center justify-between transition-all duration-300 ${
                scrolled ? "h-16" : "h-20"
              }`}
            >
              <Link href="/" className="flex items-center group">
                <img
                  src="/nnclogo.webp"
                  alt="NNC Digital"
                  className={`w-auto transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.6)] ${
                    scrolled ? "h-10" : "h-12"
                  }`}
                />
              </Link>

              <div className="hidden lg:flex items-center gap-7">
                <Link href="/" className="relative group text-sm font-medium text-white/90 hover:text-white transition-colors">
                  Home
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full" />
                </Link>

              
                <HoverDropdown
                  label="Solutions"
                  panelClass="w-[820px] max-w-[90vw] rounded-3xl border border-white/10 bg-[#0a1228]/95 backdrop-blur-xl shadow-2xl shadow-cyan-500/10 p-8"
                >
                  <div className="grid grid-cols-4 gap-7">
                    {solutions.map((col) => (
                      <div key={col.title}>
                        <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-5">
                          <span className="h-3 w-1 rounded-full bg-gradient-to-b from-emerald-400 to-cyan-400" />
                          {col.title}
                        </h3>
                        <div className="space-y-1">
                          {col.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="group flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-gray-300 hover:bg-white/[0.06] hover:text-cyan-300 transition-all"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400 transition-all" />
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}

              
                    <div className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-blue-600/5 to-transparent p-6">
                      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-500/20 blur-2xl" />
                      <span className="inline-block rounded-full bg-cyan-400/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
                        Case Study
                      </span>
                      <h4 className="mt-4 text-lg font-bold leading-snug text-white">
                        Manufacturing CRM Overhaul
                      </h4>
                      <div className="mt-4 bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent">
                        35%
                      </div>
                      <p className="mt-2 text-xs text-gray-400">
                        Efficiency gain in 90 days for a mid-size manufacturer.
                      </p>
                      <Link href="/case-studies/manufacturing-crm" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-cyan-300 hover:gap-2 transition-all">
                        Read More →
                      </Link>
                    </div>
                  </div>
                </HoverDropdown>

                <HoverDropdown
                  label="Industries"
                  panelClass="w-64 rounded-2xl border border-white/10 bg-[#0a1228]/95 backdrop-blur-xl shadow-2xl shadow-black/40 p-2"
                >
                  {industries.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm text-gray-300 hover:bg-white/[0.06] hover:text-cyan-300 transition-all"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400 transition-all" />
                      {item.name}
                    </Link>
                  ))}
                </HoverDropdown>

                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative group text-sm font-medium text-white/90 hover:text-white transition-colors"
                  >
                    {link.name}
                    <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </div>

             
              <div className="hidden lg:block">
                <Link
                  href="/contact"
                  className="group relative inline-block overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(6,182,212,0.6)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0] hover:shadow-[0_12px_40px_-8px_rgba(6,182,212,0.85)]"
                >
                  Book Free Call
                </Link>
              </div>

             
              <Disclosure.Button className="lg:hidden rounded-lg p-2 text-white hover:bg-white/10 transition">
                {open ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
              </Disclosure.Button>
            </div>
          </div>

       
          <Disclosure.Panel className="lg:hidden border-t border-white/10 bg-[#020617]/95 backdrop-blur-xl">
            <div className="space-y-1 px-4 py-5">
              <Link href="/" className="block rounded-xl px-4 py-3 text-white hover:bg-white/5">Home</Link>

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
                          <p className="px-2 text-xs font-semibold uppercase tracking-wider text-cyan-300">{col.title}</p>
                          {col.items.map((item) => (
                            <Link key={item.name} href={item.href} className="block rounded-lg px-2 py-2 text-sm text-gray-300 hover:text-cyan-300">
                              {item.name}
                            </Link>
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
                        <Link key={item.name} href={item.href} className="block rounded-lg px-2 py-2 text-sm text-gray-300 hover:text-cyan-300">
                          {item.name}
                        </Link>
                      ))}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>

              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="block rounded-xl px-4 py-3 text-white hover:bg-white/5">
                  {link.name}
                </Link>
              ))}

              <a 
               href="tel:+919900566466"
               className="mt-2 block w-full rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 py-3 text-center font-semibold text-white shadow-[0_8px_30px_-8px_rgba(6,182,212,0.6)]">
                Book Free Call
              </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}