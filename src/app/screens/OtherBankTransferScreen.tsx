import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronDown,
  RefreshCw,
  Search,
  Wallet,
  User,
  Banknote,
  FileText,
  Building2,
  X,
  Eye,
  EyeOff,
  Check,
  ArrowRight
} from 'lucide-react';

const REASON_OPTIONS = [
  "Goods & Services",
  "Rent",
  "Gift",
  "Loan",
  "Travel & Transport",
  "Other (Custom)"
];

export default function OtherBankTransferScreen() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [bAcc, setBAcc] = useState('');
  const [selectedBank, setSelectedBank] = useState<null | { name: string, logo: string }>(null);
  const [showBankModal, setShowBankModal] = useState(false);
  const [isModalExiting, setIsModalExiting] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [isConfirmExiting, setIsConfirmExiting] = useState(false);
  const reduceMotion = useReducedMotion();
  const [selectedAccIdx, setSelectedAccIdx] = useState(-1);
  const [showAccDropdown, setShowAccDropdown] = useState(false);
  const [showBalance, setShowBalance] = useState(false);

  // Reason Selection State
  const [selectedReason, setSelectedReason] = useState("");
  const [customReason, setCustomReason] = useState("");
  const [showReasonDropdown, setShowReasonDropdown] = useState(false);

  const accounts = [
    { type: "SAVING", number: "0911121314156", balance: "125,110.90" },
    { type: "CURRENT", number: "0912223344556", balance: "45,210.50" },
  ];

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

  const finalReason = selectedReason === "Other (Custom)" ? customReason : selectedReason;

  return (
    <div className="bg-[#fcfcfc] relative w-full h-full overflow-hidden font-sans flex flex-col" data-name="Other Bank Transfer Screen">
      {/* 1:1 Elite Header Background Layer */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden z-0">
        <img
          src="/Mask group.png"
          alt="Header Background"
          className="w-full h-full object-cover -translate-y-2 opacity-110"
        />
      </div>

      {/* Brand Header with Navigation */}
      <div className="relative z-20 px-8 h-[220px] flex flex-col items-center shrink-0">
        <div className="absolute top-5 left-6 z-30">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all text-white backdrop-blur-sm shadow-sm active:scale-90"
          >
            <ChevronLeft size={22} strokeWidth={3} />
          </button>
        </div>

        {/* Centered Logo & Title Group */}
        <div className="pt-8 flex flex-col items-center justify-center gap-2">
          <div className="w-13 h-13 rounded-full flex justify-center items-center p-2 bg-white/20 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/30 transform">
            <img src="/ethiopay1.png" alt="Other Bank" className="w-full h-full object-contain drop-shadow-md" />
          </div>
          <h2 className="text-white text-[16px] font-bold tracking-tight">To Other Bank</h2>
        </div>
      </div>

      {/* Main Glassmorphic Form Card */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.985 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: reduceMotion ? 0 : 0.46,
          ease: [0.22, 1, 0.36, 1],
          delay: reduceMotion ? 0 : 0.04,
        }}
        className="absolute bg-white h-[calc(100%-170px)] left-4 right-4 rounded-[28px] top-[140px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] z-30 overflow-y-auto no-scrollbar pb-4"
      >
        <div className="p-4 pb-0 pt-10">
          <div className="space-y-6">
            {/* Field: Select Account */}
            <div className="space-y-2 relative">
              <button
                onClick={() => setShowAccDropdown(!showAccDropdown)}
                className="w-full flex items-center justify-between bg-[#fff9f4] border border-orange-100 rounded-[12px] px-2 py-2 focus:ring-4 focus:ring-orange-50 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-100/50 flex items-center justify-center text-[#ff6b0b] shrink-0">
                    <Wallet size={18} strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col items-start min-w-[150px]">
                    {selectedAccIdx === -1 ? (
                      <span className="text-[#004360] text-[14px] font-semibold opacity-30 mt-1">Select Account</span>
                    ) : (
                      <>
                        <span className="text-[#004360] text-[13px] font-black tracking-wider">
                          {accounts[selectedAccIdx].number}
                        </span>
                        <span className="text-[#004360]/50 text-[11px] font-bold">
                          ETB {showBalance ? accounts[selectedAccIdx].balance : "• • • • •"}
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 pr-1">
                  <ChevronDown size={18} className={`text-[#ff6b0b] transition-transform duration-300 ${showAccDropdown ? "rotate-180" : ""}`} strokeWidth={2.5} />
                </div>
              </button>

              <AnimatePresence>
                {showAccDropdown && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 z-40 bg-black/5 backdrop-blur-[2px]"
                      onClick={() => setShowAccDropdown(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className="absolute top-full left-0 right-0 mt-3 bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-50 overflow-hidden border border-orange-100 duration-200"
                    >
                      <div className="p-2 space-y-1">
                        {accounts.map((acc, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              setSelectedAccIdx(idx);
                              setShowAccDropdown(false);
                            }}
                            className={`w-full px-4 py-2 rounded-[12px] text-left transition-all flex items-center justify-between group ${selectedAccIdx === idx ? "bg-orange-50 text-[#ff6b0b]" : "hover:bg-gray-50 text-[#004360]"}`}
                          >
                            <div className="flex flex-col">
                              <span className="text-[12px] font-black tracking-wider">
                                {acc.number}
                              </span>
                              <div className="flex items-center gap-2">
                                <span className="text-[11px] opacity-60 font-bold whitespace-nowrap">
                                  ETB {showBalance ? acc.balance : "• • • • •"}
                                </span>
                                <div
                                  onClick={(e) => { e.stopPropagation(); setShowBalance(!showBalance); }}
                                  className="p-1 rounded-full hover:bg-orange-200/30 text-[#ff6b0b] transition-colors"
                                >
                                  {showBalance ? <EyeOff size={14} strokeWidth={2.5} /> : <Eye size={14} strokeWidth={2.5} />}
                                </div>
                              </div>
                            </div>
                            {selectedAccIdx === idx && (
                              <div className="w-2 h-2 rounded-full bg-[#ff6b0b]" />
                            )}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Field: Select Destination Bank */}
            <div className="space-y-2">
              <button
                onClick={() => toggleBankModal(true)}
                className="w-full bg-[#fff9f4] border border-orange-100 rounded-[12px] px-2 py-2 pr-3 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3 text-[#004360]">
                  {selectedBank ? (
                    <img src={selectedBank.logo} alt="" className="w-8 h-8 object-contain" />
                  ) : (
                    <div className="w-8 h-8 rounded-lg bg-orange-100/50 flex items-center justify-center text-[#ff6b0b]">
                      <Building2 size={18} strokeWidth={2.5} />
                    </div>
                  )}
                  <span className={`text-[14px] font-semibold ${!selectedBank ? 'opacity-30' : ''}`}>
                    {selectedBank ? selectedBank.name : "Select Destination Bank"}
                  </span>
                </div>
                <ChevronLeft size={16} className="-rotate-90 text-[#ff6b0b]" strokeWidth={3} />
              </button>
            </div>

            {/* Field: Beneficiary Account */}
            <div className="space-y-2">
              <div className="relative group">
                <div className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-orange-100/50 flex items-center justify-center text-[#ff6b0b] transition-colors group-focus-within:bg-[#ff6b0b] group-focus-within:text-white">
                  <User size={18} strokeWidth={2.5} />
                </div>
                <input value={bAcc} onChange={(e) => setBAcc(e.target.value)} type="text" placeholder="Enter account number" className="w-full bg-[#fff9f4] border border-orange-100 rounded-[12px] pl-14 pr-5 py-3 outline-none text-[#004360] font-semibold text-[14px] placeholder:text-[#004360]/20 focus:bg-white focus:border-[#ff6b0b]/40 transition-all" />
              </div>
            </div>

            {/* Field: Amount */}
            <div className="space-y-2">
              <div className="relative group">
                <div className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-orange-100/50 flex items-center justify-center text-[#ff6b0b] transition-colors group-focus-within:bg-[#ff6b0b] group-focus-within:text-white">
                  <Banknote size={18} strokeWidth={2.5} />
                </div>
                <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder="Enter Amount" className="w-full bg-[#fff9f4] border border-orange-100 rounded-[12px] pl-14 pr-5 py-3 outline-none text-[#004360] font-semibold text-[14px] placeholder:text-[#004360]/20 focus:bg-white focus:border-[#ff6b0b]/40 transition-all" />
              </div>
            </div>

            {/* Field: Reason (Standardized Select + Custom Input) */}
            <div className="space-y-3 relative">
              <div className="relative group">
                <button
                  onClick={() => setShowReasonDropdown(!showReasonDropdown)}
                  className="w-full flex items-center justify-between bg-[#fff9f4] border border-orange-100 rounded-[12px] pl-2 pr-4 py-2 focus:ring-4 focus:ring-orange-50 transition-all group overflow-hidden"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-100/50 flex items-center justify-center text-[#ff6b0b] shrink-0 group-hover:bg-[#ff6b0b] group-hover:text-white transition-colors">
                      <FileText size={18} strokeWidth={2.5} />
                    </div>
                    <span className={`text-[14px] font-semibold truncate ${selectedReason ? "text-[#004360]" : "text-[#004360]/30"}`}>
                      {selectedReason || "Select transfer reason"}
                    </span>
                  </div>
                  <ChevronDown size={18} className={`text-[#ff6b0b] transition-transform duration-300 ${showReasonDropdown ? "rotate-180" : ""}`} strokeWidth={2.5} />
                </button>

                <AnimatePresence>
                  {showReasonDropdown && (
                    <>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowReasonDropdown(false)}
                        className="fixed inset-0 z-40 bg-black/5 backdrop-blur-[2px]"
                      />
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        className="absolute top-full left-0 right-0 mt-3 bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-[60] overflow-hidden border border-orange-100 p-2"
                      >
                        <div className="space-y-1">
                          {REASON_OPTIONS.map((option) => (
                            <button
                              key={option}
                              onClick={() => {
                                setSelectedReason(option);
                                setShowReasonDropdown(false);
                                if (option !== "Other (Custom)") setCustomReason("");
                              }}
                              className={`w-full px-5 py-2.5 rounded-[12px] text-left transition-all flex items-center justify-between group ${selectedReason === option ? "bg-orange-50 text-[#ff6b0b]" : "hover:bg-gray-50 text-[#004360]"}`}
                            >
                              <span className="text-[13px] font-bold">{option}</span>
                              {selectedReason === option && <Check size={16} strokeWidth={3} />}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              <AnimatePresence>
                {selectedReason === "Other (Custom)" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="relative group">
                      <div className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-orange-100/50 flex items-center justify-center text-[#ff6b0b] transition-colors group-focus-within:bg-[#ff6b0b] group-focus-within:text-white">
                        <ArrowRight size={18} strokeWidth={2.5} />
                      </div>
                      <input
                        type="text"
                        placeholder="Type your custom reason"
                        value={customReason}
                        onChange={(e) => setCustomReason(e.target.value)}
                        className="w-full bg-[#fff9f4] border border-orange-100 rounded-[12px] pl-14 pr-5 py-3 outline-none text-[#004360] font-semibold text-[14px] placeholder:text-[#004360]/20 focus:bg-white focus:border-[#ff6b0b]/40 transition-all border-dashed"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Transfer Button */}
            <div className="pt-2">
              <button
                onClick={() => toggleConfirmModal(true)}
                disabled={!selectedReason || (selectedReason === "Other (Custom)" && !customReason)}
                className="w-full h-[48px] bg-[#ff8f12] text-white rounded-[20px] font-black text-[17px] shadow-[0_10px_20px_rgba(255,107,11,0.25)] active:scale-[0.98] transition-all disabled:opacity-50 disabled:grayscale"
              >
                Transfer
              </button>
            </div>

            {/* Recent Beneficiaries */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-3 px-1">
                <h3 className="text-[#004360] text-[13px] font-black tracking-tight">Beneficiary Account</h3>
                <button className="text-[#ff8f12] text-[11px] font-bold hover:underline transition-all">See All</button>
              </div>

              <div className="space-y-2.5">
                {[
                  { name: "Abebe Kebede", account: "091156894321" },
                  { name: "Tigist Alemu", account: "092245781236" },
                  { name: "Yohannes Tadesse", account: "096632145879" },
                ].map((beneficiary, idx) => (
                  <div
                    key={idx}
                    onClick={() => setBAcc(beneficiary.account)}
                    className="flex items-center gap-3 py-2 px-3 bg-white border border-gray-50 rounded-[16px] shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(255,107,11,0.08)] hover:bg-[#fffdfb] hover:border-orange-100/50 active:scale-[0.98] transition-all duration-300 cursor-pointer group"
                  >
                    {/* User Avatar */}
                    <div className="w-[38px] h-[38px] rounded-xl bg-orange-50 flex items-center justify-center text-[#ff6b0b] font-black text-[13px] group-hover:bg-[#ff6b0b] group-hover:text-white transition-colors duration-300">
                      {beneficiary.name.split(' ').map(n => n[0]).join('')}
                    </div>

                    {/* Name & Account */}
                    <div className="flex-1 min-w-0">
                      <p className="text-[#004360] text-[13px] font-bold truncate tracking-tight">{beneficiary.name}</p>
                      <p className="text-[#004360]/40 text-[11px] font-bold tracking-tight mt-0.5">{beneficiary.account}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* --- BANK SELECTION MODAL --- */}
      <AnimatePresence>
        {showBankModal && (
          <div className="absolute inset-0 z-[200] flex flex-col justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#004360]/10 backdrop-blur-[12px]"
              onClick={() => toggleBankModal(false)}
            />

            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative h-[85%] w-full bg-white rounded-t-[44px] overflow-hidden shadow-[0_-15px_60px_rgba(0,0,0,0.15)] flex flex-col"
            >
              <div className="w-12 h-1.5 bg-gray-100 rounded-full mx-auto mt-4 mb-2 shrink-0" />

              <div className="px-6 pt-2 pb-4 flex items-center justify-between shrink-0">
                <h2 className="text-[#004360] text-[20px] font-black">Select Bank</h2>
                <button onClick={() => toggleBankModal(false)} className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 text-gray-400">
                  <X size={20} strokeWidth={2.5} />
                </button>
              </div>

              {/* Search Bar */}
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

              {/* Bank Grid */}
              <div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-12">
                <div className="grid grid-cols-3 gap-2.5">
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
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirmModal && (
          <div className="absolute inset-0 z-[300] flex items-end justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#004360]/20 backdrop-blur-[10px]"
              onClick={() => toggleConfirmModal(false)}
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full bg-white rounded-t-[40px] p-6 pb-10"
            >
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
                  { label: "Account", value: bAcc || "N/A" },
                  { label: "Amount", value: `${amount || "0.00"} ETB` },
                  { label: "Remark", value: finalReason || "Transfer" },
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
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
