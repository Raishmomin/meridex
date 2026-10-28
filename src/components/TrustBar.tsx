import React from 'react';
import { Globe, Shield, CheckCircle2, Unlock } from 'lucide-react';

interface TrustItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  sub: string;
}

const trustItems: TrustItem[] = [
  {
    icon: Globe,
    label: 'Australia & USA',
    sub: 'UK launching 2027',
  },
  {
    icon: Shield,
    label: 'Confidential Handling',
    sub: 'Access controls on every file',
  },
  {
    icon: CheckCircle2,
    label: 'Second-Level Review',
    sub: '100% pre-delivery QA checks',
  },
  {
    icon: Unlock,
    label: 'No Lock-In Pilot',
    sub: 'Scale or stop freely',
  },
];

export default function TrustBar() {
  return (
    <div className="bg-[#0B0F14] pb-8 pt-1 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#151A22] border border-[#222A38] rounded-2xl p-4 sm:p-6 shadow-md w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-4 lg:divide-x lg:divide-[#222A38]">
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 px-1 lg:px-5"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0B0F14] border border-[#222A38] flex items-center justify-center text-teal shrink-0 shadow-xs">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-teal" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-semibold text-white tracking-tight truncate">
                      {item.label}
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-slate-300 truncate mt-0.5 font-medium">
                      {item.sub}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
