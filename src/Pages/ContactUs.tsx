import React, { useState } from "react";
import { useNotification } from "../Components/NotificationContext";
import {FaTwitter, FaInstagram} from "react-icons/fa";
import {Link} from "react-router-dom";
import { Home, Phone, Mail, MapPin} from "lucide-react";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const {showNotification} = useNotification();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        showNotification("Thank you for reaching out! We'll get back to you shortly.", "success");
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Contact Us</h1>
            <Link to="/" className="flex items-center gap-2 my-5 px-4 py-2 bg-yellow-400 text-black rounded w-40">
                            Back to Home <Home size={18} />
                    </Link>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email Address"
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    className="w-full p-2 border border-gray-300 rounded h-32"
                />
                <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer"
                >
                    Send Message
                </button>
            </form>
            <hr className="mt-8 text-gray-300" />
            <div className="mt-8 space-y-4">
                <h2 className="text-lg font-bold">Customer Support</h2>
                <p className="flex items-center space-x-2 text-gray-700">
                    <Phone className="text-green-500" size={20} />
                    <span>: +234 9022334455</span>
                </p>
                <p className="flex items-center space-x-2 text-gray-700">
                    <Mail className="text-blue-500" size={20} />
                    <span>: support@tastehaven.com</span>
                </p>
                <p className="flex items-center space-x-2 text-gray-700">
                    <MapPin className="text-red-500" size={20} />
                    <span>: Ibadan, Oyo State. Nigeria</span>
                </p>
                <iframe
                    className="w-full h-64 border"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.3769732178635!2d3.8939496163726225!3d7.387788526907107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103865d7c30f5399%3A0x1f2cdbd7bcb7751d!2sCapital%20Building%2C%20MKO%20Abiola%20Way%2C%20Ibadan%2C%20Oyo%20State!5e0!3m2!1sen!2sng!4v1234567890"
                    title="Google Map"
                    allowFullScreen
                ></iframe>
                <hr className="mt-8 text-gray-300" />
                <h2 className="mt-4 font-semibold">Our Socials</h2>
                <div className="flex space-x-4">
                    <a href="https://x.com/edwardijeruh?s=11" className="text-blue-500">
                        <FaTwitter size={20} /> 
                    </a>
                    <a href="https://www.instagram.com/edwardijeruh?igsh=MTJwdHp0ZTNiY3g2OA%3D%3D&utm_source=qr" className="text-pink-500">
                        <FaInstagram size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
