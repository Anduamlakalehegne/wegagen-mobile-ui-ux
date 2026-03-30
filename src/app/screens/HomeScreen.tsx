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
  ChevronRight,
} from 'lucide-react';

function DecorativeHeader() {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#FF8F12] to-[#FF7F00]">
      {/* Texture pattern overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 0, 0, 0.04) 2px,
            rgba(0, 0, 0, 0.04) 4px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            rgba(0, 0, 0, 0.03) 2px,
            rgba(0, 0, 0, 0.03) 4px
          )`,
        }}
      ></div>
    </div>
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
      className="flex flex-col items-center gap-2 transition-all duration-200 cursor-pointer"
    >
      <div
        className={`w-[62px] h-[62px] rounded-[12px] flex items-center justify-center transition-all duration-200 ${
          isActive ? 'bg-[#FF8F12]' : 'bg-[#FFF6EC]'
        }`}
      >
        <div className={`${isActive ? 'text-white' : 'text-[#FF8F12]'}`}>
          {icon}
        </div>
      </div>
      <span className="text-[13px] font-semibold text-[#004360] text-center">
        {label}
      </span>
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
      className="w-full flex items-center gap-4 p-4 bg-[#FFF6EC] rounded-[16px] hover:bg-[#FFEDE0] transition-all duration-200 active:scale-[0.98]"
    >
      <div className="w-[60px] h-[60px] rounded-[12px] bg-[#E8E8E8] flex items-center justify-center flex-shrink-0 text-[#FF8F12]">
        {icon}
      </div>
      <span className="text-[#004360] font-semibold flex-1 text-left text-[15px]">{label}</span>
      <ChevronRight size={20} className="text-[#CCCCCC] flex-shrink-0" />
    </button>
  );
}

export default function HomeScreen() {
  const navigate = useNavigate();
  const [savingsVisible, setSavingsVisible] = useState(false);
  const [balanceVisible, setBalanceVisible] = useState(false);
  const [activeAction, setActiveAction] = useState('transfer');

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white relative w-[412px] h-[917px] overflow-hidden shadow-2xl">
        {/* Header Section - Orange Background */}
        <div className="absolute top-0 left-0 w-full h-[280px]">
          <DecorativeHeader />

          {/* Top Bar: Menu - Home - Refresh */}
          <div className="absolute top-6 left-0 right-0 px-6 z-20 flex items-center justify-between">
            <button className="p-2 hover:bg-white/10 rounded-lg transition-all">
              <Menu size={24} className="text-white" strokeWidth={3} />
            </button>
            <h1 className="text-white text-[24px] font-semibold">Home</h1>
            <button className="p-2 hover:bg-white/10 rounded-lg transition-all">
              <RefreshCw size={24} className="text-white" />
            </button>
          </div>

          {/* Saving and Balance Info */}
          <div className="absolute top-[70px] left-6 right-6 z-20 space-y-6">
            {/* Saving Row */}
            <div className="flex items-center justify-between">
              <span className="text-white text-[18px] font-light">Saving:</span>
              <div className="flex items-center gap-2">
                <span className="text-white text-[18px] font-light tracking-wide">
                  {savingsVisible ? '****' : '****'}
                </span>
                <button
                  onClick={() => setSavingsVisible(!savingsVisible)}
                  className="p-1 hover:bg-white/10 rounded transition-all"
                >
                  {savingsVisible ? (
                    <EyeOff size={20} className="text-white" />
                  ) : (
                    <Eye size={20} className="text-white" />
                  )}
                </button>
              </div>
            </div>

            {/* Balance Row */}
            <div className="flex items-center justify-between">
              <span className="text-white text-[18px] font-light">Balance:</span>
              <div className="flex items-center gap-2">
                <span className="text-white text-[18px] font-light tracking-wide">
                  {balanceVisible ? '****' : '****'}
                </span>
                <button
                  onClick={() => setBalanceVisible(!balanceVisible)}
                  className="p-1 hover:bg-white/10 rounded transition-all"
                >
                  {balanceVisible ? (
                    <EyeOff size={20} className="text-white" />
                  ) : (
                    <Eye size={20} className="text-white" />
                  )}
                </button>
              </div>
            </div>

            {/* Bottom Eye Icon */}
            <div className="flex justify-center pt-2">
              <Eye size={24} className="text-white/80" />
            </div>
          </div>
        </div>

        {/* Quick Actions Card - Group 192 */}
        <div className="absolute top-[200px] left-4 right-4 z-30">
          <div className="bg-white rounded-[24px] shadow-[0px_8px_16px_rgba(0,0,0,0.15)] px-6 py-6">
            <div className="flex justify-between items-end gap-4">
              <QuickActionButton
                icon={<ArrowRight size={28} strokeWidth={2.5} />}
                label="Transfer"
                isActive={activeAction === 'transfer'}
                onClick={() => setActiveAction('transfer')}
              />
              <QuickActionButton
                icon={<CreditCard size={28} strokeWidth={2} />}
                label="Payment"
                isActive={activeAction === 'payment'}
                onClick={() => setActiveAction('payment')}
              />
              <QuickActionButton
                icon={<TrendingUp size={28} strokeWidth={2.5} />}
                label="Top-up"
                isActive={activeAction === 'topup'}
                onClick={() => setActiveAction('topup')}
              />
              <QuickActionButton
                icon={<Plus size={28} strokeWidth={2.5} />}
                label="Other"
                isActive={activeAction === 'other'}
                onClick={() => setActiveAction('other')}
              />
            </div>
          </div>
        </div>

        {/* Decorative icon between sections */}
        <div className="absolute top-[380px] right-6 z-20 text-[#004360]">
          <div className="w-8 h-8 border-2 border-[#004360] rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-[#004360] rounded-md"></div>
          </div>
        </div>

        {/* Transfer Options Section */}
        <div className="absolute top-[420px] left-0 right-0 bottom-[100px] overflow-y-auto px-6 space-y-3 pb-6">
          <TransferOption
            icon={<TrendingUp size={28} />}
            label="To Wegagen Bank Account"
          />
          <TransferOption
            icon={
              <div className="w-8 h-8 rounded-full bg-[#1AB456] flex items-center justify-center text-white text-[12px] font-bold">
                e
              </div>
            }
            label="To Wegagen EBirr"
          />
          <TransferOption
            icon={
              <div className="w-8 h-8 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-[#FF8F12] rounded-lg flex items-center justify-center relative">
                  <div className="w-3 h-4 bg-[#FF8F12] rounded-full absolute right-1"></div>
                </div>
              </div>
            }
            label="To Other Bank Account"
          />
          <TransferOption
            icon={<CreditCard size={28} />}
            label="To Wallet"
          />
          <TransferOption
            icon={<CreditCard size={28} />}
            label="To Micro Finance"
          />

          {/* Advertisement Section */}
          <div className="mt-8 bg-[#E8E8E8] rounded-[20px] p-8 text-center min-h-[120px] flex flex-col items-center justify-center">
            <p className="text-[#333333] italic text-[20px] font-light">Advertisement</p>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-[#FF8F12] to-[#FF8F12] rounded-t-[32px] shadow-2xl flex items-center justify-around px-6">
          <button className="flex flex-col items-center gap-1 text-white hover:scale-110 transition-transform">
            <Home size={28} strokeWidth={1.5} />
            <span className="text-[12px] font-medium">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-white/80 hover:text-white hover:scale-110 transition-all">
            <ArrowRight size={28} strokeWidth={1.5} />
            <span className="text-[12px] font-medium">Transaction</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-white/80 hover:text-white hover:scale-110 transition-all">
            <Users size={28} strokeWidth={1.5} />
            <span className="text-[12px] font-medium">Beneficiary</span>
          </button>
          <button
            onClick={handleLogout}
            className="flex flex-col items-center gap-1 text-white/80 hover:text-white hover:scale-110 transition-all"
          >
            <LogOut size={28} strokeWidth={1.5} />
            <span className="text-[12px] font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
