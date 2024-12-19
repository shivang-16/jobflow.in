"use client"

import React from 'react';
import { Check } from 'lucide-react';

function BentoFeatures() {
  const features = [
    {
      title: 'Tracker',
      description: 'Track your workflow with Kanban-style boards for efficient task management.',
      icon: '📊'
    },
    {
      title: 'Kanban Boards',
      description: 'Visualize workflows, limit work-in-progress, and maximize efficiency for Agile and DevOps teams.',
      icon: '🔀'
    },
    {
      title: 'Browser Extension',
      description: 'Access your workspace directly from your browser for quick and easy task management.',
      icon: '🧩'
    },
    {
      title: 'Seamless Integration',
      description: 'Works perfectly with your existing tools and browser workflow for maximum productivity.',
      icon: '🔗'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Discover JobFlow's Powerful Features
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className="px-6 py-4 bg-gray-50">
                <div className="flex items-center text-green-500">
                  <Check className="h-5 w-5 mr-2" />
                  <span className="text-sm font-medium">Included in all plans</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8 md:flex items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Experience the JobFlow Difference
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our intuitive interface and powerful features make managing your workflow easier than ever. Try JobFlow today and see the difference for yourself.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                Get Started Free
              </button>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                <p className="text-gray-500">Product Demo Video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BentoFeatures;

