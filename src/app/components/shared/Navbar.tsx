"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Grid } from 'lucide-react';
import Button from './Button';
import Image from 'next/image';
import logo from "@/../public/logo1-removebg-preview.png"

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white z-50 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-0 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Image src={logo} alt='logo' width={50} height={50}/>
            <span className="text-xl font-bold">JobFlow</span>
          </div>
          
          {/* <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#solutions" className="text-gray-600 hover:text-gray-900">Solutions</a>
            <a href="#resources" className="text-gray-600 hover:text-gray-900">Resources</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
          </div> */}

          <div className="flex items-center space-x-4">
            {/* <Button variant="secondary">Sign in</Button> */}
            <a href="mailto:hello@jobflow.in" className="text-sm sm:text-lg sm:font-bold text-black bg-white border px-4 py-2 rounded-full hover:opacity-70 cursor-pointer">
          hello@jobflow.in
        </a>          </div>
        </div>
      </div>
    </motion.nav>
  );
};