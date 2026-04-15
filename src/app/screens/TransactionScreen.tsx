import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useSwipeable } from 'react-swipeable';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  ChevronLeft,
  ChevronDown,
  ArrowUpRight,
  ArrowDownLeft,
  Filter,
  Home as HomeIcon,
  Receipt,
  Users,
  LogOut,
  ArrowUpCircle,
  ArrowDownCircle,
  LayoutGrid,
  QrCode,
  Wallet,
  Eye,
  EyeOff
} from 'lucide-react';

export default function TransactionScreen() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');
  const [showAccDropdown, setShowAccDropdown] = useState(false);
  const [selectedAccIdx, setSelectedAccIdx] = useState(0);
  const [showBalance, setShowBalance] = useState(false);
  const reduceMotion = useReducedMotion();

  const accounts = [
    { type: "SAVING", number: "0911121314156", balance: "125,110.90" },
    { type: "CHECKING", number: "0922232425267", balance: "45,210.50" }
  ];

  const transactions = [
    { id: 1, type: 'Deposit', name: 'Abebe Kebede', amount: '+200.00 ETB', date: 'Mon April 12 2026 20:26', isCredit: true, status: 'Credited' },
    { id: 2, type: 'Transfer', name: 'Tigist Alemu', amount: '-500.00 ETB', date: 'Mon April 12 2026 18:14', isCredit: false, status: 'Debited' },
    { id: 3, type: 'Deposit', name: 'Yohannes Tadesse', amount: '+1,200.00 ETB', date: 'Sun April 11 2026 09:45', isCredit: true, status: 'Credited' },
    { id: 4, type: 'Transfer', name: 'Fikir T.', amount: '-300.00 ETB', date: 'Sat April 10 2026 14:22', isCredit: false, status: 'Debited' },
    { id: 5, type: 'Transfer', name: 'Fuel Station', amount: '-100.00 ETB', date: 'Fri April 09 2026 10:15', isCredit: false, status: 'Debited' },
    { id: 6, type: 'Deposit', name: 'Salary Payment', amount: '+25,000.00', date: 'Wed April 07 2026 08:30', isCredit: true, status: 'Credited' },
    { id: 7, type: 'Transfer', name: 'Supermarket Buy', amount: '-850.50 ETB', date: 'Tue April 06 2026 19:40', isCredit: false, status: 'Debited' },
    { id: 8, type: 'Deposit', name: 'External Wire', amount: '+4,500.00 ETB', date: 'Mon April 05 2026 11:20', isCredit: true, status: 'Credited' },
    { id: 9, type: 'Transfer', name: 'School Fees', amount: '-12,000.00 ETB', date: 'Sun April 04 2026 15:10', isCredit: false, status: 'Debited' },
    { id: 10, type: 'Transfer', name: 'Rent Payment', amount: '-15,000.00 ETB', date: 'Sat April 03 2026 10:00', isCredit: false, status: 'Debited' },
    { id: 11, type: 'Deposit', name: 'Cash Deposit', amount: '+1,500.00 ETB', date: 'Fri April 02 2026 16:45', isCredit: true, status: 'Credited' },
    { id: 12, type: 'Transfer', name: 'Gofundme Donation', amount: '-500.00 ETB', date: 'Thu April 01 2026 12:30', isCredit: false, status: 'Debited' },
  ];

  const filteredTransactions = activeTab === 'All'
    ? transactions
    : transactions.filter(t => t.status === activeTab);

  const tabs = ['All', 'Debited', 'Credited'];

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      const currentIndex = tabs.indexOf(activeTab);
      if (currentIndex < tabs.length - 1) {
        setActiveTab(tabs[currentIndex + 1]);
      }
    },
    onSwipedRight: () => {
      const currentIndex = tabs.indexOf(activeTab);
      if (currentIndex > 0) {
        setActiveTab(tabs[currentIndex - 1]);
      }
    },
    trackMouse: true,
  });

  return (
    <div {...handlers} className="bg-[#fcfcfc] relative w-full h-full overflow-hidden font-sans flex flex-col" data-name="Transaction Screen">
      {/* 1:1 Elite Header Background Layer */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden z-0">
        <img
          src="/Mask group.png"
          alt="Header Background"
          className="w-full h-full object-cover -translate-y-2 opacity-110"
        />
      </div>

      {/* Brand Header */}
      <div className="relative z-20 px-8 h-[220px] flex flex-col items-center shrink-0">
        <div className="absolute top-5 left-6 right-6 flex items-center justify-between z-30">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all text-white backdrop-blur-sm"
          >
            <ChevronLeft size={22} strokeWidth={3} />
          </button>
        </div>

        <div className="pt-16 flex flex-col items-center">
          <h2 className="text-white text-[15px] font-bold tracking-tight mt-6">Transactions</h2>
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
        className="absolute bg-white h-[calc(100%-170px)] left-4 right-4 rounded-[28px] top-[140px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] z-30 overflow-hidden flex flex-col">

        {/* Unified Account Selection (Standardized) */}
        <div className="p-4 pb-0 pt-6">
          <div className="relative">
            <button
              onClick={() => setShowAccDropdown(!showAccDropdown)}
              className="w-full flex items-center justify-between bg-[#fff9f4] border border-orange-100 rounded-[12px] px-2 py-2 focus:ring-4 focus:ring-orange-50 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-100/50 flex items-center justify-center text-[#ff6b0b] shrink-0">
                  <Wallet size={18} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-[#004360] text-[13px] font-black tracking-wider leading-tight">
                    {accounts[selectedAccIdx].number}
                  </span>
                  <span className="text-[#004360]/50 text-[11px] font-bold">
                    ETB {showBalance ? accounts[selectedAccIdx].balance : "• • • • •"}
                  </span>
                </div>
              </div>
              <div className="pr-1">
                <ChevronDown size={18} className={`text-[#ff6b0b] transition-transform duration-300 ${showAccDropdown ? "rotate-180" : ""}`} strokeWidth={2.5} />
              </div>
            </button>

            {/* Account Dropdown Overlay */}
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
                    className="absolute top-full left-0 right-0 mt-3 bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-50 overflow-hidden border border-orange-100"
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
        </div>

        {/* Tab Switcher with Dynamic White Icons */}
        <div className="px-5 py-4">
          <div className="flex items-center gap-2.5 p-1.5 bg-gray-50 rounded-[20px]">
            {[
              { id: 'All', label: 'All', icon: (active: boolean) => <LayoutGrid size={15} className={active ? "text-white" : ""} /> },
              { id: 'Debited', label: 'Debited', icon: (active: boolean) => <ArrowUpCircle size={15} className={active ? "text-white" : "text-red-500"} /> },
              { id: 'Credited', label: 'Credited', icon: (active: boolean) => <ArrowDownCircle size={15} className={active ? "text-white" : "text-green-600"} /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-2 px-1 rounded-[10px] text-[12px] font-black tracking-tight transition-all flex items-center justify-center gap-2 ${activeTab === tab.id
                  ? 'bg-[#FF8F12] text-white shadow-[0_6px_15px_rgba(255,143,18,0.3)] scale-[1.03]'
                  : 'text-[#004360]/50 hover:bg-gray-100'
                  }`}
              >
                {tab.icon(activeTab === tab.id)}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Transaction List */}
        <div className="flex-1 overflow-y-auto no-scrollbar px-5 pb-20">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="space-y-3"
            >
              {filteredTransactions.map((tx, idx) => (
                <div
                  key={tx.id}
                  className="flex items-center gap-3 py-2.5 px-3.5 bg-white border border-gray-50 rounded-[22px] shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(255,107,11,0.08)] hover:bg-[#fffdfb] active:scale-[0.98] transition-all duration-300 cursor-pointer group"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-sm ${tx.isCredit ? 'bg-green-50' : 'bg-red-50'}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={tx.isCredit ? '#16a34a' : '#ff6b0b'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      {tx.isCredit
                        ? <><path d="M12 19V5" /><path d="m5 12 7 7 7-7" /></>
                        : <><path d="M12 5v14" /><path d="m19 12-7-7-7 7" /></>
                      }
                    </svg>
                  </div>

                  <div className="flex-1 min-w-0 text-left">
                    <p className="text-[#ff8f12] text-[12px] font-black leading-none mb-1 uppercase tracking-tight">{tx.type}</p>
                    <p className="text-[#004360] text-[13px] font-bold truncate tracking-tight">{tx.name}</p>
                  </div>

                  <div className="text-right shrink-0">
                    <p className={`text-[14px] font-black leading-none mb-1.5 tracking-tight ${tx.isCredit ? 'text-green-600' : 'text-[#e05a0b]'}`}>
                      {tx.amount}
                    </p>
                    <p className="text-[#004360]/30 text-[9px] font-black whitespace-nowrap uppercase tracking-tighter">{tx.date}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
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
          icon={<QrCode size={20} className="text-white opacity-60" />}
          label="Scan"
          onClick={() => console.log("Scan")}
        />
        <NavItem
          icon={<Receipt size={20} className="text-white" />}
          label="Transaction"
          active={true}
          onClick={() => console.log("Transaction")}
        />
        <NavItem
          icon={<Users size={20} className="text-white opacity-60" />}
          label="Beneficiary"
          onClick={() => console.log("Beneficiary")}
        />
      </div>
    </div>
  );
}

function NavItem({ icon, label, active = false, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 flex items-center justify-center relative`}
    >
      <div className={`relative z-10 flex flex-col items-center justify-center gap-0.5 transition-all duration-300 h-[48px] w-full max-w-[68px] rounded-[14px] ${!active ? 'hover:bg-white/10' : ''}`}>
        {icon}
        <span className={`text-[10px] font-medium tracking-tight ${active ? 'text-white' : 'text-white/60'}`}>
          {label}
        </span>
      </div>
      {active && (
        <motion.div
          layoutId="bottomNavIndicator"
          className="absolute z-0 h-[48px] w-full max-w-[68px] bg-white/20 rounded-[14px]"
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        />
      )}
    </button>
  );
}
