import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion, useReducedMotion } from 'motion/react';
import { ChevronLeft, RefreshCw, LayoutGrid, List as ListIcon, ChevronRight } from 'lucide-react';

/* ─── Wallet Options Data ─── */
interface WalletOption {
  id: string;
  title: string;
  logo: React.ReactNode;
  iconBg: string;
}

const walletOptions: WalletOption[] = [
  {
    id: 'ebirr',
    title: 'To EBirr Wallet',
    iconBg: 'bg-[#FFF6EC]',
    logo: <img src="/Ebirr_Logo 1.png" alt="EBirr" className="w-[28px] h-[28px] object-contain" />,
  },
  {
    id: 'telebirr',
    title: 'To Telebirr Wallet',
    iconBg: 'bg-[#FFF6EC]',
    logo: <img src="/telebirr 1.png" alt="Telebirr" className="w-[28px] h-[28px] object-contain" />,
  },
  {
    id: 'telebirr-agent',
    title: 'To Telebirr Agent',
    iconBg: 'bg-[#FFF6EC]',
    logo: <img src="/telebirr 1.png" alt="Telebirr Agent" className="w-[28px] h-[28px] object-contain" />,
  },
  {
    id: 'mpesa',
    title: 'To MPESA',
    iconBg: 'bg-[#E8F5E9]',
    logo: <img src="/M-PESA_LOGO-01.svg 1.png" alt="MPESA" className="w-[52px] h-[20px] object-contain" />,
  },
];

/* ─── Shared Item Component ─── */
function WalletItem({ item, isGrid, onClick }: { item: WalletOption; isGrid: boolean; onClick: () => void }) {
  if (isGrid) {
    return (
      <button
        onClick={onClick}
        className="group relative flex flex-col items-center justify-center p-2 h-[115px] w-full bg-white border border-[#fff6ec] rounded-[22px] shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(255,107,11,0.08)] transition-all duration-300 active:scale-95 text-center"
      >
        <div className={`w-[46px] h-[46px] rounded-full flex items-center justify-center ${item.iconBg} mb-2 shadow-sm group-hover:scale-110 transition-transform duration-500`}>
          <div className="transform group-hover:rotate-12 transition-transform duration-500">
            {item.logo}
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
      <div className={`w-[38px] h-[38px] rounded-[10px] flex items-center justify-center ${item.iconBg} shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-sm border border-black/[0.03]`}>
        {item.logo}
      </div>
      <div className="flex-1 text-left">
        <p className="text-[#053d57] text-[14px] font-semibold tracking-tight">{item.title}</p>
      </div>
      {/* <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-50/80 group-hover:bg-[#ff6b0b] group-hover:text-white transition-all duration-300">
        <ChevronRight size={12} strokeWidth={2} />
      </div> */}
    </button>
  );
}

export default function ToWalletScreen() {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const [isGridView, setIsGridView] = useState(false);

  return (
    <div className="bg-[#fcfcfc] relative w-full h-full overflow-hidden font-sans flex flex-col" data-name="To Wallet Screen">

      {/* Header Background */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden z-0">
        <img src="/Mask group.png" alt="" className="w-full h-full object-cover -translate-y-2" />
      </div>

      {/* Brand Header */}
      <div className="relative z-20 px-8 h-[220px] flex flex-col items-center">
        <div className="absolute top-5 left-6 right-6 flex items-center justify-between z-30">
          <button
            onClick={() => navigate('/home')}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all text-white backdrop-blur-sm shadow-sm active:scale-90"
          >
            <ChevronLeft size={22} strokeWidth={3} />
          </button>
          {/* <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all text-white backdrop-blur-sm shadow-sm active:scale-90">
            <RefreshCw size={18} strokeWidth={3} />
          </button> */}
        </div>
        <div className="pt-16 flex flex-col items-center">
          {/* <img src="/LogoSVG 1 (1).png" alt="Wegagen Bank" className="h-10 object-contain drop-shadow-lg" /> */}
          <h2 className="text-white text-[18px] font-bold tracking-tight mt-2">To Wallet</h2>
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

        <div className="flex-1 overflow-y-auto no-scrollbar px-4 pb-12">
          <div className={`${isGridView ? 'grid grid-cols-2 gap-1.5 items-stretch' : 'flex flex-col gap-1.5'}`}>
            {walletOptions.map((item) => (
              <WalletItem
                key={item.id}
                item={item}
                isGrid={isGridView}
                onClick={() => navigate(`/wallet-form?title=${encodeURIComponent(item.title)}&logo=${encodeURIComponent(item.id === 'mpesa' ? '/M-PESA_LOGO-01.svg 1.png' : item.id === 'ebirr' ? '/Ebirr_Logo 1.png' : '/telebirr 1.png')}`)}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
