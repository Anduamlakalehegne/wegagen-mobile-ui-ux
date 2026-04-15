import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { CheckCircle2, Download, Share2, Home } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

export default function TransferSuccessScreen() {
   const navigate = useNavigate();
   const [showContent, setShowContent] = useState(false);
   const [showOverlay, setShowOverlay] = useState(true);
   const [isTransitioning, setIsTransitioning] = useState(false);
   const reduceMotion = useReducedMotion();

   useEffect(() => {
      // Trigger staggered animation on mount
      setTimeout(() => setShowContent(true), 100);
      // Hide celebration overlay after 2 seconds
      const timer = setTimeout(() => setShowOverlay(false), 2000);
      return () => clearTimeout(timer);
   }, []);

   const transactionData = {
      id: "45DSD544SD",
      time: "2026/03/28 20:00:01",
      type: "Transfer to Bank",
      sender: "Sender",
      receiver: "Receiver",
      account: "10000056254894",
      bankName: "Commercial Bank of Ethiopia",
      amount: "5,000.00"
   };

   const handleFinished = () => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      const transitionDurationMs = reduceMotion ? 0 : 260;
      window.setTimeout(() => navigate('/home'), transitionDurationMs);
   };

   return (
      <div className="bg-[#fcfcfc] relative w-full h-full overflow-hidden font-sans flex flex-col" data-name="Success Screen">
         {/* Celebratory Light Burst Overlay */}
         <div className={`absolute inset-0 z-[100] pointer-events-none transition-opacity duration-1000 ${showOverlay ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-x-0 top-0 h-[200px] bg-gradient-to-b from-[#ff6b0b]/20 to-transparent blur-3xl animate-pulse" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff6b0b]/5 rounded-full blur-[100px] animate-in zoom-in duration-1000" />
         </div>

         {/* 1:1 Elite Header Background Layer */}
         <div className="absolute top-0 left-0 right-0 overflow-hidden z-0">
            <img
               src="/Mask group.png"
               alt="Header Background"
               className="w-full h-full object-cover -translate-y-2 opacity-110"
            />
         </div>

         {/* Brand Header */}
         <div className="relative z-20 px-8 pt-16 h-[220px] flex flex-col items-center">
            <img
               src="/LogoSVG 1 (1).png"
               alt="Wegagen Bank"
               className="h-12 object-contain drop-shadow-lg mb-6"
            />
            {/* <h1 className="text-white text-[17px] font-black tracking-[0.2em] z-10 animate-in fade-in slide-in-from-top-4 duration-700 opacity-90">
               Acknowledge
            </h1> */}
         </div>

         {/* Main Receipt Content (ONLY PADDING & ROUNDING ENHANCEMENTS) */}
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
            className="absolute bg-white h-[calc(100%-170px)] left-4 right-4 rounded-[28px] top-[140px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] z-30 overflow-y-auto no-scrollbar pb-8 transition-all cubic-bezier(0.34,1.56,0.64,1) duration-700"
         >
            <div className={`p-5 pt-4 flex flex-col items-center h-full transition-all duration-700 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

               {/* Pop-in Success Glower with Glow Overlay */}
               <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-orange-100/50 flex items-center justify-center relative z-10 animate-in zoom-in duration-500 delay-300">
                     <div className="w-12 h-12 rounded-full bg-[#ff6b0b] flex items-center justify-center text-white shadow-[0_8px_20px_rgba(255,107,11,0.3)]">
                        <CheckCircle2 size={24} strokeWidth={3} className="spin-in-12 duration-700 delay-500" />
                     </div>
                  </div>
               </div>

               <p className="text-[#FF8F12] text-[20px] font-black tracking-tight">
                  Successful
               </p>

               {/* Amount Box */}
               <div className="w-full py-4 rounded-[20px] flex flex-col items-center mb-2">
                  <span className="text-[#004360]/70 text-[11px] font-black uppercase tracking-widest mb-1">Total Amount</span>
                  <p className="text-[#004360] text-[26px] font-black tracking-tighter leading-none">
                     {transactionData.amount} <span className="text-[14px] opacity-80">ETB</span>
                  </p>
               </div>

               {/* Detail Grid */}
               <div className="w-full bg-gray-50/70 rounded-[24px] p-5 py-4 space-y-2 mb-5 border border-gray-100 overflow-hidden">
                  {[
                     { label: "Sender", value: transactionData.sender },
                     { label: "Receiver", value: transactionData.receiver },
                     { label: "Transaction ID", value: transactionData.id },
                     { label: "Transaction Date", value: transactionData.time },
                     { label: "Transaction Type", value: transactionData.type },
                     { label: "Back Account", value: transactionData.account },
                     { label: "Bank Name", value: transactionData.bankName }
                  ].map((item, idx) => (
                     <div key={idx} className="flex justify-between items-start gap-4">
                        <span className="text-[#004360]/50 text-[12px] font-bold shrink-0">{item.label}</span>
                        <span className="text-[#004360]/90 text-[12px] font-bold text-right line-clamp-1">{item.value}</span>
                     </div>
                  ))}
               </div>

               {/* Shorter Action Controls */}
               <div className="w-full flex gap-3 mb-6">
                  <button className="flex-1 h-12 bg-white border-1 border-[#ff6b0b] text-[#ff6b0b] rounded-[15px] font-black text-[14px] flex items-center justify-center gap-2 active:scale-95 transition-all shadow-sm">
                     <Download size={18} strokeWidth={3} />
                     Download
                  </button>
                  <button className="flex-1 h-12 bg-white border-1 border-[#ff6b0b] text-[#ff6b0b] rounded-[15px] font-black text-[14px] flex items-center justify-center gap-2 active:scale-95 transition-all shadow-sm">
                     <Share2 size={18} strokeWidth={3} />
                     Share
                  </button>
               </div>

               <button
                  onClick={handleFinished}
                  disabled={isTransitioning}
                  className={`w-full h-14 rounded-[18px] font-black text-[16px] flex items-center justify-center shadow-[0_12px_30px_rgba(255,107,11,0.25)] active:scale-95 transition-all mb-6 ${
                    isTransitioning 
                    ? 'bg-[#ffebe0] text-[#ff6b0b] opacity-50 cursor-not-allowed' 
                    : 'bg-[#ff6b0b] text-white'
                  }`}
               >
                  Finished
               </button>

               {/* Footer Branding */}
               {/* <div className="mt-auto opacity-90 flex flex-col items-center">
                  <img
                     src="/LogoSVG 1.png"
                     alt="Wegagen Bank"
                     className="h-8 object-contain"
                  />
               </div> */}
            </div>
         </motion.div>
      </div>
   );
}
