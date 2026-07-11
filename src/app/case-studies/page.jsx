"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useContact from "@/hooks/useContact";


const stats = [
    { value: "8+", label: "Years" },
    { value: "3", label: "Continents" },
    { value: "565+", label: "Projects" },
    { value: "98%", label: "Retention" },
];

const caseStudies = [
    {
        tag: "CRM",
        sector: "Manufacturing",
        title: "Enterprise CRM for a Manufacturing Client",
        metric: "35%",
        metricLabel: "Efficiency Gain",
        image: "/Enterprises.png",
        challenge:
            "A mid-sized manufacturer managing their dealer network across spreadsheets and disconnected email chains — poor pipeline visibility, no mobile access, no leadership reporting.",
        solution:
            "Custom CRM with automated dealer management, lead assignment, real-time sales tracking, and a field-rep mobile app fully integrated with their existing ERP.",
        results: [
            "35% improvement in operational efficiency",
            "Sales pipeline visibility from zero to real-time",
            "Field rep response time reduced by 60%",
            "Full dealer network performance visibility for leadership",
        ],
    },
    {
        tag: "Mobile + CRM",
        sector: "Healthcare",
        title: "Mobile App + CRM for Healthcare Provider",
        metric: "42%",
        metricLabel: "Increase in Repeat Bookings",
        image: "/mobile-crm.webp",
        challenge:
            "A multi-location allied health clinic losing patients between appointments — poor follow-up and no digital touchpoints between visits.",
        solution:
            "Patient-facing mobile app with WhatsApp automated reminders, online booking, and a backend CRM tracking patient history and triggering follow-up sequences automatically.",
        results: [
            "42% increase in repeat bookings within 90 days",
            "WhatsApp reminder open rate above 85%",
            "Front desk workload reduced by 30%",
        ],
    },
    {
        tag: "ERP",
        sector: "Distribution",
        title: "Custom ERP for Distribution Company",
        metric: "28%",
        metricLabel: "Inventory Reduction",
        image: "/erp.webp",
        challenge:
            "A distribution company with 5 warehouses had no real-time inventory visibility, leading to stockouts, over-ordering, and delayed customer shipments.",
        solution:
            "Cloud-based ERP with real-time inventory tracking, automated reorder points, warehouse management system, and customer portal for order tracking.",
        results: [
            "28% reduction in overall inventory levels",
            "Order fulfilment time reduced from 3 days to 6 hours",
            "Stockouts eliminated entirely",
            "Customer satisfaction score increased by 34%",
        ],
    },
    {
        tag: "Web",
        sector: "Professional Services",
        title: "Client Portal for Professional Services Firm",
        metric: "52%",
        metricLabel: "Faster Client Onboarding",
        image: "/professionalservice.avif",
        challenge:
            "A professional services firm onboarding new clients with PDF forms, email attachments, and manual data entry — leading to errors and slow turnaround.",
        solution:
            "Custom client portal with digital forms, automated workflows, document management, and integration with their practice management system.",
        results: [
            "52% faster client onboarding",
            "Data entry errors reduced by 97%",
            "Client satisfaction score improved from 3.8 to 4.9",
            "Administrative time saved: 18 hours per week",
        ],
    },
    {
        tag: "Mobile",
        sector: "Field Service",
        title: "Field Service Mobile App",
        metric: "41%",
        metricLabel: "More Jobs Per Day",
        image: "/fieldsservice.webp",
        challenge:
            "Field service technicians using paper job sheets and manual scheduling — jobs lost, duplicate visits, and no real-time visibility for dispatchers.",
        solution:
            "Native mobile app with offline capability, GPS-optimised scheduling, digital job sign-off, and real-time sync with back-office systems.",
        results: [
            "41% increase in jobs completed per technician per day",
            "Travel time reduced by 28%",
            "Paperwork eliminated completely",
            "First-time fix rate improved from 72% to 91%",
        ],
    },
    {
        tag: "Automation",
        sector: "E-Commerce",
        title: "Full-Funnel Automation for D2C Brand",
        metric: "2.4x",
        metricLabel: "Lead Conversion",
        image: "/funnel.webp",
        challenge:
            "D2C brand generating ad traffic but converting fewer than 3% of leads into customers. CRM disconnected from ad platforms, follow-up entirely manual.",
        solution:
            "End-to-end funnel automation — Google and Meta ads connected to CRM, automated email and WhatsApp nurture sequences, redesigned landing pages for conversion.",
        results: [
            "2.4x improvement in lead-to-customer conversion",
            "Cost per acquisition reduced by 38%",
            "Full ad spend attribution to closed revenue for the first time",
        ],
    },
];


const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
};




