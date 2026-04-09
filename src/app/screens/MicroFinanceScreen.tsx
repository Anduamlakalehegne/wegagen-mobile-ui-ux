import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion, useReducedMotion } from 'motion/react';
import { ChevronLeft, RefreshCw, LayoutGrid, List as ListIcon, ChevronRight, Building2 } from 'lucide-react';

/* ─── Micro Finance Options Data ─── */
interface MFOption {
  id: string;
  title: string;
  logo: string;
  iconBg: string;
}

const mfOptions: MFOption[] = [
  {
    id: 'awach',
    title: 'To Awach',
    iconBg: 'bg-[#FFF6EC]',
    logo: '/logo_en_1 1.png',
  },
  {
    id: 'saccos',
    title: 'To SACCOs',
    iconBg: 'bg-[#FFF6EC]',
    logo: '/hand-coins (1) 1.png',
  },
];

/* ─── Shared Item Component ─── */
function MFItem({ item, isGrid, onClick }: { item: MFOption; isGrid: boolean; onClick: () => void }) {
  if (isGrid) {
    return (
      <button
        onClick={onClick}
        className="group relative flex flex-col items-center justify-center p-2 h-[115px] w-full bg-white border border-[#fff6ec] rounded-[22px] shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(255,107,11,0.08)] transition-all duration-300 active:scale-95 text-center"
      >
        <div className={`w-[46px] h-[46px] rounded-full flex items-center justify-center ${item.iconBg} mb-2 shadow-sm group-hover:scale-110 transition-transform duration-500 overflow-hidden`}>
          <div className="flex items-center justify-center w-full h-full transform group-hover:rotate-12 transition-transform duration-500">
            <img src={item.logo} alt={item.title} className={`${item.id === 'awach' ? 'w-[75px] h-[75px] scale-[2.4]' : 'w-[32px] h-[32px]'} object-contain`} />
          </div>
        </div>
        <p className="text-[#004360] text-[11px] font-semibold leading-snug line-clamp-2 px-1.5 opacity-95">
          {item.title}
        </p>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-4 w-full h-[54px] bg-white border border-gray-50 rounded-[16px] px-4 mb-0 transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(255,107,11,0.08)] hover:bg-[#fffdfb] active:scale-[0.98] active:bg-orange-50/10"
    >
      <div className={`w-[38px] h-[38px] rounded-[10px] flex items-center justify-center ${item.iconBg} shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-sm border border-black/[0.03] overflow-hidden`}>
        <div className="flex items-center justify-center w-full h-full">
          <img src={item.logo} alt={item.title} className={`${item.id === 'awach' ? 'w-[64px] h-[64px] scale-[2.4]' : 'w-[28px] h-[28px]'} object-contain`} />
        </div>
      </div>
      <div className="flex-1 text-left">
        <p className="text-[#053d57] text-[14px] font-semibold tracking-tight">{item.title}</p>
      </div>
    </button>
  );
}

export default function MicroFinanceScreen() {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const [isGridView, setIsGridView] = useState(false);

  const handleSelect = (item: MFOption) => {
    navigate(`/wallet-form?title=${encodeURIComponent(item.title)}&logo=${encodeURIComponent(item.logo)}`);
  };

  return (
    <div className="bg-[#fcfcfc] relative w-full h-full overflow-hidden font-sans flex flex-col" data-name="Micro Finance Screen">
      {/* 1:1 Elite Header Background */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden z-0">
        <img src="/Mask group.png" alt="" className="w-full h-full object-cover -translate-y-2 opacity-110" />
      </div>

      {/* Brand Header with Navigation */}
      <div className="relative z-20 px-8 h-[220px] flex flex-col items-center shrink-0">
        <div className="absolute top-5 left-6 z-30">
          <button
            onClick={() => navigate('/home')}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all text-white backdrop-blur-sm shadow-sm active:scale-90"
          >
            <ChevronLeft size={22} strokeWidth={3} />
          </button>
        </div>

        {/* Centered Logo & Title Group */}
        <div className="pt-8 flex flex-col items-center justify-center gap-2">
          <div className="w-14 h-14 rounded-xl flex justify-center items-center p-2 bg-white/20 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/30 transform">
            <Building2 size={32} strokeWidth={2.5} className="text-white drop-shadow-md" />
          </div>
          <h2 className="text-white text-[16px] font-bold tracking-tight">Micro Finance</h2>
        </div>
      </div>

      {/* Main Glassmorphic Card */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.985 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: reduceMotion ? 0 : 0.46,
          ease: [0.22, 1, 0.36, 1],
          delay: reduceMotion ? 0 : 0.04,
        }}
        className="absolute bg-white h-[calc(100%-170px)] left-4 right-4 rounded-[28px] top-[140px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] z-30 flex flex-col overflow-hidden"
      >
        <div className="flex-none px-4 pt-4 pb-2">
          <div className="flex justify-end">
            <div className="bg-white/80 backdrop-blur-sm rounded-full p-1 flex items-center shadow-sm border border-orange-100">
              <button
                onClick={() => setIsGridView(!isGridView)}
                className="p-1.5 rounded-full transition-all text-[#ff6b0b] hover:bg-orange-50 active:scale-95"
                title={isGridView ? "Switch to List View" : "Switch to Grid View"}
              >
                {isGridView ? <ListIcon size={16} strokeWidth={2.5} /> : <LayoutGrid size={16} strokeWidth={2.5} />}
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar px-4 pb-12 pt-1">
          <div className={`${isGridView ? 'grid grid-cols-2 gap-3 items-stretch' : 'flex flex-col gap-3'}`}>
            {mfOptions.map((item) => (
              <MFItem key={item.id} item={item} isGrid={isGridView} onClick={() => handleSelect(item)} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
