"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";

interface Country {
    name: string;
    code: string;
    flag: string;
}

const ContactForm: React.FC = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
    const [values, setValues] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get("https://restcountries.com/v3.1/all");
                const excludedCountries = [
                    "Saint Vincent and the Grenadines",
                    "United States Minor Outlying Islands",
                    "Saint Helena"
                ];

                const countryData = response.data
                    .map((country: any) => ({
                        name: country.name.common,
                        code: country.idd?.root ? country.idd.root + (country.idd.suffixes?.[0] || "") : "",
                        flag: country.flags?.png || "",
                    }))
                    .filter((c: Country) =>
                        c.code &&
                        !excludedCountries.includes(c.name) &&
                        c.name.split(" ").length <= 4
                    );

                setCountries(countryData);
            } catch (error) {
                console.error("Error fetching countries:", error);
            }
        };

        fetchCountries();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues({ ...values, [e.target.id]: e.target.value });
    };

    return (
        <div className="flex justify-center items-center min-h-screen px-6 text-black mt-[100px]">
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
                {/* Left Sidebar - Contact Info */}
                <motion.div
                    className="w-full md:w-1/3 bg-black text-white p-6 flex flex-col justify-center items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                    <div className="space-y-4 text-center">
                        <div className="flex items-center space-x-2">
                            <FaPhoneAlt />
                            <span>+93277145151</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaEnvelope />
                            <span>Jetplaysports@gmail.com</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaMapMarkerAlt />
                            <span>Sialkot, Pakistan</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right - Contact Form */}
                <motion.div
                    className="w-full md:w-2/3 p-6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>
                    <form className="space-y-4">
                        {"name email subject".split(" ").map((field, index) => (
                            <div key={index}>
                                <label htmlFor={field} className="block text-sm font-medium text-gray-700">
                                    {field.charAt(0).toUpperCase() + field.slice(1)}
                                </label>
                                <input
                                    type={field === "email" ? "email" : "text"}
                                    id={field}
                                    value={values[field as keyof typeof values]}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-black focus:ring-1 focus:ring-black"
                                />
                            </div>
                        ))}

                        {/* Phone Number Field with Country Selector */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center border border-gray-300 rounded-md overflow-hidden">
                                <div className="flex items-center px-3 py-2 border-b sm:border-r sm:border-b-0 border-gray-300 min-w-max w-full sm:w-40 relative">
                                    {selectedCountry?.flag && (
                                        <img src={selectedCountry.flag} alt="flag" className="w-5 h-5 mr-2 rounded-sm" />
                                    )}
                                    <select
                                        onChange={(e) => {
                                            const selected = countries.find((c) => c.code === e.target.value);
                                            setSelectedCountry(selected || null);
                                        }}
                                        className="bg-transparent outline-none text-sm w-full appearance-none"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Select Country</option>
                                        {countries.map((country, index) => (
                                            <option key={index} value={country.code} className="truncate">
                                                {country.name} ({country.code})
                                            </option>
                                        ))}
                                    </select>
                                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                                <input
                                    type="text"
                                    id="phone"
                                    value={values.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full sm:w-2/3 px-4 py-2 outline-none"
                                    placeholder=" Phone Number"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                rows={6}
                                value={values.message}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-black focus:ring-1 focus:ring-black resize-none"
                            ></textarea>
                        </div>

                        <div className="flex justify-center">
                            <motion.button
                                type="submit"
                                className="w-40 h-14 bg-black text-white rounded-md font-semibold transition-all duration-300 ease-in-out
                                        hover:bg-gray-800 hover:opacity-90"
                                whileTap={{ opacity: 0.8 }}
                            >
                                Send Message
                            </motion.button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactForm;