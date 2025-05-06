import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#1D1D1F] font-macFont text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
                    <div>
                        <h3 className="font-bold mb-2">Shop and Learn</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Store</a></li>
                            <li><a href="#" className="hover:underline">Mac</a></li>
                            <li><a href="#" className="hover:underline">iPad</a></li>
                            <li><a href="#" className="hover:underline">iPhone</a></li>
                            <li><a href="#" className="hover:underline">Watch</a></li>
                            <li><a href="#" className="hover:underline">AirPods</a></li>
                            <li><a href="#" className="hover:underline">TV & Home</a></li>
                            <li><a href="#" className="hover:underline">AirTag</a></li>
                            <li><a href="#" className="hover:underline">Accessories</a></li>
                            <li><a href="#" className="hover:underline">Gift Cards</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">Account</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Manage Your Apple Account</a></li>
                            <li><a href="#" className="hover:underline">Apple Store Account</a></li>
                            <li><a href="#" className="hover:underline">iCloud.com</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">Apple Store</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Find a Store</a></li>
                            <li><a href="#" className="hover:underline">Genius Bar</a></li>
                            <li><a href="#" className="hover:underline">Today at Apple</a></li>
                            <li><a href="#" className="hover:underline">Group Reservations</a></li>
                            <li><a href="#" className="hover:underline">Apple Camp</a></li>
                            <li><a href="#" className="hover:underline">Apple Trade In</a></li>
                            <li><a href="#" className="hover:underline">Ways to Buy</a></li>
                            <li><a href="#" className="hover:underline">Recycling Programme</a></li>
                            <li><a href="#" className="hover:underline">Order Status</a></li>
                            <li><a href="#" className="hover:underline">Shopping Help</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">For Business</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Apple and Business</a></li>
                            <li><a href="#" className="hover:underline">Shop for Business</a></li>
                        </ul>
                        <h3 className="font-bold mb-2">For Education</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Apple and Education</a></li>
                            <li><a href="#" className="hover:underline">Shop for Education</a></li>
                            <li><a href="#" className="hover:underline">Shop for University</a></li>
                        </ul>
                        <h3 className="font-bold mb-2">For Healthcare</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Apple in Healthcare</a></li>
                            <li><a href="#" className="hover:underline">Mac in Healthcare</a></li>
                            <li><a href="#" className="hover:underline">Health on Apple Watch</a></li>
                        </ul>
                    </div>
                    
                </div>
            </div>

            <div className="text-center mt-6">
                <p>More ways to shop: <a href="#" className="hover:underline">Find an Apple Store</a> or <a href="#" className="hover:underline">other retailer</a> near you. Or call <a href="#" className="hover:underline">000800 040 1966</a>.</p>
                <p className="mt-4">Copyright © 2025 Apple Inc. All rights reserved.</p>
                <div className="text-sm mt-2">
                    <a href="#" className="hover:underline">Privacy Policy</a> | 
                    <a href="#" className="hover:underline"> Terms of Use</a> |
                    <a href="#" className="hover:underline"> Sales Policy</a> | 
                    <a href="#" className="hover:underline"> Legal</a> | 
                    <a href="#" className="hover:underline"> Site Map</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
