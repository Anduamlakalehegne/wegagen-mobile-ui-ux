import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowRight, Smartphone } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

export default function WelcomeScreen() {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const reduceMotion = useReducedMotion();

  const handleStart = () => {
    if (!mobileNumber.trim() || isTransitioning) return;

    setIsTransitioning(true);

    const transitionDurationMs = reduceMotion ? 0 : 260;
    window.setTimeout(() => navigate('/verify'), transitionDurationMs);
  };

  return (
    <div className="bg-white relative w-full h-full overflow-hidden" data-name="Welcome Screen">
      {/* --- NEW HEADER SECTION (KWPT) WITH SLIGHT TOP ADJUSTMENT --- */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden z-0">
        <img
          src="/Mask group.png"
          alt="Header Background"
          className="w-full h-full object-cover -translate-y-2 opacity-110"
        />
      </div>

      <div className="relative z-20 px-8 pt-12 h-[250px] flex flex-col items-center">
        <img
          src="/LogoSVG 1 (1).png"
          alt="Wegagen Bank"
          className="h-14 object-contain drop-shadow-lg"
        />
      </div>
      {/* ------------------------------- */}

      {/* --- REVERTED BELOW SECTION WITH PADDING & ROUNDING ENHANCEMENTS --- */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 26, scale: 0.985 }}
        animate={
          reduceMotion
            ? undefined
            : isTransitioning
              ? { opacity: 0, y: -18, scale: 0.99, filter: 'blur(2px)' }
              : { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }
        }
        transition={{
          duration: reduceMotion ? 0 : isTransitioning ? 0.26 : 0.42,
          ease: isTransitioning ? [0.4, 0, 1, 1] : [0.22, 1, 0.36, 1],
        }}
        className="absolute bg-white h-[calc(100%-170px)] left-4 right-4 rounded-[28px] top-[140px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] z-30"
      >
        <div className="px-8 py-10">
          {/* Welcome Section */}
          <div className="mb-12 text-center">
            <h1 className="text-[#FF8F12] text-[34px] mb-3 tracking-tight font-medium">
              Welcome!
            </h1>
            <p className="text-[#004360] text-[13px] leading-relaxed opacity-70">
              Your Phone Your Bank
            </p>
          </div>

          {/* Input Section */}
          <div className="mb-6">
            <label htmlFor="mobile-input" className="block text-[#004360] text-[13px] mb-3 opacity-70 font-semibold">
              Mobile Number
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ff6b0b]">
                <Smartphone size={20} strokeWidth={2} />
              </div>
              <input
                id="mobile-input"
                type="tel"
                placeholder="Enter Your Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && mobileNumber.trim()) {
                    handleStart();
                  }
                }}
                className={`w-full h-[56px] pl-14 pr-4 rounded-[16px] border-1 transition-all duration-300 outline-none text-[15px] text-[#004360] font-medium placeholder:text-[#004360]/30 ${isFocused
                  ? 'border-[#ff6b0b] bg-white shadow-[0_4px_12px_rgba(255,107,11,0.15)]'
                  : 'border-[#ff6b0b] bg-[#fff6ec]/50'
                  }`}
              />
            </div>
          </div>

          {/* Start Button */}
          <div className="flex justify-end">
            <button
              onClick={handleStart}
              disabled={!mobileNumber.trim() || isTransitioning}
              className={`mt-4 flex items-center gap-2 px-8 py-4 rounded-[16px] transition-all duration-300 ${mobileNumber.trim()
                ? 'bg-[#FF8F12] text-white shadow-[0_6px_20px_rgba(255,107,11,0.3)] hover:shadow-[0_8px_24px_rgba(255,107,11,0.4)] hover:scale-[1.02] active:scale-[0.98]'
                : 'bg-[#ffebe0] text-[#ff6b0b] opacity-50 cursor-not-allowed'
                }`}
            >
              <span className="text-[16px] font-semibold">Start</span>
              <ArrowRight size={20} strokeWidth={2.5} />
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-30 pt-8 border-t border-[#004360]/10">
            <div className="text-[#004360] opacity-90">
              <div className="text-center">
                <div className="text-[22px] font-bold text-[#ff6b0b]">866</div>
                <div className="text-[11px] mt-1 font-bold">TOLL-FREE CUSTOMER CONTACT CENTER</div>
              </div>
            </div>
          </div>

          {/* Branding Footer */}
          <div className="mt-6 pt-4 border-t border-gray-50 flex flex-col items-center">
            <p className="text-[#004360]/20 text-[9px] font-black uppercase tracking-[0.2em]">
              Copyright © 2026 Wegagen Bank S.C
            </p>
          </div>
        </div>
      </motion.div>
      {/* ------------------------------ */}
    </div>
  );
}
