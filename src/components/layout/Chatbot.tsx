import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Language } from '../../types';

interface ChatbotProps {
  lang: Language;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export const Chatbot: React.FC<ChatbotProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-msg',
      text: lang === 'pt' 
        ? 'Olá! Sou o assistente virtual da Algoritmica Mania. Como posso ajudá-lo hoje?' 
        : 'Hello! I am the Algoritmica Mania virtual assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const generateBotResponse = (userInput: string) => {
    const input = userInput.toLowerCase();
    
    // Simple keyword matching for automated responses
    if (input.includes('price') || input.includes('cost') || input.includes('preço')) {
      return lang === 'pt' 
        ? 'Os nossos preços variam de acordo com o equipamento e as especificações. Por favor, envie-nos um pedido de orçamento para obter uma cotação precisa.'
        : 'Our prices vary depending on the equipment and specifications. Please submit a quote request for accurate pricing.';
    }
    
    if (input.includes('refurbish') || input.includes('recondicionado')) {
      return lang === 'pt'
        ? 'Oferecemos equipamentos de TI recondicionados com qualidade certificada, poupando até 70% comparativamente a produtos novos. Todos os produtos têm garantia.'
        : 'We offer certified refurbished IT equipment, saving you up to 70% compared to new products. All products come with a warranty.';
    }

    if (input.includes('support') || input.includes('suporte')) {
      return lang === 'pt'
        ? 'A nossa equipa de suporte técnico está disponível 24/7. Pode contactar-nos através do formulário de contacto ou pelo WhatsApp para assistência imediata.'
        : 'Our technical support team is available 24/7. You can reach us via the contact form or WhatsApp for immediate assistance.';
    }

    if (input.includes('hello') || input.includes('hi') || input.includes('olá')) {
      return lang === 'pt'
        ? 'Olá! Como posso ajudar com os seus requisitos de TI hoje?'
        : 'Hi there! How can I help you with your IT requirements today?';
    }

    return lang === 'pt'
      ? 'Obrigado pela sua mensagem. Para questões complexas, recomendo que utilize o nosso formulário de contacto ou o botão do WhatsApp para falar com um especialista.'
      : 'Thank you for your message. For complex inquiries, I recommend using our contact form or the WhatsApp button to speak with a specialist.';
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newUserMsg: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMsg]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot thinking
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(newUserMsg.text),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // 1-2 second delay
  };

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-end gap-3 select-none">
      
      {/* Floating Chat Button */}
      {!isOpen && (
        <div className="relative group">
          {/* Tooltip on hover */}
          {isTooltipOpen && (
            <div className="absolute bottom-full left-0 mb-3 hidden sm:flex flex-col bg-white border border-[#E2E8F0] rounded-xl shadow-lg p-3 w-48 text-xs animate-fadeIn origin-bottom-left">
              <p className="text-[#1F2933] font-medium leading-tight">
                {lang === 'pt'
                  ? 'Precisa de ajuda? Fale comigo!'
                  : 'Need help? Chat with me!'}
              </p>
            </div>
          )}
          
          <button
            onClick={() => setIsOpen(true)}
            onMouseEnter={() => setIsTooltipOpen(true)}
            onMouseLeave={() => setIsTooltipOpen(false)}
            aria-label="Open Chatbot"
            className="w-14 h-14 rounded-full bg-[#1A365D] hover:bg-[#2A4365] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-[320px] sm:w-[380px] h-[500px] max-h-[80vh] flex flex-col overflow-hidden border border-[#E2E8F0] animate-fadeIn origin-bottom-left">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1A365D] to-[#2A4365] p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Algoritmica AI</h3>
                <p className="text-xs text-white/80">
                  {lang === 'pt' ? 'Sempre Online' : 'Always Online'}
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-[#F8FAFC] flex flex-col gap-4">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex gap-2 max-w-[85%] ${msg.sender === 'user' ? 'self-end flex-row-reverse' : 'self-start'}`}
              >
                <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-1 ${msg.sender === 'user' ? 'bg-[#0D7E73]' : 'bg-[#1A365D]'}`}>
                  {msg.sender === 'user' ? (
                    <User className="w-3.5 h-3.5 text-white" />
                  ) : (
                    <Bot className="w-3.5 h-3.5 text-white" />
                  )}
                </div>
                <div 
                  className={`p-3 rounded-2xl text-sm ${
                    msg.sender === 'user' 
                      ? 'bg-[#0D7E73] text-white rounded-tr-none' 
                      : 'bg-white border border-[#E2E8F0] text-[#1F2933] rounded-tl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                  <span className={`block text-[9px] mt-1 text-right ${msg.sender === 'user' ? 'text-white/70' : 'text-[#94A3B8]'}`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-2 max-w-[85%] self-start">
                <div className="w-6 h-6 rounded-full bg-[#1A365D] flex-shrink-0 flex items-center justify-center mt-1">
                  <Bot className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="bg-white border border-[#E2E8F0] rounded-2xl rounded-tl-none p-4 shadow-sm flex gap-1">
                  <div className="w-1.5 h-1.5 bg-[#CBD5E1] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-1.5 h-1.5 bg-[#CBD5E1] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-1.5 h-1.5 bg-[#CBD5E1] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-[#E2E8F0] flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={lang === 'pt' ? 'Escreva a sua mensagem...' : 'Type your message...'}
              className="flex-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A365D]/20 focus:border-[#1A365D] transition-all"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isTyping}
              className="w-10 h-10 rounded-xl bg-[#0D7E73] hover:bg-[#0B6A61] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-white transition-colors"
            >
              <Send className="w-4 h-4 ml-0.5" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
};
