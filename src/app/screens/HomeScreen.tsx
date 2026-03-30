import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  Menu,
  RefreshCw,
  Eye,
  EyeOff,
  ArrowRight,
  CreditCard,
  Plus,
  Home,
  TrendingUp,
  Users,
  LogOut,
  ChevronDown,
} from 'lucide-react';

function DecorativeHeader() {
  return (
    <>
      {/* Orange gradient background with Figma pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FF8F12] to-[#ff6b0b] opacity-95">
        {/* Figma-style textured overlay with noise pattern */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 0, 0, 0.03) 2px,
            rgba(0, 0, 0, 0.03) 4px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            rgba(0, 0, 0, 0.02) 2px,
            rgba(0, 0, 0, 0.02) 4px
          ),
          radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1), transparent 50%)`
        }}></div>
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.08)_25%,rgba(0,0,0,0.08)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.08)_75%)] bg-[length:60px_60px]"></div>
      </div>
    </>
  );
}

interface QuickActionButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

function QuickActionButton({ icon, label, isActive = false, onClick }: QuickActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-2 p-3 rounded-2xl transition-all duration-300 transform ${
        isActive
          ? 'bg-[#FF8F12] text-white shadow-lg shadow-[#FF8F12]/40 scale-105'
          : 'bg-[#FFF6EC] text-[#004360] hover:shadow-md hover:shadow-black/10 active:scale-95'
      }`}
    >
      <div className={`p-2.5 rounded-lg transition-all ${isActive ? 'bg-white/20' : 'bg-white/70'}`}>
        {icon}
      </div>
      <span className="text-xs font-semibold text-center leading-tight">{label}</span>
    </button>
  );
}

interface TransferOptionProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

function TransferOption({ icon, label, onClick }: TransferOptionProps) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-4 p-4 bg-[#FFF6EC] rounded-2xl hover:bg-[#FFEDE0] hover:shadow-md transition-all duration-200 active:scale-[0.98] border border-[#FFE8D0]"
    >
      <div className="w-14 h-14 rounded-lg bg-white flex items-center justify-center text-[#FF8F12] shadow-sm">
        {icon}
      </div>
      <span className="text-[#004360] font-semibold flex-1 text-left text-sm">{label}</span>
      <ChevronDown size={20} className="text-[#CCCCCC] rotate-[-90deg] transition-transform" />
    </button>
  );
}

