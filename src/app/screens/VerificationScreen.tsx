import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Shield, ArrowLeft, RefreshCw } from 'lucide-react';
import { OTPInput, SlotProps } from 'input-otp';
import { motion, useReducedMotion } from 'motion/react';

function Slot(props: SlotProps) {
  return (
    <div
      className={`relative w-[54px] h-[54px] text-[24px] flex items-center justify-center transition-all duration-300 rounded-[14px] border-1 ${props.isActive
        ? 'border-[#ff6b0b] bg-white shadow-[0_4px_12px_rgba(255,107,11,0.2)] scale-110'
        : 'border-[#ff6b0b] bg-[#fff6ec]'
        }`}
    >
      {props.char !== null && (
        <div className="text-[#004360] font-medium">{props.char}</div>
      )}
      {props.hasFakeCaret && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[2px] h-[32px] bg-[#ff6b0b] animate-pulse" />
        </div>
      )}
    </div>
  );
}

export default function VerificationScreen() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleVerify = () => {
    if (otp.length !== 4 || isTransitioning) return;

    setIsTransitioning(true);
    const transitionDurationMs = reduceMotion ? 0 : 260;

    window.setTimeout(() => {
      console.log('Verifying OTP:', otp);
      navigate('/quick-actions');
    }, transitionDurationMs);
  };

  const handleResend = () => {
    if (canResend) {
      setCountdown(60);
      setCanResend(false);
      setOtp('');
      console.log('Resending code...');
    }
  };

  return (
    <div className="bg-[#fcfcfc] relative w-full h-full overflow-hidden font-sans flex flex-col" data-name="Verification Screen">
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
            onClick={() => navigate('/')}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all text-white backdrop-blur-sm shadow-sm"
          >
            <ArrowLeft size={22} strokeWidth={3} />
          </button>
          <div className="w-10" /> {/* Placeholder for right-side symmetry if no refresh button */}
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

      {/* Main Glassmorphic Verification Card (Keeping Padding & Rounding Enhancements) */}
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
          {/* Security Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-[#ff6b0b] to-[#FF8F12] flex items-center justify-center shadow-[0_8px_24px_rgba(255,107,11,0.25)]">
              <Shield size={36} className="text-white" strokeWidth={2} />
            </div>
          </div>

          {/* Title Section */}
          <div className="mb-8 text-center">
            <h1 className="text-[#FF8F12] text-[28px] mb-3 tracking-tight font-medium">
              Let's Activate Account
            </h1>
            <p className="text-[#004360] text-[13px] leading-relaxed opacity-70">
              Your activation code has been sent via SMS.<br />
              Enter the code to complete your account activation
            </p>
          </div>

          {/* OTP Input */}
          <div className="mb-4 flex justify-center">
            <OTPInput
              maxLength={4}
              value={otp}
              onChange={setOtp}
              containerClassName="flex gap-4"
              render={({ slots }) => (
                <>
                  {slots.map((slot, idx) => (
                    <Slot key={idx} {...slot} />
                  ))}
                </>
              )}
            />
          </div>

          {/* Timer and Resend */}
          <div className="mb-8 text-center">
            {!canResend ? (
              <p className="text-[#004360] text-[13px] opacity-60">
                Resend code in <span className="text-[#ff6b0b] font-medium">{countdown}s</span>
              </p>
            ) : (
              <button
                onClick={handleResend}
                className="text-[#ff6b0b] text-[14px] font-medium flex items-center gap-2 mx-auto hover:opacity-80 transition-opacity active:scale-95"
              >
                <RefreshCw size={16} strokeWidth={2.5} />
                Resend Code
              </button>
            )}
          </div>

          {/* Verify Button */}
          <button
            onClick={handleVerify}
            disabled={otp.length !== 4 || isTransitioning}
            className={`w-full flex items-center justify-center gap-2 py-4 rounded-[16px] transition-all duration-300 text-[16px] font-medium ${otp.length === 4
              ? 'bg-[#FF8F12] text-white shadow-[0_6px_20px_rgba(255,107,11,0.3)] hover:shadow-[0_8px_24px_rgba(255,107,11,0.4)] hover:scale-[1.02] active:scale-[0.98]'
              : 'bg-[#ffebe0] text-[#ff6b0b] opacity-50 cursor-not-allowed'
              }`}
          >
            Verify Account
          </button>

          {/* Security Info */}
          <div className="mt-6 pt-4 border-t border-[#004360]/10">
            <div className="flex items-start gap-3 p-4 bg-[#fff6ec] rounded-[12px]">
              <Shield size={20} className="text-[#ff6b0b] flex-shrink-0 mt-0.5" strokeWidth={2} />
              <div>
                <p className="text-[#004360] text-[12px] font-medium mb-1">Secure Verification</p>
                <p className="text-[#004360] text-[11px] opacity-70 leading-relaxed">
                  Your code is encrypted and will expire in 10 minutes for your security.
                </p>
              </div>
            </div>
          </div>

          {/* Branding Footer */}
          <div className="pt-8 border-t border-gray-50 flex flex-col items-center">
            <p className="text-[#004360]/20 text-[9px] font-black uppercase tracking-[0.2em]">
              Copyright © 2026 Wegagen Bank S.C
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}