function CaseCard({ study, index }) {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });


    const y = useTransform(
        scrollYProgress,
        [0, 1],
        ["-8%", "8%"]
    );


    const reversed = index % 2 === 1;


    return (

        <motion.div
            ref={ref}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{
                once: true,
                margin: "-50px"
            }}
            transition={{
                duration: .35
            }}
            className=" group relative overflow-hidden rounded-3xl border border-white/10  bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#172554] shadow-[0_20px_50px_rgba(0,0,0,.35)] transition-all duration-500  hover:border-cyan-400/40 hover:shadow-[0_30px_70px_rgba(34,211,238,.20)] "
        >
            <div className="  absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/20  blur-3xl  opacity-0  transition  duration-500 group-hover:opacity-100 " />
            <div className={`  grid lg:grid-cols-2 ${reversed ? "lg:[direction:rtl]" : ""}`} >
                <div className=" relative h-66 overflow-hidden lg:h-[350px] [direction:ltr]">
                    <motion.img
                        src={study.image}
                        alt={study.title}
                        style={{
                            y
                        }}
                        className=" absolute inset-0 h-[115%] w-full object-cover transition duration-700 group-hover:scale-110 "
                    />
                    <div className=" absolute inset-0 bg-gradient-to-t  from-[#020617] via-[#020617]/40 to-transparent" />
                    <div className=" absolute bottom-5  left-6 " >
                        <h4 className=" text-5xl font-black bg-gradient-to-r from-cyan-300  to-blue-400 bg-clip-text text-transparent">
                            {study.metric}
                        </h4>
                        <p className=" text-xs text-slate-300">
                            {study.metricLabel}
                        </p>
                    </div>
                </div>
                <div className="  p-6 lg:p-7 [direction:ltr]">
                    <div className=" flex gap-2 flex-wrap">
                        <span className=" rounded-full bg-cyan-400/10 border border-cyan-400/20 px-3   py-1 text-[11px] font-semibold uppercase tracking-wide text-cyan-300"> {study.tag}
                        </span>
                        <span className=" rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[11px] text-slate-300">
                            {study.sector}
                        </span>
                    </div>
                    <h3 className=" mt-4 text-xl font-bold leading-snug text-white "> {study.title}
                    </h3>
                    <div className=" mt-4  space-y-3">
                        <p className=" text-sm leading-6 text-slate-300 line-clamp-3 ">
                            {study.solution}
                        </p>
                    </div>
                    <div className="  mt-5 border-t border-white/10 pt-4 ">
                        <div className=" flex items-center  gap-2 text-xs font-semibold uppercase tracking-wider  text-emerald-300 ">
                            <span className=" h-2 w-2 rounded-full bg-emerald-400 "
                            />
                            Results
                        </div>
                        <ul className="  mt-3 space-y-2 ">
                            {
                                study.results
                                    .slice(0, 3)
                                    .map((r) => (
                                        <li
                                            key={r} className=" flex  gap-2  text-sm text-slate-300 ">
                                            <span className="  mt-2 h-1.5 w-1.5 rounded-full  bg-cyan-400  "
                                            />
                                            {r}
                                        </li>
                                    ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}


export default function Page() {
    const heroRef = useRef(null);
    const { submitForm, loading, success, error } = useContact();
    const [form, setform] = useState({
        fullname: "",
        phone: "",
        email: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setform((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await submitForm(form);
        } catch (error) {
            console.log("API Error:", err);
        }
    }

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });
    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    return (
        <div >
            <section
                ref={heroRef}
                className="relative flex min-h-[85vh] bg-[#1A2343] overflow-hidden px-6 pt-32 pb-20"
            >
                <div className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />
                <div className="pointer-events-none absolute top-20 right-0 h-[26rem] w-[26rem] rounded-full bg-blue-600/15 blur-[150px]" />
                <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-emerald-500/15 blur-[130px]" />

                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />

                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="relative  max-w-5xl px-6"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm uppercase tracking-[0.3em] text-cyan-300/80 backdrop-blur-md"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        Our Work
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="mt-6 text-4xl font-bold text-white leading-tight md:text-6xl"
                    >
                        Real Systems.{" "}
                        <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                            Measurable Results.
                        </span>{" "}
                        Real Businesses.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className=" mt-6 max-w-2xl text-lg leading-relaxed text-slate-300/90"
                    >
                        We don't just build technology — we build outcomes. Here are results
                        our clients across North America, the UK, and beyond have achieved
                        working with NNC Digital, backed by Nakshatra Namaha Creations.
                    </motion.p>

                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        animate="show"
                        className=" mt-12 grid max-w-3xl grid-cols-2 gap-6 md:grid-cols-4"
                    >
                        {stats.map((s) => (
                            <motion.div
                                key={s.label}
                                variants={fadeUp}
                                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md"
                            >
                                <div className="bg-gradient-to-br from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-3xl font-bold text-transparent">
                                    {s.value}
                                </div>
                                <p className="mt-1 text-sm text-slate-400">{s.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            <section className="relative  bg-gradient-to-br from-[#F8FAFC] via-[#E2E8F0] to-[#F1F5F9] px-6 py-20">
                <div className=" max-w-6xl">
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="mb-14 text-center text-3xl font-bold md:text-5xl"
                    >
                        Featured{" "}
                        <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                            Case Studies
                        </span>
                    </motion.h2>

                    <div className="space-y-10">
                        {caseStudies.map((study, i) => (
                            <CaseCard key={study.title} study={study} index={i} />
                        ))}
                    </div>
                </div>
            </section>
            <section
                className="relative overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-[#E2E8F0] to-[#F1F5F9] px-6 py-14">
                <div className="absolute left-0 top-20 h-[400px] w-[400px] rounded-full bg-cyan-400/20 blur-[150px]"/>
                <div
                    className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-emerald-400/20 blur-[150px]"/>
                <div
                    className="relative mx-auto max-w-7xl">
                    <div
                        className="grid items-center gap-16 lg:grid-cols-2">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{
                                once: true
                            }}
                        >
                            <span
                                className="inline-flex rounded-full border border-cyan-200 bg-white/80 px-5 py-2 text-sm font-semibold text-cyan-700 shadow-sm">
                                Work With Us
                            </span>
                            <h2
                                className="mt-0 text-4xl font-black leading-tight text-slate-900 md:text-5xl">
                                Ready to Build Your
                                <span
                                    className="block bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                                    Next Digital Success?
                                </span>
                            </h2>
                            <p
                                className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                                Tell us about your project and our experts will connect
                                within 24 hours with the right strategy, transparent pricing,
                                and scalable digital solutions.
                            </p>
                            <div
                                className="mt-5 space-y-5">
                                {[
                                    {
                                        title: "Free Consultation",
                                        desc: "Strategy session with our digital experts.",
                                        color: "bg-emerald-500"
                                    },
                                    {
                                        title: "Response Within 24 Hours",
                                        desc: "Fast communication and project planning.",
                                        color: "bg-cyan-500"
                                    },
                                    {
                                        title: "NDA Available",
                                        desc: "Complete confidentiality for your project.",
                                        color: "bg-blue-500"
                                    }

                                ].map((item) => (
                                    <div
                                        key={item.title}
                                        className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                                        
                                        <div>
                                            <h4
                                                className="font-bold text-slate-900"
                                            >
                                                {item.title}
                                            </h4>
                                            <p
                                                className="mt-1 text-sm text-slate-500"
                                            >
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div
                                className="mt-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                            >
                                <div
                                    className="grid gap-5 sm:grid-cols-3"
                                >
                                    {[
                                        ["Canada", "+91 99005 66466"],
                                        ["USA", "+91 99005 66466"],
                                        ["UK", "+91 99005 66466"]
                                    ].map(([country, phone]) => (
                                        <div key={country}>
                                            <p
                                                className="text-sm text-slate-400"
                                            >
                                                {country}
                                            </p>
                                            <p
                                                className="mt-1 font-semibold text-slate-800"
                                            >
                                                {phone}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <p
                                    className="mt-5 font-semibold text-cyan-600"
                                >
                                    nnc@nncdigital.com
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{
                                once: true
                            }}

                        >
                            <div className="relative rounded-[32px] border border-slate-200 bg-white  p-8 shadow-[0_25px_80px_rgba(15,23,42,.12)] md:p-10"
                            >
                                <div
                                    className="absolute left-1/2 top-0 h-1 w-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500"
                                />
                                <h3
                                    className="text-3xl font-bold text-slate-900"
                                >
                                    Let's Talk
                                </h3>
                                <p
                                    className="mt-2 text-slate-500"
                                >
                                    Start your project journey today.
                                </p>
                                <form
                                    onSubmit={handleSubmit}
                                    className="mt-8 space-y-5"
                                >
                                    {[
                                        {
                                            name: "fullname",
                                            type: "text",
                                            placeholder: "Full Name"
                                        },
                                        {
                                            name: "phone",
                                            type: "tel",
                                            placeholder: "Phone Number"
                                        },
                                        {
                                            name: "email",
                                            type: "email",
                                            placeholder: "Business Email"
                                        }
                                    ].map((input) => (
                                        <input
                                            key={input.name}
                                            type={input.type}
                                            name={input.name}
                                            value={form[input.name]}
                                            onChange={handleChange}
                                            placeholder={input.placeholder}
                                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                                        />
                                    ))}
                                    <textarea
                                        rows={4}
                                        name="description"
                                        value={form.description}
                                        onChange={handleChange}
                                        placeholder="Tell us about your project..."
                                        className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100
                                    "/>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500to-blue-600 py-4 text-lg font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(6,182,212,.35)]">
                                        Schedule Free Consultation →
                                    </button>
                                    <p className="text-center text-sm text-slate-400">
                                        Your information is secure. We never share your data.
                                    </p>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}