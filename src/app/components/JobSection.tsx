
'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';

const JobSection = () => {
  return (
    <section className="relative mt-[50px]">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-block bg-white border-gray-200 border shadow-bottom-only rounded-full px-6 py-3 mb-6">
          <span className="text-gray-600 text-base font-medium">Solutions</span>
        </div>
        <h1 className="text-5xl font-bold mb-4">
          Explore Available Jobs
        </h1>
        <p className="text-xl text-gray-600">
          Hello! Find Latest Jobs from all job platforms
        </p>
      </div>

      {/* Feature Points */}
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-12 mb-20">
        <FeaturePoint
          icon="🔄"
          title="Comprehensive Listings"
          description="We scrape jobs from all major platforms to provide you with a wide range of opportunities."
        />
        <FeaturePoint
          icon="🎯"
          title="Tailored Recommendations"
          description="Our system suggests jobs based on your skills and interests, ensuring you find the perfect match."
        />
        <FeaturePoint
          icon="🔔"
          title="Stay Updated"
          description="Receive notifications about the latest job openings in your field, so you never miss an opportunity."
        />
      </div>

      {/* Image Container */}
      <div className="relative max-w-6xl mx-auto">
        <div className="bg-gradient-to-b from-sky-300 to-white rounded-3xl shadow-xl p-8 aspect-[16/9]">
          {/* Placeholder for your image */}
          <div className="w-full h-full bg-gray-100 rounded-2xl"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute -left-6 -top-6 bg-white rounded-lg shadow-lg p-4 rotate-12">
          <span className="text-3xl font-bold">20</span>
        </div>
        <div className="absolute -right-4 top-1/4 bg-white rounded-xl shadow-lg p-3">
          <div className="bg-emerald-400 text-white p-2 rounded-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturePoint = ({ icon, title, description }: any) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-amber-500 mb-4">
        {icon}
      </div>
      <p className="text-sm text-gray-600 max-w-xs">
        {description}
      </p>
    </div>
  );
};

const TeamIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const TaskIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
  </svg>
);

const AccountabilityIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

export default JobSection;