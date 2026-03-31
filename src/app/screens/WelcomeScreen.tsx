import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowRight, Smartphone } from 'lucide-react';

export default function WelcomeScreen() {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleStart = () => {
    if (mobileNumber.trim()) {
      navigate('/verify');
    }
  };

  return (
    <div className="bg-white relative w-full h-full overflow-hidden" data-name="Welcome Screen">
      {/* --- NEW HEADER SECTION (KWPT) WITH SLIGHT TOP ADJUSTMENT --- */}
      <div className="absolute top-0 left-0 right-0 h-[220px] overflow-hidden z-0">
        <img
          src="/Mask group (1).png"
          alt="Header Background"
          className="w-full h-full object-cover -translate-y-2 opacity-110"
        />
      </div>

      <div className="relative z-20 px-8 pt-16 h-[250px] flex flex-col items-center">
        <img
          src="/LogoSVG 1 (1).png"
          alt="Wegagen Bank"
          className="h-10 object-contain drop-shadow-lg"
        />
      </div>
      {/* ------------------------------- */}

      {/* --- REVERTED BELOW SECTION WITH PADDING & ROUNDING ENHANCEMENTS --- */}
      <div className="absolute bg-white h-[calc(100%-200px)] left-4 right-4 rounded-[28px] top-[160px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] z-30">
        <div className="px-8 py-10">
          {/* Welcome Section */}
          <div className="mb-12">
            <h1 className="text-[#FF8F12] text-[42px] mb-3 tracking-tight font-medium">
              Welcome!
            </h1>
            <p className="text-[#004360] text-[15px] leading-relaxed opacity-80">
              Bank smarter, faster, and more securely<br />
              anytime, anywhere
            </p>
          </div>

          {/* Input Section */}
          <div className="mb-6">
            <label htmlFor="mobile-input" className="block text-[#004360] text-[13px] mb-3 opacity-70 font-semibold">
              Mobile Number
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ff6b0b]">
                <Smartphone size={20} strokeWidth={2} />
              </div>
              <input
                id="mobile-input"
                type="tel"
                placeholder="Enter Your Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && mobileNumber.trim()) {
                    handleStart();
                  }
                }}
                className={`w-full h-[56px] pl-14 pr-4 rounded-[16px] border-1 transition-all duration-300 outline-none text-[15px] text-[#004360] font-medium placeholder:text-[#004360]/30 ${isFocused
                  ? 'border-[#ff6b0b] bg-white shadow-[0_4px_12px_rgba(255,107,11,0.15)]'
                  : 'border-[#ff6b0b] bg-[#fff6ec]/50'
                  }`}
              />
            </div>
          </div>

          {/* Start Button */}
          <div className="flex justify-end">
            <button
              onClick={handleStart}
              disabled={!mobileNumber.trim()}
              className={`mt-4 flex items-center gap-2 px-8 py-4 rounded-[16px] transition-all duration-300 ${mobileNumber.trim()
                ? 'bg-[#FF8F12] text-white shadow-[0_6px_20px_rgba(255,107,11,0.3)] hover:shadow-[0_8px_24px_rgba(255,107,11,0.4)] hover:scale-[1.02] active:scale-[0.98]'
                : 'bg-[#ffebe0] text-[#ff6b0b] opacity-50 cursor-not-allowed'
                }`}
            >
              <span className="text-[16px] font-semibold">Start</span>
              <ArrowRight size={20} strokeWidth={2.5} />
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-16 pt-8 border-t border-[#004360]/10">
            <div className="flex items-center justify-between text-[#004360] opacity-60">
              <div className="text-center">
                <div className="text-[22px] font-bold text-[#ff6b0b]">24/7</div>
                <div className="text-[10px] mt-1 uppercase tracking-tight">Support</div>
              </div>
              <div className="w-[1px] h-[35px] bg-[#004360]/10" />
              <div className="text-center">
                <div className="text-[22px] font-bold text-[#ff6b0b]">100%</div>
                <div className="text-[10px] mt-1 uppercase tracking-tight">Secure</div>
              </div>
              <div className="w-[1px] h-[35px] bg-[#004360]/10" />
              <div className="text-center">
                <div className="text-[22px] font-bold text-[#ff6b0b]">Fast</div>
                <div className="text-[10px] mt-1 uppercase tracking-tight">Transactions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------ */}
    </div>
  );
}
