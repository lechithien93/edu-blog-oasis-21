
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-1">
      <div className="relative w-[21.7px] h-[19.58px]">
        <div
          className="absolute top-0 left-[18.11px] w-1 h-[19.83px] rounded-xl bg-[#FFB933]"
          style={{ transform: 'rotate(25.95deg)', transformOrigin: '0 0' }}
        />
        <div
          className="absolute top-[6.93px] left-[5.3px] w-1 h-[12.12px] rounded-xl bg-[#4579CE]"
          style={{ transform: 'rotate(25.95deg)', transformOrigin: '0 0' }}
        />
        <div
          className="absolute top-[7.47px] left-[12.12px] w-1 h-[12.12px] rounded-xl bg-[#3B82F6]"
          style={{ transform: 'rotate(90deg)', transformOrigin: '0 0' }}
        />
        <div className="absolute top-[-0.21px] left-[5px] w-[5.67px] h-[6.18px] bg-[#3B82F6]" />
      </div>
      <div className="font-semibold text-base leading-[22px] font-nunito">
        <span className="text-[#3B82F6]">Teacher</span>
        <span className="text-white">_</span>
        <span className="text-[#FFB933]">Hub</span>
      </div>
    </div>
  );
};

export default Logo;
