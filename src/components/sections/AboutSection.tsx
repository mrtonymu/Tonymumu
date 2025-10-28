'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { User, Award, Clock, Target, Heart, Lightbulb } from 'lucide-react';
import MatrixDecode from '../animations/MatrixDecode';
import { aboutData } from '../../lib/data';

// 图标映射
const iconMap = {
  User,
  Award,
  Clock,
  Target,
  Heart,
  Lightbulb
};

const values = [
  {
    icon: Heart,
    title: 'Client First',
    description: 'Every project starts with listening. I take time to understand what clients really need — then build solutions that feel effortless to use and meaningful to them.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Technology moves fast, but good ideas last. I\'m always exploring new tools and frameworks — not for the sake of trends, but to deliver smarter, more sustainable results.'
  }
];

export default function AboutSection() {
  const [isMatrixActive, setIsMatrixActive] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleAvatarClick = () => {
    setClickCount(prev => prev + 1);
    setIsMatrixActive(true);
  };

  const handleMatrixComplete = () => {
    setIsMatrixActive(false);
    // Reset click count after 3rd click
    if (clickCount >= 3) {
      setClickCount(0);
    }
  };
  return (
    <section className="section-padding bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
      {/* 装饰性背景元素 */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-8">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              I came up through customer support, not computer science.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Those years on the frontlines and everything that followed taught me that great products are built from <span className="font-semibold text-gray-800">empathy first, code second</span>.
            </p>
          </div>
        </motion.div>

        {/* Personal Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="card p-8">
                   {/* Profile Section */}
                   <div className="text-center mb-8">
                     <div 
                       className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-110 relative"
                       onClick={handleAvatarClick}
                     >
                       <img 
                         src="/tony-yam.jpg" 
                         alt="Tony Yam" 
                         className="w-full h-full object-cover rounded-full transition-all duration-300 group-hover:brightness-110 group-hover:contrast-110"
                       />
                       {/* Glowing ring effect */}
                       <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                     </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Tony Yam</h3>
              <p className="text-xs text-gray-400 mb-2">👆 Click for surprise</p>
              <div className="space-y-1">
                <p className="text-lg text-gray-700 font-medium">Freelance Web Developer</p>
                <p className="text-base text-gray-600 flex items-center justify-center gap-2">
                  <span>📍</span>
                  <span>Kuala Lumpur, Malaysia</span>
                </p>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-lg text-gray-700 leading-relaxed">
                  I build websites that work — crafted for solo creators and business owners who want <span className="font-semibold text-gray-800">results</span>, not agency overhead or template limits.
                </p>
              </div>
              
              {/* Quote Section */}
              <div className="my-12">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border border-gray-200">
                  <p className="text-2xl font-light text-gray-900 leading-relaxed text-center">
                    Structure isn't decoration.
                  </p>
                  <p className="text-xl font-normal text-gray-600 leading-relaxed text-center mt-2">
                    It's what lets momentum scale.
                  </p>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="text-center space-y-4">
                <div>
                  <p className="text-lg text-gray-700 font-medium mb-2">
                    Looking for a reliable tech partner?
                  </p>
                  <p className="text-base text-gray-600">
                    Let's bring your vision to life — <span className="font-semibold text-gray-800">together</span>.
                  </p>
                </div>
                
                {/* Hashtag */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-base font-medium text-gray-600 italic">
                    # I love turning real conversations into digital experiences that actually solve problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Detailed Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {aboutData.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card p-6 h-full transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 hover:bg-blue-200 hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="heading-md mb-3 text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-small text-gray-600 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      {item.details && (
                        <ul className="space-y-1">
                          {item.details.map((detail) => (
                            <li key={detail} className="text-xs text-gray-500 flex items-center">
                              <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="heading-md mb-8 text-gray-900">My Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={value.title} className="card p-6 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-small text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Matrix Decode Animation */}
      <MatrixDecode
        isActive={isMatrixActive}
        onComplete={handleMatrixComplete}
        clickCount={clickCount}
      />
    </section>
  );
}
