import React, { useState } from "react";
import { Phone, Plus, X } from "lucide-react";
import useContact from "@/hooks/useContact";

const faq = [
    {
        q: "What is custom CRM software, and how does it differ from off-the-shelf solutions?",
        a: "Custom CRM is built specifically for your business workflows—not the average business. It integrates with your tools, follows your processes, and scales without licensing fees. Unlike generic CRMs, there are no feature compromises or per-seat costs.",
    },
    {
        q: "How long does it typically take to develop and deploy a custom CRM system?",
        a: "Most CRM projects take between 6 and 12 weeks. Larger enterprise systems with ERP integrations, AI features, or complex workflows can take 16–24 weeks.",
    },
    {
        q: "Is your CRM development compliant with GDPR, PIPEDA, and CCPA?",
        a: "Yes. We build compliance into the architecture from day one with role-based permissions, audit logs, consent management, encryption, and secure infrastructure.",
    },
    {
        q: "What features can be customised?",
        a: "Everything—sales pipelines, dashboards, lead scoring, WhatsApp integration, reporting, AI automation, inventory, ERP integrations, accounting, and much more.",
    },
    {
        q: "What does CRM development cost?",
        a: "Our CRM projects typically start around CAD $18,000 / £10,500 for MVP solutions. Larger enterprise platforms are priced after discovery.",
    },
    {
        q: "Do you offer post-launch support?",
        a: "Yes. Every project includes post-launch support along with optional monthly maintenance, feature updates, security monitoring, and performance optimization.",
    },
];

