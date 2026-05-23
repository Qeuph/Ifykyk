import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQS } from '../data';

export default function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {FAQS.map((faq) => {
        const isOpen = openId === faq.id;
        
        return (
          <div
            key={faq.id}
            className={`rounded-xl border transition-all duration-300 ${
              isOpen 
                ? 'bg-zinc-950/60 border-white/10 shadow-lg' 
                : 'bg-zinc-950/10 border-white/5 hover:border-white/10'
            }`}
          >
            {/* Clickable Header */}
            <button
              onClick={() => toggleFaq(faq.id)}
              className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <HelpCircle className={`w-4 h-4 text-zinc-500 transition-colors ${isOpen ? 'text-luxury-neon-purple' : ''}`} />
                <span className="font-display font-medium text-sm md:text-base text-zinc-200">
                  {faq.question}
                </span>
              </div>
              <div>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-zinc-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-zinc-400" />
                )}
              </div>
            </button>

            {/* Expandable answer panel */}
            <div
              className={`overflow-hidden transition-all duration-300 max-h-0 ${
                isOpen ? 'max-h-40 border-t border-white/5' : ''
              }`}
            >
              <div className="p-6 font-sans text-xs md:text-sm text-zinc-400 leading-relaxed">
                {faq.answer}
              </div>
            </div>

          </div>
        );
      })}
    </div>
  );
}
