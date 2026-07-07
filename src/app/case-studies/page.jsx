"use client";

import React, { useRef , useState } from "react";
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

    const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
    const reversed = index % 2 === 1;

    return (
        <motion.div
            ref={ref}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-md transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_30px_80px_-20px_rgba(6,182,212,0.4)]"
        >
            <div className={`grid lg:grid-cols-2 ${reversed ? "lg:[direction:rtl]" : ""}`}>
                <div className="relative h-72 overflow-hidden lg:h-auto [direction:ltr]">
                    <motion.img
                        src={study.image}
                        alt={study.title}
                        style={{ y }}
                        className="absolute inset-0 h-[124%] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/30 to-transparent lg:bg-gradient-to-r" />

                    <div className="absolute bottom-6 left-6">
                        <div className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-5xl font-bold text-transparent">
                            {study.metric}
                        </div>
                        <p className="mt-1 text-sm text-slate-300">{study.metricLabel}</p>
                    </div>
                </div>

                <div className="relative p-8 lg:p-10 [direction:ltr]">
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-cyan-400/30 bg-cyan-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-200">
                            {study.tag}
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                            {study.sector}
                        </span>
                    </div>

                    <h3 className="mt-5 text-2xl font-bold leading-snug text-white">
                        {study.title}
                    </h3>

                    <div className="mt-6 space-y-5">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                                The Challenge
                            </p>
                            <p className="mt-1.5 text-sm leading-relaxed text-slate-300/90">
                                {study.challenge}
                            </p>
                        </div>
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                                The Solution
                            </p>
                            <p className="mt-1.5 text-sm leading-relaxed text-slate-300/90">
                                {study.solution}
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 border-t border-white/10 pt-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                            The Results
                        </p>
                        <motion.ul
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="mt-3 space-y-2"
                        >
                            {study.results.map((r) => (
                                <motion.li
                                    key={r}
                                    variants={fadeUp}
                                    className="flex items-start gap-2.5 text-sm text-slate-200"
                                >
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
                                    {r}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}


export default function Page() {
    const heroRef = useRef(null);
    const {submitForm , loading, success, error} = useContact();
    const [form, setform] = useState({
        fullname: "",
        phone: "",
        email:"",
        description:"",
    });

    const handleChange= (e) =>{
        const {name, value} = e.target;

        setform((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async(e)=>{
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
        <div className=" bg-[#1A2343] text-white">
            <section
                ref={heroRef}
                className="relative flex min-h-[85vh]  overflow-hidden px-6 pt-32 pb-20"
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
                        className="mt-6 text-4xl font-bold leading-tight md:text-6xl"
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

            <section className="relative px-6 py-20">
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

          

            <section className="relative overflow-hidden py-18 px-10 ">
                <div className="absolute top-0 left-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px]" />
                <div className="absolute bottom-0 right-20 h-80 w-80 rounded-full bg-emerald-500/10 blur-[150px]" />

                <div className="relative mx-auto max-w-7xl">

                    <div className="grid items-center gap-20 lg:grid-cols-2">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
                                Work With Us
                            </span>

                            <h2 className="mt-6 text-5xl font-bold leading-tight text-white">
                                Ready to Build Your
                                <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                    Next Digital Success?
                                </span>
                            </h2>

                            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                                Tell us about your project and our experts will connect with you
                                within 24 hours. We provide honest advice, transparent pricing and
                                scalable digital solutions.
                            </p>

                            <div className="mt-10 space-y-5">

                                <div className="flex items-center gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-xl">
                                        ✓
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-white">
                                            Free Consultation
                                        </h4>

                                        <p className="text-slate-400">
                                            Strategy session with our experts.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-xl">
                                        ✓
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-white">
                                            Response Within 24 Hours
                                        </h4>

                                        <p className="text-slate-400">
                                            Fast communication and project planning.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-xl">
                                        ✓
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-white">
                                            NDA Available
                                        </h4>

                                        <p className="text-slate-400">
                                            Your project stays completely confidential.
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div className="mt-12 border-t border-white/10 pt-8">

                                <div className="flex flex-wrap gap-8 text-slate-300">

                                    <div>
                                        <p className="text-sm text-slate-500">
                                            Canada
                                        </p>

                                        <p>+91 99005 66466</p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-slate-500">
                                            USA
                                        </p>

                                        <p>+91 99005 66466</p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-slate-500">
                                            UK
                                        </p>

                                        <p>+91 99005 66466</p>
                                    </div>

                                </div>

                                <p className="mt-6 text-cyan-300">
                                    nnc@nncdigital.com
                                </p>

                            </div>

                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >

                            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

                                <h3 className="mb-8 text-3xl font-semibold text-white">
                                    Let's Talk
                                </h3>

                                <form onSubmit={handleSubmit} className="space-y-5">

                                    <input
                                        type="text"
                                        name="fullname"
                                        onChange={handleChange}
                                        value={form.fullname}
                                        placeholder="Full Name"
                                        className="w-full rounded-xl border border-white/10 bg-transparent px-5 py-4 text-white outline-none transition focus:border-cyan-400"
                                    />

                                    <input
                                        type="tel"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number"
                                        className="w-full rounded-xl border border-white/10 bg-transparent px-5 py-4 text-white outline-none transition focus:border-cyan-400"
                                    />

                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="Business Email"
                                        className="w-full rounded-xl border border-white/10 bg-transparent px-5 py-4 text-white outline-none transition focus:border-cyan-400"
                                    />

                                    <textarea
                                        rows={5}
                                        name="description"
                                        value={form.description}
                                        onChange={handleChange}
                                        placeholder="Tell us about your project..."
                                        className="w-full resize-none rounded-xl border border-white/10 bg-transparent px-5 py-4 text-white outline-none transition focus:border-cyan-400"
                                    />

                                    <button type="submit" 
                                    disabled={loading} className="w-full rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 py-4 text-lg font-semibold text-white transition duration-300 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(6,182,212,.35)]">
                                        Schedule Free Consultation →
                                    </button>

                                    <p className="text-center text-sm text-slate-500">
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