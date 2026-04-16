import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  RefreshCw,
  ChevronDown,
  Wallet,
  User,
  Banknote,
  FileText,
  ArrowRight,
  Eye,
  EyeOff,
  Check
} from 'lucide-react';



export default function WegagenTransferScreen() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [bAcc, setBAcc] = useState('');
  const [selectedAccIdx, setSelectedAccIdx] = useState(-1);
  const [showAccDropdown, setShowAccDropdown] = useState(false);
  const [showBalance, setShowBalance] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [isModalExiting, setIsModalExiting] = useState(false);

  // Reason Selection State
  // Reason State
  const [transferReason, setTransferReason] = useState("");

  // Tabs removed, state no longer needed
  /*
  const [isOwnAccount, setIsOwnAccount] = useState(false);
  const [showCreditAccDropdown, setShowCreditAccDropdown] = useState(false);
  const [selectedCreditAccIdx, setSelectedCreditAccIdx] = useState(-1);
  */

  const reduceMotion = useReducedMotion();

  const openModal = () => {
    setShowConfirmModal(true);
  };

  const handleCloseModal = () => {
    setIsModalExiting(true);
    setTimeout(() => {
      setShowConfirmModal(false);
      setIsModalExiting(false);
    }, 320);
  };

  const accounts = [
    { type: "SAVING", number: "0911121314156", balance: "125,110.90" },
    { type: "CHECKING", number: "0922232425267", balance: "45,210.50" }
  ];

  const finalReason = transferReason || "Transfer";

  return (
    <div className="bg-[#fcfcfc] relative w-full h-full overflow-hidden font-sans flex flex-col" data-name="Wegagen Transfer Screen">
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
        <div className="absolute top-5 left-6 right-6 flex items-center justify-between z-30">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all text-white backdrop-blur-sm shadow-sm"
          >
            <ChevronLeft size={22} strokeWidth={3} />
          </button>
        </div>

        {/* Centered Logo & Title Group */}
        <div className="pt-8 flex flex-col items-center justify-center gap-2">
          <div className="w-13 h-13 rounded-full flex justify-center items-center p-2 bg-white/20 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/30 transform">
            <img src="/Group 82.png" alt="Wegagen" className="w-full h-full object-contain drop-shadow-md brightness-0 invert" />
          </div>
          <h2 className="text-white text-[16px] font-bold tracking-tight">To Wegagen Bank Account</h2>
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

            {/* Field: Beneficiary Account */}
            <div className="space-y-2">
              <div className="relative group">
                <div className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-orange-100/50 flex items-center justify-center text-[#ff6b0b] transition-colors group-focus-within:bg-[#ff6b0b] group-focus-within:text-white">
                  <User size={18} strokeWidth={2.5} />
                </div>
                <input
                  type="text"
                  placeholder="Enter beneficiary account number"
                  value={bAcc}
                  onChange={(e) => setBAcc(e.target.value)}
                  className="w-full bg-[#fff9f4] border border-orange-100 rounded-[12px] pl-14 pr-5 py-3 outline-none text-[#004360] font-semibold text-[14px] placeholder:text-[#004360]/30 focus:bg-white focus:border-[#ff6b0b]/40 transition-all cursor-text text-left"
                />
              </div>
            </div>

            {/* Field: Enter Amount */}
            <div className="space-y-2">
              <div className="relative group">
                <div className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-orange-100/50 flex items-center justify-center text-[#ff6b0b] transition-colors group-focus-within:bg-[#ff6b0b] group-focus-within:text-white">
                  <Banknote size={18} strokeWidth={2.5} />
                </div>
                <input
                  type="number"
                  placeholder="Enter Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-[#fff9f4] border border-orange-100 rounded-[12px] pl-14 pr-5 py-3 outline-none text-[#004360] font-semibold text-[14px] placeholder:text-[#004360]/20 focus:bg-white focus:border-[#ff6b0b]/40 transition-all"
                />
              </div>
            </div>

            {/* Field: Transfer Reason (Simple Input) */}
            <div className="space-y-2">
              <div className="relative group">
                <div className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-orange-100/50 flex items-center justify-center text-[#ff6b0b] transition-colors group-focus-within:bg-[#ff6b0b] group-focus-within:text-white">
                  <FileText size={18} strokeWidth={2.5} />
                </div>
                <input
                  type="text"
                  placeholder="Transfer Reason"
                  value={transferReason}
                  onChange={(e) => setTransferReason(e.target.value)}
                  className="w-full bg-[#fff9f4] border border-orange-100 rounded-[12px] pl-14 pr-5 py-3 outline-none text-[#004360] font-semibold text-[14px] placeholder:text-[#004360]/20 focus:bg-white focus:border-[#ff6b0b]/40 transition-all"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={openModal}
                disabled={selectedAccIdx === -1 || !bAcc || !amount || parseFloat(amount) <= 0 || !transferReason}
                className={`w-full h-[48px] rounded-[20px] font-black text-[17px] transition-all duration-300 ${(selectedAccIdx === -1 || !bAcc || !amount || parseFloat(amount) <= 0 || !transferReason)
                  ? 'bg-[#ffebe0] text-[#ff6b0b] opacity-50 cursor-not-allowed'
                  : 'bg-[#ff8f12] hover:bg-[#ff6b0b] text-white shadow-[0_10px_20px_rgba(255,107,11,0.25)] hover:shadow-[0_14px_30px_rgba(255,107,11,0.35)] active:scale-[0.98]'
                  }`}
              >
                Transfer
              </button>
            </div>

            {/* Recent Beneficiaries */}
            <div>
              <div className="flex items-center justify-between mt-1 mb-3">
                <h3 className="text-[#004360] text-[13px] font-black tracking-tight">Beneficiary Account</h3>
                <button className="text-[#ff8f12] text-[11px] font-bold hover:underline transition-all">See All</button>
              </div>

              <div className="space-y-1.5">
                {[
                  { name: "Abebe Kebede", account: "091156894321" },
                  { name: "Tigist Alemu", account: "092245781236" },
                  { name: "Yohannes Tadesse", account: "096632145879" },
                ].map((beneficiary, idx) => (
                  <div
                    key={idx}
                    onClick={() => setBAcc(beneficiary.account)}
                    className="flex items-center gap-3 py-1.5 px-3 bg-white border border-gray-50 rounded-[16px] shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(255,107,11,0.08)] hover:bg-[#fffdfb] hover:border-orange-100/50 active:scale-[0.98] transition-all duration-300 cursor-pointer group"
                  >
                    <div className="w-[38px] h-[38px] rounded-xl bg-orange-50 flex items-center justify-center text-[#ff6b0b] font-black text-[13px] group-hover:bg-[#ff6b0b] group-hover:text-white transition-colors duration-300">
                      {beneficiary.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[#004360] text-[13px] font-bold truncate tracking-tight">{beneficiary.name}</p>
                      <p className="text-[#004360]/50 text-[11px] font-bold tracking-tight mt-0.5">{beneficiary.account}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* High-Fidelity Confirmation Modal Overlay */}
      {showConfirmModal && (
        <div className={`absolute inset-0 z-[200] flex items-end justify-center ${isModalExiting ? "transition-opacity duration-300 opacity-0" : "animate-in fade-in duration-300"}`}>
          <div
            className={`absolute inset-0 bg-[#004360]/10 transition-all duration-300 ease-out ${isModalExiting ? "opacity-0 backdrop-blur-none" : "opacity-100 backdrop-blur-[12px] animate-in fade-in fill-mode-both"
              }`}
            style={{ transitionProperty: 'opacity, backdrop-filter, -webkit-backdrop-filter' }}
            onClick={handleCloseModal}
          />

          <div
            className={`relative w-full bg-white rounded-t-[44px] overflow-hidden shadow-[0_-15px_80px_rgba(0,0,0,0.15)] transition-transform duration-300 ease-out transform ${isModalExiting ? "translate-y-full" : "translate-y-0 animate-in slide-in-from-bottom-full"
              }`}
          >
            <div className="w-12 h-1.5 bg-gray-100 rounded-full mx-auto mt-3 mb-1" />

            <div className="p-6 pb-2 pt-5 flex flex-col items-center">
              <div className="relative mb-2 scale-90">
                <div className="w-18 h-18 rounded-full bg-orange-50 flex items-center justify-center text-[#ff6b0b] relative z-10 border border-orange-100">
                  <div className="w-11 h-11 rounded-full bg-[#ff6b0b] shadow-[0_8px_20px_rgba(255,107,11,0.3)] flex items-center justify-center text-white">
                    <RefreshCw size={22} strokeWidth={3} className="animate-spin-slow" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-[#ff6b0b] blur-[30px] opacity-10 rounded-full scale-125" />
              </div>

              <h2 className="text-[#053d57] text-[17px] font-black tracking-tight mb-5">Confirm Your Transfer</h2>

              <div className="w-full space-y-3 mb-6 px-2">
                {[
                  { label: "Recipient", value: "Fikir T." },
                  { label: "Debit Account", value: selectedAccIdx !== -1 ? accounts[selectedAccIdx].number : "0911128513141" },
                  { label: "Credit Account", value: bAcc || "092258758742" },
                  { label: "Amount", value: `${amount || "0"} ETB` },
                  { label: "Remark", value: finalReason || "Transfer" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between border-b border-gray-50 pb-2">
                    <span className="text-gray-400 text-[12px] font-bold">{item.label}</span>
                    <span className="text-[#053d57] text-[12px] font-black">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="w-full flex gap-3 pb-6">
                <button
                  onClick={handleCloseModal}
                  className="flex-1 h-[48px] bg-gray-50 text-gray-400 rounded-[15px] font-bold text-[15px] active:scale-95 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    handleCloseModal();
                    setTimeout(() => navigate('/confirm-pin'), 350);
                  }}
                  className="flex-1 h-[48px] bg-[#ff6b0b] text-white rounded-[15px] font-black text-[16px] shadow-[0_10px_30px_rgba(255,107,11,0.25)] active:scale-95 transition-all"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
