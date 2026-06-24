import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#050816] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 border-b border-white/10 pb-12">
          <div>
            <img
              src="/nnclogo.webp"
              alt="NNC Digital"
              className="h-14 mb-5"
            />

            <p className="text-gray-400 leading-relaxed">
              Transforming businesses through innovative digital solutions,
              web development, mobile apps, CRM automation and AI-powered
              systems.
            </p>

            <button className="mt-6 bg-[#00A883] hover:bg-green-400 transition px-5 py-3 rounded-xl font-medium">
              Book a Free Call →
            </button>
          </div>

         
          <div>
            <h3 className="font-semibold text-lg mb-5">Services</h3>

            <ul className="space-y-3 text-gray-400 ">
              <li className="hover:text-green-300"><a href="#">CRM Development</a></li>
              <li className="hover:text-green-300"><a href="#">ERP Development</a></li>
              <li className="hover:text-green-300"><a href="#">Web Development </a></li>
              <li className="hover:text-green-300"><a href="#">SEO & Marketing</a></li>
              <li className="hover:text-green-300"><a href="#">Digital Transformation</a></li>
              <li className="hover:text-green-300"><a href="#">Hire CRM Developers</a></li>
            </ul>
          </div>

           <div>
            <h3 className="font-semibold text-lg mb-5">Industries</h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-green-300"><a href="#">HealthCare</a></li>
              <li className="hover:text-green-300"><a href="#">Real Estate</a></li>
              <li className="hover:text-green-300"><a href="#">E-Commerce </a></li>
              <li className="hover:text-green-300"><a href="#">Manufacturing</a></li>
              <li className="hover:text-green-300"><a href="#">Professional Service</a></li>
            </ul>
          </div>

    
          <div>
            <h3 className="font-semibold text-lg mb-5">Company</h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-green-300"><a href="#">About NNC Digital</a></li>
              <li className="hover:text-green-300"><a href="#">About Nakshatra Namaha Creations</a></li>
              <li className="hover:text-green-300"><a href="#">Case Studies</a></li>
              <li className="hover:text-green-300"><a href="#">Blog</a></li>
              <li className="hover:text-green-300"><a href="#">Pricing</a></li>
              <li className="hover:text-green-300"><a href="#">Careers</a></li>
            </ul>
          </div>

        
          <div>
            <h3 className="font-semibold text-lg mb-5">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <p>📍50 Philip Ave Guelph, ON N1E 1R4, Canada</p>
              <p><strong>CA</strong> Canada: +91 9900566466</p>
              <p><strong>US</strong> USA: +91 9900566466</p>
              <p><strong>GB</strong> UK: +91 9900566466</p>
              <p><strong>IN</strong> INDIA: +91 9900566466</p>
            </div>
            <div className="mt-6">
              <h4 className="font-medium mb-3">Newsletter</h4>

              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white/5 border border-white/10 rounded-l-xl px-4 py-3 outline-none"
                />

                <button className="bg-[#00A883] px-5 rounded-r-xl hover:bg-green-500 transition">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8">

          <div className="flex gap-4 mb-5 md:mb-0">
            <a
              href="#"
              className="w-11 h-11 rounded-full bg-white/5 hover:bg-green-500 flex items-center justify-center transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-white/5 hover:bg-green-500 flex items-center justify-center transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-white/5 hover:bg-green-500 flex items-center justify-center transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-white/5 hover:bg-green-500 flex items-center justify-center transition"
            >
              <FaXTwitter />
            </a>
          </div>

          <div className="text-gray-500 text-sm text-center">
            © 2026 NNC Digital. All Rights Reserved.
          </div>

          <div className="flex gap-5 text-sm text-gray-400 mt-4 md:mt-0">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;