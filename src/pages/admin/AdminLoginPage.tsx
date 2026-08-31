import React, { useState } from 'react';
import { Shield, Lock, Mail, ArrowRight, CheckCircle2, KeyRound } from 'lucide-react';
import { useAdmin } from '../../context/AdminAuthContext';
import { useNavigate } from 'react-router-dom';

export const AdminLoginPage: React.FC = () => {
  const { login } = useAdmin();
  const [email, setEmail] = useState('admin@algomania.com');
  const [password, setPassword] = useState('••••••••••••');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      login(email, password);
      setIsLoading(false);
      navigate('/admin/dashboard');
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#042F2C] flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background Decorative Rings */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#0D7E73]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#10B981]/15 blur-3xl pointer-events-none" />

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-white/10 p-8 relative z-10">
        
        {/* Brand Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0D7E73] to-[#042F2C] flex items-center justify-center text-white shadow-lg mb-3.5">
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current text-[#2DD4BF]" xmlns="http://www.w3.org/2000/svg">
              <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
              <circle cx="12" cy="12" r="3.5" fill="#5EEAD4" />
            </svg>
          </div>

          <div className="flex items-center gap-1.5 leading-none mb-1">
            <span className="font-black text-lg text-slate-900">ALGORITMICA</span>
            <span className="font-black text-lg text-[#0D7E73]">MANIA</span>
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0D7E73]">
            ENTERPRISE MANAGEMENT PORTAL
          </span>
          <p className="text-xs text-slate-500 mt-2">
            Restricted access for authenticated administrators and technicians.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Administrator Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@algomania.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#0D7E73] focus:outline-hidden transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Secure Password / Passkey
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#0D7E73] focus:outline-hidden transition-all"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-xl bg-[#042F2C] hover:bg-[#064E3B] text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-75 mt-2"
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <span>Authenticate Session</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Demo Fast Login Option */}
        <div className="mt-6 pt-5 border-t border-slate-100 text-center">
          <button
            type="button"
            onClick={() => {
              login('admin@algomania.com');
              navigate('/admin/dashboard');
            }}
            className="w-full py-2.5 px-4 rounded-xl bg-[#F0FDFA] border border-[#CCFBF1] hover:bg-[#CCFBF1]/50 text-[#0D7E73] text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <KeyRound className="w-4 h-4" />
            <span>Instant Demo Access (Admin Owner)</span>
          </button>
        </div>

        {/* Security Badge */}
        <div className="mt-6 flex items-center justify-center gap-1.5 text-[11px] text-slate-400 font-medium">
          <Shield className="w-3.5 h-3.5 text-[#0D7E73]" />
          <span>Protected with TLS 1.3 & NIST Audit Trails</span>
        </div>

      </div>
    </div>
  );
};

export default AdminLoginPage;
