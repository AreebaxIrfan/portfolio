import Link from 'next/link';
import React from 'react';
import { SocialLinks } from '@/components/SocialLinks';
import { RESUME_DATA } from '@/data/resume-data';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About / Branding Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center">
                <span className="font-bold text-lg text-white">
                  {RESUME_DATA.name?.charAt(0) || 'A'}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800">{RESUME_DATA.name}</h3>
            </div>
            <p className="text-base text-gray-600">
              Full Stack Developer passionate about building innovative web solutions.
            </p>
          </div>

          {/* Contact and Social Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect With Me</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="h-5 w-5 text-teal-500" />
                <a
                  href={`mailto:${RESUME_DATA.contact?.email || 'example@email.com'}`}
                  className="text-base text-gray-600 hover:text-teal-500 transition-colors duration-200"
                >
                  {RESUME_DATA.contact?.email || 'example@email.com'}
                </a>
              </div>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <SocialLinks
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-base text-gray-600">
            © {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;