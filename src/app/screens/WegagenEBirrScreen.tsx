import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  ChevronLeft,
  RefreshCw,
  ChevronDown,
  Wallet,
  Smartphone,
  Banknote,
  FileText,
  Building2
} from 'lucide-react';

export default function WegagenEBirrScreen() {
  const navigate = useNavigate();
  const [ebirrAccount, setEbirrAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [remark, setRemark] = useState('');
  const [selectedBankIdx, setSelectedBankIdx] = useState(-1);
  const [showBankDropdown, setShowBankDropdown] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [isModalExiting, setIsModalExiting] = useState(false);

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

  const banks = [
    { name: "Wegagen Bank", code: "WEG" },
    { name: "Commercial Bank", code: "CBE" },
    { name: "Awash Bank", code: "AWA" }
  ];

  return (
    <div className="bg-[#fcfcfc] relative flex flex-col font-sans h-full overflow-hidden" data-name="Wegagen EBirr Screen">
      {/* 1:1 Elite Header */}
      <div className="absolute top-0 left-0 right-0 h-[180px] bg-[#ff6b0b] z-0">
        <div className="relative z-10 p-5 flex items-center justify-between text-white mt-4">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all active:scale-90"
          >
            <ChevronLeft size={22} strokeWidth={3} />
          </button>
          <h1 className="text-[18px] font-bold tracking-tight">Transfer to Wegagen EBirr</h1>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all active:scale-90">
            <RefreshCw size={18} strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* Modern High-Fidelity Form Card */}
      <div className="relative z-10 flex-1 px-4 mt-33 overflow-y-auto no-scrollbar pb-10">
        <div className="bg-white rounded-[32px] p-4 pt-10 shadow-[0_15px_45px_rgba(0,0,0,0.06)]">

          <div className="space-y-4">
            {/* Field: Select Bank */}
            <div className="space-y-2 relative">
              <label className="text-[#004360] text-[13px] font-bold ml-1">Select Bank</label>
              <button
                onClick={() => setShowBankDropdown(!showBankDropdown)}
                className="w-full flex items-center justify-between bg-[#fff9f4] border border-orange-100 rounded-[12px] px-2 py-3 focus:ring-4 focus:ring-orange-50 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-100/50 flex items-center justify-center text-[#ff6b0b] shrink-0">
                    <Building2 size={18} strokeWidth={2.5} />
                  </div>
                  <span className={`text-[#004360] text-[14px] font-semibold ${selectedBankIdx === -1 ? "opacity-30" : ""}`}>
                    {selectedBankIdx === -1 ? "Select Bank" : banks[selectedBankIdx].name}
                  </span>
                </div>
                <ChevronDown size={18} className={`text-[#ff6b0b] transition-transform duration-300 ${showBankDropdown ? "rotate-180" : ""}`} strokeWidth={2.5} />
              </button>

              {/* Bank Dropdown Overlay */}
              {showBankDropdown && (
                <>
                  <div className="fixed inset-0 z-40 bg-black/5 backdrop-blur-[2px]" onClick={() => setShowBankDropdown(false)} />
                  <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-50 overflow-hidden border border-orange-100 animate-in fade-in zoom-in-95 duration-200">
                    <div className="p-2 space-y-1">
                      {banks.map((bank, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setSelectedBankIdx(idx);
                            setShowBankDropdown(false);
                          }}
                          className={`w-full px-5 py-4 rounded-[18px] text-left transition-all flex items-center justify-between group ${selectedBankIdx === idx ? "bg-orange-50 text-[#ff6b0b]" : "hover:bg-gray-50 text-[#004360]"}`}
                        >
                          <span className="text-[13px] font-black uppercase tracking-wider">{bank.name}</span>
                          {selectedBankIdx === idx && (
                            <div className="w-2 h-2 rounded-full bg-[#ff6b0b]" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Field: EBirr Account */}
            <div className="space-y-2">
              <label className="text-[#004360] text-[13px] font-bold ml-1">Please Enter EBirr Account</label>
              <div className="relative group">
                <div className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-orange-100/50 flex items-center justify-center text-[#ff6b0b] transition-colors group-focus-within:bg-[#ff6b0b] group-focus-within:text-white">
                  <Smartphone size={18} strokeWidth={2.5} />
                </div>
                <input
                  type="text"
                  placeholder="e.g. 0911..."
                  value={ebirrAccount}
                  onChange={(e) => setEbirrAccount(e.target.value)}
                  className="w-full bg-[#fff9f4] border border-orange-100 rounded-[12px] pl-14 pr-5 py-3 outline-none text-[#004360] font-semibold text-[14px] placeholder:text-[#004360]/20 focus:bg-white focus:border-[#ff6b0b]/40 transition-all"
                />
              </div>
            </div>

            {/* Field: Valid Amount */}
            <div className="space-y-2">
              <label className="text-[#004360] text-[13px] font-bold ml-1">Please Enter Valid Amount</label>
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

            {/* Field: Remark */}
            <div className="space-y-2">
              <label className="text-[#004360] text-[13px] font-bold ml-1">Please Enter Remark</label>
              <div className="relative group">
                <div className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-orange-100/50 flex items-center justify-center text-[#ff6b0b] transition-colors group-focus-within:bg-[#ff6b0b] group-focus-within:text-white">
                  <FileText size={18} strokeWidth={2.5} />
                </div>
                <input
                  type="text"
                  placeholder="Optional remark"
                  value={remark}
                  onChange={(e) => setRemark(e.target.value)}
                  className="w-full bg-[#fff9f4] border border-orange-100 rounded-[12px] pl-14 pr-5 py-3 outline-none text-[#004360] font-semibold text-[14px] placeholder:text-[#004360]/20 focus:bg-white focus:border-[#ff6b0b]/40 transition-all"
                />
              </div>
            </div>

            {/* Transfer Button - Matches Elite Design */}
            <div className="pt-6 pb-4">
              <button
                onClick={openModal}
                className="w-full h-[52px] bg-[#ff8f12] hover:bg-[#ff6b0b] text-white rounded-[22px] font-black text-[18px] shadow-[0_12px_24px_rgba(255,107,11,0.25)] hover:shadow-[0_15px_35px_rgba(255,107,11,0.35)] active:scale-[0.98] transition-all"
              >
                Transfer
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Liquid Glass Confirmation Modal Overlay */}
      {showConfirmModal && (
        <div className={`absolute inset-0 z-[200] flex items-end justify-center ${isModalExiting ? "transition-opacity duration-300 opacity-0" : "animate-in fade-in duration-300"}`}>
          <div
            className={`absolute inset-0 bg-[#004360]/10 transition-all duration-300 ease-out ${isModalExiting ? "opacity-0 backdrop-blur-none" : "opacity-100 backdrop-blur-[12px] animate-in fade-in"
              }`}
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

              <h2 className="text-[#053d57] text-[17px] font-black tracking-tight mb-5">Confirm EBirr Transfer</h2>

              <div className="w-full space-y-3 mb-6 px-2">
                {[
                  { label: "Phone Number", value: ebirrAccount || "0911 22 33 44" },
                  { label: "Bank", value: selectedBankIdx !== -1 ? banks[selectedBankIdx].name : "Wegagen Bank" },
                  { label: "Amount", value: `${amount || "0.00"} ETB` },
                  { label: "Fee", value: "0.00 ETB" },
                  { label: "Remark", value: remark || "Transfer" }
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
