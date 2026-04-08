import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSwipeable } from 'react-swipeable';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';
import {
  Menu,
  RefreshCw,
  Eye,
  EyeOff,
  ChevronDown,
  ChevronRight,
  ArrowLeftRight,
  CreditCard,
  TrendingUp,
  MoreHorizontal,
  Home as HomeIcon,
  Receipt,
  Users,
  LogOut,
  Wallet,
  Building2,
  Banknote,
  LayoutGrid,
  List as ListIcon,
  Landmark,
  SendHorizontal,
  Smartphone,
  LayoutPanelLeft,
  Gift,
  CheckCircle2,
  Plane,
  GraduationCap,
  Droplets,
  Stethoscope,
  ShoppingCart,
  Key,
  Fuel,
  Heart,
  Globe,
  DollarSign,
  Fingerprint,
  Languages,
  Activity,
  FileText,
  Lock,
  Info,
  Settings as SettingsIcon,
  QrCode
} from 'lucide-react';

interface TransactionItemProps {
  icon: React.ReactNode;
  title: string;
  iconBgColor: string;
  onClick: () => void;
  isGrid?: boolean;
}

function TransactionItem({ icon, title, iconBgColor, onClick, isGrid }: TransactionItemProps) {
  if (isGrid) {
    return (
      <button
        onClick={onClick}
        className="group relative flex flex-col items-center justify-center p-2 h-[115px] w-full bg-white border border-[#fff6ec] rounded-[22px] shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(255,107,11,0.08)] transition-all duration-300 active:scale-95 text-center"
      >
        <div className={`w-[46px] h-[46px] rounded-full flex items-center justify-center ${iconBgColor} mb-2 shadow-sm group-hover:scale-110 transition-transform duration-500`}>
          <div className="transform group-hover:rotate-12 transition-transform duration-500">
            {icon}
          </div>
        </div>
        <p className="text-[#004360] text-[11px] font-semibold leading-snug line-clamp-2 px-1.5 opacity-95">
          {title}
        </p>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-4 w-full h-[52px] bg-white border border-gray-50 rounded-[16px] px-4 mb-0 transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(255,107,11,0.08)] hover:bg-[#fffdfb] active:scale-[0.98] active:bg-orange-50/10"
    >
      <div className={`w-[38px] h-[38px] rounded-[10px] flex items-center justify-center ${iconBgColor} shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-sm border border-black/[0.03]`}>
        {icon}
      </div>
      <div className="flex-1 text-left">
        <p className="text-[#053d57] text-[14px] font-semibold tracking-tight">
          {title}
        </p>
      </div>
      {/* <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-50/80 group-hover:bg-[#ff6b0b] group-hover:text-white transition-all duration-300">
        <ChevronRight size={12} strokeWidth={2} />
      </div> */}
    </button>
  );
}

interface QuickActionProps {
  icon: React.ReactNode;
  label: string;
  bgColor: string;
  onClick: () => void;
}

function QuickAction({ icon, label, bgColor, onClick }: QuickActionProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1.5 transition-all duration-300 hover:opacity-80 active:scale-95"
    >
      <div
        className={`w-[52px] h-[52px] rounded-[16px] flex items-center justify-center ${bgColor} shadow-sm border border-black/[0.02]`}
      >
        {icon}
      </div>
      <span className="text-[#004360] text-[12px] font-semibold tracking-tight">
        {label}
      </span>
    </button>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}

function NavItem({ icon, label, active, onClick }: NavItemProps) {
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

function AdSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const ads = [
    {
      id: 1,
      title: "Interest-Free Banking",
      desc: "Ethical. Transparent. Zero-Interest Savings.",
      icon: <Landmark className="text-white" size={24} />,
      bg: "bg-gradient-to-r from-[#004360] to-[#053D57]",
      accent: "bg-orange-500/20"
    },
    {
      id: 2,
      title: "New Elite Experience",
      desc: "Faster, smarter and more secure than ever.",
      icon: <Smartphone className="text-white" size={24} />,
      bg: "bg-gradient-to-r from-[#FF8F12] to-[#FF6B0B]",
      accent: "bg-white/20"
    },
    {
      id: 3,
      title: "Refer & Earn",
      desc: "Invite a friend and earn up to 500 ETB rewards.",
      icon: <Gift className="text-white" size={24} />,
      bg: "bg-gradient-to-r from-[#10b981] to-[#059669]",
      accent: "bg-black/10"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ads.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [ads.length]);

  return (
    <div className="relative w-full h-[95px] mb-4 group overflow-hidden rounded-[20px] shadow-[0_12px_30px_rgba(0,0,0,0.08)] z-20">
      {ads.map((ad, index) => (
        <div
          key={ad.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out flex items-center px-5 ${index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            } ${ad.bg}`}
        >
          {/* Decorative Pattern */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-white/5 skew-x-[-20deg] translate-x-8" />

          <div className={`w-[52px] h-[52px] rounded-2xl flex items-center justify-center ${ad.accent} backdrop-blur-sm shadow-inner shrink-0 z-10 animate-in zoom-in-50 duration-700`}>
            {ad.icon}
          </div>

          <div className="ml-4 flex-1 z-10 font-sans text-left">
            <h3 className="text-white text-[14px] font-black uppercase tracking-wide leading-tight mb-0.5">
              {ad.title}
            </h3>
            <p className="text-white/80 text-[11px] font-medium line-clamp-2">
              {ad.desc}
            </p>
          </div>
        </div>
      ))}

      {/* Pagination Highlights */}
      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
        {ads.map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-5 bg-white' : 'w-1.5 bg-white/40'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function HomeScreen() {
  const navigate = useNavigate();
  const [showBalance, setShowBalance] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isGridView, setIsGridView] = useState(false);
  const [selectedAccIdx, setSelectedAccIdx] = useState(0);
  const [showAccDropdown, setShowAccDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState('Transfer');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isLogoutExiting, setIsLogoutExiting] = useState(false);
  const reduceMotion = useReducedMotion();

  const navigateWithTransition = (path: string) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const transitionDurationMs = reduceMotion ? 0 : 260;
    window.setTimeout(() => navigate(path), transitionDurationMs);
  };

  const toggleLogoutModal = (show: boolean) => {
    if (!show) {
      setIsLogoutExiting(true);
      setTimeout(() => {
        setShowLogoutModal(false);
        setIsLogoutExiting(false);
      }, 350);
    } else {
      setShowLogoutModal(true);
      setMenuOpen(false);
    }
  };

  const accounts = [
    { type: "SAVING", number: "0911121314156", balance: "125,110.90" },
    { type: "CHECKING", number: "0922232425267", balance: "45,210.50" }
  ];

  const currentAccount = accounts[selectedAccIdx];

  const quickActions = [
    {
      id: 'Transfer',
      icon: <ArrowLeftRight size={24} strokeWidth={2} className={activeTab === 'Transfer' ? "text-white" : "text-[#ff6b0b]"} />,
      label: "Transfer",
      bgColor: activeTab === 'Transfer' ? "bg-[#FF8F12]" : "bg-[#fff6ec]",
      onClick: () => setActiveTab('Transfer'),
    },
    {
      id: 'Payment',
      icon: <CreditCard size={24} strokeWidth={2} className={activeTab === 'Payment' ? "text-white" : "text-[#ff6b0b]"} />,
      label: "Payment",
      bgColor: activeTab === 'Payment' ? "bg-[#FF8F12]" : "bg-[#fff6ec]",
      onClick: () => setActiveTab('Payment'),
    },
    {
      id: 'Top-up',
      icon: <TrendingUp size={24} strokeWidth={2} className={activeTab === 'Top-up' ? "text-white" : "text-[#ff6b0b]"} />,
      label: "Top-up",
      bgColor: activeTab === 'Top-up' ? "bg-[#FF8F12]" : "bg-[#fff6ec]",
      onClick: () => setActiveTab('Top-up'),
    },
    {
      id: 'Other',
      icon: <LayoutGrid size={24} strokeWidth={2} className={activeTab === 'Other' ? "text-white" : "text-[#ff6b0b]"} />,
      label: "Other",
      bgColor: activeTab === 'Other' ? "bg-[#FF8F12]" : "bg-[#fff6ec]",
      onClick: () => setActiveTab('Other'),
    },
  ];

  const transferItems = [
    {
      icon: <img src="/Group 82.png" alt="Wegagen Bank" className="w-[28px] h-[28px] object-contain" />,
      title: "To Wegagen Bank Account",
      iconBgColor: "bg-[#FFF6EC]",
      onClick: () => navigateWithTransition("/transfer"),
    },
    {
      icon: <img src="/Ebirr_Logo 1.png" alt="EBirr" className="w-[28px] h-[28px] object-contain" />,
      title: "To Wegagen EBirr",
      iconBgColor: "bg-[#FFF6EC]",
      onClick: () => navigateWithTransition("/ebirr-transfer"),
    },
    {
      icon: <Landmark size={20} strokeWidth={2} className="text-[#ff6b0b]" />,
      title: "To Other Bank Account",
      iconBgColor: "bg-[#FFF6EC]",
      onClick: () => navigateWithTransition("/other-bank-transfer"),
    },
    {
      icon: <Wallet size={20} strokeWidth={2} className="text-[#ff6b0b]" />,
      title: "To Wallet",
      iconBgColor: "bg-[#FFF6EC]",
      onClick: () => navigateWithTransition("/wallet"),
    },
    {
      icon: <Banknote size={20} strokeWidth={2} className="text-[#ff6b0b]" />,
      title: "To Micro Finance",
      iconBgColor: "bg-[#FFF6EC]",
      onClick: () => navigateWithTransition("/micro-finance"),
    },
  ];

  const paymentItems = [
    {
      icon: <Plane size={20} strokeWidth={2.5} className="text-[#ff6b0b]" />,
      title: "Ethiopian Airlines Payment",
      iconBgColor: "bg-[#FFF6EC]",
      onClick: () => navigateWithTransition("/ethiopian-airlines"),
    },
    {
      icon: <GraduationCap size={20} strokeWidth={2.5} className="text-[#ff6b0b]" />,
      title: "School Payment",
      iconBgColor: "bg-[#FFF6EC]",
      onClick: () => console.log("School clicked"),
    },
    {
      icon: <Droplets size={20} strokeWidth={2.5} className="text-[#ff6b0b]" />,
      title: "Water Payments",
      iconBgColor: "bg-[#FFF6EC]",
      onClick: () => navigateWithTransition("/water-providers"),
    },
    {
      icon: <Building2 size={20} strokeWidth={2.5} className="text-[#ff6b0b]" />,
      title: "Tigray Housing Payment",
      iconBgColor: "bg-[#FFF6EC]",
      onClick: () => console.log("Housing clicked"),
    },
    {
      icon: <Stethoscope size={20} strokeWidth={2.5} className="text-[#ff6b0b]" />,
      title: "Health Payments",
      iconBgColor: "bg-[#FFF6EC]",
      onClick: () => console.log("Health clicked"),
    },
    {
      icon: <Key size={20} strokeWidth={2.5} className="text-[#ff6b0b]" />,
      title: "Rental Payments",
      iconBgColor: "bg-[#FFF6EC]",
      onClick: () => console.log("Rental clicked"),
    },
    {
      icon: <Users size={20} strokeWidth={2.5} className="text-[#ff6b0b]" />,
      title: "Cooperatives Payment",
      iconBgColor: "bg-[#FFF6EC]",
      onClick: () => console.log("Cooperatives clicked"),
    },
    {
      icon: <ShoppingCart size={20} strokeWidth={2.5} className="text-[#ff6b0b]" />,
      title: "Pay Merchant",
      iconBgColor: "bg-[#FFF6EC]",
      onClick: () => console.log("Merchant clicked"),
    },
    {
      icon: <Fuel size={20} strokeWidth={2.5} className="text-[#ff6b0b]" />,
      title: "Fuel Payment",
      iconBgColor: "bg-[#FFF6EC]",
      onClick: () => console.log("Fuel clicked"),
    },
  ];

  const topUpItems = [
    {
      icon: <Smartphone size={20} strokeWidth={2.5} className="text-[#ff6b0b]" />,
      title: "Ethio Telecom",
      iconBgColor: "bg-[#FFF6EC]",
      onClick: () => console.log("Ethio Telecom clicked"),
    },
  ];

  const otherItems = [
    {
      icon: <DollarSign size={20} strokeWidth={2.5} className="text-[#ff6b0b]" />,
      title: "ATM Cashout",
      iconBgColor: "bg-[#FFF6EC]",
      onClick: () => console.log("ATM clicked"),
    },
    {
      icon: <CreditCard size={20} strokeWidth={2.5} className="text-[#ff6b0b]" />,
      title: "Card Services",
      iconBgColor: "bg-[#FFF6EC]",
      onClick: () => console.log("Card clicked"),
    },
    {
      icon: <Heart size={20} strokeWidth={2.5} className="text-[#ff6b0b]" />,
      title: "Donation",
      iconBgColor: "bg-[#FFF6EC]",
      onClick: () => console.log("Donation clicked"),
    },
    {
      icon: <Globe size={20} strokeWidth={2.5} className="text-[#ff6b0b]" />,
      title: "SWIFT",
      iconBgColor: "bg-[#FFF6EC]",
      onClick: () => console.log("SWIFT clicked"),
    },
    {
      icon: <Fingerprint size={20} strokeWidth={2.5} className="text-[#ff6b0b]" />,
      title: "Fayda",
      iconBgColor: "bg-[#FFF6EC]",
      onClick: () => console.log("Fayda clicked"),
    },
  ];

  const currentTransactions = activeTab === 'Payment' ? paymentItems :
    activeTab === 'Top-up' ? topUpItems :
      activeTab === 'Other' ? otherItems :
        transferItems;

  const tabs = ['Transfer', 'Payment', 'Top-up', 'Other'];

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
    <div {...handlers} className="bg-transparent relative w-full h-full overflow-hidden" data-name="Home Screen">
      {/* Background Layer (Behind Everything) */}
      <div className="absolute left-0 right-0 h-[250px] overflow-hidden z-0">
        <img
          src="/Mask group (1).png"
          alt="Header Background"
          className="w-full h-full object-cover opacity-100"
        />
      </div>

      {/* Header Interactives (Top-most Layer) */}
      <div className="absolute top-0 left-0 right-0 h-[250px] z-50 pointer-events-none">
        <div className="p-4 flex items-center justify-between pointer-events-auto">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all text-white backdrop-blur-sm"
          >
            <Menu size={24} />
          </button>
          <h1 className="text-white text-[18px] font-bold">Home</h1>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all text-white backdrop-blur-sm">
            <RefreshCw size={20} />
          </button>
        </div>

        {/* Minimalist Centered Balance Section */}
        <div className="relative flex flex-col items-center pointer-events-auto">
          <div className="flex flex-col items-center">
            <p className="text-white/75 text-[10px] font-extrabold uppercase tracking-widest mb-1">Available Balance</p>
            <div className="flex items-center gap-2.5">
              <h2 className="text-white text-[25px] font-black tracking-tight leading-none">
                {showBalance ? `ETB ${currentAccount.balance}` : "ETB • • • • •"}
              </h2>
              <button
                onClick={() => setShowBalance(!showBalance)}
                className="w-[34px] h-[34px] rounded-full bg-black/10 flex items-center justify-center text-white/90 hover:bg-black/20 transition-all active:scale-90"
              >
                {showBalance ? (
                  <EyeOff size={18} strokeWidth={2.5} />
                ) : (
                  <Eye size={18} strokeWidth={2.5} />
                )}
              </button>
            </div>
          </div>

          <div className="relative w-full flex justify-center">
            <button
              onClick={() => setShowAccDropdown(!showAccDropdown)}
              className="mt-4 flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full px-5 py-2 border border-white/10 transition-all active:scale-95"
            >
              <span className="text-white/60 text-[11px] font-bold uppercase">{currentAccount.type}:</span>
              <span className="text-white text-[13px] font-extrabold tracking-wide">
                {showBalance ? currentAccount.number : "•••• •••• 1314"}
              </span>
              <ChevronDown
                size={14}
                className={`text-white/40 ml-1 transition-transform duration-300 ${showAccDropdown ? "rotate-180" : ""}`}
                strokeWidth={3}
              />
            </button>

            {/* Compact Account Dropdown with Backdrop */}
            {showAccDropdown && (
              <>
                <div
                  className="fixed inset-0 z-[90] bg-transparent"
                  onClick={() => setShowAccDropdown(false)}
                />
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[220px] bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] z-[100] overflow-hidden border border-orange-100 animate-in fade-in zoom-in-95 duration-200">
                  <div className="p-1.5 flex flex-col gap-1">
                    {accounts.map((acc, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSelectedAccIdx(idx);
                          setShowAccDropdown(false);
                        }}
                        className={`w-full px-3 py-2.5 rounded-xl text-left transition-all flex items-center justify-between group ${selectedAccIdx === idx ? "bg-orange-50/70 text-[#ff6b0b]" : "text-[#053d57] hover:bg-gray-50"}`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center ${selectedAccIdx === idx ? "bg-[#ff6b0b] text-white" : "bg-gray-100 text-gray-400"}`}>
                            <Wallet size={14} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[11px] font-black uppercase tracking-tight">{acc.type} - {acc.number}</span>
                            <div className="flex items-center gap-1.5">
                              <span className="text-[10px] opacity-60 font-bold whitespace-nowrap">
                                ETB {showBalance ? (acc as any).balance || "125,110.90" : "• • • • •"}
                              </span>
                              <div
                                onClick={(e) => { e.stopPropagation(); setShowBalance(!showBalance); }}
                                className="p-0.5 rounded-full hover:bg-orange-200/30 text-[#ff6b0b] transition-colors"
                              >
                                {showBalance ? <EyeOff size={12} strokeWidth={2.5} /> : <Eye size={12} strokeWidth={2.5} />}
                              </div>
                            </div>
                          </div>
                        </div>
                        {selectedAccIdx === idx && (
                          <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b0b]" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Container (Middle Layer) */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.985 }}
        animate={
          reduceMotion
            ? undefined
            : isTransitioning
              ? { opacity: 0, y: -18, scale: 0.99, filter: 'blur(2px)' }
              : { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }
        }
        transition={{
          duration: reduceMotion ? 0 : isTransitioning ? 0.26 : 0.46,
          ease: isTransitioning ? [0.4, 0, 1, 1] : [0.22, 1, 0.36, 1],
          delay: reduceMotion || isTransitioning ? 0 : 0.04,
        }}
        className="absolute top-[200px] left-0 right-0 bottom-0 flex flex-col z-10"
      >
        {/* Sticky Section: Quick Actions & View All */}
        <div className="px-4 flex-none z-10">
          {/* Quick Actions Card */}
          <div className="bg-white rounded-[14px] px-4 py-2 shadow-lg mb-2">
            <div className="flex items-center justify-between">
              {quickActions.map((action, index) => (
                <QuickAction
                  key={index}
                  icon={action.icon}
                  label={action.label}
                  bgColor={action.bgColor}
                  onClick={action.onClick}
                />
              ))}
            </div>
          </div>

          {/* View Toggle Switcher */}
          <div className="flex justify-end mb-2">
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

        {/* Scrollable Section: Transaction List */}
        <div className="flex-1 overflow-y-auto no-scrollbar px-3 pb-[10px]">
          {/* Transaction List */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              {...handlers}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`${isGridView ? 'grid grid-cols-3 gap-1.5 items-stretch' : 'flex flex-col gap-1.5'} mb-2`}
            >
              {currentTransactions.map((transaction, index) => (
                <TransactionItem
                  key={index}
                  icon={transaction.icon}
                  title={transaction.title}
                  iconBgColor={transaction.iconBgColor}
                  onClick={transaction.onClick}
                  isGrid={isGridView}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Sticky Advertisement Section */}
        <div className="px-4 pb-[62px] z-20">
          <AdSlider />
        </div>
      </motion.div>

      {/* Floating Sticky Bottom Navigation */}
      <div className="absolute bottom-[10px] left-[16px] right-[16px] h-[58px] bg-[#FF8F12] rounded-[25px] shadow-[0_8px_30px_rgba(0,0,0,0.2)] flex items-center justify-around px-1 z-30">
        <NavItem
          icon={<HomeIcon size={20} strokeWidth={2} className="text-white" />}
          label="Home"
          active={true}
          onClick={() => console.log("Home")}
        />
        <NavItem
          icon={<QrCode size={20} strokeWidth={2} className="text-white opacity-60" />}
          label="Scan"
          onClick={() => console.log("Scan")}
        />
        <NavItem
          icon={<Receipt size={20} strokeWidth={2} className="text-white placeholder:opacity-60" />}
          label="Transaction"
          onClick={() => navigateWithTransition('/transactions')}
        />
        <NavItem
          icon={<Users size={20} strokeWidth={2} className="text-white opacity-60" />}
          label="Beneficiary"
          onClick={() => console.log("Beneficiary")}
        />
      </div>

      {/* Modern Side Menu Drawer (Constrained to Phone Container) */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-[100]"
            />

            {/* Slide-out Menu Panel (Absolute within Phone) */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 250 }}
              className="absolute top-0 left-0 bottom-0 w-[290px] bg-white z-[110] shadow-[10px_0_50px_rgba(0,0,0,0.15)] flex flex-col"
            >
              {/* Premium Branded Header (Consistent with Transfer Screens) */}
              <div className="relative h-[220px] overflow-hidden shrink-0">
                {/* Background Layer */}
                <div className="absolute inset-0 z-0 h-full">
                  <div className="absolute inset-x-0 h-full bg-gradient-to-br from-[#FF8F12] to-[#FF6B0B] opacity-100" />
                  <img src="/Mask group (1).png" alt="" className="absolute top-0 left-0 w-full h-full object-cover opacity-100" />
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full pt-4">
                  <div className="flex flex-col items-center">
                    <img src="/LogoSVG 1 (1).png" alt="Wegagen" className="h-10 object-contain drop-shadow-lg" />
                    <h3 className="text-white text-[15px] font-black uppercase tracking-[0.08em] mt-8 drop-shadow-md opacity-95">Excelling Together</h3>
                    <div className="h-[2px] w-8 bg-white/40 mt-1 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Menu Items List */}
              <div className="flex-1 overflow-y-auto py-4 px-4 custom-scrollbar">
                {[
                  { icon: <Languages size={18} />, label: "Change Language", onClick: () => console.log("Lang") },
                  { icon: <Activity size={18} />, label: "Exchange Rate", onClick: () => console.log("Rate") },
                  { icon: <FileText size={18} />, label: "Terms and Tariff", onClick: () => console.log("Terms") },
                  { icon: <Lock size={18} />, label: "Change PIN", onClick: () => console.log("PIN") },
                  { icon: <Info size={18} />, label: "About Us", onClick: () => console.log("About") },
                  { icon: <SettingsIcon size={18} />, label: "Settings", onClick: () => console.log("Settings") },
                  { icon: <LogOut size={18} />, label: "Logout", color: "text-red-500", onClick: () => toggleLogoutModal(true) },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      item.onClick();
                      if (item.label !== 'Logout') setMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-4 px-4 py-2 rounded-2xl hover:bg-orange-50/50 active:scale-[0.98] transition-all group"
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${item.color ? 'bg-red-50 text-red-500' : 'bg-[#fff6ec] text-[#ff6b0b] group-hover:bg-[#ff8f12] group-hover:text-white'}`}>
                      {item.icon}
                    </div>
                    <span className={`text-[13px] font-black tracking-tight ${item.color || 'text-[#004360] opacity-80'}`}>{item.label}</span>
                  </button>
                ))}
              </div>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-gray-100 bg-gray-50/20">
                <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] text-center">Version 4.5.12 Premium</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* --- LOGOUT CONFIRMATION MODAL (SLIDE FROM BOTTOM) --- */}
      {showLogoutModal && (
        <div className={`absolute inset-0 z-[200] flex flex-col justify-end ${isLogoutExiting ? 'transition-opacity duration-400 opacity-0' : 'animate-in fade-in'}`}>
          {/* Liquid Glass Backdrop */}
          <div className={`absolute inset-0 bg-[#004360]/10 transition-all duration-400 backdrop-blur-[12px] ${isLogoutExiting ? 'opacity-0' : 'opacity-100'}`} onClick={() => toggleLogoutModal(false)} />

          <div className={`relative w-full bg-white rounded-t-[44px] overflow-hidden shadow-[0_-15px_60px_rgba(0,0,0,0.15)] flex flex-col transition-transform duration-400 cubic-bezier(0.34,1.56,0.64,1) ${isLogoutExiting ? 'translate-y-full' : 'translate-y-0 animate-in slide-in-from-bottom-full'}`}>
            <div className="w-12 h-1.5 bg-gray-100 rounded-full mx-auto mt-4 mb-2 shrink-0" />

            <div className="px-8 pt-6 pb-2 flex flex-col items-center shrink-0">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-red-500 mb-4 shadow-sm border border-red-100">
                <LogOut size={28} strokeWidth={2.5} />
              </div>
              <h2 className="text-[#004360] text-[22px] font-black text-center mb-2">Sign Out</h2>
              <p className="text-[#004360]/60 text-[14px] font-semibold text-center leading-relaxed">
                Are you sure you want to sign out of your account?
              </p>
            </div>

            <div className="p-8 pt-6 pb-10 space-y-3">
              <button
                onClick={() => navigateWithTransition('/')}
                className="w-full h-[52px] bg-red-500 hover:bg-red-600 text-white rounded-[20px] font-black text-[15px] shadow-[0_10px_20px_rgba(239,68,68,0.25)] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                Yes, Sign Out
              </button>
              <button
                onClick={() => toggleLogoutModal(false)}
                className="w-full h-[52px] bg-gray-50 hover:bg-gray-100 text-[#004360] rounded-[20px] font-black text-[15px] active:scale-[0.98] transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
