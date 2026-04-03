import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { motion, useReducedMotion } from 'motion/react';
import {
  ChevronLeft,
  RefreshCw,
  ChevronDown,
  Wallet,
  User,
  Banknote,
  FileText,
} from 'lucide-react';

export default function WalletTransferFormScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const walletTitle = queryParams.get('title') || 'Wallet Transfer';
  const walletLogo = queryParams.get('logo') || '/Ebirr_Logo 1.png';

  const isMF = walletTitle.toLowerCase().includes('awach') || walletTitle.toLowerCase().includes('sacco');

  const [amount, setAmount] = useState('');
  const [selectedAccIdx, setSelectedAccIdx] = useState(-1);
  const [showAccDropdown, setShowAccDropdown] = useState(false);
  const reduceMotion = useReducedMotion();

  const accounts = [
    { type: "SAVING", number: "0911121314156", balance: "125,110.90" },
    { type: "CHECKING", number: "0922232425267", balance: "45,210.50" }
  ];

  const handleTransfer = () => {
    navigate('/confirm-pin');
  };

  return (
    <div className="bg-[#fcfcfc] relative w-full h-full overflow-hidden font-sans flex flex-col" data-name="Wallet Transfer Form Screen">
      {/* 1:1 Elite Header Background */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden z-0">
        <img
          src="/Mask group (1).png"
          alt="Header Background"
          className="w-full h-full object-cover -translate-y-2 opacity-110"
        />
      </div>

      {/* Brand Header */}
      <div className="relative z-20 px-8 h-[220px] flex flex-col items-center">
        <div className="absolute top-5 left-6 right-6 flex items-center justify-between z-30">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all text-white backdrop-blur-sm shadow-sm"
          >
            <ChevronLeft size={22} strokeWidth={3} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all text-white backdrop-blur-sm shadow-sm">
            <RefreshCw size={18} strokeWidth={3} />
          </button>
        </div>

        <div className="pt-16 flex flex-col items-center">
          <img
            src="/LogoSVG 1 (1).png"
            alt="Wegagen Bank"
            className="h-10 object-contain drop-shadow-lg"
          />
          <h2 className="text-white text-[15px] font-bold tracking-tight mt-6 opacity-90">{walletTitle}</h2>
        </div>
      </div>

      {/* Main Form Card - Pixel-perfect replication of WegagenTransferScreen */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.985 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: reduceMotion ? 0 : 0.46,
          ease: [0.22, 1, 0.36, 1],
          delay: reduceMotion ? 0 : 0.04,
        }}
        className="absolute bg-white h-[calc(100%-180px)] left-4 right-4 rounded-[28px] top-[160px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] z-30 overflow-y-auto no-scrollbar pb-4"
      >
        <div className="p-4 pb-0 pt-4">
          <div className="space-y-2">

            {/* Wallet Context Header */}
            <div className="flex items-center gap-3 bg-[#fff9f4] border border-orange-100 rounded-[16px] px-3 py-2 mb-1">
               <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-sm border border-orange-50 overflow-hidden">
                  <div className="flex items-center justify-center w-full h-full">
                     <img src={walletLogo} alt="" className={`${walletTitle.toLowerCase().includes('awach') ? 'w-[64px] h-[64px] scale-[2.4]' : 'w-6 h-6'} object-contain`} />
                  </div>
               </div>
               <span className="text-[#004360] text-[13px] font-bold">{walletTitle}</span>
            </div>

            {/* Field: Select Account */}
            <div className="space-y-2 relative">
              <label className="text-[#004360] text-[13px] font-bold ml-1">Select Account</label>
              <button
                onClick={() => setShowAccDropdown(!showAccDropdown)}
                className="w-full flex items-center justify-between bg-[#fff9f4] border border-orange-100 rounded-[12px] px-2 py-2 focus:ring-4 focus:ring-orange-50 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-100/50 flex items-center justify-center text-[#ff6b0b] shrink-0">
                    <Wallet size={18} strokeWidth={2.5} />
                  </div>
                  <span className={`text-[#004360] text-[14px] font-semibold ${selectedAccIdx === -1 ? "opacity-30" : ""}`}>
                    {selectedAccIdx === -1 ? "Select Account" : `${accounts[selectedAccIdx].type} - ${accounts[selectedAccIdx].number.slice(-4)}`}
                  </span>
                </div>
                <ChevronDown size={18} className={`text-[#ff6b0b] transition-transform duration-300 ${showAccDropdown ? "rotate-180" : ""}`} strokeWidth={2.5} />
              </button>

              {showAccDropdown && (
                <>
                  <div className="fixed inset-0 z-40 bg-black/5 backdrop-blur-[2px]" onClick={() => setShowAccDropdown(false)} />
                  <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-50 overflow-hidden border border-orange-100 animate-in fade-in zoom-in-95 duration-200">
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
                            <span className="text-[13px] font-black uppercase tracking-wider">{acc.type}</span>
                            <span className="text-[11px] opacity-40 font-bold">{acc.number}</span>
                          </div>
                          {selectedAccIdx === idx && (
                            <div className="w-2 h-2 rounded-full bg-[#ff6b0b]" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Field: Destination (Wallet or MF Number) */}
            <div className="space-y-2">
              <label className="text-[#004360] text-[13px] font-bold ml-1">{isMF ? 'Account Number' : 'Wallet Number'}</label>
              <div className="relative group">
                <div className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-orange-100/50 flex items-center justify-center text-[#ff6b0b] transition-colors group-focus-within:bg-[#ff6b0b] group-focus-within:text-white">
                  <User size={18} strokeWidth={2.5} />
                </div>
                <input
                  type="text"
                  placeholder={isMF ? "Enter destination account number" : "Enter receiver phone number"}
                  className="w-full bg-[#fff9f4] border border-orange-100 rounded-[12px] pl-14 pr-5 py-3 outline-none text-[#004360] font-semibold text-[14px] placeholder:text-[#004360]/20 focus:bg-white focus:border-[#ff6b0b]/40 transition-all"
                />
              </div>
            </div>

            {/* Field: Enter Amount */}
            <div className="space-y-2">
              <label className="text-[#004360] text-[13px] font-bold ml-1">Enter Amount</label>
              <div className="relative group">
                <div className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-orange-100/50 flex items-center justify-center text-[#ff6b0b] transition-colors group-focus-within:bg-[#ff6b0b] group-focus-within:text-white">
                  <Banknote size={18} strokeWidth={2.5} />
                </div>
                <input
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-[#fff9f4] border border-orange-100 rounded-[12px] pl-14 pr-5 py-3 outline-none text-[#004360] font-bold text-[15px] placeholder:text-[#004360]/20 focus:bg-white focus:border-[#ff6b0b]/40 transition-all"
                />
              </div>
            </div>

            {/* Field: Enter Reason */}
            <div className="space-y-2">
              <label className="text-[#004360] text-[13px] font-bold ml-1">Enter Reason</label>
              <div className="relative group">
                <div className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-orange-100/50 flex items-center justify-center text-[#ff6b0b] transition-colors group-focus-within:bg-[#ff6b0b] group-focus-within:text-white">
                  <FileText size={18} strokeWidth={2.5} />
                </div>
                <input
                  type="text"
                  placeholder="Enter transfer reason"
                  className="w-full bg-[#fff9f4] border border-orange-100 rounded-[12px] pl-14 pr-5 py-3 outline-none text-[#004360] font-semibold text-[14px] placeholder:text-[#004360]/20 focus:bg-white focus:border-[#ff6b0b]/40 transition-all"
                />
              </div>
            </div>

            {/* Transfer Button - Replicated Shape/Style */}
            <div className="pt-2">
              <button
                onClick={handleTransfer}
                className="w-full h-[42px] bg-[#ff8f12] hover:bg-[#ff6b0b] text-white rounded-[20px] font-black text-[15px] shadow-[0_10px_20px_rgba(255,107,11,0.25)] hover:shadow-[0_14px_30px_rgba(255,107,11,0.35)] active:scale-[0.98] transition-all"
              >
                Transfer
              </button>
            </div>

            {/* Recent Transactions - Replicated Section */}
            <div className="pt-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[#004360] text-[13px] font-black tracking-tight tracking-tight">Recent {isMF ? 'Activity' : 'Wallet Activity'}</h3>
                <button className="text-[#ff8f12] text-[11px] font-bold hover:underline transition-all">See All</button>
              </div>

              <div className="space-y-1">
                {[
                  { type: isMF ? "Transfer" : "Top-up", name: "Telebirr Wallet", amount: "-150.00", date: "Mon April 12 2026 14:20", isCredit: false, icon: "/telebirr 1.png" },
                  { type: isMF ? "Payment" : "Receive", name: "EBirr Wallet", amount: "+450.00", date: "Mon April 12 2026 10:15", isCredit: true, icon: "/Ebirr_Logo 1.png" },
                  { type: isMF ? "Transfer" : "Top-up", name: "Telebirr Agent", amount: "-300.00", date: "Sun April 11 2026 18:45", isCredit: false, icon: "/telebirr 1.png" },
                ].slice(0, 3).map((tx, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 py-1.5 px-3 bg-white border border-gray-50 rounded-[16px] shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(255,107,11,0.08)] hover:bg-[#fffdfb] active:scale-[0.98] transition-all duration-300 cursor-pointer group"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-gray-50 bg-gray-50/50`}>
                      <img src={tx.icon} alt="" className="w-5 h-5 object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[#ff8f12] text-[12px] font-black leading-none mb-1">{tx.type}</p>
                      <p className="text-[#004360] text-[12px] font-semibold truncate">{tx.name}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className={`text-[13px] font-black leading-none mb-1 ${tx.isCredit ? 'text-green-600' : 'text-[#e05a0b]'}`}>
                        {tx.amount} ETB
                      </p>
                      <p className="text-[#004360]/30 text-[9px] font-semibold whitespace-nowrap">{tx.date}</p>
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
