'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MessageSquare,
  X,
  Send,
  Bot,
  User,
  Sparkles,
  PhoneCall,
  ShieldCheck,
  CheckCircle2,
  Minimize2,
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  options?: string[];
}

export default function ChatbotBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Hi there! 👋 Welcome to Meridex. How can we help take the admin or finance workload off your plate today?',
      time: 'Just now',
      options: [
        'Explore a 2-week pilot',
        'Mortgage broker support',
        'Bookkeeping & BAS help',
        'Book a discovery call',
      ],
    },
  ]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const newMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: text,
      time: 'Just now',
    };

    setMessages((prev) => [...prev, newMsg]);
    if (!textToSend) setInput('');

    // Automated smart assistant response
    setTimeout(() => {
      let botResponse =
        "Thanks for asking! Our pilots start with zero lock-in contracts and a named point of contact. Would you like to schedule a 15-minute discovery call to discuss your firm's volume and tools?";

      const lower = text.toLowerCase();
      if (lower.includes('pilot')) {
        botResponse =
          'Our pilot program runs typically 2 to 4 weeks with a defined task list, custom SOP setup, and 100% second-level review. You evaluate the output with zero long-term commitment.';
      } else if (lower.includes('mortgage') || lower.includes('broker')) {
        botResponse =
          'For mortgage brokers, we handle document collection, serviceability checks, lender comparison notes, CRM data entry, and settlement follow-ups across Australia and the USA.';
      } else if (lower.includes('bookkeeping') || lower.includes('bas')) {
        botResponse =
          'Our bookkeeping team is proficient in Xero, MYOB, and QuickBooks, handling daily reconciliations, AP/AR, payroll prep, and review-ready BAS files for registered agents.';
      } else if (lower.includes('call') || lower.includes('discovery')) {
        botResponse =
          'Great! You can book directly with our leadership team using the "Book a Discovery Call" button, or leave your email here and we will reach out within 2 hours.';
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: botResponse,
          time: 'Just now',
        },
      ]);
    }, 600);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Floating Chat Bubble Launcher */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open live chat assistant"
          className="group relative flex items-center gap-2.5 bg-navy hover:bg-navy-light text-white p-3 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 border border-[#E5E1D8]/20"
        >
          {/* Notification ping badge */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-teal" />
          </span>

          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-teal/20 text-teal-light flex items-center justify-center shrink-0">
            <MessageSquare className="w-4 h-4 text-teal-light" />
          </div>

          <div className="hidden sm:flex flex-col text-left">
            <span className="text-xs font-bold leading-none tracking-tight">Need help?</span>
            <span className="text-[10px] text-teal-light font-medium mt-0.5">Ask our pilot team</span>
          </div>
        </button>
      )}

      {/* Expanded Chat Drawer / Card */}
      {isOpen && (
        <div className="w-[calc(100vw-32px)] max-w-[380px] h-[480px] sm:h-[520px] max-h-[85vh] bg-[#F7F5F0] rounded-[24px] sm:rounded-[28px] border border-[#E5E1D8] shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">
          
          {/* Header */}
          <div className="bg-navy p-4 sm:p-5 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-teal/20 text-teal-light flex items-center justify-center font-bold text-sm">
                  <Bot className="w-5 h-5" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-navy rounded-full" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-sm">Meridex Pilot Assistant</h3>
                  <span className="text-[9px] bg-white/10 px-1.5 py-0.5 rounded text-teal-light font-semibold">
                    Live
                  </span>
                </div>
                <p className="text-[11px] text-grey-300">
                  Australia &amp; USA Operation Desk
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/10 text-grey-300 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs sm:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-[20px] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-navy text-white rounded-br-xs'
                      : 'bg-white text-navy border border-[#E5E1D8] shadow-xs rounded-bl-xs'
                  }`}
                >
                  <p>{msg.text}</p>
                </div>
                <span className="text-[10px] text-grey-400 mt-1 px-1">
                  {msg.time}
                </span>

                {/* Quick suggestions if present */}
                {msg.options && (
                  <div className="flex flex-wrap gap-1.5 mt-2.5 max-w-[95%]">
                    {msg.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleSend(opt)}
                        className="text-[11px] font-medium bg-[#EFECE6] hover:bg-white border border-[#E5E1D8] text-navy px-3 py-1.5 rounded-full transition-all text-left shadow-xs hover:border-navy"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Action Bar */}
          <div className="px-4 py-2 bg-[#EFECE6] border-t border-[#E5E1D8] flex items-center justify-between text-[11px] text-grey-600">
            <span className="flex items-center gap-1 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-teal" /> 100% Confidential
            </span>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-navy font-bold hover:underline"
            >
              Book call directly →
            </Link>
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-[#E5E1D8] flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about our pilot, tools, or SLA..."
              className="flex-1 bg-[#F7F5F0] border border-[#E5E1D8] rounded-full px-4 py-2 text-xs sm:text-sm text-navy placeholder-grey-400 focus:outline-none focus:border-navy"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="w-8 h-8 rounded-full bg-navy disabled:opacity-40 text-white flex items-center justify-center shrink-0 hover:bg-navy-light transition-colors"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
}