export default function HomeScreen() {
  const navigate = useNavigate();
  const [balanceVisible, setBalanceVisible] = useState(false);
  const [savingsVisible, setSavingsVisible] = useState(false);
  const [activeAction, setActiveAction] = useState('transfer');

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white relative w-[412px] h-[917px] overflow-hidden shadow-2xl">
        {/* Header Section */}
        <div className="absolute h-[260px] left-0 top-0 w-full">
          <DecorativeHeader />

          {/* Header Content */}
          <div className="relative z-10 px-6 pt-6 flex items-center justify-between h-16">
            <button className="p-2 hover:bg-white/10 rounded-lg transition-all">
              <Menu size={24} className="text-white" />
            </button>
            <h1 className="text-white text-2xl font-semibold">Home</h1>
            <button className="p-2 hover:bg-white/10 rounded-lg transition-all">
              <RefreshCw size={24} className="text-white" />
            </button>
          </div>

          {/* Balance Cards */}
          <div className="relative z-10 px-6 pt-4 space-y-3">
            {/* Savings Card */}
            <div className="bg-white/12 backdrop-blur-md rounded-2xl p-4 border border-white/15 hover:bg-white/15 transition-all">
              <p className="text-white/85 text-sm font-medium mb-2">Saving:</p>
              <div className="flex items-center justify-between">
                <p className="text-white text-lg font-bold">
                  {savingsVisible ? '****' : '500,000.00 ETB'}
                </p>
                <button
                  onClick={() => setSavingsVisible(!savingsVisible)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-all"
                >
                  {savingsVisible ? (
                    <EyeOff size={20} className="text-white" />
                  ) : (
                    <Eye size={20} className="text-white" />
                  )}
                </button>
              </div>
            </div>

            {/* Balance Card */}
            <div className="bg-white/12 backdrop-blur-md rounded-2xl p-4 border border-white/15 hover:bg-white/15 transition-all">
              <p className="text-white/85 text-sm font-medium mb-2">Balance:</p>
              <div className="flex items-center justify-between">
                <p className="text-white text-lg font-bold">
                  {balanceVisible ? '****' : '1,250,000.00 ETB'}
                </p>
                <button
                  onClick={() => setBalanceVisible(!balanceVisible)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-all"
                >
                  {balanceVisible ? (
                    <EyeOff size={20} className="text-white" />
                  ) : (
                    <Eye size={20} className="text-white" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="absolute top-[200px] left-0 right-0 px-6 z-20">
          <div className="bg-white rounded-3xl shadow-2xl shadow-black/15 p-6">
            <div className="grid grid-cols-4 gap-2.5">
              <QuickActionButton
                icon={<ArrowRight size={24} />}
                label="Transfer"
                isActive={activeAction === 'transfer'}
                onClick={() => setActiveAction('transfer')}
              />
              <QuickActionButton
                icon={<CreditCard size={24} />}
                label="Payment"
                onClick={() => setActiveAction('payment')}
              />
              <QuickActionButton
                icon={<TrendingUp size={24} />}
                label="Top-up"
                onClick={() => setActiveAction('topup')}
              />
              <QuickActionButton
                icon={<Plus size={24} />}
                label="Other"
                onClick={() => setActiveAction('other')}
              />
            </div>
          </div>
        </div>

        {/* Transfer Options Section */}
        <div className="absolute top-[390px] left-0 right-0 bottom-[90px] overflow-y-auto px-6 pt-6 pb-4">
          <div className="space-y-2.5">
            <TransferOption
              icon={<TrendingUp size={24} />}
              label="To Wegagen Bank Account"
            />
            <TransferOption
              icon={<div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">e</div>}
              label="To Wegagen EBirr"
            />
            <TransferOption
              icon={<div className="w-6 h-6 border-2 border-[#FF8F12] rounded-lg flex items-center justify-center">
                <div className="w-2 h-3 bg-[#FF8F12] rounded-full"></div>
              </div>}
              label="To Other Bank Account"
            />
            <TransferOption
              icon={<CreditCard size={24} />}
              label="To Wallet"
            />
            <TransferOption
              icon={<div className="flex items-center justify-center text-xl">₱</div>}
              label="To Micro Finance"
            />
          </div>

          {/* Advertisement Section */}
          <div className="mt-6 bg-gradient-to-br from-[#F5F5F5] to-[#E8E8E8] rounded-2xl p-8 text-center min-h-[140px] flex flex-col items-center justify-center shadow-sm border border-[#E0E0E0]">
            <p className="text-[#666666] italic text-lg font-light tracking-wide">Advertisement</p>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 left-0 right-0 h-[90px] bg-gradient-to-t from-[#FF8F12] to-[#ff6b0b] rounded-t-3xl shadow-2xl">
          <div className="flex items-center justify-around h-full px-6">
            <button className="flex flex-col items-center gap-1 text-white hover:scale-110 transition-transform">
              <Home size={24} />
              <span className="text-xs font-medium">Home</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-white/70 hover:text-white hover:scale-110 transition-all">
              <ArrowRight size={24} />
              <span className="text-xs font-medium">Transaction</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-white/70 hover:text-white hover:scale-110 transition-all">
              <Users size={24} />
              <span className="text-xs font-medium">Beneficiary</span>
            </button>
            <button
              onClick={handleLogout}
              className="flex flex-col items-center gap-1 text-white/70 hover:text-white hover:scale-110 transition-all"
            >
              <LogOut size={24} />
              <span className="text-xs font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
