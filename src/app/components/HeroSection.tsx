"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BackgroundPattern from './shared/Background';
import NoteCard from './shared/notecard';
import Button from './shared/Button';
import apiClient from '@/apiClient/apiClient';
import toast from 'react-hot-toast';

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleJoinWaitlist = async () => {
    if (!email) {
      toast.error("Email is required");
      return;
    }
    setIsLoading(true);
    try {
      const response = await apiClient.post(`/join-waitlist?email=${email}`);

      if (response.status == 201) {
        toast.success("Successfully joined Waitlist")
        setEmail('')
      } 
    } catch (error: any) {
      toast.error(error.response.data.message || "Something went wrong! Try Again")
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="bg-white pt-[80px] px-[50px] pb-[30px] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pb-40 pb-[28%] relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-3xl" />
          <BackgroundPattern />
        </div>

        {/* Main Content */}
        <div className="text-center  relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:text-5xl text-4xl font-bold tracking-tight text-gray-900"
          >
            Find & Track Your Dream Job 
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="md:text-5xl text-4xl font-bold text-gray-400 mt-2"
          >
           Applications with Ease
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Streamline your job search process with our powerful tracking tool.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <div className="flex flex-col gap-5 sm:flex-row justify-center items-center max-w-md mx-auto mb-10">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="flex-grow p-2 sm:p-3 border border-gray-300 rounded-md sm:rounded-l-md focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button
            className={`px-4 py-2 sm:px-6 sm:py-3 ${isLoading ? 'bg-gray-600' : ''} text-white rounded-md sm:rounded-r-md hover:opacity-90 mt-1 sm:mt-0`}
            onClick={handleJoinWaitlist}
            disabled={isLoading}
          >
            {isLoading ? 'Joining...' : 'Join Waitlist'}
          </Button>
        </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;