const Faq = () => {
    const [active, setActive] = useState(null);
    const { submitForm, loading, success, error } = useContact();
    const [form, setForm] = useState({
        fullname: "",
        email: "",
        phone: "",
        service: "",
        messaage: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await submitForm(form);

            setForm({
                fullname: "",
                email: "",
                phone: "",
                service: "",
                message: "",
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <section className="relative overflow-hidden bg-[#1A2343] px-6 py-28 text-white">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-cyan-500/12 blur-[140px]" />
                    <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-blue-600/12 blur-[140px]" />
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

                <div className="relative mx-auto max-w-7xl">
                    <div className="mb-16 text-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm uppercase tracking-[0.3em] text-cyan-300/80 backdrop-blur-md">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                            Common Questions
                        </span>

                        <h2 className="mt-6 text-4xl font-bold md:text-5xl">
                            Frequently Asked{" "}
                            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                                Questions
                            </span>
                        </h2>
                    </div>
                    <div className="flex gap-5 overflow-x-auto pb-4 no-scrollbar">
                        {faq.map((item, index) => {
                            const num = String(index + 1).padStart(2, "0");
                            return (
                                <div
                                    key={index}
                                    className="group relative flex min-h-[230px] w-[280px] flex-shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:shadow-[0_25px_60px_-15px_rgba(6,182,212,0.45)]"
                                >
                                    <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.12),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                    <span className="absolute left-7 top-0 h-1 w-10 rounded-b-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-2/3" />
                                    <div className="relative">
                                        <span className="text-sm font-bold bg-gradient-to-br from-emerald-300 to-cyan-400 bg-clip-text text-transparent">
                                            {num}
                                        </span>
                                        <h3 className="mt-3 text-lg font-semibold leading-snug text-white">
                                            {item.q}
                                        </h3>
                                    </div>
                                    <button
                                        onClick={() => setActive(item)}
                                        aria-label="Read answer"
                                        className="relative mt-6 flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 transition-all duration-300 hover:rotate-90 hover:border-cyan-400 hover:bg-cyan-400 hover:text-[#020617]"
                                    >
                                        <Plus size={22} />
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {active && (
                    <div
                        onClick={() => setActive(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6 backdrop-blur-sm animate-[fadeIn_0.25s_ease-out]"
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-3xl rounded-3xl border border-cyan-400/30 bg-[#0a1228] p-10 shadow-[0_0_80px_rgba(34,211,238,0.25)] animate-[modalUp_0.3s_ease-out]"
                        >
                            <span className="absolute left-10 right-10 top-0 h-1 rounded-b-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500" />
                            <button
                                onClick={() => setActive(null)}
                                aria-label="Close"
                                className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-white/30 hover:text-white"
                            >
                                <X size={20} />
                            </button>
                            <h3 className="mb-6 max-w-[90%] text-2xl font-bold text-cyan-300 md:text-3xl">
                                {active.q}
                            </h3>
                            <p className="text-lg leading-8 text-slate-300/90">{active.a}</p>
                        </div>
                    </div>
                )}
            </section>




            <section className="bg-[#1A2343] sm:px-4 md:px-7 lg:px-8 py-14">
                <div className="mx-auto max-w-7xl sm:px-4 md:px-7 lg:px-8">
                    <div className="grid items-center gap-20 lg:grid-cols-2">
                        <div>
                            <span className="inline-block rounded-full border border-emerald-400/30 bg-emerald-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-emerald-300">
                                Get Started
                            </span>

                            <h2 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-6xl">
                                Ready to Build
                                <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text bg-clip-text text-transparent">
                                    Next-Level Digital Solutions?
                                </span>
                            </h2>

                            <p className="mt-8 text-lg leading-8 text-gray-300">
                                Whether you're launching a startup, modernizing your business,
                                or building enterprise software, our team delivers scalable,
                                beautiful, and high-performance digital experiences.
                            </p>
                            <div className="mt-10 space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-2xl">
                                        ⚡
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">
                                            Fast Response
                                        </h4>

                                        <p className="text-gray-400">
                                            We'll reply within 24 hours.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-2xl">
                                        💡
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">
                                            Free Consultation
                                        </h4>
                                        <p className="text-gray-400">
                                            Discuss your project with our experts.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-2xl">
                                        🔒
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">
                                            NDA Available
                                        </h4>
                                        <p className="text-gray-400">
                                            Your idea stays completely confidential.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            {/* <form onSubmit={handleSubmit} className="space-y-6">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full border-b border-gray-600 bg-transparent py-4 text-white outline-none placeholder:text-gray-500 focus:border-emerald-400"
                                />
                                <input
                                    type="email"
                                    placeholder="Business Email"
                                    className="w-full border-b border-gray-600 bg-transparent py-4 text-white outline-none placeholder:text-gray-500 focus:border-emerald-400"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full border-b border-gray-600 bg-transparent py-4 text-white outline-none placeholder:text-gray-500 focus:border-emerald-400"
                                />
                                <select className="w-full border-b border-gray-600 bg-transparent py-4 text-white outline-none focus:border-emerald-400">
                                    <option className="text-black">
                                        Select Service
                                    </option>
                                    <option className="text-black">
                                        Web Development
                                    </option>
                                    <option className="text-black">
                                        Mobile App Development
                                    </option>
                                    <option className="text-black">
                                        UI/UX Design
                                    </option>
                                    <option className="text-black">
                                        AI Solutions
                                    </option>
                                </select>
                                <textarea
                                    rows={5}
                                    placeholder="Tell us about your project..."
                                    className="w-full border-b border-gray-600 bg-transparent py-4 text-white outline-none placeholder:text-gray-500 focus:border-emerald-400"
                                />
                                <button type="submit" className="mt-6 rounded-full bg-emerald-400 px-10 py-4 font-semibold text-white transition hover:bg-emerald-400">
                                    Let's Build Together →
                                </button>
                            </form> */}
                            <form onSubmit={handleSubmit} className="space-y-6">

                                <input
                                    type="text"
                                    name="fullname"
                                    value={form.fullname}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    className="w-full border-b border-gray-600 bg-transparent py-4 text-white outline-none placeholder:text-gray-500 focus:border-emerald-400"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Business Email"
                                    className="w-full border-b border-gray-600 bg-transparent py-4 text-white outline-none placeholder:text-gray-500 focus:border-emerald-400"
                                />

                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    className="w-full border-b border-gray-600 bg-transparent py-4 text-white outline-none placeholder:text-gray-500 focus:border-emerald-400"
                                />

                                <select
                                    name="service"
                                    value={form.service}
                                    onChange={handleChange}
                                    className="w-full border-b border-gray-600 bg-transparent py-4 text-white outline-none focus:border-emerald-400"
                                >
                                    <option value="" className="text-black">
                                        Select Service
                                    </option>

                                    <option value="Web Development" className="text-black">
                                        Web Development
                                    </option>

                                    <option value="Mobile App Development" className="text-black">
                                        Mobile App Development
                                    </option>

                                    <option value="UI/UX Design" className="text-black">
                                        UI/UX Design
                                    </option>

                                    <option value="AI Solutions" className="text-black">
                                        AI Solutions
                                    </option>
                                </select>

                                <textarea
                                    rows={5}
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project..."
                                    className="w-full border-b border-gray-600 bg-transparent py-4 text-white outline-none placeholder:text-gray-500 focus:border-emerald-400"
                                />

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="mt-6 rounded-full bg-emerald-400 px-10 py-4 font-semibold text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {loading ? "Submitting..." : "Let's Build Together →"}
                                </button>

                                {success && (
                                    <p className="text-sm text-green-400">
                                        Thank you! Your request has been submitted.
                                    </p>
                                )}

                                {error && (
                                    <p className="text-sm text-red-400">
                                        {error}
                                    </p>
                                )}

                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#1A2343] py-14 px-6">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 text-center">
                        <p className="text-sm font-semibold uppercase tracking-[4px] text-emerald-400">
                            From the Blog
                        </p>
                        <h1 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
                            Insights on Technology,{" "}
                            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text bg-clip-text text-transparent">
                                Automation & Digital Growth
                            </span>
                        </h1>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:border-emerald-400/40">
                            <p className="text-sm text-gray-400">
                                March 5, 2026 • 5 min read
                            </p>
                            <h2 className="mt-4 text-xl font-semibold leading-snug text-white group-hover:text-emerald-300">
                                Why Off-the-Shelf CRMs Fail Growing Businesses (And What to Do Instead)
                            </h2>
                            <p className="mt-4 text-sm leading-6 text-gray-300">
                                Salesforce and HubSpot work until they don't. Here's why scaling businesses hit a wall with generic CRM tools and how custom-built systems eliminate friction.
                            </p>
                            <img
                                src="/gdpr.webp"
                                alt="blog"
                                className="mt-6 h-48 w-full rounded-xl object-cover"
                            />
                        </div>
                        <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:border-emerald-400/40">
                            <p className="text-sm text-gray-400">
                                February 8, 2026 • 7 min read
                            </p>
                            <h2 className="mt-4 text-xl font-semibold leading-snug text-white group-hover:text-emerald-300">
                                GDPR, PIPEDA & CCPA: How to Build Software That's Compliant From Day One
                            </h2>
                            <p className="mt-4 text-sm leading-6 text-gray-300">
                                Compliance retrofitted after launch is expensive and fragile. Learn how to architect data privacy into systems from the ground up.
                            </p>
                            <img
                                src="/whyoff.jpg"
                                alt="blog"
                                className="mt-6 h-48 w-full rounded-xl object-cover"
                            />
                        </div>
                        <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:border-emerald-400/40">
                            <p className="text-sm text-gray-400">
                                February 20, 2026 • 6 min read
                            </p>
                            <h2 className="mt-4 text-xl font-semibold leading-snug text-white group-hover:text-emerald-300">
                                The 7 Business Processes You Should Automate Before Hiring Your Next Employee
                            </h2>
                            <p className="mt-4 text-sm leading-6 text-gray-300">
                                Before expanding headcount, smart operators automate. We break down workflows where automation delivers the fastest ROI.
                            </p>
                            <img
                                src="/7business.png"
                                alt="blog"
                                className="mt-6 h-48 w-full rounded-xl object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Faq;