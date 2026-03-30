import React, { useState } from 'react';
import { Menu, RotateCw, Eye, EyeOff } from 'lucide-react';

interface Group191HeaderProps {
  onMenuClick?: () => void;
  onRefreshClick?: () => void;
}

export default function Group191Header({ onMenuClick, onRefreshClick }: Group191HeaderProps) {
  const [savingsVisible, setSavingsVisible] = useState(false);
  const [balanceVisible, setBalanceVisible] = useState(false);

  return (
    <div
      className="absolute w-[325.8px] h-[135.77px] left-4 top-6"
      style={{
        background: 'linear-gradient(135deg, #FF8F12 0%, #ff6b0b 100%)',
      }}
    >
      {/* Textured overlay pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
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
          )`,
        }}
      ></div>

      {/* Menu Icon */}
      <button
        onClick={onMenuClick}
        className="absolute w-[37px] h-[37px] left-4 top-6 flex items-center justify-center hover:bg-white/10 rounded-lg transition-all"
      >
        <Menu size={24} className="text-white" strokeWidth={2.5} />
      </button>

      {/* Home Text */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-8">
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '22px',
            textAlign: 'center',
            color: '#FFFFFF',
          }}
        >
          Home
        </p>
      </div>

      {/* Refresh Icon */}
      <button
        onClick={onRefreshClick}
        className="absolute right-5 top-7 w-[20.94px] h-[21px] flex items-center justify-center hover:bg-white/10 rounded-lg transition-all"
        style={{
          transform: 'matrix(-0.52, -0.86, -0.86, 0.52, 0, 0)',
        }}
      >
        <RotateCw size={20} className="text-white" strokeWidth={2} />
      </button>

      {/* Group 190 - Balance & Savings Section */}
      <div className="absolute w-[208px] h-[72.77px] left-5 top-[86px]">
        {/* Saving Row */}
        <div className="absolute w-full left-5 top-0">
          <label
            style={{
              position: 'absolute',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '19px',
              color: '#FFFFFF',
              left: 0,
              top: 0,
            }}
          >
            Saving:
          </label>

          <div className="absolute left-[93px] top-0 flex items-center gap-2">
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '22px',
                color: '#FFFFFF',
              }}
            >
              {savingsVisible ? '****' : '500,000.00 ETB'}
            </span>
            <button
              onClick={() => setSavingsVisible(!savingsVisible)}
              className="p-1 hover:bg-white/10 rounded transition-all"
            >
              {savingsVisible ? (
                <EyeOff size={16} className="text-white" />
              ) : (
                <Eye size={16} className="text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Balance Row */}
        <div className="absolute w-full left-5 top-[46px]">
          <label
            style={{
              position: 'absolute',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '19px',
              color: '#FFFFFF',
              left: 0,
              top: 0,
            }}
          >
            Balance:
          </label>

          <div className="absolute left-[93px] top-0 flex items-center gap-2">
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: '18px',
                lineHeight: '22px',
                color: '#FFFFFF',
              }}
            >
              {balanceVisible ? '****' : '1,250,000.00 ETB'}
            </span>
            <button
              onClick={() => setBalanceVisible(!balanceVisible)}
              className="p-1 hover:bg-white/10 rounded transition-all"
            >
              {balanceVisible ? (
                <EyeOff size={16} className="text-white" />
              ) : (
                <Eye size={16} className="text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Divider Path */}
      <div
        className="absolute w-[6px] h-[15px] right-5 bottom-[35px]"
        style={{
          border: '1.6px solid #FFFFFF',
          transform: 'rotate(90deg)',
        }}
      ></div>
    </div>
  );
}
