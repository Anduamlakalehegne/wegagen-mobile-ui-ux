import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Delete, ChevronLeft } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import svgPaths from "../../imports/svg-agh5fqnfsc";

function DecorativeElements() {
  return (
    <>
      <div className="absolute h-[82px] left-[-8px] top-[-47px] w-[192px] opacity-80">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 192 82">
          <g id="Group 198">
            <path d={svgPaths.p3686d400} fill="var(--fill-0, #FF8F12)" />
            <path d={svgPaths.p1bf6bdf0} fill="var(--fill-0, #FF8F12)" />
            <path d={svgPaths.p3d7d6600} fill="var(--fill-0, #FF8F12)" />
          </g>
        </svg>
      </div>

      <div className="absolute inset-[-12.63%_85.56%_112.5%_13.61%] opacity-60">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p38b97480} fill="var(--fill-0, #FF8F12)" />
        </svg>
      </div>

      <div className="absolute inset-[-14.63%_68.33%_113.88%_21.11%] opacity-60">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 6">
          <path d={svgPaths.p195fd840} fill="var(--fill-0, #FF8F12)" />
        </svg>
      </div>

      <div className="absolute inset-[-12.63%_85.56%_101.13%_-3.06%] opacity-60">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63 92">
          <path d={svgPaths.pe64d880} fill="var(--fill-0, #FF8F12)" />
        </svg>
      </div>

      <div className="absolute inset-[-14.63%_47.22%_107.75%_36.39%] opacity-60">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59 55">
          <path d={svgPaths.p29ab6700} fill="var(--fill-0, #FF8F12)" />
        </svg>
      </div>

      <div className="absolute inset-[-14.63%_68.33%_107.75%_13.61%] opacity-60">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 55">
          <path d={svgPaths.p338a3800} fill="var(--fill-0, #FF8F12)" />
        </svg>
      </div>

      <div className="absolute inset-[-8%_75.28%_101.25%_12.22%] opacity-60">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 54">
          <path d={svgPaths.p6f70f80} fill="var(--fill-0, #FF8F12)" />
        </svg>
      </div>

      <div className="absolute inset-[-8.13%_48.06%_105%_39.17%] opacity-60">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 25">
          <path d={svgPaths.p408edd2} fill="var(--fill-0, #FF8F12)" />
        </svg>
      </div>
    </>
  );
}

