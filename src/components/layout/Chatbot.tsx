import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles, ExternalLink } from 'lucide-react';
import { Language } from '../../types';

interface ChatbotProps {
  lang: Language;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  link?: { url: string; label: string };
  chips?: string[];
}

export const Chatbot: React.FC<ChatbotProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  
  const getWelcomeChips = () => {
    if (lang === 'pt') {
      return [
        '💻 Portáteis & PCs',
        '🖥️ Servidores & Storage',
        '🌐 Redes & Wi-Fi',
        '🛡️ Cibersegurança',
        '♻️ Vender Equipamento',
        '📑 Pedir Orçamento'
      ];
    }
    return [
      '💻 Laptops & PCs',
      '🖥️ Servers & Storage',
      '🌐 Networking & Wi-Fi',
      '🛡️ Cybersecurity',
      '♻️ Sell Equipment',
      '📑 Request a Quote'
    ];
  };

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-msg',
      text: lang === 'pt' 
        ? 'Olá! 👋 Sou o assistente virtual da Algorítmica Mania. Como posso ajudar o seu negócio com hardware ou serviços de TI?' 
        : 'Hello! 👋 I am Algorítmica Mania\'s AI Assistant. How can I help your business with hardware or IT services today?',
      sender: 'bot',
      timestamp: new Date(),
      chips: getWelcomeChips()
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

  const generateBotResponse = (userInput: string): { text: string; link?: { url: string; label: string }; chips?: string[] } => {
    const input = userInput.toLowerCase();

    // 1. LAPTOPS / COMPUTERS / WORKSTATIONS (Handling typos: lptop, latop, leptop, etc.)
    if (
      input.includes('laptop') || input.includes('lptop') || input.includes('latop') || 
      input.includes('leptop') || input.includes('portatil') || input.includes('portáteis') || 
      input.includes('computer') || input.includes('computador') || input.includes('pc') || 
      input.includes('thinkpad') || input.includes('latitude') || input.includes('elitebook') || 
      input.includes('macbook') || input.includes('apple')
    ) {
      if (lang === 'pt') {
        return {
          text: 'Temos portáteis empresariais recondicionados de topo (Grau A+) com 12 meses de garantia:\n\n• **Lenovo ThinkPad T14s Gen 2** (i7, 16GB, 512GB SSD) — 549€\n• **Dell Latitude 5420** (i5, 16GB, 256GB SSD) — 439€\n• **HP EliteBook 840 G8** (i7, 32GB, 1TB SSD) — 689€\n• **Apple MacBook Pro / Air** sob consulta.\n\nTodos testados rigorosamente nas nossas instalações na Trofa com saúde de bateria 90%+ garantida.',
          link: { url: '/products?category=used-refurbished', label: 'Ver Todos os Portáteis' },
          chips: ['💰 Preços & Orçamentos', '🛡️ Garantia de 12 Meses', '♻️ Vender o meu Portátil']
        };
      }
      return {
        text: 'We supply certified enterprise refurbished Grade A+ laptops with a 12-month warranty:\n\n• **Lenovo ThinkPad T14s Gen 2** (i7, 16GB, 512GB SSD) — €549\n• **Dell Latitude 5420** (i5, 16GB, 256GB SSD) — €439\n• **HP EliteBook 840 G8** (i7, 32GB, 1TB SSD) — €689\n• **Apple MacBook Pro & Air** also available.\n\nEvery device is rigorously tested in our Trofa hub with guaranteed 90%+ battery health.',
        link: { url: '/products?category=used-refurbished', label: 'Explore All Laptops' },
        chips: ['💰 Pricing & Quotation', '🛡️ 12-Month Warranty', '♻️ Sell Used Laptops']
      };
    }

    // 2. SERVERS & STORAGE (Dell PowerEdge, HPE, Synology, TrueNAS, SAN)
    if (
      input.includes('server') || input.includes('servidor') || input.includes('storage') || 
      input.includes('nas') || input.includes('poweredge') || input.includes('proliant') || 
      input.includes('synology') || input.includes('backup')
    ) {
      if (lang === 'pt') {
        return {
          text: 'Dispomos de soluções completas de Servidores e Armazenamento:\n\n• **Dell PowerEdge R640 / R740** com CPUs Xeon Scalable e controladoras RAID redundantes.\n• **HPE ProLiant Gen10** para virtualização (VMware ESXi, Proxmox).\n• **Synology Enterprise NAS** & Storage SAN para backups centralizados e proteção contra ransomware.',
          link: { url: '/services/servers-storage', label: 'Ver Soluções de Servidores' },
          chips: ['📑 Pedir Cotação de Servidor', '🛡️ Backup & Recuperação']
        };
      }
      return {
        text: 'We provide enterprise Server & Storage solutions:\n\n• **Dell PowerEdge R640 / R740** equipped with dual Xeon Scalable CPUs & redundant RAID.\n• **HPE ProLiant Gen10** optimized for high-density virtualization (Proxmox, VMware).\n• **Synology Enterprise NAS** and SAN arrays for immutable backups & ransomware defense.',
        link: { url: '/services/servers-storage', label: 'Explore Server Solutions' },
        chips: ['📑 Request Server Quote', '🛡️ Disaster Recovery']
      };
    }

    // 3. NETWORKING, SWITCHES, ROUTERS, FIREWALLS (Cisco, Ubiquiti, Fortinet, Sophos)
    if (
      input.includes('network') || input.includes('rede') || input.includes('switch') || 
      input.includes('router') || input.includes('firewall') || input.includes('cisco') || 
      input.includes('ubiquiti') || input.includes('unifi') || input.includes('fortinet') || 
      input.includes('sophos') || input.includes('wifi') || input.includes('wi-fi')
    ) {
      if (lang === 'pt') {
        return {
          text: 'Especialistas em Redes Empresariais e Segurança de Perímetro:\n\n• **Firewalls Fortinet FortiGate & Sophos XGS** com inspeção profunda de tráfego e VPN segura.\n• **Switches Geridos Cisco Catalyst & Ubiquiti UniFi** (PoE+, 10GbE SFP+).\n• **Wi-Fi 6 Profissional** com cobertura total para escritórios, armazéns e indústrias.',
          link: { url: '/services/networking-infrastructure', label: 'Serviços de Rede' },
          chips: ['🛡️ Auditoria de Cibersegurança', '📑 Pedir Cotação']
        };
      }
      return {
        text: 'We specialize in Enterprise Networking & Edge Security:\n\n• **Fortinet FortiGate & Sophos XGS Next-Gen Firewalls** with deep SSL inspection & site-to-site VPNs.\n• **Cisco Catalyst & Ubiquiti UniFi Managed Switches** (PoE+, 10GbE SFP+ uplink).\n• **Enterprise Wi-Fi 6** high-density access points with seamless roaming.',
        link: { url: '/services/networking-infrastructure', label: 'View Network Services' },
        chips: ['🛡️ Cybersecurity Audit', '📑 Request Network Quote']
      };
    }

    // 4. CYBERSECURITY & DATA REMOVAL
    if (
      input.includes('cyber') || input.includes('seguran') || input.includes('ciber') || 
      input.includes('virus') || input.includes('ransomware') || input.includes('wipe') || 
      input.includes('apagar') || input.includes('destru') || input.includes('gdpr') || 
      input.includes('rgpd') || input.includes('nist')
    ) {
      if (lang === 'pt') {
        return {
          text: 'Serviços de Cibersegurança e Destruição Certificada de Dados:\n\n• **Eliminação Segura de Dados (NIST 800-88 / RGPD)** com emissão de certificado digital.\n• **Proteção contra Ransomware e EDR** para endpoints e servidores.\n• **Auditorias de Vulnerabilidade e Defesa de Perímetro**.',
          link: { url: '/services/cybersecurity', label: 'Serviços de Cibersegurança' },
          chips: ['📑 Pedir Auditoria', '💻 Portáteis Seguros']
        };
      }
      return {
        text: 'Cybersecurity & Certified Data Sanitization Services:\n\n• **Secure Data Erasure (NIST 800-88 & GDPR compliant)** with tamper-proof audit certificates.\n• **Ransomware Defense & EDR** for corporate endpoints and cloud infrastructure.\n• **Vulnerability Assessments & Penetration Testing**.',
        link: { url: '/services/cybersecurity', label: 'Cybersecurity Solutions' },
        chips: ['📑 Request Security Audit', '💻 Secure Hardware']
      };
    }

    // 5. SELL EQUIPMENT / BUYBACK / ITAD (Vender, Comprar, Sell, Buyback)
    if (
      input.includes('sell') || input.includes('vender') || input.includes('compra') || 
      input.includes('itad') || input.includes('recovery') || input.includes('retoma') || 
      input.includes('velho') || input.includes('usado') || input.includes('lote')
    ) {
      if (lang === 'pt') {
        return {
          text: 'Compramos o seu parque informático usado (ITAD & Asset Recovery):\n\n• Avaliação rápida de lotes de portáteis, desktops, servidores e switches.\n• Levantamento no local e destruição certificada de dados.\n• Pagamento rápido e valorização máxima do seu equipamento em fim de ciclo.',
          link: { url: '/sell-equipment', label: 'Formulário de Venda de Equipamento' },
          chips: ['📑 Submeter Lista de Equipamentos', '📞 Falar no WhatsApp']
        };
      }
      return {
        text: 'We purchase your decommissioned enterprise IT equipment (ITAD & Buyback):\n\n• Rapid valuation for corporate lots of laptops, workstations, servers & networking switches.\n• On-site pickup and certified data sanitization.\n• Fast payment and maximum value recovery for your end-of-lifecycle hardware.',
        link: { url: '/sell-equipment', label: 'Submit Equipment Sell Form' },
        chips: ['📑 Submit Asset List', '📞 Chat on WhatsApp']
      };
    }

    // 6. IT SUPPORT / TECHNICAL DESK
    if (
      input.includes('support') || input.includes('suporte') || input.includes('ajuda') || 
      input.includes('help') || input.includes('repar') || input.includes('assist') || 
      input.includes('avaria') || input.includes('manut')
    ) {
      if (lang === 'pt') {
        return {
          text: 'A Algorítmica Mania oferece Suporte Técnico Especializado:\n\n• Diagnóstico e reparação de computadores, portáteis e servidores no nosso laboratório na Trofa.\n• Contratos de manutenção preventiva e corretiva para empresas.\n• Assistência remota e intervenção rápida no local.',
          link: { url: '/services/it-support', label: 'Suporte Técnico' },
          chips: ['📞 Suporte Imediato WhatsApp', '📑 Pedir Intervenção']
        };
      }
      return {
        text: 'Algorítmica Mania provides Dedicated IT Support & Engineering:\n\n• Hardware diagnostics and component repairs in our Trofa technical center.\n• Preventative & corrective maintenance contracts for businesses.\n• Rapid remote helpdesk and on-site engineering dispatch.',
        link: { url: '/services/it-support', label: 'IT Support Services' },
        chips: ['📞 Instant WhatsApp Support', '📑 Request Assistance']
      };
    }

    // 7. LOCATION / CONTACT / HOURS (Trofa, Portugal, Morada, Contacto)
    if (
      input.includes('location') || input.includes('local') || input.includes('onde') || 
      input.includes('where') || input.includes('address') || input.includes('morada') || 
      input.includes('trofa') || input.includes('contacto') || input.includes('contact') || 
      input.includes('telefone') || input.includes('horario') || input.includes('hours')
    ) {
      if (lang === 'pt') {
        return {
          text: '📍 **Localização & Contactos da Algorítmica Mania**:\n\n• **Hub Técnico**: Trofa, Grande Porto, Portugal\n• **Telefone / WhatsApp**: +351 912 345 678\n• **Horário**: Segunda a Sexta, 09:00 às 18:30 (WET)\n• **Email**: info@algoritmica-mania.pt',
          link: { url: '/contact', label: 'Página de Contacto' },
          chips: ['📑 Pedir Orçamento', '💻 Ver Produtos']
        };
      }
      return {
        text: '📍 **Algorítmica Mania Location & Contact Desk**:\n\n• **Technical Hub**: Trofa, Greater Porto, Portugal\n• **Phone / WhatsApp**: +351 912 345 678\n• **Operating Hours**: Monday – Friday, 09:00 to 18:30 (WET)\n• **Email**: info@algoritmica-mania.pt',
        link: { url: '/contact', label: 'Visit Contact Page' },
        chips: ['📑 Request Quote', '💻 Browse Products']
      };
    }

    // 8. PRICE / COST / ORÇAMENTO
    if (
      input.includes('price') || input.includes('cost') || input.includes('preço') || 
      input.includes('preco') || input.includes('quanto') || input.includes('orçamento') || 
      input.includes('quote') || input.includes('tabela')
    ) {
      if (lang === 'pt') {
        return {
          text: 'Poupe até 70% comparativamente a novos equipamentos! Pode pedir uma cotação personalizada sem compromisso com resposta em menos de 2 horas úteis.',
          link: { url: '/contact', label: 'Solicitar Orçamento Grátis' },
          chips: ['💻 Ver Portáteis', '🖥️ Ver Servidores', '♻️ Vender Equipamento']
        };
      }
      return {
        text: 'Save up to 70% compared to new hardware with zero compromise on enterprise performance! Request a custom instant quote with response within 2 business hours.',
        link: { url: '/contact', label: 'Request Free Quotation' },
        chips: ['💻 View Laptops', '🖥️ View Servers', '♻️ Sell Old Hardware']
      };
    }

    // 9. GREETINGS (Hello, Hi, Salam, Ola, Bom dia)
    if (
      input.includes('hello') || input.includes('hi') || input.includes('hey') || 
      input.includes('olá') || input.includes('ola') || input.includes('bom dia') || 
      input.includes('boa tarde') || input.includes('salam') || input.includes('kya hal')
    ) {
      if (lang === 'pt') {
        return {
          text: 'Olá! Sou o assistente da Algorítmica Mania. Como posso ajudá-lo hoje? Pode perguntar-me sobre portáteis, servidores, redes, cibersegurança ou venda de equipamento.',
          chips: getWelcomeChips()
        };
      }
      return {
        text: 'Hello! I am your Algorítmica Mania assistant. How can I help you today? You can ask me about our laptops, servers, networking, cybersecurity, or selling your used IT assets.',
        chips: getWelcomeChips()
      };
    }

    // DEFAULT FALLBACK (Comprehensive guide)
    if (lang === 'pt') {
      return {
        text: 'Entendido! Na Algorítmica Mania fornecemos:\n\n1. **Hardware Recondicionado Grau A+** (Portáteis, PCs, Servidores e Switches).\n2. **Soluções de Rede & Wi-Fi** (Cisco, Fortinet, Ubiquiti).\n3. **Cibersegurança & Destruição Certificada de Dados** (NIST 800-88).\n4. **Compra de Equipamentos Usados (ITAD)** com valorização imediata.\n\nSelecione um tópico abaixo ou escreva a sua dúvida específica:',
        chips: getWelcomeChips()
      };
    }

    return {
      text: 'Got it! At Algorítmica Mania, we deliver:\n\n1. **Grade A+ Certified Hardware** (Laptops, Workstations, Servers & Switches).\n2. **Enterprise Networking & Wi-Fi** (Cisco, Fortinet, Ubiquiti).\n3. **Cybersecurity & Certified Data Sanitization** (NIST 800-88).\n4. **IT Asset Disposition (ITAD)** & hardware buyback with fast payouts.\n\nChoose an option below or type your specific question:',
      chips: getWelcomeChips()
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const newUserMsg: Message = {
      id: Date.now().toString(),
      text: query,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const botReply = generateBotResponse(query);
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: botReply.text,
        sender: 'bot',
        timestamp: new Date(),
        link: botReply.link,
        chips: botReply.chips
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-end gap-3 select-none">
      
      {/* Floating Chat Button */}
      {!isOpen && (
        <div className="relative group">
          {/* Tooltip on hover */}
          {isTooltipOpen && (
            <div className="absolute bottom-full left-0 mb-3 hidden sm:flex flex-col bg-white border border-[#CCFBF1] rounded-xl shadow-xl p-3 w-56 text-xs animate-fadeIn origin-bottom-left">
              <div className="flex items-center gap-1.5 font-bold text-[#0D7E73] mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Algorítmica AI Assistant</span>
              </div>
              <p className="text-[#1F2933] text-[11px] leading-tight">
                {lang === 'pt'
                  ? 'Tire dúvidas sobre portáteis, servidores, redes ou orçamentos!'
                  : 'Ask about laptops, servers, networking, or instant quotes!'}
              </p>
            </div>
          )}
          
          <button
            id="floating-ai-chatbot-btn"
            onClick={() => setIsOpen(true)}
            onMouseEnter={() => setIsTooltipOpen(true)}
            onMouseLeave={() => setIsTooltipOpen(false)}
            aria-label="Open Algoritmica AI Assistant"
            className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#0D7E73] to-[#042F2C] text-white flex items-center justify-center shadow-2xl hover:shadow-[#0D7E73]/30 transition-all duration-300 transform hover:scale-105 group relative cursor-pointer"
          >
            <Bot className="w-7 h-7 text-white animate-pulse" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#10B981] border-2 border-white rounded-full" />
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-[330px] sm:w-[390px] h-[520px] max-h-[82vh] flex flex-col overflow-hidden border border-[#E2E8F0] animate-fadeIn origin-bottom-left">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#042F2C] via-[#0D7E73] to-[#0B6A61] p-4 flex items-center justify-between text-white shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/30">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-sm leading-tight">Algorítmica AI</h3>
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                </div>
                <p className="text-[11px] text-[#CCFBF1] font-medium">
                  {lang === 'pt' ? 'Hardware & Serviços de TI' : 'Enterprise Hardware & IT Desk'}
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors cursor-pointer p-1 rounded-lg hover:bg-white/10"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-[#F8FAFC] flex flex-col gap-3.5">
            {messages.map((msg) => (
              <div key={msg.id} className="flex flex-col gap-2">
                <div 
                  className={`flex gap-2 max-w-[90%] ${msg.sender === 'user' ? 'self-end flex-row-reverse' : 'self-start'}`}
                >
                  <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center mt-1 text-white shadow-sm ${msg.sender === 'user' ? 'bg-[#0D7E73]' : 'bg-[#042F2C]'}`}>
                    {msg.sender === 'user' ? (
                      <User className="w-4 h-4" />
                    ) : (
                      <Bot className="w-4 h-4" />
                    )}
                  </div>
                  <div 
                    className={`p-3.5 rounded-2xl text-xs sm:text-[13px] leading-relaxed ${
                      msg.sender === 'user' 
                        ? 'bg-[#0D7E73] text-white rounded-tr-none shadow-md' 
                        : 'bg-white border border-[#E2E8F0] text-[#1F2933] rounded-tl-none shadow-sm'
                    }`}
                  >
                    <div className="whitespace-pre-line font-normal">
                      {msg.text}
                    </div>

                    {msg.link && (
                      <a 
                        href={msg.link.url}
                        className="mt-2.5 inline-flex items-center gap-1.5 font-bold text-xs text-[#0D7E73] bg-[#CCFBF1]/40 hover:bg-[#CCFBF1] px-2.5 py-1.5 rounded-lg transition-colors border border-[#0D7E73]/20"
                      >
                        <span>{msg.link.label}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    <span className={`block text-[9px] mt-1.5 text-right font-mono ${msg.sender === 'user' ? 'text-white/70' : 'text-[#94A3B8]'}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>

                {/* Suggestion Chips */}
                {msg.chips && msg.chips.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 ml-9 mt-1">
                    {msg.chips.map((chip, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(chip.replace(/^[^\w\s]+/, '').trim())}
                        className="text-[11px] font-medium bg-white hover:bg-[#EAF3F8] text-[#0D7E73] border border-[#CCFBF1] hover:border-[#0D7E73] px-2.5 py-1 rounded-full shadow-xs transition-all cursor-pointer transform hover:scale-102"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-2 max-w-[85%] self-start">
                <div className="w-7 h-7 rounded-full bg-[#042F2C] flex-shrink-0 flex items-center justify-center mt-1 text-white">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white border border-[#E2E8F0] rounded-2xl rounded-tl-none p-3.5 shadow-sm flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-[#0D7E73] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-[#0D7E73] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-[#0D7E73] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="p-3 bg-white border-t border-[#E2E8F0] flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={lang === 'pt' ? 'Pergunte sobre portáteis, servidores...' : 'Ask about laptops, servers, pricing...'}
              className="flex-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-3.5 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0D7E73]/30 focus:border-[#0D7E73] transition-all"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isTyping}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0D7E73] hover:bg-[#0B6A61] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center text-white transition-all cursor-pointer shadow-md"
            >
              <Send className="w-4 h-4 ml-0.5" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
};
