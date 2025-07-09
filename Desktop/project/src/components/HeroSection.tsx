import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Download, Code, Trophy } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const professionTexts = [
    'I am a DevOps Engineer and Cloud Engineer',
    'I build scalable cloud solutions',
    'I automate complex workflows',
    'I create intelligent AI systems'
  ];

  useEffect(() => {
    let textIndex = 0;
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentText(professionTexts[textIndex]);
        textIndex = (textIndex + 1) % professionTexts.length;
        setIsVisible(true);
      }, 500);
    }, 3000);

    setCurrentText(professionTexts[0]);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Hello, I am{' '}
              <span className="inline-block animate-pulse bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                Sudhakar Ojha
              </span>
            </h1>
            
            <div className="h-16 flex items-center">
              <p className={`text-xl md:text-2xl text-blue-200 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                {currentText}
              </p>
            </div>
          </div>

         <div className="flex flex-col sm:flex-row gap-4">
  <a
    href="https://drive.google.com/file/d/1hrjHAOuL2OKslblFa1Vgnzoz8EcPkNjR/view?usp=drivesdk"  // 👉 Replace this with your actual resume path
    download="Sudhakar_Ojha_Resume.pdf"
    className="group relative px-8 py-4 bg-transparent border-2 border-blue-400 rounded-full text-blue-400 font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center gap-2"
  >
    <Download className="w-5 h-5" />
    Download Resume
    <span className="absolute inset-0 border-2 border-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></span>
  </a>
</div>


          <div className="flex gap-6">
            {[
              { icon: Github, label: 'GitHub', url: 'https://github.com/SudhakarOjha' },
              { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/sudhakar-ojha-66b264258/' },
              { icon: Code, label: 'LeetCode', url: 'https://leetcode.com/u/sudhakarojha19/' },
              { icon: Trophy, label: 'HackerRank', url: 'https://www.hackerrank.com/profile/sudhakarojha19' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-white/5 rounded-full border border-white/10 hover:border-blue-400 transition-all duration-300 hover:scale-110"
              >
                <social.icon className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors duration-300" />
                <div className="absolute inset-0 bg-blue-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>
        </div>
<div className="flex justify-between items-center w-full px-8 py-4">
  {/* LEFT SECTION (Text content, for example) */}
  <div className="text-left">
    <h1 className="text-4xl font-bold text-white mb-2">
      Hello everyone, I am <span className="animate-pulse text-blue-400">Sudhakar Ojha</span>
    </h1>
    <p className="text-lg text-gray-300">DevOps & Cloud Engineer</p>
  </div>

  {/* RIGHT SECTION (Image) */}
  <div className="relative">
    <div className="w-52 h-52 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-green-400 p-1">
      <div className="w-full h-full bg-gray-800 rounded-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Sudhakar Ojha"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-green-400/20 animate-pulse"></div>
  </div>
</div>
      </div>
    </section>
  );
};

export default HeroSection;