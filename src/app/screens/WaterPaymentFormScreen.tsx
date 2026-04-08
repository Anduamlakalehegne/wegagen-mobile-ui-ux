import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  ChevronLeft,
  RefreshCw,
  ChevronDown,
  Wallet,
  Home as HomeIcon,
  Receipt,
  Users,
  LogOut,
  User,
  Search,
  Droplets,
  QrCode,
  Eye,
  EyeOff
} from 'lucide-react';

export default function WaterPaymentFormScreen() {
  const { providerName } = useParams();
  const navigate = useNavigate();
  const [accountId, setAccountId] = useState('');
  const [showAccDropdown, setShowAccDropdown] = useState(false);
  const [selectedAccIdx, setSelectedAccIdx] = useState(-1);
  const [showBalance, setShowBalance] = useState(false);
  const reduceMotion = useReducedMotion();

  const accounts = [
    { type: "SAVING", number: "0911121314156", balance: "125,110.90" },
    { type: "CHECKING", number: "0922232425267", balance: "45,210.50" }
  ];

  const handleSearch = () => {
    // Navigate to confirmation or success
    console.log("Searching for water account:", accountId);
  };

  return (
    <div className="bg-[#fcfcfc] relative w-full h-full overflow-hidden font-sans flex flex-col" data-name="Water Payment Form Screen">
      {/* 1:1 Elite Header Background Layer */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden z-0">
        <img
          src="/Mask group (1).png"
          alt="Header Background"
          className="w-full h-full object-cover -translate-y-2 opacity-110"
        />
      </div>

      {/* Brand Header with Top-aligned Navigation (Exactly like Transfer Page) */}
      <div className="relative z-20 px-8 h-[220px] flex flex-col items-center">
        <div className="absolute top-5 left-6 right-6 flex items-center justify-between z-30">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all text-white backdrop-blur-sm shadow-sm"
          >
            <ChevronLeft size={22} strokeWidth={3} />
          </button>
          {/* <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all text-white backdrop-blur-sm shadow-sm">
            <RefreshCw size={18} strokeWidth={3} />
          </button> */}
        </div>

        <div className="pt-16 flex flex-col items-center">
          <img
            src="/LogoSVG 1 (1).png"
            alt="Wegagen Bank"
            className="h-10 object-contain drop-shadow-lg"
          />
          <h2 className="text-white text-[15px] font-bold tracking-tight mt-6 opacity-95 tracking-wide">{providerName} Water Payment</h2>
        </div>
      </div>

      {/* Content Container (Form Section - Styled exactly like WegagenTransfer) */}
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
        <div className="p-4 pb-0 pt-5">
          <div className="space-y-4">
            {/* Field: Select Account */}
            <div className="space-y-2 relative">
              <label className="text-[#004360] text-[13px] font-bold ml-1">Select account</label>
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
                      onClick={() => setShowAccDropdown(false)}
                      className="fixed inset-0 z-40 bg-black/5 backdrop-blur-[2px]"
                    />
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className="absolute top-full left-0 right-0 mt-3 bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-50 overflow-hidden border border-orange-100 animate-in fade-in zoom-in-95 duration-200"
                    >
                      <div className="p-2 space-y-1">
                        {accounts.map((acc, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              setSelectedAccIdx(idx);
                              setShowAccDropdown(false);
                            }}
                            className={`w-full px-5 py-4 rounded-[18px] text-left transition-all flex items-center justify-between group ${selectedAccIdx === idx ? "bg-orange-50 text-[#ff6b0b]" : "hover:bg-gray-50 text-[#004360]"}`}
                          >
                            <div className="flex flex-col">
                              <span className="text-[13px] font-black tracking-wider mb-0.5">
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

            {/* Field: Account ID */}
            <div className="space-y-2">
              <label className="text-[#004360] text-[13px] font-bold ml-1">Please Enter your Account Id</label>
              <div className="relative group">
                <div className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-orange-100/50 flex items-center justify-center text-[#ff6b0b] transition-colors group-focus-within:bg-[#ff6b0b] group-focus-within:text-white">
                  <User size={18} strokeWidth={2.5} />
                </div>
                <input
                  type="text"
                  placeholder="Enter Account ID"
                  value={accountId}
                  onChange={(e) => setAccountId(e.target.value)}
                  className="w-full bg-[#fff9f4] border border-orange-100 rounded-[12px] pl-14 pr-5 py-3 outline-none text-[#004360] font-semibold text-[14px] placeholder:text-[#004360]/20 focus:bg-white focus:border-[#ff6b0b]/40 transition-all"
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="pt-3 pb-2">
              <button
                onClick={handleSearch}
                className="w-full h-[48px] bg-[#ff8f12] hover:bg-[#ff6b0b] text-white rounded-[20px] font-black text-[17px] shadow-[0_10px_20px_rgba(255,107,11,0.25)] hover:shadow-[0_14px_30px_rgba(255,107,11,0.35)] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <span>Search</span>
                <Search size={18} strokeWidth={3} />
              </button>
            </div>

            {/* ─── Recent Transactions (Consistent with Transfer Page) ─── */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-3 px-1">
                <h3 className="text-[#004360] text-[13px] font-black tracking-tight">Recent Transactions</h3>
                <button className="text-[#ff8f12] text-[11px] font-bold hover:underline">See All</button>
              </div>

              <div className="space-y-2.5">
                {[
                  { type: "Water Bill", name: "Adi-Daero Water", amount: "-120.50", date: "Mon April 12 2026 14:10", isCredit: false },
                  { type: "Water Bill", name: "Adi-Daero Water", amount: "-85.00", date: "Sun March 12 2026 09:20", isCredit: false },
                  { type: "Water Bill", name: "Adi-Daero Water", amount: "-110.00", date: "Sat Feb 11 2026 16:45", isCredit: false },
                ].map((tx, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 py-2 px-3 bg-white border border-gray-50 rounded-[18px] shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(255,107,11,0.08)] hover:bg-[#fffdfb] active:scale-[0.98] transition-all duration-300 cursor-pointer group"
                  >
                    <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Droplets size={16} className="text-[#ff6b0b]" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[#ff8f12] text-[11px] font-black leading-none mb-1 uppercase">{tx.type}</p>
                      <p className="text-[#004360] text-[12px] font-bold truncate">{tx.name}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-[#e05a0b] text-[13px] font-black leading-none mb-1">
                        {tx.amount} ETB
                      </p>
                      <p className="text-[#004360]/30 text-[9px] font-bold whitespace-nowrap">{tx.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </motion.div>

    </div>
  );
}
