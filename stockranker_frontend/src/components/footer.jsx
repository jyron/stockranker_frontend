import React, { useState, useEffect } from 'react';
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto flex flex-wrap justify-between">
                {/* Footer Links */}
                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4">
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <ul className="list-none">
                        <li><a href="#" className="hover:text-gray-400">Home</a></li>
                        <li><a href="#" className="hover:text-gray-400">About</a></li>
                    </ul>
                </div>

                {/* Contact Details */}
                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4">
                    <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                    <p>Email: contact@example.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                </div>

                {/* Social Media Links */}
                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4">
                    <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                    <ul className="list-none flex space-x-4">
                        <li><a href="#" className="text-white hover:text-gray-400"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="#" className="text-white hover:text-gray-400"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#" className="text-white hover:text-gray-400"><i className="fab fa-linkedin"></i></a></li>
                        <li><a href="#" className="text-white hover:text-gray-400"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>

                {/* Copyright Notice */}
                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4">
                    <p className="text-sm">&copy; 2023 StockRanker.co</p> <p className='text-sm'>All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;