import React from "react";
import { landingPageStyles } from "../assets/dummyStyle";

import {
  ArrowRight,
  Download,
  LayoutTemplate,
  LayoutTemplateIcon,
  Menu,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { useUser } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { ProfileInfoCards } from "../components/Cards";

const LandingPage = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };
  return (
    <>
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');

        body { font-family: 'Inter', sans-serif; }

        @keyframes floatEffect1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-15px, -20px) scale(1.08); }
        }
        @keyframes floatEffect2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(15px, 20px) scale(1.08); }
        }
        @keyframes floatEffect3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-20px, 15px) scale(1.08); }
        }
        @keyframes floatEffect4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -15px) scale(1.08); }
        }

        .animate-float-1 { animation: floatEffect1 4s ease-in-out infinite; }
        .animate-float-2 { animation: floatEffect2 4.5s ease-in-out infinite; }
        .animate-float-3 { animation: floatEffect3 3.8s ease-in-out infinite; }
        .animate-float-4 { animation: floatEffect4 4.2s ease-in-out infinite; }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes bubble {
          0% { transform: translateY(0) scale(1); opacity: 0.7; }
          50% { transform: translateY(-10px) scale(1.1); opacity: 0.9; }
          100% { transform: translateY(0) scale(1); opacity: 0.7; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.6); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
          overflow: hidden;
          position: relative;
        }
        
        .animate-shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.5), transparent);
          transform: translateX(-100%);
          animation: shimmer 2s infinite;
        }

        .animate-flow {
          background: linear-gradient(90deg, #f0f0f0, #e0e0e0, #f0f0f0);
          background-size: 200% 200%;
          animation: flow 4s infinite linear;
        }
        
        .animate-bubble {
          animation: bubble 2s infinite ease-in-out;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        `}
      </style>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 font-inter">
        <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-purple-100/50 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-200 animate-pulse-glow">
                <LayoutTemplateIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Resumifyr
              </span>
            </div>

            <button
              className="md:hidden p-2 rounded-xl hover:bg-purple-50 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X size={24} className="text-purple-600" />
              ) : (
                <Menu size={24} className="text-purple-600" />
              )}
            </button>

            <div className="hidden md:flex items-center">
              <button
                className="relative group px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-200"
                onClick={handleCTA}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Get Started</span>
              </button>
            </div>
          </div>

          <div
            className={`md:hidden bg-white/95 backdrop-blur-lg w-full fixed top-16 left-0 right-0 z-40 shadow-lg border-b border-purple-100/50 transition-all duration-500 ease-in-out transform origin-top ${
              mobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0 pointer-events-none"
            }`}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-4">
              <button
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl"
                onClick={() => {
                  handleCTA();
                  setMobileMenuOpen(false);
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        </header>

        <main className="pt-24 font-inter text-slate-800">
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 flex flex-col items-center">
            <div className="flex flex-col-reverse lg:flex-row justify-between gap-10 lg:gap-12 items-center w-full">
              <div className="space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 bg-gradient-to-r from-rose-100 to-orange-100 border border-rose-200 text-rose-700 rounded-full font-bold text-xs sm:text-sm shadow-md">
                  Professional Resume Builder
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight">
                  <span className="block text-slate-900">Craft</span>
                  <span className="block bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
                    Professional
                  </span>
                  <span className="block text-slate-900">Resumes</span>
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
                  Resumifyr helps you build stunning, job-winning resumes in
                  minutes. Stand out from the crowd and land your dream job with
                  ease.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button
                    className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-200"
                    onClick={handleCTA}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative flex items-center gap-2 sm:gap-3 z-10">
                      Start Building
                      <ArrowRight
                        className="group-hover:translate-x-1 transition-transform duration-300"
                        size={18}
                      />
                    </span>
                  </button>

                  <button
                    className="px-8 sm:px-10 py-3 sm:py-4 border-2 border-purple-200 text-purple-700 font-bold rounded-2xl hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 hover:shadow-md"
                    onClick={() => navigate("/templates")}
                  >
                    View Templates
                  </button>
                </div>

                <div className="flex flex-wrap sm:flex-nowrap items-center gap-6 sm:gap-8 pt-6 justify-center lg:justify-start">
                  {[
                    {
                      value: "50K+",
                      label: "Resumes Created",
                      gradient: "from-purple-600 to-pink-500",
                    },
                    {
                      value: "4.9★",
                      label: "User Rating",
                      gradient: "from-orange-500 to-red-500",
                    },
                    {
                      value: "5 Min",
                      label: "Build Time",
                      gradient: "from-emerald-500 to-teal-500",
                    },
                  ].map((stat, index) => (
                    <div className="text-center" key={index}>
                      <div
                        className={`text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r bg-clip-text text-transparent ${stat.gradient}`}
                      >
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto order-first lg:order-last p-4 sm:p-6 lg:p-8 bg-white/50 backdrop-blur-sm rounded-3xl shadow-2xl">
                <div className="absolute -inset-8 bg-gradient-to-r from-purple-300/60 to-pink-300/60 rounded-3xl blur-3xl opacity-80"></div>
                <div className="relative">
                  <svg
                    viewBox="0 0 500 500"
                    className="w-full h-auto max-w-md mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="mainDocGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#f3e8ff" />
                        <stop offset="100%" stopColor="#fae8ff" />
                      </linearGradient>
                      <linearGradient
                        id="elementGradient1"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                      <linearGradient
                        id="elementGradient2"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#fbbf24" />
                        <stop offset="100%" stopColor="#f97316" />
                      </linearGradient>
                      <linearGradient
                        id="elementGradient3"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                          <stop offset="0%" stopColor="#6ee7b7" />
                          <stop offset="100%" stopColor="#34d399" />
                      </linearGradient>
                    </defs>

                    <rect
                      x="100"
                      y="100"
                      width="300"
                      height="350"
                      rx="20"
                      ry="20"
                      fill="url(#mainDocGradient)"
                      stroke="#d8b4fe"
                      strokeWidth="2"
                      transform="rotate(-5 250 275)"
                      className="shadow-2xl"
                    />

                    <rect
                      x="130"
                      y="140"
                      width="180"
                      height="8"
                      rx="4"
                      fill="#a78bfa"
                      transform="rotate(-5 220 144)"
                    />
                    <rect
                      x="130"
                      y="160"
                      width="120"
                      height="6"
                      rx="3"
                      fill="#c084fc"
                      transform="rotate(-5 190 163)"
                    />
                    <rect
                      x="130"
                      y="180"
                      width="220"
                      height="8"
                      rx="4"
                      fill="#a78bfa"
                      transform="rotate(-5 240 184)"
                    />
                    <rect
                      x="130"
                      y="200"
                      width="150"
                      height="6"
                      rx="3"
                      fill="#c084fc"
                      transform="rotate(-5 205 203)"
                    />
                    <rect x="130" y="220" width="200" height="8" rx="4" fill="#a78bfa" transform="rotate(-5 230 224)"/>
                    <rect x="130" y="240" width="100" height="6" rx="3" fill="#c084fc" transform="rotate(-5 180 243)"/>


                    <circle
                      cx="100"
                      cy="80"
                      r="20"
                      fill="url(#elementGradient1)"
                      className="animate-float-1"
                    />
                    <rect
                      x="400"
                      y="120"
                      width="30"
                      height="30"
                      rx="10"
                      ry="10"
                      fill="url(#elementGradient2)"
                      className="animate-float-2"
                    />
                    <circle
                      cx="420"
                      cy="400"
                      r="15"
                      fill="url(#elementGradient3)"
                      className="animate-float-3"
                    />
                    <rect
                      x="70"
                      y="400"
                      width="40"
                      height="20"
                      rx="8"
                      ry="8"
                      fill="url(#elementGradient2)"
                      className="animate-float-4"
                    />
                    <polygon points="300,50 310,70 290,70" fill="url(#elementGradient3)" className="animate-float-1" style={{animationDelay: '1s'}} />
                  </svg>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16 sm:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 sm:mb-20">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6">
                  Why Choose
                  <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                    Resumifyr?
                  </span>
                </h2>

                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                  With Resumifyr, you get access to intuitive tools,
                  professional templates, and instant download options to make
                  your job search smoother.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10" />,
                    title: "Lightning Fast",
                    description:
                      "Create professional resumes in under 5 minutes with our streamlined process.",
                    iconGradient: "from-purple-500 to-fuchsia-600",
                    cardBg: "from-purple-50 to-fuchsia-50",
                  },
                  {
                    icon: (
                      <LayoutTemplate className="w-8 h-8 sm:w-10 sm:h-10" />
                    ),
                    title: "Pro Templates",
                    description:
                      "Choose from dozens of recruiter-approved, industry-specific templates.",
                    iconGradient: "from-orange-500 to-red-600",
                    cardBg: "from-orange-50 to-red-50",
                  },
                  {
                    icon: <Download className="w-8 h-8 sm:w-10 sm:h-10" />,
                    title: "Instant Export",
                    description:
                      "Download high-quality PDFs instantly with perfect formatting.",
                    iconGradient: "from-emerald-500 to-teal-600",
                    cardBg: "from-emerald-50 to-teal-50",
                  },
                ].map((feature, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-2 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl rounded-3xl from-purple-200 to-pink-200"></div>
                    <div
                      className={`relative bg-gradient-to-br from-white/90 to-white p-6 sm:p-8 rounded-3xl border border-purple-100 shadow-md hover:shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:border-purple-200 ${feature.cardBg}`}
                    >
                      <div
                        className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br rounded-2xl flex items-center justify-center mb-4 sm:mb-6 text-white shadow-lg ${feature.iconGradient}`}
                      >
                        {feature.icon}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 sm:mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="relative">
                <div className="absolute -inset-6 sm:-inset-8 bg-gradient-to-r from-purple-200/50 to-pink-200/50 rounded-3xl blur-3xl opacity-70"></div>
                <div className="relative bg-gradient-to-br from-white to-purple-50 border border-purple-100 rounded-3xl p-8 sm:p-16 shadow-lg">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6">
                    Ready to build{" "}
                    <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                      a Standout Resume
                    </span>
                    ?
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-10 max-w-2xl mx-auto font-medium">
                    Join thousands of satisfied users who've landed their dream
                    jobs with Resumifyr. Start your journey today!
                  </p>
                  <button
                    className="group relative px-8 sm:px-12 py-3 sm:py-5 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-black text-lg rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:hover:shadow-purple-200"
                    onClick={handleCTA}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Start Building Today</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-purple-100 bg-gradient-to-r from-purple-50 to-pink-50 py-6 sm:py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm sm:text-base text-slate-500 font-medium">
              Crafted with{" "}
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                ❤️
              </span>{" "}
              by{" "}
              <a
                target="_blank"
                href="https://harshal-khairnar.vercel.app/"
                className="hover:text-purple-600 underline transition-colors"
                rel="noopener noreferrer"
              >
                Harshal Khairnar
              </a>
              . All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
