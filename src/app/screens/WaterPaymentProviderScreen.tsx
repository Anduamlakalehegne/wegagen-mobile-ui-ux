import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  ChevronLeft,
  Search,
  Droplets,
  Home as HomeIcon,
  Receipt,
  Users,
  LogOut,
  RefreshCw
} from 'lucide-react';

const providers = [
  { id: '1', name: 'Adi-Daero' },
  { id: '2', name: 'Adigudom' },
  { id: '3', name: 'Agulae' },
  { id: '4', name: 'Alamata' },
  { id: '5', name: 'Aleta Wendo' },
  { id: '6', name: 'Ameya' },
  { id: '7', name: 'Atsbi' },
  { id: '8', name: 'Bahir Dar' },
  { id: '9', name: 'Bedelle' },
  { id: '10', name: 'Bolo Woyeranba' },
  { id: '11', name: 'Damboya' },
  { id: '12', name: 'Dibdibo' },
  { id: '13', name: 'Edaga Hamus' },
  { id: '14', name: 'Enticho' },
  { id: '15', name: 'Fonko' },
  { id: '16', name: 'Gambella' },
  { id: '17', name: 'Hadero' },
  { id: '18', name: 'Hagere Selam' },
];

export default function WaterPaymentProviderScreen() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const reduceMotion = useReducedMotion();

  const filteredProviders = providers.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#fcfcfc] relative w-full h-full overflow-hidden font-sans flex flex-col" data-name="Water Provider Screen">
      {/* 1:1 Elite Header Background Layer */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden z-0">
        <img
          src="/Mask group (1).png"
          alt="Header Background"
          className="w-full h-full object-cover -translate-y-2 opacity-110"
        />
      </div>

      {/* Brand Header with Navigation */}
      <div className="relative z-20 px-8 h-[220px] flex flex-col items-center shrink-0">
        <div className="absolute top-5 left-6 right-6 flex items-center justify-between z-30">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all text-white backdrop-blur-sm shadow-sm active:scale-90"
          >
            <ChevronLeft size={22} strokeWidth={3} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all text-white backdrop-blur-sm shadow-sm active:scale-90">
            <RefreshCw size={18} strokeWidth={3} />
          </button>
        </div>

        <div className="pt-16 flex flex-col items-center">
          <img
            src="/LogoSVG 1 (1).png"
            alt="Wegagen Bank"
            className="h-10 object-contain drop-shadow-lg"
          />
          <h2 className="text-white text-[15px] font-bold tracking-tight mt-6 opacity-90">Water Payments</h2>
        </div>
      </div>

      {/* Content Container (Card Section) */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.985 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: reduceMotion ? 0 : 0.46,
          ease: [0.22, 1, 0.36, 1],
          delay: reduceMotion ? 0 : 0.04,
        }}
        className="absolute bg-white h-[calc(100%-180px)] left-4 right-4 rounded-[28px] top-[160px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] z-30 overflow-hidden flex flex-col"
      >
        {/* Search Bar - Modern Wegagen Style (Consistent with Other Bank Transfer) */}
        <div className="px-6 py-5 border-b border-gray-50 bg-gray-50/5 shrink-0">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-200 group-focus-within:text-[#ff6b0b] transition-colors" size={20} />
            <input
              type="text"
              placeholder="Search Provider"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 bg-[#fffaf5] border border-orange-100 rounded-[22px] pl-12 pr-6 outline-none text-[#004360] font-black placeholder:text-[#004360]/20 focus:bg-white focus:ring-4 focus:ring-orange-50 transition-all"
            />
          </div>
        </div>

        {/* Provider Grid - Consistent with Home Page Grid */}
        <div className="flex-1 overflow-y-auto no-scrollbar px-1 pb-[10px] pt-2">
          <div className="grid grid-cols-3 gap-1.5 items-stretch overflow-visible">
            <AnimatePresence mode="popLayout">
              {filteredProviders.map((provider, index) => (
                <motion.button
                  key={provider.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.015 }}
                  onClick={() => navigate(`/water-payment-form/${provider.name}`)}
                  className="group relative flex flex-col items-center justify-center h-[100px] w-full bg-white border border-[#fff6ec] rounded-[22px] shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(255,107,11,0.08)] transition-all duration-300 active:scale-95 text-center"
                >
                  <div className="w-[42px] h-[42px] rounded-full flex items-center justify-center bg-[#FFF6EC] mb-2 shadow-sm group-hover:scale-110 transition-transform duration-500">
                    <div className="transform group-hover:rotate-12 transition-transform duration-500 text-[#ff6b0b]">
                      <Droplets size={22} strokeWidth={2.5} />
                    </div>
                  </div>
                  <p className="text-[#004360] text-[11px] font-semibold leading-snug line-clamp-2 px-1.5 opacity-95">
                    {provider.name}
                  </p>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Floating Sticky Bottom Navigation */}
      <div className="absolute bottom-[10px] left-[16px] right-[16px] h-[58px] bg-[#FF8F12] rounded-[25px] shadow-[0_8px_30px_rgba(0,0,0,0.2)] flex items-center justify-around px-1 z-40">
        <NavItem
          icon={<HomeIcon size={20} className="text-white opacity-60" />}
          label="Home"
          onClick={() => navigate('/home')}
        />
        <NavItem
          icon={<Receipt size={20} className="text-white opacity-60" />}
          label="Transaction"
          onClick={() => navigate('/transactions')}
        />
        <NavItem
          icon={<Users size={20} className="text-white opacity-60" />}
          label="Beneficiary"
          onClick={() => console.log("Beneficiary")}
        />
        <NavItem
          icon={<LogOut size={20} className="text-white opacity-60" />}
          label="Logout"
          onClick={() => navigate('/')}
        />
      </div>
    </div>
  );
}

function NavItem({ icon, label, active = false, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-0.5 px-3 h-[48px] rounded-[18px] transition-all ${active ? 'bg-white/20' : 'hover:bg-white/10'}`}
    >
      {icon}
      <span className={`text-[10px] font-bold ${active ? 'text-white' : 'text-white/60'}`}>{label}</span>
    </button>
  );
}
