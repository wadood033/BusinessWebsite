"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

const Footer: React.FC = () => {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  return (
    <footer className="w-full bg-gradient-to-r from-black via-gray-900 to-black text-white py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Left Side - Company Info */}
        <div className="flex flex-col items-start space-y-5">
          <Image
            src="/companylogo.png"
            alt="Company Logo"
            width={140}
            height={140}
            className="rounded-full"
          />
          <h3 className="text-lg font-semibold text-white">Jet Play Sports</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            We craft high-quality, stylish, and performance-driven clothing, combining innovation with durability for athletes and fashion enthusiasts alike.
          </p>
          <ul className="text-sm space-y-1 text-gray-500">
            <li>✔ Premium-Quality Materials</li>
            <li>✔ Custom Apparel Manufacturing</li>
            <li>✔ Trusted by Global Brands</li>
          </ul>
        </div>

        {/* Center - Categories */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-5 text-white">Categories</h3>
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 text-sm">
            <div className="mb-3">
              <p className="text-gray-400 font-medium mb-2">Casual Wear</p>
              <ul className="space-y-1 text-gray-500">
                {["Crew Neck", "Hoodies", "Full Button Pants", "2 Button Jersey", "6 Pocket Shorts"].map((item) => (
                  <li key={item} className="hover:text-white transition duration-300">
                    <Link href={`/category/${item.toLowerCase().replace(/ /g, "-")}`}>{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-3">
              <p className="text-gray-400 font-medium mb-2">Sports Wear</p>
              <ul className="space-y-1 text-gray-500">
                {["American Football", "LS Jersey", "Soccer Jersey"].map((item) => (
                  <li key={item} className="hover:text-white transition duration-300">
                    <Link href={`/category/${item.toLowerCase().replace(/ /g, "-")}`}>{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Info */}
        <div className="contact-section flex flex-col items-end sm:items-end md:items-end lg:items-end xl:items-end space-y-6 text-right">
          <h3 className="text-lg font-semibold mb-5 text-white">Contact Us</h3>
          <div className="space-y-3">
            {[  
              { icon: <FaEnvelope />, text: "jetplaysports@gmail.com", link: "mailto:jetplaysports@gmail.com" },
              { icon: <FaPhone />, text: "+923277145151", link: "tel:+923277145151" },
              { icon: <FaMapMarkerAlt />, text: "Sialkot, Pakistan", link: "https://www.google.com/maps/place/Sialkot/@32.4833989,74.542398,12z/data=!3m1!4b1!4m6!3m5!1s0x391eea5674db6cfd:0xa8d03983946d4744!8m2!3d32.4944991!4d74.5228916!16zL20vMDIzdnd0?entry=ttu&g_ep=EgoyMDI1MDMzMC4wIKXMDSoASAFQAw%3D%3D"  },
            ].map((contact, index) => (
              <Link key={index} href={contact.link} className="flex items-center space-x-2 text-gray-400 hover:text-white transition duration-300">
                {contact.icon}
                <p>{contact.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section - Social Media & Copyright */}
      <div className="mt-12 text-center">
        <div className="flex justify-center space-x-6 mb-4 relative">
          {[  
            { icon: <FaFacebook />, link: "https://www.facebook.com/people/Jabran-Munawar/pfbid02BAQ2y8RBAgN5gQw7a9YtmkWq1h7YMxkcysUPXjTyU8Emd2xgeg3uspmqZU3Nuc8ol/?mibextid=wwXIfr&rdid=2OJKTkH2TAQIpyhZ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BrDma1Qtx%2F%3Fmibextid%3DwwXIfr", color: "#1877F2", translateX: "0px" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/jetplay_sports/?igsh=NWJ3cmh5b3N2endj&utm_source=qr#", color: "#E4405F", translateX: "-12px" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-2xl text-black transition duration-300 shadow-lg backdrop-blur-md"
              onMouseEnter={() => setHoveredSocial(social.color)}
              onMouseLeave={() => setHoveredSocial(null)}
              style={{
                backgroundColor: hoveredSocial === social.color ? social.color : "white",
                color: hoveredSocial === social.color ? "white" : "black",
                transform: hoveredSocial === social.color ? `translateX(${social.translateX}) scale(1.1)` : `translateX(${social.translateX}) scale(1)`,
              }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
        <p className="text-gray-500 text-sm border-t border-gray-700 pt-4">
          © 2025 All Rights Reserved | Jet Play Sports
        </p>
      </div>

      {/* Media Query for 620px & Below - Contact Info Centered */}
      <style jsx>{`
        @media (max-width: 700px) {
          .contact-section {
            align-items: center !important;
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
