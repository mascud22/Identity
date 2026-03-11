'use client'
import React, { useState, useEffect } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowUpIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Mail,
} from "lucide-react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to show/hide top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-primary border-2 border-ui-color/20 mt-8 text-text overflow-hidden border-t  rounded-3xl">
      {/* Decorative Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-ui-color/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-ui-color/10 rounded-full blur-[100px]" />
      </div>

      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 sm:px-8 lg:px-12">
        
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Brand & Contact */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <SparklesIcon className="w-6 h-6 text-ui-color" />
              <h2 className="text-2xl font-bold text-text tracking-tight">
                Mascud Yare
              </h2>
            </div>
            <p className="text-text-third max-w-md leading-relaxed">
              Crafting digital experiences with precision and passion. 
              Let's build something extraordinary together.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="p-2 rounded-2xl bg-invert group-hover:bg-ui-color/20 transition-colors">
                  <EnvelopeIcon className="w-5 h-5 text-ui-color" />
                </div>
                <span className="text-sm text-text font-semibold group-hover:text-ui-color transition-colors">
                  mascudkacade440@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="p-2 rounded-2xl bg-invert group-hover:bg-ui-color/20 transition-colors">
                  <PhoneIcon className="w-5 h-5 text-ui-color" />
                </div>
                <span className="text-sm text-text font-semibold group-hover:text-ui-color transition-colors">
                  0613773919/0613695774
                </span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="p-2 rounded-2xl bg-invert group-hover:bg-ui-color/20 transition-colors">
                  <MapPinIcon className="w-5 h-5 text-ui-color" />
                </div>
                <span className="text-sm text-text font-semibold group-hover:text-ui-color transition-colors">
                  Mogadishu, Somalia
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-third/50 border-2 border-ui-color/10 rounded-4xl p-6 sm:p-8 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-text mb-2">
              Subscribe to Updates
            </h3>
            <p className="text-sm text-text-third mb-6">
              Get the latest news, projects, and insights delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-third" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-third border border-fourth rounded-2xl py-3 pl-10 pr-4 text-sm text-text placeholder-text-third focus:outline-none focus:border-ui-color focus:ring-1 focus:ring-ui-color transition-all"
                />
              </div>
              <button className="bg-ui-color hover:bg-opacity-90 text-ui-color-text px-6 py-3 rounded-2xl font-semibold text-sm transition-all hover:scale-103 cursor-pointer">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-ui-color/10 pt-8">
          
          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-text font-semibold">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm text-text-third">
              {["Home", "Projects", "Skills", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-ui-color transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-text-third rounded-full group-hover:bg-ui-color transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4">
            <h4 className="text-text font-semibold">Resources</h4>
            <ul className="flex flex-col gap-3 text-sm text-text-third">
              {["Documentation", "Blog", "Support", "Status"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-ui-color transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-text-third rounded-full group-hover:bg-ui-color transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="text-text font-semibold">Legal</h4>
            <ul className="flex flex-col gap-3 text-sm text-text-third">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "Disclaimer"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-ui-color transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-text-third rounded-full group-hover:bg-ui-color transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Connect */}
          <div className="flex flex-col gap-4">
            <h4 className="text-text font-semibold">Connect</h4>
            <div className="flex gap-4">
              <a href="#" aria-label="Github" className="p-2 rounded-lg bg-third/50 hover:bg-ui-color/20 text-text-third hover:text-ui-color transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Linkedin" className="p-2 rounded-lg bg-third/50 hover:bg-ui-color/20 text-text-third hover:text-ui-color transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="p-2 rounded-lg bg-third/50 hover:bg-ui-color/20 text-text-third hover:text-ui-color transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="p-2 rounded-lg bg-third/50 hover:bg-ui-color/20 text-text-third hover:text-ui-color transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-ui-color/10 bg-third/">
        <div className="max-w-7xl mx-auto px-6 py-6 sm:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-text-third">
            © {new Date().getFullYear()} Mascud Yare. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-text-third">
            <a href="#" className="hover:text-ui-color transition-colors">Privacy</a>
            <a href="#" className="hover:text-ui-color transition-colors">Terms</a>
            <a href="#" className="hover:text-ui-color transition-colors">Sitemap</a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-ui-color text-ui-color-text shadow-lg shadow-ui-color/30 transition-all duration-300 z-50 hover:scale-110 hover:bg-opacity-90 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUpIcon className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;