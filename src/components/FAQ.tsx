"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does the pilot work?",
    answer:
      "We start with a clearly scoped pilot project. You define the tasks, we deliver to spec. There's no lock-in—if the work doesn't meet your standards, you can stop after the pilot.",
  },
  {
    question: "What is the minimum engagement?",
    answer:
      "There's no minimum term. We recommend starting with a small pilot of two to four weeks so you can assess the quality and fit before scaling.",
  },
  {
    question: "How do you protect client data?",
    answer:
      "We work inside the platforms you already use, under access you control, and only the people assigned to your work can see your data. We don't share client information with anyone outside that team.",
  },
  {
    question: "Which software do you work with?",
    answer:
      "We work with Xero, MYOB, QuickBooks, various CRM systems, document management tools, and lender portals. If you use a specific tool, let us know and we'll confirm compatibility.",
  },
  {
    question: "Who will be my point of contact?",
    answer:
      "Every client is assigned a named point of contact who manages your workflow, communicates updates, and ensures consistency across deliverables.",
  },
  {
    question: "What is your turnaround time?",
    answer:
      "Turnaround depends on the scope and volume. During onboarding, we agree on deadlines and SLAs upfront.",
  },
  {
    question: "Can we stop after the pilot?",
    answer:
      "Yes. The pilot is designed so you can assess us with zero obligation. If it's not the right fit, you walk away with no cost beyond the pilot.",
  },
  {
    question: "Do you provide tax advice or only preparation support?",
    answer:
      "We provide tax return preparation support only. All returns are prepared for review and sign-off by your registered tax agent or CPA. We do not provide tax advice.",
  },
  {
    question: "Do you work with mortgage brokers in the USA?",
    answer:
      "Yes. We support mortgage brokers in both Australia and the USA with document preparation, file notes, lender follow-ups and application support.",
  },
  {
    question: "How do revisions work?",
    answer:
      "If anything doesn't meet the agreed scope or quality, we revise it at no extra cost. Every deliverable goes through a second-level review before it reaches you.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#0B0F14] border-t border-[#222A38]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-teal">
            Clarifications &amp; Details
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-grey-400 text-sm sm:text-base">
            Everything you need to know about starting a pilot with Meridex.
          </p>
        </div>

        {/* Clean Rounded Accordion Cards */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-[20px] transition-all duration-200 border ${
                  isOpen
                    ? "bg-[#151A22] border-[#2E3846] shadow-xl"
                    : "bg-[#11151C] border-[#222A38] hover:bg-[#151A22]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between text-left p-5 sm:p-6 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-base sm:text-lg text-white pr-4 leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? "bg-[#2563EB] text-white rotate-180" : "bg-[#0B0F14] text-white border border-[#222A38]"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm sm:text-base text-grey-300 leading-relaxed border-t border-[#222A38] pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
