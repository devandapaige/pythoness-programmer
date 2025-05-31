'use client';

import { useState } from 'react';
import Link from 'next/link';

interface CouponState {
  code: string;
}

export default function MutualsPage() {
  const [couponCode, setCouponCode] = useState<CouponState['code']>('');

  const handleCouponSubmit = () => {
    // Add your coupon validation logic here
    alert('Coupon code applied!');
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-brand-green-dark via-brand-purple-dark to-brand-green-dark text-white overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('/pattern.svg')] bg-repeat animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute inset-0 opacity-[0.05] bg-[url('/pattern.svg')] bg-repeat [transform:rotate(60deg)] animate-[spin_80s_linear_reverse_infinite]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/50 to-transparent"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-display mb-4 text-white">
              Welcome to My Space
            </h1>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-cream to-transparent"></div>
              <p className="text-xl text-brand-cream">
                Thank you for being a mutual! Here&apos;s a special treat just for you.
              </p>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-cream to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {/* Calendar Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl animate-fade-in-up">
            <h2 className="text-2xl font-display mb-4 text-brand-cream">
              Schedule a Chat
            </h2>
            <p className="text-white/90 mb-6">
              Book a time to connect with me directly through my calendar.
            </p>
            <Link
              href="https://cal.com/pythoness/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-green-accent hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-brand-green-accent/20"
            >
              Book a 15min Vibe Check
            </Link>
          </div>

          {/* Coupon Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl animate-fade-in-up">
            <h2 className="text-2xl font-display mb-4 text-brand-cream">
              Special Discount
            </h2>
            <p className="text-white/90 mb-6">
              Use this exclusive coupon code for your next purchase:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <input
                type="text"
                value={couponCode}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCouponCode(e.target.value)}
                placeholder="Enter coupon code"
                className="w-full sm:w-auto px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:ring-2 focus:ring-brand-green-accent focus:border-transparent"
              />
              <button
                onClick={handleCouponSubmit}
                className="w-full sm:w-auto px-6 py-2 bg-brand-green-accent text-white rounded-md hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-brand-green-accent/20"
              >
                Apply
              </button>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl animate-fade-in-up">
            <h2 className="text-2xl font-display mb-4 text-brand-cream">
              Stay Connected
            </h2>
            <p className="text-white/90 mb-6">
              Get strategic insights on navigating tech spaces and building sustainable systems.
            </p>
            <Link
              href="https://pythoness.beehiiv.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-green-accent hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-brand-green-accent/20"
            >
              Join Newsletter
            </Link>
          </div>

          {/* Podcast & Branding Section - Commented Out */}
          {/* 
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl animate-fade-in-up">
            <h2 className="text-2xl font-display mb-4 text-brand-cream">
              Media Kit & Branding
            </h2>
            <p className="text-white/90 mb-6">
              Access my podcast one sheet and branding guidelines for collaborations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Podcast One Sheet */}
              {/* 
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-display mb-3 text-brand-cream">
                  Podcast One Sheet
                </h3>
                <p className="text-white/80 mb-4">
                  Download my podcast one sheet for collaboration opportunities.
                </p>
                <Link
                  href="/media-kit/podcast-one-sheet.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-brand-green-accent text-white rounded-md hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-brand-green-accent/20"
                >
                  Download One Sheet
                </Link>
              </div>

              {/* Branding Guidelines */}
              {/* 
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-display mb-3 text-brand-cream">
                  Branding Guidelines
                </h3>
                <p className="text-white/80 mb-4">
                  Access my brand assets and guidelines for consistent representation.
                </p>
                <Link
                  href="/media-kit/branding-guidelines.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-brand-green-accent text-white rounded-md hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-brand-green-accent/20"
                >
                  View Guidelines
                </Link>
              </div>
            </div>
          </div>
          */}
        </div>
      </div>
    </main>
  );
}
