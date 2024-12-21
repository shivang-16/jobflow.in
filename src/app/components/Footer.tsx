import React from 'react';
import Image from 'next/image';
import logo from "@/../public/logo1-removebg-preview.png"
import Link from 'next/link';
const leftLinks = [
  { label: 'Github', href: 'https://github.com/shivang-16/jobflow.web' },
  { label: 'Twitter', href: 'https://x.com/jobflow_in' },
  { label: "Linkdin", href: '#' },
];


export function Footer() {
  return (
    <footer className="relative mx-[50px] rounded-[40px] border border-gray-200 bg-gray-50 inset-0 overflow-hidden">
      <div
        className="absolute z-0 inset-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(circle, #a8a9a9 0.5px, transparent 1.5px),
            radial-gradient(circle, #a8a9a9 0.5px, transparent 1.5px)
          `,
          backgroundSize: '8px 8px',
          backgroundPosition: '0 0, 4px 4px',
        }}
      />
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="">
          {/* Logo and Copyright */}
          <div className="flex items-start gap-3">
            <div className="flex items-center space-x-2">
              <Image src={logo} alt='logo'  width={90} height={90}/>
            </div>
            <div>
            <span className="text-4xl font-bold">JobFlow</span>
            <h2 className="text-2xl text-black font-bold leading-tight">
              Find and Track <span className='text-gray-600'>Jobs with ease</span>
              
            </h2>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link className='text-gray-600' href="https://github.com/shivang-16/jobflow.web">Github</Link>
              <Link className='text-gray-600' href="https://x.com/jobflow_in">Twitter</Link>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
  
  function FooterLink({ href, children }: any) {
    return (
      <a
        href={href}
        className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
      >
        {children}
      </a>
    );
  }
  function FooterLinkGroup({ links }: any) {
    return (
      <div className="flex flex-col space-y-2">
        {links.map((link:any) => (
          <FooterLink key={link.label} href={link.href}>
            {link.label}
          </FooterLink>
        ))}
      </div>
    );
  }
}