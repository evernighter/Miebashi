import React, { useState, useEffect } from 'react';
import { CalendarDays, Utensils, Gift, Snowflake, Share, X, Copy, Check } from 'lucide-react';
import { Tab } from './types';
import { DAY_1_DATA, DAY_2_DATA, DAY_3_DATA, RESTAURANT_DATA } from './constants';
import { TimelineItem } from './components/TimelineItem';
import { RestaurantCard } from './components/RestaurantCard';
import { Snowflakes } from './components/Snowflakes';
import { Momonga } from './components/Momonga';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('day1');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    setCurrentUrl(window.location.href);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'day1':
        return (
          <div className="space-y-1 animate-fadeIn pb-4">
             <div className="bg-pink-100/50 rounded-xl p-4 mb-6 text-center border border-pink-200 relative overflow-hidden">
                <Momonga className="absolute -right-2 -bottom-4 w-16 h-16 opacity-80 rotate-12" />
                <h2 className="text-pink-800 font-bold text-lg flex items-center justify-center gap-2 relative z-10">
                   <Snowflake size={18} className="text-pink-400" />
                   第一天：抵達與那霸夜遊
                   <Snowflake size={18} className="text-pink-400" />
                </h2>
                <p className="text-pink-600 text-xs mt-1 relative z-10">DFS 購物 · 榮町市場宵夜</p>
             </div>
            {DAY_1_DATA.map((item, idx) => (
              <TimelineItem key={item.id} item={item} isLast={idx === DAY_1_DATA.length - 1} />
            ))}
          </div>
        );
      case 'day2':
        return (
          <div className="space-y-1 animate-fadeIn pb-4">
            <div className="bg-green-100/50 rounded-xl p-4 mb-6 text-center border border-green-200 relative overflow-hidden">
                <Momonga className="absolute -left-2 -bottom-4 w-16 h-16 opacity-80 -rotate-12 transform scale-x-[-1]" />
                <h2 className="text-green-800 font-bold text-lg flex items-center justify-center gap-2 relative z-10">
                   <Snowflake size={18} className="text-green-500" />
                   第二天：文青散策
                   <Snowflake size={18} className="text-green-500" />
                </h2>
                <p className="text-green-600 text-xs mt-1 relative z-10">浮島通 · 牧志市場 · 國際通</p>
             </div>
            {DAY_2_DATA.map((item, idx) => (
              <TimelineItem key={item.id} item={item} isLast={idx === DAY_2_DATA.length - 1} />
            ))}
          </div>
        );
      case 'day3':
        return (
          <div className="space-y-1 animate-fadeIn pb-4">
            <div className="bg-red-100/50 rounded-xl p-4 mb-6 text-center border border-red-200 relative overflow-hidden">
                <Momonga className="absolute -right-1 top-1 w-12 h-12 opacity-80 rotate-6" />
                <h2 className="text-red-800 font-bold text-lg flex items-center justify-center gap-2 relative z-10">
                   <Snowflake size={18} className="text-red-400" />
                   第三天：小祿購物與返程
                   <Snowflake size={18} className="text-red-400" />
                </h2>
                <p className="text-red-600 text-xs mt-1 relative z-10">AEON 百貨 · 機場最後衝刺</p>
             </div>
            {DAY_3_DATA.map((item, idx) => (
              <TimelineItem key={item.id} item={item} isLast={idx === DAY_3_DATA.length - 1} />
            ))}
          </div>
        );
      case 'food':
        return (
          <div className="animate-fadeIn grid gap-4 pb-4">
             <div className="bg-orange-100/50 rounded-xl p-4 mb-2 text-center border border-orange-200 relative">
                <Momonga className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 opacity-90" />
                <h2 className="text-orange-800 font-bold text-lg flex items-center justify-center gap-2">
                   <Utensils size={18} className="text-orange-500" />
                   美味願望清單
                   <Utensils size={18} className="text-orange-500" />
                </h2>
                <p className="text-orange-600 text-xs mt-1">苦瓜漢堡 · 沖繩麵 · 甜點</p>
             </div>
            {RESTAURANT_DATA.map((item) => (
              <RestaurantCard key={item.id} item={item} />
            ))}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen pb-24 relative selection:bg-pink-200">
      <Snowflakes />
      
      {/* Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-5 flex justify-between items-center relative">
          <div>
            <h1 className="text-2xl font-bold text-pink-600 tracking-tight flex items-center gap-2">
              <Gift className="text-red-500" size={24} />
              <span className="text-gray-800">Okinawa</span>
            </h1>
            <p className="text-xs text-pink-400 font-medium tracking-wider">MERRY CHRISTMAS TRIP</p>
          </div>
          
          <div className="flex items-center gap-3">
             <button 
                onClick={() => setShowShareModal(true)}
                className="w-8 h-8 rounded-full bg-white/50 hover:bg-white flex items-center justify-center text-pink-500 transition-colors"
                aria-label="Share"
             >
                <Share size={18} />
             </button>
             <div className="relative">
               {/* Momonga peeking over the Christmas element */}
               <div className="absolute -top-6 -right-2 w-10 h-10 animate-bounce" style={{ animationDuration: '3s' }}>
                 <Momonga pose="peeking" />
               </div>
               <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-lg transform rotate-12 relative z-10">
                 <span className="text-xl">🎄</span>
               </div>
             </div>
          </div>
        </div>
      </header>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowShareModal(false)} />
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm relative z-10 shadow-2xl animate-fadeIn">
            <button 
               onClick={() => setShowShareModal(false)}
               className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
               <X size={20} />
            </button>
            
            <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
               <Share size={18} className="text-pink-500" />
               在 iPhone 上開啟
            </h3>
            <p className="text-gray-500 text-sm mb-4">
               複製下方網址，使用 Safari 開啟並加入主畫面。
            </p>

            <div className="bg-gray-50 p-3 rounded-lg flex items-center gap-2 border border-gray-200 mb-4">
               <input 
                  type="text" 
                  value={currentUrl} 
                  readOnly 
                  className="bg-transparent flex-1 text-sm text-gray-600 outline-none w-full"
               />
               <button 
                  onClick={handleCopy}
                  className={`p-2 rounded-md transition-colors ${copied ? 'bg-green-100 text-green-600' : 'bg-white text-gray-500 shadow-sm'}`}
               >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
               </button>
            </div>

            <div className="bg-pink-50 rounded-xl p-4 text-xs text-pink-700 space-y-2">
               <p className="font-bold">📱 iPhone 安裝教學：</p>
               <ol className="list-decimal list-inside space-y-1 opacity-90">
                  <li>用 Safari 開啟此連結</li>
                  <li>點擊下方「分享」按鈕 <span className="inline-block border border-pink-300 px-1 rounded bg-white">↑</span></li>
                  <li>選擇「加入主畫面」</li>
               </ol>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-5 relative z-10 pt-2">
        {renderContent()}
      </main>

      {/* Fixed Floating Momonga Decoration */}
      <div className="fixed bottom-24 right-4 z-30 opacity-90 pointer-events-none">
         <div className="relative">
            <div className="absolute -top-8 -left-8 bg-white/90 px-3 py-1 rounded-2xl shadow-sm border border-blue-100 text-[10px] text-blue-400 font-bold whitespace-nowrap animate-pulse">
               誇獎我!
            </div>
            <Momonga className="w-16 h-16 drop-shadow-md" />
         </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-pink-100 pb-safe pt-2 px-2 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <div className="flex justify-around items-end max-w-md mx-auto">
          <NavButton 
            active={activeTab === 'day1'} 
            onClick={() => setActiveTab('day1')} 
            label="Day 1" 
            subLabel="抵達"
            color="text-pink-500"
          />
          <NavButton 
            active={activeTab === 'day2'} 
            onClick={() => setActiveTab('day2')} 
            label="Day 2" 
            subLabel="市區"
            color="text-green-500"
          />
          <NavButton 
            active={activeTab === 'day3'} 
            onClick={() => setActiveTab('day3')} 
            label="Day 3" 
            subLabel="返程"
            color="text-red-500"
          />
          <NavButton 
            active={activeTab === 'food'} 
            onClick={() => setActiveTab('food')} 
            label="美食" 
            subLabel="想吃"
            icon={<Utensils size={20} />}
            color="text-orange-500"
          />
        </div>
      </nav>
    </div>
  );
};

// Helper for Nav Buttons
const NavButton: React.FC<{
  active: boolean;
  onClick: () => void;
  label: string;
  subLabel: string;
  icon?: React.ReactNode;
  color: string;
}> = ({ active, onClick, label, subLabel, icon, color }) => (
  <button 
    onClick={() => {
      onClick();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }}
    className={`flex flex-col items-center justify-center w-full py-2 transition-all duration-300 ${active ? '-translate-y-2' : ''}`}
  >
    <div className={`
      relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300
      ${active ? 'bg-gray-800 shadow-lg scale-110' : 'bg-transparent hover:bg-gray-50'}
    `}>
      {icon ? (
        <span className={active ? 'text-white' : 'text-gray-400'}>{icon}</span>
      ) : (
        <CalendarDays size={20} className={active ? 'text-white' : 'text-gray-400'} />
      )}
      
      {active && (
         <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
      )}
    </div>
    
    <div className="mt-1 text-center">
      <span className={`block text-xs font-bold leading-none ${active ? color : 'text-gray-400'}`}>
        {label}
      </span>
      <span className={`block text-[10px] transform scale-90 ${active ? 'text-gray-500' : 'text-gray-300'}`}>
        {subLabel}
      </span>
    </div>
  </button>
);

export default App;