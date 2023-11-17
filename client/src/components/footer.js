import React from "react";
import { IoLogoYoutube,IoLogoFacebook,IoLogoGithub,IoLogoInstagram } from 'react-icons/io';

const Footer = () => {
    return (
        <footer className="section bg-[#23262F] text-white ">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-gray-700 pb-7 lg:pb-14 mb-14">
                    <a href="#" alt='logo' className="text-white text-2xl font-semibold">Furniture Haven</a>
                    <div className="flex gap-x-4">
                    <a href="#" className="w-12 h-12 text-2xl bg-gray-700 hover:bg-[#286F6C]  flex justify-center items-center transition rounded-full"><IoLogoYoutube /></a>
                    <a href="#" className="w-12 h-12 text-2xl bg-gray-700 hover:bg-[#286F6C]  flex justify-center items-center transition rounded-full"><IoLogoInstagram /></a>
                    <a href="#" className="w-12 h-12 text-2xl bg-gray-700 hover:bg-[#286F6C]  flex justify-center items-center transition rounded-full"><IoLogoGithub /></a>
                    <a href="#" className="w-12 h-12 text-2xl bg-gray-700 hover:bg-[#286F6C]  flex justify-center items-center transition rounded-full"><IoLogoFacebook /></a>
                    </div>
                </div>
                <p className="text-center">&copy; Furniture Haven 2023 - All rights reserved.</p>
            </div>
        </footer>
    )
}
export default Footer