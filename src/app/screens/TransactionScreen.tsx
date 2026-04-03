import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  ChevronLeft,
  ChevronDown,
  Filter,
  Home as HomeIcon,
  Receipt,
  Users,
  LogOut
} from 'lucide-react';

export default function TransactionScreen() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');
  const [showAccDropdown, setShowAccDropdown] = useState(false);
  const [selectedAccIdx, setSelectedAccIdx] = useState(0);
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
  ];

  const filteredTransactions = activeTab === 'All' 
    ? transactions 
    : transactions.filter(t => t.status === activeTab);

  return (
    <div className="bg-[#fcfcfc] relative w-full h-full overflow-hidden font-sans flex flex-col" data-name="Transaction Screen">
      {/* 1:1 Elite Header Background Layer */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden z-0">
        <img
          src="/Mask group (1).png"
          alt="Header Background"
          className="w-full h-full object-cover -translate-y-2 opacity-110"
        />
      </div>

      {/* Brand Header with Centered Grouping (Consistent with Transfer Screens) */}
      <div className="relative z-20 px-8 h-[220px] flex flex-col items-center shrink-0">
        <div className="absolute top-5 left-6 right-6 flex items-center justify-between z-30">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all text-white backdrop-blur-sm"
          >
            <ChevronLeft size={22} strokeWidth={3} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all text-white backdrop-blur-sm">
            <Filter size={18} strokeWidth={3} />
          </button>
        </div>

        <div className="pt-16 flex flex-col items-center">
          <img
            src="/LogoSVG 1 (1).png"
            alt="Wegagen Bank"
            className="h-10 object-contain drop-shadow-lg"
          />
          <h2 className="text-white text-[15px] font-bold tracking-tight mt-6 opacity-90">Recent Transactions</h2>
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
        {/* Account Filter Dropdown Header */}
        <div className="p-4 border-b border-gray-50 bg-gray-50/10">
          <button 
            onClick={() => setShowAccDropdown(!showAccDropdown)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-[#fff6ec] rounded-[15px] border border-orange-100/50"
          >
             <span className="text-[#004360] text-[13px] font-bold">{accounts[selectedAccIdx].type} - {accounts[selectedAccIdx].number.slice(-4)}</span>
             <ChevronDown size={16} className={`text-[#ff6b0b] transition-transform ${showAccDropdown ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="px-4 py-3">
          <div className="flex items-center gap-2 p-1 bg-gray-50 rounded-[15px]">
            {['All', 'Debited', 'Credited'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 rounded-[12px] text-[12px] font-bold transition-all ${
                  activeTab === tab 
                  ? 'bg-[#FF8F12] text-white shadow-md' 
                  : 'text-[#004360]/60 hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Transaction List - Styled identical to WegagenTransferScreen */}
        <div className="flex-1 overflow-y-auto no-scrollbar px-4 pb-16">
          <AnimatePresence mode="popLayout">
            <div className="space-y-2.5">
              {filteredTransactions.map((tx, idx) => (
                <motion.div
                  key={tx.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: idx * 0.04 }}
                  className="flex items-center gap-2.5 py-2 px-3 bg-white border border-gray-50 rounded-[18px] shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(255,107,11,0.08)] hover:bg-[#fffdfb] active:scale-[0.98] transition-all duration-300 cursor-pointer group"
                >
                  {/* Direction Icon */}
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${tx.isCredit ? 'bg-green-50' : 'bg-red-50'}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={tx.isCredit ? '#16a34a' : '#ff6b0b'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      {tx.isCredit
                        ? <><path d="M12 19V5" /><path d="m5 12 7 7 7-7" /></>
                        : <><path d="M12 5v14" /><path d="m19 12-7-7-7 7" /></>
                      }
                    </svg>
                  </div>

                  {/* Label & Name */}
                  <div className="flex-1 min-w-0 text-left">
                    <p className="text-[#ff8f12] text-[12px] font-black leading-none mb-0.5 uppercase tracking-tighter">{tx.type}</p>
                    <p className="text-[#004360] text-[12px] font-semibold truncate tracking-tight">{tx.name}</p>
                  </div>

                  {/* Amount & Date */}
                  <div className="text-right shrink-0">
                    <p className={`text-[13px] font-black leading-none mb-0.5 ${tx.isCredit ? 'text-green-600' : 'text-[#e05a0b]'}`}>
                      {tx.amount}
                    </p>
                    <p className="text-[#004360]/30 text-[9px] font-semibold whitespace-nowrap uppercase tracking-tighter">{tx.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
