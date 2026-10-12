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
    sub: 'UK support coming soon',
  },
  {
    icon: Shield,
    label: 'Secure Document Handling',
    sub: 'Bank-grade access protocols',
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
    <div className="bg-[#F7F5F0] pb-10 pt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EFECE6] border border-[#E5E1D8] rounded-2xl p-5 sm:p-6 shadow-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 lg:divide-x lg:divide-[#DDD8CD]">
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3.5 px-2 lg:px-5"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/80 border border-[#E5E1D8] flex items-center justify-center text-navy shrink-0 shadow-xs">
                    <Icon className="w-5 h-5 text-teal" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-semibold text-navy tracking-tight truncate">
                      {item.label}
                    </p>
                    <p className="text-[11px] text-grey-500 truncate mt-0.5">
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
