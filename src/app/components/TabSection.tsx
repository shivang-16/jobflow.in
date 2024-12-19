"use client"
import React, { useState } from 'react';
import { Check } from 'lucide-react';

function TabSection() {
  const [activeTab, setActiveTab] = useState('tracker');

  const tabs = {
    tracker: {
      features: [
        {
          title: 'Tracker',
          description: 'Allows you to track used Kanban board types of design. You can toggle between both tabs to manage your workflow efficiently.'
        },
        {
          title: 'Kanban Boards',
          description: 'Agile and DevOps teams can use flexible Kanban boards to visualize workflows, limit work-in-progress, and maximize efficiency.'
        }
      ]
    },
    extension: {
      features: [
        {
          title: 'Browser Extension',
          description: 'Access your workspace directly from your browser. Quick and easy access to your tasks and projects.'
        },
        {
          title: 'Seamless Integration',
          description: 'Works perfectly with your existing tools and browser workflow for maximum productivity.'
        }
      ]
    }
  };

  return (
    <div className="min-h-screen mt-[50px] bg-white">
      {/* Main Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">

      <div className="text-center mb-6">
        <div className="inline-block bg-white border-gray-200 border shadow-bottom-only rounded-full px-6 py-3 mb-6">
          <span className="text-gray-600 text-base font-medium">Features</span>
        </div>
        <h1 className="text-5xl font-bold mb-4">
        Discover the Features
        </h1>
        <p className="text-xl text-gray-600">
        That Make JobFlow So Easy to Use
        </p>
        </div>
   
        {/* Tabs */}
        <div className="flex justify-center space-x-8 mb-12">
          {Object.keys(tabs).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 text-lg font-medium transition-all ${
                activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Features List */}
          <div className="space-y-8">
            {tabs[activeTab as keyof typeof tabs].features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>


          {/* Image Placeholder */}
          <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
            <p className="text-gray-500">Image Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabSection;