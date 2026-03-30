import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Shield, ArrowLeft, RefreshCw } from 'lucide-react';
import { OTPInput, SlotProps } from 'input-otp';
import svgPaths from "../../imports/svg-j8lq9lb7jm";

function DecorativeElements() {
  return (
    <>
      <div className="absolute h-[82px] left-[-8px] top-[-47px] w-[192px] opacity-80">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 192 82">
          <g id="Group 198">
            <path d={svgPaths.p3686d400} fill="var(--fill-0, #FF8F12)" />
            <path d={svgPaths.p1bf6bdf0} fill="var(--fill-0, #FF8F12)" />
            <path d={svgPaths.p3d7d6600} fill="var(--fill-0, #FF8F12)" />
          </g>
        </svg>
      </div>
      
      <div className="absolute inset-[-12.63%_85.56%_112.5%_13.61%] opacity-60">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.p38b97480} fill="var(--fill-0, #FF8F12)" />
        </svg>
      </div>
      
      <div className="absolute inset-[-14.63%_68.33%_113.88%_21.11%] opacity-60">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 6">
          <path d={svgPaths.p195fd840} fill="var(--fill-0, #FF8F12)" />
        </svg>
      </div>
      
      <div className="absolute inset-[-12.63%_85.56%_101.13%_-3.06%] opacity-60">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63 92">
          <path d={svgPaths.pe64d880} fill="var(--fill-0, #FF8F12)" />
        </svg>
      </div>
      
      <div className="absolute inset-[-14.63%_47.22%_107.75%_36.39%] opacity-60">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59 55">
          <path d={svgPaths.p29ab6700} fill="var(--fill-0, #FF8F12)" />
        </svg>
      </div>
      
      <div className="absolute inset-[-14.63%_68.33%_107.75%_13.61%] opacity-60">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 55">
          <path d={svgPaths.p338a3800} fill="var(--fill-0, #FF8F12)" />
        </svg>
      </div>
      
      <div className="absolute inset-[-8%_75.28%_101.25%_12.22%] opacity-60">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 54">
          <path d={svgPaths.p6f70f80} fill="var(--fill-0, #FF8F12)" />
        </svg>
      </div>
      
      <div className="absolute inset-[-8.13%_48.06%_105%_39.17%] opacity-60">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 25">
          <path d={svgPaths.p408edd2} fill="var(--fill-0, #FF8F12)" />
        </svg>
      </div>
    </>
  );
}

function LogoSection() {
  return (
    <div className="absolute h-[60px] left-[40px] top-[67px] w-[251px]" data-name="LogoSVG 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 251 60">
        <g clipPath="url(#clip0_1_73)" id="LogoSVG 1">
          <path d={svgPaths.p3669b900} fill="var(--fill-0, white)" />
          <path d={svgPaths.p3c8eb280} fill="var(--fill-0, white)" />
          <path d={svgPaths.p73884e0} fill="var(--fill-0, white)" />
          <path d={svgPaths.p11d51200} fill="var(--fill-0, white)" />
          <path d={svgPaths.p1dc6e940} fill="var(--fill-0, white)" />
          <path d={svgPaths.p3a9920f2} fill="var(--fill-0, white)" />
          <path d={svgPaths.p4f8f900} fill="var(--fill-0, white)" />
          <path d={svgPaths.p20873900} fill="var(--fill-0, white)" />
          <path d={svgPaths.p8c2f280} fill="var(--fill-0, white)" />
          <path d={svgPaths.p3a7c3900} fill="var(--fill-0, white)" />
          <path d={svgPaths.p858c00} fill="var(--fill-0, white)" />
          <path d={svgPaths.p1e18da80} fill="var(--fill-0, white)" />
          <path d={svgPaths.p1abd2500} fill="var(--fill-0, white)" />
          <path d={svgPaths.p2410e500} fill="var(--fill-0, white)" />
          <path d={svgPaths.p194ebe00} fill="var(--fill-0, white)" />
          <path d={svgPaths.p6767480} fill="var(--fill-0, white)" />
          <path d={svgPaths.p5ecbf00} fill="var(--fill-0, white)" />
          <path d={svgPaths.p275144f0} fill="var(--fill-0, white)" />
          <path d={svgPaths.p3429f260} fill="var(--fill-0, white)" />
          <path d={svgPaths.p4c0ff00} fill="var(--fill-0, white)" />
          <path d={svgPaths.p1c214e00} fill="var(--fill-0, white)" />
          <path d={svgPaths.pd04a800} fill="var(--fill-0, white)" />
          <path d={svgPaths.p11641900} fill="var(--fill-0, white)" />
          <path d={svgPaths.p2d5db4f0} fill="var(--fill-0, white)" />
          <path d={svgPaths.p41a7300} fill="var(--fill-0, white)" />
          <path d={svgPaths.p382f7900} fill="var(--fill-0, white)" />
          <path d={svgPaths.p37246600} fill="var(--fill-0, white)" />
          <path d={svgPaths.p27abb000} fill="var(--fill-0, white)" />
          <path d={svgPaths.pfa811f0} fill="var(--fill-0, white)" />
          <path d={svgPaths.p3c432300} fill="var(--fill-0, white)" />
          <path d={svgPaths.p7d00000} fill="var(--fill-0, white)" />
        </g>
        <defs>
          <clipPath id="clip0_1_73">
            <rect fill="white" height="60" width="251" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Slot(props: SlotProps) {
  return (
    <div
      className={`relative w-[64px] h-[64px] text-[28px] flex items-center justify-center transition-all duration-300 rounded-[16px] border-2 ${
        props.isActive
          ? 'border-[#ff6b0b] bg-white shadow-[0_4px_12px_rgba(255,107,11,0.2)] scale-110'
          : 'border-[#ff6b0b] bg-[#fff6ec]'
      }`}
    >
      {props.char !== null && (
        <div className="text-[#004360] font-medium">{props.char}</div>
      )}
      {props.hasFakeCaret && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[2px] h-[32px] bg-[#ff6b0b] animate-pulse" />
        </div>
      )}
    </div>
  );
}

export default function VerificationScreen() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleVerify = () => {
    if (otp.length === 4) {
      console.log('Verifying OTP:', otp);
      // Handle verification logic
      navigate('/quick-actions');
    }
  };

  const handleResend = () => {
    if (canResend) {
      setCountdown(60);
      setCanResend(false);
      setOtp('');
      console.log('Resending code...');
      // Handle resend logic
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white relative w-[412px] h-[917px] overflow-hidden shadow-2xl" data-name="Verification Screen">
        {/* Header Section with Brand Color */}
        <div className="absolute bg-[#ff6b0b] h-[220px] left-0 top-0 w-full shadow-lg">
          <DecorativeElements />
          <LogoSection />
          
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="absolute top-[67px] right-[40px] w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 active:scale-95"
          >
            <ArrowLeft size={20} className="text-white" strokeWidth={2.5} />
          </button>
        </div>

        {/* Main Content Card */}
        <div className="absolute bg-white h-[calc(100%-180px)] left-0 rounded-tl-[24px] rounded-tr-[24px] top-[180px] w-full shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
          <div className="px-8 py-10">
            {/* Security Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-[#ff6b0b] to-[#FF8F12] flex items-center justify-center shadow-[0_8px_24px_rgba(255,107,11,0.25)]">
                <Shield size={36} className="text-white" strokeWidth={2} />
              </div>
            </div>

            {/* Title Section */}
            <div className="mb-8 text-center">
              <h1 className="text-[#FF8F12] text-[28px] mb-3 tracking-tight">
                Let's Activate Account
              </h1>
              <p className="text-[#004360] text-[13px] leading-relaxed opacity-70">
                Your activation code has been sent via SMS.<br />
                Enter the code to complete your account activation
              </p>
            </div>

            {/* OTP Input */}
            <div className="mb-8 flex justify-center">
              <OTPInput
                maxLength={4}
                value={otp}
                onChange={setOtp}
                containerClassName="flex gap-4"
                render={({ slots }) => (
                  <>
                    {slots.map((slot, idx) => (
                      <Slot key={idx} {...slot} />
                    ))}
                  </>
                )}
              />
            </div>

            {/* Timer and Resend */}
            <div className="mb-8 text-center">
              {!canResend ? (
                <p className="text-[#004360] text-[13px] opacity-60">
                  Resend code in <span className="text-[#ff6b0b] font-medium">{countdown}s</span>
                </p>
              ) : (
                <button
                  onClick={handleResend}
                  className="text-[#ff6b0b] text-[14px] font-medium flex items-center gap-2 mx-auto hover:opacity-80 transition-opacity active:scale-95"
                >
                  <RefreshCw size={16} strokeWidth={2.5} />
                  Resend Code
                </button>
              )}
            </div>

            {/* Verify Button */}
            <button
              onClick={handleVerify}
              disabled={otp.length !== 4}
              className={`w-full py-4 rounded-[16px] transition-all duration-300 text-[16px] font-medium ${
                otp.length === 4
                  ? 'bg-[#ff6b0b] text-white shadow-[0_6px_20px_rgba(255,107,11,0.3)] hover:shadow-[0_8px_24px_rgba(255,107,11,0.4)] hover:scale-[1.02] active:scale-[0.98]'
                  : 'bg-[#ffebe0] text-[#ff6b0b] opacity-50 cursor-not-allowed'
              }`}
            >
              Verify
            </button>

            {/* Security Info */}
            <div className="mt-12 pt-6 border-t border-[#004360]/10">
              <div className="flex items-start gap-3 p-4 bg-[#fff6ec] rounded-[12px]">
                <Shield size={20} className="text-[#ff6b0b] flex-shrink-0 mt-0.5" strokeWidth={2} />
                <div>
                  <p className="text-[#004360] text-[12px] font-medium mb-1">Secure Verification</p>
                  <p className="text-[#004360] text-[11px] opacity-70 leading-relaxed">
                    Your code is encrypted and will expire in 10 minutes for your security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}