import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Supply & Demand Trading Strategy | Master Institutional Price Action",
  description: "Learn how institutions move the market. A complete guide to Supply & Demand, Market Structure, and Price Action trading strategies. No indicators, just logic.",
  keywords: ["supply and demand trading", "price action", "market structure", "institutional trading", "forex strategy", "stock trading book"],
  openGraph: {
    title: "Supply & Demand Trading | How Institutions Move the Market",
    description: "Stop guessing. Start understanding. Master the logic of price action.",
    type: "book",
  },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-zinc-50/50 to-white text-zinc-900 font-sans selection:bg-[#009900]/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-xl border-b border-zinc-100/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#009900] to-[#006600] flex items-center justify-center relative overflow-hidden">
              <TrendingIcon className="w-5 h-5 text-white" />
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#dc2626] rounded-tl-sm"></div>
            </div>
            <div className="font-black text-xl tracking-tight text-zinc-900">
              S<span className="text-[#009900]">&</span>D Trading
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
            <a href="#video" className="hover:text-[#009900] transition-colors">Concept</a>
            <a href="#curriculum" className="hover:text-[#009900] transition-colors">Curriculum</a>
            <a href="#benefits" className="hover:text-[#009900] transition-colors">Benefits</a>
            <a href="#author" className="hover:text-[#009900] transition-colors">Author</a>
            <a 
              href="#pricing" 
              className="px-5 py-2.5 bg-gradient-to-r from-[#009900] to-[#006600] text-white rounded-full hover:shadow-lg hover:shadow-[#009900]/20 transition-all duration-300 font-semibold"
            >
              Get the Book
            </a>
          </div>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-6 pt-16 pb-24 text-center md:pt-24 md:pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-br from-red-400/10 to-rose-500/8 blur-[150px] rounded-full opacity-80" />
          <div className="absolute top-0 right-1/4 translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-bl from-[#009900]/15 to-emerald-500/10 blur-[150px] rounded-full opacity-80" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-zinc-100 to-transparent blur-[80px] rounded-full" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#009900]/10 border border-[#009900]/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#009900] animate-pulse"></span>
            <span className="text-sm font-medium text-[#006600]">New Edition Available</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-zinc-900 leading-[0.95] mb-6">
            Master the Art of<br />
            <span className="bg-gradient-to-r from-[#009900] via-[#00b300] to-[#009900] bg-clip-text text-transparent animate-gradient">
              Supply & Demand
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-500 leading-relaxed mb-12">
            The complete guide to understanding how institutions move the market. 
            No indicators. No signals. Just pure <span className="text-zinc-800 font-semibold">price action logic</span>.
          </p>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
             {/* 3D Book Mockup */}
             <div className="relative group">
               {/* Book Shadow */}
               <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-8 bg-black/20 blur-2xl rounded-full group-hover:w-56 transition-all duration-500"></div>
               
               {/* Book Container with 3D effect */}
               <div className="relative w-64 md:w-72 animate-float">
                 {/* Book spine effect */}
                 <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-zinc-400 to-zinc-300 rounded-l-sm transform -skew-y-3 origin-left"></div>
                 
                 {/* Main book cover */}
                 <div className="relative aspect-[3/4] rounded-r-lg rounded-l-sm overflow-hidden shadow-2xl animate-pulse-glow">
                   <Image 
                     src="/images/bookcover1.png" 
                     alt="Supply & Demand Trading Book Cover" 
                     fill 
                     className="object-cover"
                     priority
                   />
                   {/* Shine effect */}
                   <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 </div>
                 
                 {/* Page edges */}
                 <div className="absolute right-0 top-2 bottom-2 w-1 bg-gradient-to-b from-zinc-100 via-zinc-200 to-zinc-100 rounded-r-sm"></div>
               </div>
             </div>

             {/* CTA Section */}
             <div className="flex flex-col items-center lg:items-start gap-6 max-w-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#dc2626] to-rose-600 border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#009900] to-emerald-600 border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#dc2626] to-rose-600 border-2 border-white"></div>
                    </div>
                    <span className="text-sm text-zinc-500">Join <span className="font-semibold text-zinc-800">2,400+</span> traders</span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-sm font-medium text-zinc-600">4.9/5 rating</span>
                  </div>
                </div>
                <CtaButton text="Get the Book Now" />
                <p className="text-sm text-zinc-400">Available on Amazon Kindle & Paperback</p>
             </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-zinc-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-[#009900]">4</div>
              <div className="text-sm text-zinc-500 mt-1">Comprehensive Sections</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-[#dc2626]">200+</div>
              <div className="text-sm text-zinc-500 mt-1">Pages of Content</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-[#009900]">50+</div>
              <div className="text-sm text-zinc-500 mt-1">Chart Examples</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-[#dc2626]">∞</div>
              <div className="text-sm text-zinc-500 mt-1">Lifetime Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="px-6 py-20 md:py-28 bg-gradient-to-b from-zinc-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#009900] bg-[#009900]/10 rounded-full mb-4">Free Training</span>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 mb-4">See the Strategy in Action</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">Watch professional traders break down live charts using pure supply and demand analysis.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Video 1 - Sam Seiden Foundation */}
            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#dc2626]/20 via-zinc-500/10 to-[#009900]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 bg-zinc-900">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/GRUXXvpelnk" 
                    title="Supply and Demand Trading Foundation"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-bold text-zinc-900 mb-2">Foundation Concepts</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Learn from Sam Seiden why price really turns at certain levels. Understanding the institutional mindset behind every major market move.
                </p>
              </div>
            </div>

            {/* Video 2 - Live Chart Analysis */}
            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#009900]/20 via-zinc-500/10 to-[#dc2626]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 bg-zinc-900">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/mzLUV4RDK-M" 
                    title="Live Chart Analysis - Supply and Demand"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-bold text-zinc-900 mb-2">Live Chart Analysis</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Step-by-step chart analysis using supply and demand principles. See how to identify high-probability zones in real market conditions.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-zinc-500 italic">
              These are just samples of what you&apos;ll master with the complete methodology in the book.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Problem Awareness */}
      <section className="px-6 py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-600 bg-red-50 rounded-full mb-4">The Problem</span>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 mb-4">Why Most Retail Traders Fail</h2>
            <p className="text-zinc-500 max-w-xl mx-auto">These common mistakes keep 90% of traders from ever becoming profitable.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <ProblemCard 
              title="Indicator Paralysis" 
              desc="Relying on lagging math formulas that tell you what happened, not what is about to happen."
              icon={<ChartIcon className="w-6 h-6" />}
            />
            <ProblemCard 
              title="The Signal Trap" 
              desc="Following 'guru' alerts instead of learning to read the raw price action for yourself."
              icon={<BellIcon className="w-6 h-6" />}
            />
            <ProblemCard 
              title="Hindsight Bias" 
              desc="Strategies that look perfect on past charts but fall apart in the chaos of live markets."
              icon={<HistoryIcon className="w-6 h-6" />}
            />
          </div>
        </div>
      </section>

      {/* 3. The Shift (Core Philosophy) */}
      <section className="px-6 py-20 md:py-28 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#009900] blur-[150px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#dc2626] blur-[150px] rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center space-y-8">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#00ff00] bg-[#009900]/30 rounded-full">The Truth</span>
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              Markets Don&apos;t Move Because<br />Lines Crossed on Your RSI.
            </h2>
            <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed max-w-2xl mx-auto">
              They move because of <span className="text-[#00ff00] font-bold">Supply and Demand imbalances</span> created by institutions.
            </p>
            <div className="pt-4">
              <p className="text-zinc-400 max-w-xl mx-auto">
                When you stop looking for signals and start looking for <strong className="text-white">zones</strong> where big money is transacting, the chart stops being a mystery and starts being a map.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What This Book Teaches (Curriculum) */}
      <section id="curriculum" className="px-6 py-20 md:py-28 bg-white relative overflow-hidden">
        {/* Decorative candlestick chart pattern */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-end gap-1.5 opacity-10">
          <div className="flex flex-col items-center"><div className="w-0.5 h-3 bg-[#009900]"></div><div className="w-3 h-6 bg-[#009900] rounded-sm"></div><div className="w-0.5 h-2 bg-[#009900]"></div></div>
          <div className="flex flex-col items-center"><div className="w-0.5 h-2 bg-[#009900]"></div><div className="w-3 h-8 bg-[#009900] rounded-sm"></div><div className="w-0.5 h-3 bg-[#009900]"></div></div>
          <div className="flex flex-col items-center"><div className="w-0.5 h-2 bg-[#dc2626]"></div><div className="w-3 h-5 bg-[#dc2626] rounded-sm"></div><div className="w-0.5 h-4 bg-[#dc2626]"></div></div>
          <div className="flex flex-col items-center"><div className="w-0.5 h-3 bg-[#dc2626]"></div><div className="w-3 h-7 bg-[#dc2626] rounded-sm"></div><div className="w-0.5 h-2 bg-[#dc2626]"></div></div>
          <div className="flex flex-col items-center"><div className="w-0.5 h-4 bg-[#009900]"></div><div className="w-3 h-10 bg-[#009900] rounded-sm"></div><div className="w-0.5 h-2 bg-[#009900]"></div></div>
          <div className="flex flex-col items-center"><div className="w-0.5 h-2 bg-[#009900]"></div><div className="w-3 h-12 bg-[#009900] rounded-sm"></div><div className="w-0.5 h-3 bg-[#009900]"></div></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
             <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#009900] bg-[#009900]/10 rounded-full mb-4">What You&apos;ll Learn</span>
             <h2 className="text-3xl md:text-5xl font-black text-zinc-900 mb-4">Complete Trading Curriculum</h2>
             <p className="text-zinc-500 max-w-xl mx-auto">From the basics of price action to advanced institutional theories.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Section 1 */}
            <CurriculumCard 
              number="01"
              title="Candlestick Mastery"
              desc="Understanding the language of price. Not just patterns, but the story behind every bar."
              items={["Anatomy of a candle", "Reading momentum", "Rejection & Indecision"]}
              icon={<CandleIcon className="w-6 h-6" />}
            />
            {/* Section 2 */}
            <CurriculumCard 
              number="02"
              title="Market Structure & Patterns"
              desc="The framework of the market. Learn to identify trend, channels, and context."
              items={["Market Structure (BOS/CHOCH)", "Price Channels", "Classic Price Action Patterns"]}
              icon={<LayersIcon className="w-6 h-6" />}
            />
            {/* Section 3 */}
            <CurriculumCard 
              number="03"
              title="Supply & Demand Strategies"
              desc="The core of the method. How to trade with the institutions."
              items={["Identifying Supply & Demand Zones", "The 'Money Box' Concept", "Institutional Order Flow", "Entry & Exit Strategies"]}
              icon={<TrendingIcon className="w-6 h-6" />}
              highlight
            />
            {/* Section 4 */}
            <CurriculumCard 
              number="04"
              title="Advanced Concepts & Theory"
              desc="Deep dive into market mechanics and theoretical considerations."
              items={["Advanced Liquidity Concepts", "Theoretical Clarifications", "Refining the Edge"]}
              icon={<AcademicIcon className="w-6 h-6" />}
            />
          </div>
        </div>
      </section>

      {/* 5. Who This Book Is For / Not For */}
      <section className="px-6 py-20 md:py-28 bg-zinc-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 mb-4">Is This Book For You?</h2>
            <p className="text-zinc-500">Be honest with yourself before making a decision.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* For */}
            <div className="bg-white border-2 border-[#009900]/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow hover:border-[#009900]/40">
              <div className="w-12 h-12 rounded-xl bg-[#009900]/10 flex items-center justify-center mb-6">
                <CheckIcon className="w-6 h-6 text-[#009900]" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-6">This Book IS For:</h3>
              <ul className="space-y-4 text-zinc-600">
                <li className="flex gap-3 items-start"><span className="text-[#009900] mt-1">✓</span> <span>Serious traders ready to put in the work</span></li>
                <li className="flex gap-3 items-start"><span className="text-[#009900] mt-1">✓</span> <span>Students of pure price action</span></li>
                <li className="flex gap-3 items-start"><span className="text-[#009900] mt-1">✓</span> <span>Traders transitioning away from cluttered charts</span></li>
                <li className="flex gap-3 items-start"><span className="text-[#009900] mt-1">✓</span> <span>Anyone seeking a logic-based edge</span></li>
              </ul>
            </div>

            {/* Not For */}
            <div className="bg-white border-2 border-red-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow hover:border-red-200">
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-6">
                <CrossIcon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-6">This Book is NOT For:</h3>
              <ul className="space-y-4 text-zinc-600">
                <li className="flex gap-3 items-start"><span className="text-red-500 mt-1">✕</span> <span>Signal seekers looking for alerts</span></li>
                <li className="flex gap-3 items-start"><span className="text-red-500 mt-1">✕</span> <span>Shortcut hunters wanting &quot;easy money&quot;</span></li>
                <li className="flex gap-3 items-start"><span className="text-red-500 mt-1">✕</span> <span>People with a &quot;guaranteed profits&quot; mindset</span></li>
                <li className="flex gap-3 items-start"><span className="text-red-500 mt-1">✕</span> <span>Gamblers seeking action, not process</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. What Makes This Different */}
      <section className="px-6 py-20 md:py-28 bg-white relative overflow-hidden">
        {/* Candlestick decoration */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2 opacity-20">
          <div className="w-1 h-12 bg-[#009900]"></div>
          <div className="w-6 h-16 bg-[#009900] rounded-sm"></div>
          <div className="w-1 h-8 bg-[#009900]"></div>
        </div>
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2 opacity-20">
          <div className="w-1 h-8 bg-[#dc2626]"></div>
          <div className="w-6 h-20 bg-[#dc2626] rounded-sm"></div>
          <div className="w-1 h-12 bg-[#dc2626]"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-600 bg-zinc-100 rounded-full mb-4">Why This Book</span>
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 mb-6">No Hype. Just Logic.</h2>
          <p className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-3xl mx-auto">
            Most trading books sell you a dream of fast cars and beaches. This book sells you a <strong className="text-zinc-900">process</strong>. 
            It approaches the market from an institutional perspective, stripping away the noise to focus on the only thing that matters: 
            <span className="text-[#009900] font-semibold"> where buyers </span> and <span className="text-[#dc2626] font-semibold">sellers</span> are actually doing business.
          </p>
        </div>
      </section>

      {/* 7. Transformation */}
      <section id="benefits" className="px-6 py-20 md:py-28 bg-gradient-to-b from-zinc-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#009900] bg-[#009900]/10 rounded-full mb-4">The Transformation</span>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 mb-4">What You&apos;ll Gain</h2>
            <p className="text-zinc-500">Skills that will change how you see the market forever.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <BenefitItem title="Clarity" desc="Look at a chart and know exactly what the market is trying to do." icon={<SunIcon className="w-6 h-6" />} />
            <BenefitItem title="Confidence" desc="Execute trades based on logic, not fear or FOMO." icon={<ShieldIcon className="w-6 h-6" />} />
            <BenefitItem title="Structure" desc="A repeatable process for analyzing any market, any timeframe." icon={<GridIcon className="w-6 h-6" />} />
            <BenefitItem title="Risk Control" desc="Know when you are wrong fast, and protect your capital." icon={<LockIcon className="w-6 h-6" />} />
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="py-20 bg-zinc-50 overflow-hidden border-y border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#009900] bg-[#009900]/10 rounded-full mb-4">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 mb-4">Trusted by Traders</h2>
          <p className="text-zinc-500">See what others are saying about the book.</p>
        </div>
        
        <ReviewCarousel />
      </section>

      {/* 8. About the Author */}
      <section id="author" className="px-6 py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-zinc-50 rounded-3xl p-8 md:p-12">
            <div className="w-32 h-32 bg-gradient-to-br from-[#009900] to-[#006600] rounded-2xl flex-shrink-0 flex items-center justify-center text-white shadow-xl">
              <UserIcon className="w-16 h-16" />
            </div>
            <div className="text-center md:text-left space-y-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-600 bg-zinc-200 rounded-full">About the Author</span>
              <h2 className="text-2xl md:text-3xl font-black text-zinc-900">A Student of the Market</h2>
              <p className="text-zinc-600 leading-relaxed">
                An experienced price action trader focused on logic, structure, and institutional behavior. 
                I don&apos;t claim to be a guru with a crystal ball. I am a student of the market who believes 
                trading is a business of probability, not a game of luck. My goal is to help you see the market clearly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section id="pricing" className="px-6 py-24 md:py-32 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#009900] blur-[200px] rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#dc2626] blur-[200px] rounded-full"></div>
        </div>
        {/* Candlestick pattern decoration */}
        <div className="absolute left-12 top-1/2 -translate-y-1/2 hidden xl:flex items-end gap-3 opacity-10">
          <div className="flex flex-col items-center"><div className="w-0.5 h-6 bg-[#009900]"></div><div className="w-4 h-12 bg-[#009900] rounded-sm"></div><div className="w-0.5 h-4 bg-[#009900]"></div></div>
          <div className="flex flex-col items-center"><div className="w-0.5 h-4 bg-[#dc2626]"></div><div className="w-4 h-16 bg-[#dc2626] rounded-sm"></div><div className="w-0.5 h-8 bg-[#dc2626]"></div></div>
          <div className="flex flex-col items-center"><div className="w-0.5 h-8 bg-[#009900]"></div><div className="w-4 h-20 bg-[#009900] rounded-sm"></div><div className="w-0.5 h-4 bg-[#009900]"></div></div>
        </div>
        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:flex items-end gap-3 opacity-10">
          <div className="flex flex-col items-center"><div className="w-0.5 h-4 bg-[#dc2626]"></div><div className="w-4 h-14 bg-[#dc2626] rounded-sm"></div><div className="w-0.5 h-6 bg-[#dc2626]"></div></div>
          <div className="flex flex-col items-center"><div className="w-0.5 h-6 bg-[#009900]"></div><div className="w-4 h-10 bg-[#009900] rounded-sm"></div><div className="w-0.5 h-4 bg-[#009900]"></div></div>
          <div className="flex flex-col items-center"><div className="w-0.5 h-8 bg-[#009900]"></div><div className="w-4 h-18 bg-[#009900] rounded-sm"></div><div className="w-0.5 h-6 bg-[#009900]"></div></div>
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10 space-y-8">
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Ready to See the Market<br />
            <span className="bg-gradient-to-r from-[#00ff00] via-white to-[#ff6b6b] bg-clip-text text-transparent">Differently?</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-xl mx-auto">
            Join thousands of traders who have transformed their approach to the market.
          </p>
          <div className="pt-4">
            <CtaButton text="Get the Book on Amazon" />
          </div>
          <p className="text-sm text-zinc-500">30-day money-back guarantee. No questions asked.</p>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="px-6 py-16 border-t border-zinc-200 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#009900] to-[#006600] flex items-center justify-center relative overflow-hidden">
                <TrendingIcon className="w-5 h-5 text-white" />
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#dc2626] rounded-tl-sm"></div>
              </div>
              <div className="font-black text-xl tracking-tight text-zinc-900">
                S<span className="text-[#009900]">&amp;</span>D Trading
              </div>
            </div>
            <p className="text-sm text-zinc-500">
              &copy; {new Date().getFullYear()} Supply &amp; Demand Trading. All rights reserved.
            </p>
          </div>
          <div className="mt-8 pt-8 border-t border-zinc-100">
            <p className="text-xs text-zinc-400 text-center max-w-3xl mx-auto">
              <strong>Disclaimer:</strong> This book and website are for educational purposes only. 
              Trading financial markets involves a high level of risk and is not suitable for all investors. 
              No content here should be considered financial advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- Components ---

function CtaButton({ text }: { text: string }) {
  return (
    <Link 
      href="https://www.amazon.com" 
      target="_blank"
      className="group inline-flex items-center gap-2 bg-[#009900] hover:bg-[#008000] text-white font-semibold py-4 px-10 rounded-full text-lg transition-all duration-300 shadow-xl shadow-[#009900]/20 hover:shadow-[#009900]/40 hover:-translate-y-1"
    >
      {text}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 transition-transform group-hover:translate-x-1">
        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
      </svg>
    </Link>
  );
}

function ProblemCard({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div className="space-y-4 p-6 rounded-lg hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-100">
      <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-zinc-900">{title}</h3>
      <p className="text-zinc-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function CurriculumCard({ number, title, desc, items, icon, highlight = false }: { number: string; title: string; desc: string; items: string[], icon: React.ReactNode, highlight?: boolean }) {
  return (
    <div className={`group relative p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${highlight ? 'border-[#009900] bg-gradient-to-br from-[#e6ffe6] to-white shadow-lg shadow-[#009900]/10' : 'border-zinc-200 bg-white hover:border-[#009900]/30'}`}>
      {highlight && (
        <div className="absolute -top-3 left-6 px-3 py-1 bg-[#009900] text-white text-xs font-bold rounded-full">
          CORE MODULE
        </div>
      )}
      <div className="flex items-center justify-between mb-6">
        <div className="text-sm font-mono text-[#009900] font-bold">SECTION {number}</div>
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${highlight ? 'bg-[#009900] text-white shadow-lg' : 'bg-[#009900]/10 text-[#009900] group-hover:bg-[#009900] group-hover:text-white'}`}>
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-black text-zinc-900 mb-3">{title}</h3>
      <p className="text-zinc-500 mb-6">{desc}</p>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-zinc-700">
            <div className="w-5 h-5 rounded-full bg-[#009900]/10 flex items-center justify-center flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-[#009900]" />
            </div>
            <span className="text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// function CheckItem({ text }: { text: string }) {
//   return (
//     <li className="flex items-start gap-3">
//       <div className="mt-1 min-w-5 text-emerald-600">
//         <CheckIcon className="w-5 h-5" />
//       </div>
//       <span className="text-zinc-700 text-lg">{text}</span>
//     </li>
//   );
// }

function BenefitItem({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div className="group relative bg-white p-6 rounded-2xl border border-zinc-100 hover:border-[#009900]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#e6ffe6] to-[#b3ffb3] flex items-center justify-center text-[#009900] mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-zinc-900 mb-2">{title}</h3>
      <p className="text-sm text-zinc-500 leading-relaxed">{desc}</p>
    </div>
  );
}

// Simple Icons
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CrossIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

function BellIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function HistoryIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 3v5h5" />
      <path d="M3.05 13A9 9 0 1 0 6 5.3L3 8" />
      <path d="M12 7v5l4 2" />
    </svg>
  );
}

function CandleIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M8 6v12" />
      <path d="M16 6v12" />
      <rect x="6" y="10" width="4" height="4" />
      <rect x="14" y="10" width="4" height="4" />
    </svg>
  );
}

function LayersIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function TrendingIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function AcademicIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function GridIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function ReviewCarousel() {
  const reviews = [
    "/images/review1.png",
    "/images/review2.png",
    "/images/review3.png",
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-50 to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-50 to-transparent z-10"></div>
      
      <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
        {/* First set of images */}
        <div className="flex gap-8 px-4">
          {reviews.map((src, i) => (
            <div key={`review-1-${i}`} className="relative w-[400px] md:w-[500px] h-[150px] md:h-[200px] flex-shrink-0 bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden hover:shadow-md transition-shadow">
              <Image
                src={src}
                alt={`Review ${i + 1}`}
                fill
                className="object-contain p-4"
              />
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex gap-8 px-4">
          {reviews.map((src, i) => (
            <div key={`review-2-${i}`} className="relative w-[400px] md:w-[500px] h-[150px] md:h-[200px] flex-shrink-0 bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden hover:shadow-md transition-shadow">
              <Image
                src={src}
                alt={`Review ${i + 1}`}
                fill
                className="object-contain p-4"
              />
            </div>
          ))}
        </div>
        {/* Triplicate set to ensure smooth scrolling on wide screens */}
        <div className="flex gap-8 px-4">
          {reviews.map((src, i) => (
            <div key={`review-3-${i}`} className="relative w-[400px] md:w-[500px] h-[150px] md:h-[200px] flex-shrink-0 bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden hover:shadow-md transition-shadow">
              <Image
                src={src}
                alt={`Review ${i + 1}`}
                fill
                className="object-contain p-4"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
