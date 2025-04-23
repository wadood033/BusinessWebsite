'use client';

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaPhoneAlt, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6"; // Import FaChevronDown

const allItems = [
  { name: "Crew Neck", path: "/category/crew-neck" },
  { name: "Hoodies", path: "/category/hoodies" },
  { name: "2 Button Jersey", path: "/category/2-button-jersey" },
  { name: "Full Button with Pants", path: "/category/full-button-pants" },
  { name: "6 Pockets Shorts", path: "/category/6-pocket-shorts" },
  { name: "American Football Uniform", path: "/category/american-football" },
  { name: "LS Jersey", path: "/category/ls-jersey" },
  { name: "Soccer Jersey", path: "/category/soccer-jersey" },
];

const casualWearItems = allItems.filter(item =>
  ["Crew Neck", "Hoodies", "2 Button Jersey", "Full Button with Pants", "6 Pockets Shorts"].includes(item.name)
);

const sportswearItems = allItems.filter(item =>
  ["American Football Uniform", "LS Jersey", "Soccer Jersey"].includes(item.name)
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const casualDropdownRef = useRef<HTMLDivElement | null>(null);
  const sportswearDropdownRef = useRef<HTMLDivElement | null>(null);
  const casualButtonRef = useRef<HTMLButtonElement | null>(null);
  const sportswearButtonRef = useRef<HTMLButtonElement | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<typeof allItems>([]);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseEnter = (category: string) => {
    setOpenDropdown(category);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      if (
        !casualDropdownRef.current?.matches(':hover') &&
        !sportswearDropdownRef.current?.matches(':hover') &&
        !casualButtonRef.current?.matches(':hover')
      ) {
        setOpenDropdown(null);
      }
    }, 100);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchTerm("");
    setSearchResults([]);
    if (!isSearchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term) {
      const results = allItems.filter(item =>
        item.name.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-black px-8 py-7 z-50 shadow-md flex items-center h-[80px]  justify-between">
      {/* Contact Info (Left on Desktop) */}
      <div className="hidden lg:flex items-center gap-6">
        <Link href="tel:+923277145151" className="flex items-center gap-2 text-gray-700 hover:text-gray-600 transition">
          <FaPhoneAlt className="text-lg" style={{ color: "#228B22" }} /> {/* Phone color */}
          <span>+923277145151</span>
        </Link>
        <Link href="mailto:jeplaysports@gmail.com" className="flex items-center gap-2 text-gray-700 hover:text-gray-600 transition">
          <FaEnvelope className="text-lg" style={{ color: "#d44638" }} /> {/* Gmail color */}
          <span>jetplaysports@gmail.com</span>
        </Link>
      </div>

      {/* Logo (Center on Desktop) */}
      <div className="flex-shrink-0 lg:block hidden">
        <Link href="/" className="block lg:mx-auto">
          <Image src="/companylogofull.png" alt="Logo" width={75} height={37.5} className="object-contain" />
        </Link>
      </div>

      {/* Navigation Items & Search (Right on Desktop) */}
      <div className="hidden lg:flex items-center gap-8">
        <Link href="/" className="hover:text-gray-600 transition">Home</Link>
        <div
          className="relative group"
          onMouseEnter={() => handleMouseEnter("Casual Wear")}
          onMouseLeave={handleMouseLeave}
        >
          <button ref={casualButtonRef} className="flex items-center gap-1 hover:text-gray-600 transition">
            Casual Wear
          </button>
          <AnimatePresence>
            {openDropdown === "Casual Wear" && (
              <motion.div
                ref={casualDropdownRef}
                className="absolute left-0 mt-2 bg-white shadow-md rounded-md overflow-hidden z-10 border"
                initial={{ opacity: 0, translateY: -5 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: -5 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{ minWidth: '150px' }}
              >
                <ul className="py-0.5">
                  {casualWearItems.map((item, index) => (
                    <li key={item.name}>
                      <Link
                        href={item.path}
                        className="block px-3 py-1.5 text-gray-800 hover:bg-gray-100 transition whitespace-nowrap text-sm"
                      >
                        {item.name}
                      </Link>
                      {index < casualWearItems.length - 1 && <hr className="border-t border-gray-200 my-0.5" />}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div
          className="relative group"
          onMouseEnter={() => handleMouseEnter("Sportswear")}
          onMouseLeave={handleMouseLeave}
        >
          <button ref={sportswearButtonRef} className="flex items-center gap-1 hover:text-gray-600 transition">
            Sportswear
          </button>
          <AnimatePresence>
            {openDropdown === "Sportswear" && (
              <motion.div
                ref={sportswearDropdownRef}
                className="absolute left-0 mt-2 bg-white shadow-md rounded-md overflow-hidden z-10 border"
                initial={{ opacity: 0, translateY: -5 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: -5 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{ minWidth: '180px' }}
              >
                <ul className="py-0.5">
                  {sportswearItems.map((item, index) => (
                    <li key={item.name}>
                      <Link
                        href={item.path}
                        className="block px-3 py-1.5 text-gray-800 hover:bg-gray-100 transition whitespace-nowrap text-sm"
                      >
                        {item.name}
                      </Link>
                      {index < sportswearItems.length - 1 && <hr className="border-t border-gray-200 my-0.5" />}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Link href="/contact" className="hover:text-gray-600 transition">Contact</Link>
        <div className="relative">
          <button onClick={toggleSearch} className="flex items-center gap-2 text-gray-700 hover:text-gray-600 transition">
            <FaSearch className="text-lg" />
          </button>
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 200, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-0 mt-2 bg-white shadow-md rounded-md overflow-hidden z-20"
              >
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search..."
                  className="px-3 py-2 w-full outline-none text-sm"
                  value={searchTerm}
                  onChange={handleSearchInputChange}
                />
                {searchResults.length > 0 && (
                  <ul className="py-0.5">
                    {searchResults.map(result => (
                      <li key={result.name}>
                        <Link
                          href={result.path}
                          onClick={toggleSearch}
                          className="block px-3 py-1.5 text-gray-800 hover:bg-gray-100 transition whitespace-nowrap text-sm"
                        >
                          {result.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                {searchTerm && searchResults.length === 0 && (
                  <div className="px-3 py-1.5 text-gray-600 text-sm">No results found.</div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Hamburger Icon */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="text-2xl text-gray-800">
          <FaBars className={`${isMobileMenuOpen ? 'hidden' : 'block'}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg p-6 flex flex-col gap-6 z-50"
          >
            {/* Close Icon */}
            <button onClick={toggleMobileMenu} className="absolute top-6 right-6 text-2xl text-gray-800">
              <FaTimes />
            </button>

            {/* Logo */}
            <div className="flex justify-center mb-4">
              <Link href="/">
                <Image src="/companylogofull.png" alt="Logo" width={100} height={50} className="object-contain" />
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col items-center gap-2 text-gray-700 mb-4">
              <Link href="tel:+923277145151" className="flex gap-2 items-center hover:text-gray-600 transition">
                <FaPhoneAlt style={{ color: "#228B22" }} /> {/* Phone color */}
                <span>+923277145151</span>
              </Link>
              <Link href="mailto:jetplaysports@gmail.com" className="flex gap-2 items-center hover:text-gray-600 transition">
                <FaEnvelope style={{ color: "#d44638" }} /> {/* Gmail color */}
                <span>jetplaysports@gmail.com</span>
              </Link>
            </div>

            {/* Search Bar */}
            <div className="flex items-center gap-3 border rounded-lg px-3 py-2 mb-4">
              <FaSearch className="text-gray-600" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full outline-none"
                value={searchTerm}
                onChange={handleSearchInputChange}
              />
            </div>
            {searchResults.length > 0 && (
              <ul className="mb-4">
                {searchResults.map(result => (
                  <li key={result.name} className="py-1">
                    <Link href={result.path} onClick={toggleMobileMenu} className="block hover:text-gray-600">
                      {result.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {searchTerm && searchResults.length === 0 && (
              <div className="mb-4 text-gray-600">No results found.</div>
            )}

            {/* Navigation Links */}
            <ul className="flex flex-col gap-4 text-lg font-medium">
              <li>
                <Link href="/" onClick={toggleMobileMenu}>Home</Link>
              </li>
              <li>
                <button
                  onClick={() => setOpenDropdown(openDropdown === "Casual Wear" ? null : "Casual Wear")}
                  className="flex justify-between w-full"
                >
                  Casual Wear
                  <FaChevronDown
                    className={`transition-transform ${openDropdown === "Casual Wear" ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openDropdown === "Casual Wear" && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-4 mt-2 text-sm border-l pl-4"
                    >
                      {casualWearItems.map((item) => (
                        <li key={item.name} className="py-1">
                          <Link href={item.path} onClick={toggleMobileMenu}>{item.name}</Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
              <li>
                <button
                  onClick={() => setOpenDropdown(openDropdown === "Sportswear" ? null : "Sportswear")}
                  className="flex justify-between w-full"
                >
                  Sportswear
                  <FaChevronDown
                    className={`transition-transform ${openDropdown === "Sportswear" ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openDropdown === "Sportswear" && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-4 mt-2 text-sm border-l pl-4"
                    >
                      {sportswearItems.map((item) => (
                        <li key={item.name} className="py-1">
                          <Link href={item.path} onClick={toggleMobileMenu}>{item.name}</Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
              <li>
                <Link href="/contact" onClick={toggleMobileMenu}>Contact</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;