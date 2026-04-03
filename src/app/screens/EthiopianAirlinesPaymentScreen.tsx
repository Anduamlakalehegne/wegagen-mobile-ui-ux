import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  Plane,
  ChevronDown,
  Wallet,
  Settings as SettingsIcon,
  Home as HomeIcon,
  Receipt,
  Users,
  LogOut,
  Fingerprint,
  Info,
  FileText
} from 'lucide-react';

export default function EthiopianAirlinesPaymentScreen() {
  const navigate = useNavigate();
  const [pnr, setPnr] = useState('');
  const [remark, setRemark] = useState('');
  const [showAccDropdown, setShowAccDropdown] = useState(false);
  const [selectedAccIdx, setSelectedAccIdx] = useState(0);

  const accounts = [
    { type: "SAVING", number: "0911121314156", balance: "125,110.90" },
    { type: "CHECKING", number: "0922232425267", balance: "45,210.50" }
  ];

  const handlePay = () => {
    // Navigate to confirmation or PIN screen
    navigate('/confirm-pin');
  };

  return (
    <div className="bg-[#fcfcfc] relative w-full h-full overflow-hidden font-sans flex flex-col" data-name="Ethiopian Airlines Payment Screen">
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
        <div className="absolute top-5 left-6 z-30">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all text-white backdrop-blur-sm"
          >
            <ChevronLeft size={22} strokeWidth={3} />
          </button>
        </div>

        <div className="pt-16 flex flex-col items-center">
          <img
            src="/LogoSVG 1 (1).png"
            alt="Wegagen Bank"
            className="h-10 object-contain drop-shadow-lg"
          />
          <h2 className="text-white text-[15px] font-bold tracking-tight mt-6 opacity-90">Ethiopian Airlines Payment</h2>
        </div>
      </div>

      {/* Content Container (Form Section - Styled exactly like WegagenTransfer) */}
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1], delay: 0.04 }}
        className="absolute bg-white h-[calc(100%-180px)] left-4 right-4 rounded-[28px] top-[160px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] z-30 overflow-hidden flex flex-col px-6 py-8"
      >
        <div className="flex-1 overflow-y-auto no-scrollbar pt-2 space-y-3">
          {/* Field: Select Account Dropdown */}
          <div className="space-y-2">
            <label className="text-[#004360] text-[13px] font-bold ml-1">Select Account</label>
            <div className="relative">
              <button
                onClick={() => setShowAccDropdown(!showAccDropdown)}
                className="w-full flex items-center justify-between px-4 py-3 bg-[#fff9f4] border border-orange-100 rounded-[12px] hover:border-[#ff8f12]/40 transition-all active:scale-[0.98]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-100/50 flex items-center justify-center text-[#ff6b0b]">
                    <Wallet size={18} strokeWidth={2.5} />
                  </div>
                  <span className="text-[#004360] text-[14px] font-semibold">
                    {accounts[selectedAccIdx].type} - {accounts[selectedAccIdx].number.slice(-4)}
                  </span>
                </div>
                <ChevronDown size={18} className={`text-[#ff6b0b] transition-transform duration-300 ${showAccDropdown ? "rotate-180" : ""}`} strokeWidth={2.5} />
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
                              <span className="text-[13px] font-black uppercase tracking-wider">{acc.type}</span>
                              <span className="text-[11px] opacity-40 font-bold">{acc.number}</span>
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
          </div>

          {/* Field: PNR */}
          <div className="space-y-2">
            <label className="text-[#004360] text-[13px] font-bold ml-1">PNR</label>
            <div className="relative group">
              <div className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-orange-100/50 flex items-center justify-center text-[#ff6b0b] transition-colors group-focus-within:bg-[#ff6b0b] group-focus-within:text-white">
                <Plane size={18} strokeWidth={2.5} />
              </div>
              <input
                type="text"
                placeholder="Enter PNR Number"
                value={pnr}
                onChange={(e) => setPnr(e.target.value)}
                className="w-full bg-[#fff9f4] border border-orange-100 rounded-[12px] pl-14 pr-5 py-3 outline-none text-[#004360] font-semibold text-[14px] placeholder:text-[#004360]/20 focus:bg-white focus:border-[#ff6b0b]/40 transition-all"
              />
            </div>
          </div>

          {/* Field: Remark */}
          <div className="space-y-2">
            <label className="text-[#004360] text-[13px] font-bold ml-1">Remark</label>
            <div className="relative group">
              <div className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-orange-100/50 flex items-center justify-center text-[#ff6b0b] transition-colors group-focus-within:bg-[#ff6b0b] group-focus-within:text-white">
                <FileText size={18} strokeWidth={2.5} />
              </div>
              <input
                type="text"
                placeholder="Enter remark"
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
                className="w-full bg-[#fff9f4] border border-orange-100 rounded-[12px] pl-14 pr-5 py-3 outline-none text-[#004360] font-semibold text-[14px] placeholder:text-[#004360]/20 focus:bg-white focus:border-[#ff6b0b]/40 transition-all"
              />
            </div>
          </div>

          {/* Pay Button */}
          <div className="pt-3 pb-2">
            <button
              onClick={handlePay}
              className="w-full h-[48px] bg-[#ff8f12] hover:bg-[#ff6b0b] text-white rounded-[20px] font-black text-[17px] shadow-[0_10px_20px_rgba(255,107,11,0.25)] hover:shadow-[0_14px_30px_rgba(255,107,11,0.35)] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span>Pay</span>
            </button>
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
      <span className={`text-[10px] font-medium ${active ? 'text-white' : 'text-white/60'}`}>{label}</span>
    </button>
  );
}