function LogoSection() {
  return (
    <div className="absolute h-[60px] left-[40px] top-[67px] w-[251px]" data-name="LogoSVG 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 251 60">
        <g clipPath="url(#clip0_1_73)" id="LogoSVG 1">
          <path d={svgPaths.p3669b900} fill="var(--fill-0, white)" />
          <path d={svgPaths.p3c8eb280} fill="var(--fill-0, white)" />
          <path d={svgPaths.p73884e0} fill="var(--fill-0, white)" />
          <path d={svgPaths.p11d51200} fill="var(--fill-0, white)" />
          <path d={svgPaths.p1dc6e940} fill="var(--fill-0, white)" />
          <path d={svgPaths.p3a9920f2} fill="var(--fill-0, white)" />
          <path d={svgPaths.p4f8f900} fill="var(--fill-0, white)" />
          <path d={svgPaths.p20873900} fill="var(--fill-0, white)" />
          <path d={svgPaths.p8c2f280} fill="var(--fill-0, white)" />
          <path d={svgPaths.p3a7c3900} fill="var(--fill-0, white)" />
          <path d={svgPaths.p858c00} fill="var(--fill-0, white)" />
          <path d={svgPaths.p1e18da80} fill="var(--fill-0, white)" />
          <path d={svgPaths.p1abd2500} fill="var(--fill-0, white)" />
          <path d={svgPaths.p2410e500} fill="var(--fill-0, white)" />
          <path d={svgPaths.p194ebe00} fill="var(--fill-0, white)" />
          <path d={svgPaths.p6767480} fill="var(--fill-0, white)" />
          <path d={svgPaths.p5ecbf00} fill="var(--fill-0, white)" />
          <path d={svgPaths.p275144f0} fill="var(--fill-0, white)" />
          <path d={svgPaths.p3429f260} fill="var(--fill-0, white)" />
          <path d={svgPaths.p4c0ff00} fill="var(--fill-0, white)" />
          <path d={svgPaths.p1c214e00} fill="var(--fill-0, white)" />
          <path d={svgPaths.pd04a800} fill="var(--fill-0, white)" />
          <path d={svgPaths.p11641900} fill="var(--fill-0, white)" />
          <path d={svgPaths.p2d5db4f0} fill="var(--fill-0, white)" />
          <path d={svgPaths.p41a7300} fill="var(--fill-0, white)" />
          <path d={svgPaths.p382f7900} fill="var(--fill-0, white)" />
          <path d={svgPaths.p37246600} fill="var(--fill-0, white)" />
          <path d={svgPaths.p27abb000} fill="var(--fill-0, white)" />
          <path d={svgPaths.pfa811f0} fill="var(--fill-0, white)" />
          <path d={svgPaths.p3c432300} fill="var(--fill-0, white)" />
          <path d={svgPaths.p7d00000} fill="var(--fill-0, white)" />
        </g>
        <defs>
          <clipPath id="clip0_1_73">
            <rect fill="white" height="60" width="251" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

interface PinDotProps {
  filled: boolean;
}

function PinDot({ filled }: PinDotProps) {
  return (
    <div
      className={`w-[16px] h-[16px] rounded-full border-2 transition-all duration-300 ${filled
        ? 'bg-[#ff6b0b] border-[#ff6b0b] scale-110'
        : 'bg-transparent border-[#ff6b0b]'
        }`}
    />
  );
}

interface NumericButtonProps {
  value: string;
  onClick: () => void;
}

function NumericButton({ value, onClick }: NumericButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-[64px] h-[64px] rounded-full bg-[#fff6ec] flex items-center justify-center text-[24px] text-[#004360] font-medium transition-all duration-200 hover:bg-white hover:shadow-md active:scale-95 active:bg-[#ff6b0b] active:text-white"
    >
      {value}
    </button>
  );
}

function DeleteButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-[64px] h-[64px] rounded-full bg-white flex items-center justify-center text-[#ff6b0b] transition-all duration-200 hover:bg-[#fff6ec] hover:shadow-md active:scale-95"
    >
      <Delete size={24} strokeWidth={2} />
    </button>
  );
}

export default function PinEntryScreen() {
  const navigate = useNavigate();
  const [pin, setPin] = useState('');
  const maxPinLength = 4;
  const [isTransitioning, setIsTransitioning] = useState(false);
  const reduceMotion = useReducedMotion();

  const handleNumberClick = (num: string) => {
    if (pin.length < maxPinLength && !isTransitioning) {
      const newPin = pin + num;
      setPin(newPin);
      if (newPin.length === maxPinLength) {
        handleLogin(newPin);
      }
    }
  };

  const handleDelete = () => {
    if (pin.length > 0) {
      setPin(pin.slice(0, -1));
    }
  };

  const handleLogin = (enteredPin?: string) => {
    const finalPin = enteredPin || pin;
    if (finalPin.length !== maxPinLength || isTransitioning) return;

    setIsTransitioning(true);
    const transitionDurationMs = reduceMotion ? 0 : 260;

    window.setTimeout(() => {
      console.log('PIN entered:', finalPin);
      navigate('/home');
    }, transitionDurationMs);
  };

  return (
    <div className="bg-[#fcfcfc] relative w-full h-full overflow-hidden font-sans flex flex-col" data-name="PIN Entry Screen">
      {/* 1:1 Elite Header Background Layer */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden z-0">
        <img
          src="/Mask group.png"
          alt="Header Background"
          className="w-full h-full object-cover -translate-y-2 opacity-110"
        />
      </div>

      {/* Brand Header with Top-aligned Navigation */}
      <div className="relative z-20 px-8 h-[220px] flex flex-col items-center">
        {/* Absolute Top Navigation Buttons (Exactly like Home Page) */}
        <div className="absolute top-5 left-6 right-6 flex items-center justify-between z-30">
          <button
            onClick={() => navigate('/quick-actions')}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all text-white backdrop-blur-sm shadow-sm active:scale-90"
          >
            <ChevronLeft size={22} strokeWidth={3} />
          </button>
          <div className="w-10" />
        </div>

        {/* Centered Logo (Kept at Original Position) */}
        <div className="relative z-20 px-8 pt-12 h-[250px] flex flex-col items-center">
          <img
            src="/LogoSVG 1 (1).png"
            alt="Wegagen Bank"
            className="h-14 object-contain drop-shadow-lg"
          />
        </div>
      </div>

      {/* Main Glassmorphic Card (Keeping Padding & Rounding Enhancements) */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.985 }}
        animate={
          reduceMotion
            ? undefined
            : isTransitioning
              ? { opacity: 0, y: -18, scale: 0.99, filter: 'blur(2px)' }
              : { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }
        }
        transition={{
          duration: reduceMotion ? 0 : isTransitioning ? 0.26 : 0.46,
          ease: isTransitioning ? [0.4, 0, 1, 1] : [0.22, 1, 0.36, 1],
          delay: reduceMotion || isTransitioning ? 0 : 0.04,
        }}
        className="absolute bg-white h-[calc(100%-170px)] left-4 right-4 rounded-[28px] top-[140px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] z-30 overflow-y-auto no-scrollbar"
      >
        <div className="px-8 py-10 flex flex-col items-center h-full">
          {/* Welcome Title */}
          <div className="mb-8 text-center px-4 font-sans">
            <h1 className="text-[#004360] text-[28px] font-semibold tracking-tight leading-tight mb-2">
              Enter Pin
            </h1>
            <p className="text-[#004360]/60 text-[13px] font-medium leading-relaxed opacity-80">
              Enter your secure login pin to continue
            </p>
          </div>

          {/* PIN Dots (Refined) */}
          <div className="flex gap-5 mb-10">
            {[...Array(maxPinLength)].map((_, index) => (
              <div
                key={index}
                className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${index < pin.length
                  ? 'bg-[#FF8F12] border-[#FF8F12] scale-125 shadow-[0_0_10px_rgba(255,143,18,0.4)]'
                  : 'bg-transparent border-gray-200'
                  }`}
              />
            ))}
          </div>

          {/* Numeric Keypad (Elite Styling) */}
          <div className="grid grid-cols-3 gap-x-8 gap-y-4 mb-10 w-full max-w-[280px]">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num) => (
              <button
                key={num}
                onClick={() => handleNumberClick(num)}
                className="w-16 h-16 rounded-full bg-orange-50/50 flex items-center justify-center text-[22px] text-[#004360] font-semibold shadow-sm border border-orange-100/50 transition-all duration-200 active:scale-95 active:bg-[#FF8F12] active:text-white active:shadow-lg"
              >
                {num}
              </button>
            ))}
            <div className="flex items-center justify-center">
              <button
                onClick={handleDelete}
                className="w-16 h-16 rounded-full flex items-center justify-center text-[#FF8F12] transition-all duration-300 active:scale-90 opacity-80"
              >
                <Delete size={24} strokeWidth={2.5} />
              </button>
            </div>
            <button
              onClick={() => handleNumberClick('0')}
              className="w-16 h-16 rounded-full bg-orange-50/50 flex items-center justify-center text-[22px] text-[#004360] font-semibold shadow-sm border border-orange-100/50 transition-all duration-200 active:scale-95 active:bg-[#FF8F12] active:text-white active:shadow-lg"
            >
              0
            </button>
            <div className="w-16 h-16"></div>
          </div>

          {/* Security Subtext */}
          <div className="mt-auto pt-6 border-t border-gray-50 flex flex-col items-center">
            <p className="text-[#004360]/20 text-[9px] font-black uppercase tracking-[0.2em]">
              Copyright © 2026 Wegagen Bank S.C
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}