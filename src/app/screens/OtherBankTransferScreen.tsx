import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion, useReducedMotion } from 'motion/react';
import {
  ChevronLeft,
  RefreshCw,
  Search,
  Wallet,
  User,
  Banknote,
  FileText,
  Building2,
  X
} from 'lucide-react';

export default function OtherBankTransferScreen() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [selectedBank, setSelectedBank] = useState<null | { name: string, logo: string }>(null);
  const [showBankModal, setShowBankModal] = useState(false);
  const [isModalExiting, setIsModalExiting] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [isConfirmExiting, setIsConfirmExiting] = useState(false);
  const reduceMotion = useReducedMotion();

  const banks = [
    { name: "Abay Bank", logo: "/Abaya Bank 1.png" },
    { name: "Addis Bank", logo: "/addis 1.png" },
    { name: "Ahadu Bank", logo: "/ahadu 1.png" },
    { name: "Amhara Bank", logo: "/amhara 1.png" },
    { name: "Awash Bank", logo: "/awash 1.png" },
    { name: "Bank of Abyssinia", logo: "/boa 1.png" },
    { name: "Berhan Bank", logo: "/birhan 1.png" },
    { name: "Bunna Bank", logo: "/bunna 1.png" },
    { name: "Commercial Bank of Ethiopia", logo: "/cbe 1.png" },
    { name: "Bank of Oromia", logo: "/coop 1.png" },
    { name: "Dashen Bank", logo: "/dashen 1.png" },
    { name: "Global Bank Ethiopia", logo: "/gbe 1.png" }
  ];

  const filteredBanks = banks.filter(b => b.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const toggleBankModal = (show: boolean) => {
    if (!show) {
      setIsModalExiting(true);
      setTimeout(() => {
        setShowBankModal(false);
        setIsModalExiting(false);
      }, 350);
    } else {
      setShowBankModal(true);
    }
  };

  const toggleConfirmModal = (show: boolean) => {
    if (!show) {
      setIsConfirmExiting(true);
      setTimeout(() => {
        setShowConfirmModal(false);
        setIsConfirmExiting(false);
      }, 350);
    } else {
      setShowConfirmModal(true);
    }
  };

  return (
    <div className="bg-[#fcfcfc] relative w-full h-full overflow-hidden font-sans flex flex-col" data-name="Other Bank Transfer Screen">
      {/* 1:1 Elite Header Background Layer */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden z-0">
        <img
          src="/Mask group (1).png"
          alt="Header Background"
          className="w-full h-full object-cover -translate-y-2 opacity-110"
        />
      </div>

      {/* Brand Header with Top-aligned Navigation */}
      <div className="relative z-20 px-8 h-[220px] flex flex-col items-center animate-in fade-in duration-500">
        {/* Absolute Top Navigation Buttons (Exactly like Home Page) */}
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

        {/* Centered Logo & Title Group (Kept at Original Positions) */}
        <div className="pt-16 flex flex-col items-center">
          <img
            src="/LogoSVG 1 (1).png"
            alt="Wegagen Bank"
            className="h-10 object-contain drop-shadow-lg"
          />
          <h2 className="text-white text-[15px] font-bold tracking-tight mt-6 opacity-90">To Other Bank Account</h2>
        </div>
      </div>

      {/* Main Glassmorphic Form Card (ONLY PADDING & ROUNDING ENHANCEMENTS) */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.985 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: reduceMotion ? 0 : 0.46,
          ease: [0.22, 1, 0.36, 1],
          delay: reduceMotion ? 0 : 0.04,
        }}
        className="absolute bg-white h-[calc(100%-180px)] left-4 right-4 rounded-[28px] top-[160px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] z-30 overflow-y-auto no-scrollbar pb-10"
      >
        <div className="p-4 pt-10">
          <div className="space-y-4">

            {/* Field: Select Bank */}
            <div className="space-y-2">
              <label className="text-[#004360] text-[13px] font-bold ml-1">Select Bank</label>
              <button
                onClick={() => toggleBankModal(true)}
                className="w-full h-14 bg-[#fff9f4] border border-orange-100 rounded-[12px] px-4 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3 text-[#004360]">
                  {selectedBank ? (
                    <img src={selectedBank.logo} alt="" className="w-6 h-6 object-contain" />
                  ) : (
                    <div className="w-8 h-8 rounded-lg bg-orange-100/50 flex items-center justify-center text-[#ff6b0b]">
                      <Building2 size={18} strokeWidth={2.5} />
                    </div>
                  )}
                  <span className={`text-[14px] font-semibold ${!selectedBank ? 'opacity-30' : ''}`}>
                    {selectedBank ? selectedBank.name : "Select Bank"}
                  </span>
                </div>
                <ChevronLeft size={16} className="-rotate-90 text-[#ff6b0b]" strokeWidth={3} />
              </button>
            </div>

            {/* Field: Beneficiary Account */}
            <div className="space-y-2">
              <label className="text-[#004360] text-[13px] font-bold ml-1">Beneficiary Account</label>
              <div className="relative group">
                <div className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-orange-100/50 flex items-center justify-center text-[#ff6b0b]">
                  <User size={18} strokeWidth={2.5} />
                </div>
                <input type="text" placeholder="Enter account number" className="w-full bg-[#fff9f4] border border-orange-100 rounded-[12px] pl-14 pr-5 py-3 outline-none text-[#004360] font-semibold text-[14px] placeholder:text-[#004360]/20 transition-all" />
              </div>
            </div>

            {/* Field: Amount */}
            <div className="space-y-2">
              <label className="text-[#004360] text-[13px] font-bold ml-1">Enter Amount</label>
              <div className="relative group">
                <div className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-orange-100/50 flex items-center justify-center text-[#ff6b0b]">
                  <Banknote size={18} strokeWidth={2.5} />
                </div>
                <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder="0.00" className="w-full bg-[#fff9f4] border border-orange-100 rounded-[12px] pl-14 pr-5 py-3 outline-none text-[#004360] font-bold text-[15px] placeholder:text-[#004360]/20 transition-all" />
              </div>
            </div>

            {/* Field: Reason */}
            <div className="space-y-2">
              <label className="text-[#004360] text-[13px] font-bold ml-1">Enter Reason</label>
              <div className="relative group">
                <div className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-orange-100/50 flex items-center justify-center text-[#ff6b0b]">
                  <FileText size={18} strokeWidth={2.5} />
                </div>
                <input type="text" placeholder="Transfer remark" className="w-full bg-[#fff9f4] border border-orange-100 rounded-[12px] pl-14 pr-5 py-3 outline-none text-[#004360] font-semibold text-[14px] placeholder:text-[#004360]/20 transition-all" />
              </div>
            </div>

            {/* Transfer Button */}
            <div className="pt-6 pb-4">
              <button
                onClick={() => toggleConfirmModal(true)}
                className="w-full h-[52px] bg-[#ff8f12] text-white rounded-[22px] font-black text-[18px] shadow-[0_12px_24px_rgba(255,107,11,0.25)] active:scale-[0.98] transition-all"
              >
                Transfer
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* --- BANK SELECTION MODAL (SLIDE FROM BOTTOM) --- */}
      {showBankModal && (
        <div className={`absolute inset-0 z-[200] flex flex-col justify-end ${isModalExiting ? 'transition-opacity duration-400 opacity-0' : 'animate-in fade-in'}`}>
          {/* Liquid Glass Backdrop */}
          <div className={`absolute inset-0 bg-[#004360]/10 transition-all duration-400 backdrop-blur-[12px] ${isModalExiting ? 'opacity-0' : 'opacity-100'}`} onClick={() => toggleBankModal(false)} />

          <div className={`relative h-[85%] w-full bg-white rounded-t-[44px] overflow-hidden shadow-[0_-15px_60px_rgba(0,0,0,0.15)] flex flex-col transition-transform duration-400 cubic-bezier(0.34,1.56,0.64,1) ${isModalExiting ? 'translate-y-full' : 'translate-y-0 animate-in slide-in-from-bottom-full'}`}>
            <div className="w-12 h-1.5 bg-gray-100 rounded-full mx-auto mt-4 mb-2 shrink-0" />

            <div className="px-6 pt-2 pb-4 flex items-center justify-between shrink-0">
              <h2 className="text-[#004360] text-[20px] font-black">Select Bank</h2>
              <button onClick={() => toggleBankModal(false)} className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 text-gray-400">
                <X size={20} strokeWidth={2.5} />
              </button>
            </div>

            {/* Search Bar - Modern Wegagen Style */}
            <div className="px-6 pb-6 shrink-0">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-200 group-focus-within:text-[#ff6b0b] transition-colors" size={20} />
                <input
                  type="text"
                  placeholder="Search Bank"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-14 bg-[#fffaf5] border border-orange-100 rounded-[22px] pl-12 pr-6 outline-none text-[#004360] font-black placeholder:text-[#004360]/20 focus:bg-white focus:ring-4 focus:ring-orange-50 transition-all"
                />
              </div>
            </div>

            {/* Bank Grid - Scrollable and Optimized */}
            <div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-12">
              <div className="grid grid-cols-3 gap-2.5 animate-in fade-in duration-500 delay-200">
                {filteredBanks.map((bank, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedBank(bank);
                      toggleBankModal(false);
                    }}
                    className="flex flex-col items-center justify-center p-2.5 bg-white border border-gray-50 rounded-[20px] shadow-sm hover:shadow-lg hover:border-orange-100 transition-all group active:scale-95"
                  >
                    <div className="w-10 h-10 mb-2 flex items-center justify-center overflow-hidden">
                      <img src={bank.logo} alt={bank.name} className="w-full h-full object-contain filter grayscale-[0.2] group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110" />
                    </div>
                    <span className="text-[9px] text-[#004360] font-bold text-center leading-none line-clamp-2 px-1 uppercase tracking-tighter">
                      {bank.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className={`absolute inset-0 z-[300] flex items-end justify-center ${isConfirmExiting ? 'opacity-0' : 'animate-in fade-in'} transition-opacity duration-300`}>
          <div className="absolute inset-0 bg-[#004360]/20 backdrop-blur-[10px]" onClick={() => toggleConfirmModal(false)} />
          <div className={`relative w-full bg-white rounded-t-[40px] p-6 pb-10 transition-transform duration-350 ease-out transform ${isConfirmExiting ? 'translate-y-full' : 'translate-y-0 animate-in slide-in-from-bottom-full'}`}>
            <div className="w-12 h-1.5 bg-gray-100 rounded-full mx-auto mb-6" />
            <div className="flex flex-col items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center text-[#ff6b0b] mb-3">
                <RefreshCw size={24} strokeWidth={3} className="animate-spin-slow" />
              </div>
              <h3 className="text-[#004360] text-[18px] font-black">Confirm Transfer</h3>
            </div>
            <div className="space-y-3 mb-8">
              {[
                { label: "Transfer To", value: selectedBank?.name || "Target Bank" },
                { label: "Account", value: "1000054875412" },
                { label: "Amount", value: `${amount || "0.00"} ETB` },
                { label: "Fee", value: "5.00 ETB" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between border-b border-gray-50 pb-2">
                  <span className="text-gray-400 text-[12px] font-bold">{item.label}</span>
                  <span className="text-[#004360] text-[12px] font-black">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <button onClick={() => toggleConfirmModal(false)} className="flex-1 h-12 bg-gray-50 text-gray-400 rounded-[15px] font-bold active:scale-95 transition-all">Cancel</button>
              <button onClick={() => { toggleConfirmModal(false); setTimeout(() => navigate('/confirm-pin'), 350); }} className="flex-1 h-12 bg-[#ff6b0b] text-white rounded-[15px] font-black active:scale-95 shadow-lg transition-all">Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
