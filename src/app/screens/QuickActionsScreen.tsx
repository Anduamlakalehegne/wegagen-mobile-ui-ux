import { useNavigate } from 'react-router';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import {
  ArrowLeftRight,
  MapPin,
  Calculator,
  Phone,
  Hash,
  MoreHorizontal,
  LogIn
} from 'lucide-react';

interface QuickActionProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

function QuickActionItem({ icon, label, onClick }: QuickActionProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-2 group transition-all duration-300 hover:scale-105 active:scale-95"
    >
      <div className="w-[56px] h-[56px] rounded-[14px] bg-[#fff6ec] flex items-center justify-center text-[#ff6b0b] transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:bg-white">
        {icon}
      </div>
      <span className="text-[11px] text-[#004360] text-center leading-tight max-w-[70px] font-medium">
        {label}
      </span>
    </button>
  );
}

export default function QuickActionsScreen() {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const quickActions = [
    {
      icon: <ArrowLeftRight size={24} strokeWidth={2} />,
      label: "Exchange Rate",
      onClick: () => console.log("Exchange Rate clicked"),
    },
    {
      icon: <MapPin size={24} strokeWidth={2} />,
      label: "Map",
      onClick: () => console.log("Map clicked"),
    },
    {
      icon: <Calculator size={24} strokeWidth={2} />,
      label: "Loan Calculator",
      onClick: () => console.log("Loan Calculator clicked"),
    },
    {
      icon: <Phone size={24} strokeWidth={2} />,
      label: "Contact Center",
      onClick: () => console.log("Contact Center clicked"),
    },
    {
      icon: <Hash size={24} strokeWidth={2} />,
      label: "USSD",
      onClick: () => console.log("USSD clicked"),
    },
    {
      icon: <MoreHorizontal size={24} strokeWidth={2} />,
      label: "More",
      onClick: () => setShowMoreInfo(!showMoreInfo),
    },
  ];

  const handleLogin = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    const transitionDurationMs = reduceMotion ? 0 : 260;
    window.setTimeout(() => navigate('/pin-entry'), transitionDurationMs);
  };

  return (
    <div className="bg-[#fcfcfc] relative w-full h-full overflow-hidden font-sans flex flex-col" data-name="Quick Actions Screen">
      {/* 1:1 Elite Header Background Layer */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden z-0">
        <img
          src="/Mask group.png"
          alt="Header Background"
          className="w-full h-full object-cover -translate-y-2 opacity-110"
        />
      </div>

      {/* Brand Header */}
      <div className="relative z-20 px-8 pt-12 h-[250px] flex flex-col items-center">
        <img
          src="/LogoSVG 1 (1).png"
          alt="Wegagen Bank"
          className="h-14 object-contain drop-shadow-lg"
        />
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
        className="absolute bg-white h-[calc(100%-170px)] left-4 right-4 rounded-[28px] top-[140px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] z-30"
      >
        <div className="px-8 py-10">
          {/* Welcome Section */}
          <div className="mb-10 text-center">
            <h1 className="text-[#FF8F12] text-[36px] tracking-tight font-medium">
              Welcome
            </h1>
          </div>

          {/* Quick Actions Grid */}
          <div className="mb-12">
            <div className="grid grid-cols-3 gap-x-8 gap-y-6 justify-items-center">
              {quickActions.map((action, index) => (
                <QuickActionItem
                  key={index}
                  icon={action.icon}
                  label={action.label}
                  onClick={action.onClick}
                />
              ))}
            </div>
          </div>

          {/* Toggleable More Info Section */}
          <AnimatePresence>
            {showMoreInfo && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden mb-6"
              >
                <div className="mt-2 pt-4 border-t border-[#004360]/10">
                  <div className="text-[#004360] opacity-90">
                    <div className="text-center">
                      <div className="text-[22px] font-bold text-[#ff6b0b]">866</div>
                      <div className="text-[11px] mt-1 font-bold tracking-tight">TOLL-FREE CUSTOMER CONTACT CENTER</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Primary Login Cluster */}
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={handleLogin}
              disabled={isTransitioning}
              className={`w-full max-w-[280px] flex items-center justify-center gap-2 py-4 rounded-[16px] transition-all duration-300 ${isTransitioning
                ? 'bg-[#ffebe0] text-[#ff6b0b] opacity-50 cursor-not-allowed'
                : 'bg-[#FF8F12] text-white shadow-[0_6px_20px_rgba(255,143,18,0.3)] hover:shadow-[0_8px_24px_rgba(255,143,18,0.4)] hover:scale-[1.02] active:scale-[0.98]'
                }`}
            >
              <span className="text-[16px] font-medium">Login</span>
              <LogIn size={20} strokeWidth={2.5} />
            </button>
            <p className="text-[#004360] text-[14px] opacity-80 font-medium">
              Sign In to Continue
            </p>
          </div>

          {/* Branding Footer */}
          <div className="mt-3 pt-2 border-t border-gray-50 flex flex-col items-center">
            <p className="text-[#004360]/20 text-[9px] font-black uppercase tracking-[0.2em]">
              Copyright © 2026 Wegagen Bank S.C
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}