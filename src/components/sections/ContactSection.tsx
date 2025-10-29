'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  MessageCircle,
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  // 字段级别的验证错误
  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  
  // 字段是否被触碰过（用于显示错误）
  const [touched, setTouched] = useState<{
    name?: boolean;
    email?: boolean;
    message?: boolean;
  }>({});

  // 清理 URL 参数
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (url.searchParams.toString()) {
        // 清理 URL 参数，保持干净的 URL
        window.history.replaceState({}, '', window.location.pathname);
      }
    }
  }, []);

  // 验证单个字段
  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) {
          return 'Name is required';
        }
        if (value.trim().length < 2) {
          return 'Name must be at least 2 characters';
        }
        break;
      case 'email':
        if (!value.trim()) {
          return 'Email is required';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return 'Please enter a valid email address';
        }
        break;
      case 'message':
        if (!value.trim()) {
          return 'Project description is required';
        }
        if (value.trim().length < 10) {
          return 'Please provide more details (at least 10 characters)';
        }
        break;
    }
    return undefined;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // 实时验证
    if (touched[name as keyof typeof touched]) {
      const error = validateField(name, value);
      setFieldErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    
    // 验证字段
    const error = validateField(name, value);
    setFieldErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 标记所有字段为已触碰
    setTouched({
      name: true,
      email: true,
      message: true
    });
    
    // 验证所有字段
    const nameError = validateField('name', formData.name);
    const emailError = validateField('email', formData.email);
    const messageError = validateField('message', formData.message);
    
    setFieldErrors({
      name: nameError,
      email: emailError,
      message: messageError
    });
    
    // 如果有错误，停止提交
    if (nameError || emailError || messageError) {
      setSubmitStatus('error');
      setErrorMessage('Please fix the errors below.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFieldErrors({});
        setTouched({});
        
        // Reset form after success animation
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            project: '',
            budget: '',
            message: ''
          });
        }, 2000);
        
        // 清理 URL 参数
        if (typeof window !== 'undefined') {
          window.history.replaceState({}, '', window.location.pathname);
        }
        
        // Open WhatsApp with pre-filled message
        if (result.whatsappUrl) {
          // 延迟打开 WhatsApp，让用户看到成功消息
          setTimeout(() => {
            window.open(result.whatsappUrl, '_blank');
          }, 1500);
        }
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* 装饰性背景元素 */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Why Choose Me */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="heading-md mb-4 text-gray-900">Why Choose Me?</h3>
            <p className="text-body text-gray-600 mb-8 max-w-2xl mx-auto">
              Good work starts with good communication — and that's where I come in.
            </p>
            <div className="card p-8 max-w-2xl mx-auto transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Professional & Reliable</h4>
                  <p className="text-sm text-gray-600">Solid project experience and hands-on technical skills you can count on.</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Quick Response</h4>
                  <p className="text-sm text-gray-600">Fast replies, smooth onboarding — most projects start within 24 hours.</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MessageCircle className="w-6 h-6 text-orange-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Smooth Communication</h4>
                  <p className="text-sm text-gray-600">Clear updates and transparent workflow at every stage of the project.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Ready to Start Your Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="card p-8 max-w-2xl mx-auto">
              <h3 className="heading-md mb-4 text-gray-900">
                Ready to Start Your Project?
              </h3>
              <p className="text-body text-gray-600 mb-8">
                Let's turn your idea into something real.<br />
                Reach out on WhatsApp — I'd love to hear what you're building and see how I can help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#start-project"
                    className="btn-primary inline-flex items-center gap-2 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                  >
                    Let's Chat
                  </a>
                <a
                  href="#projects"
                  className="btn-secondary inline-flex items-center gap-2 transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  View Projects
                </a>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500">
                  📱 Reach me on WhatsApp — usually reply within a day.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quick Contact Form */}
          <motion.div
            id="start-project"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-md mb-4 text-gray-900 text-center">Start Your Project Here</h3>
            <p className="text-body text-gray-600 mb-8 text-center max-w-2xl mx-auto">
              Tell me a bit about your project — I'll get back to you within a day.
            </p>
            <div className="card p-8 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
              <form className="space-y-6" onSubmit={handleSubmit} method="POST">
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.3, type: "spring" }}
                    className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 animate-pulse" />
                    <p className="text-green-800 text-sm font-medium">
                      Form submitted successfully! WhatsApp will open in a moment with your message.
                    </p>
                  </motion.div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <p className="text-red-800 text-sm">
                      {errorMessage}
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 ${
                        fieldErrors.name && touched.name
                          ? 'border-red-300 focus:ring-red-500 bg-red-50'
                          : 'border-gray-300 focus:ring-blue-500 bg-white'
                      }`}
                      placeholder="Your name"
                    />
                    {fieldErrors.name && touched.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-red-600 flex items-center gap-1"
                      >
                        <AlertCircle className="w-4 h-4" />
                        {fieldErrors.name}
                      </motion.p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 ${
                        fieldErrors.email && touched.email
                          ? 'border-red-300 focus:ring-red-500 bg-red-50'
                          : 'border-gray-300 focus:ring-blue-500 bg-white'
                      }`}
                      placeholder="Your best contact email"
                    />
                    {fieldErrors.email && touched.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-red-600 flex items-center gap-1"
                      >
                        <AlertCircle className="w-4 h-4" />
                        {fieldErrors.email}
                      </motion.p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a project type — let's see how I can help.</option>
                    <option value="website">Website Design & Development</option>
                    <option value="webapp">Web App Development</option>
                    <option value="saas">SaaS Product Setup</option>
                    <option value="mvp">MVP or Startup Prototype</option>
                    <option value="api">API Development</option>
                    <option value="consulting">Tech Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">What's your estimated budget? — helps me tailor the approach.</option>
                    <option value="3k-5k">RM3,000 – RM5,000 — Starter project, simple website or personal brand page</option>
                    <option value="5k-8k">RM5,000 – RM8,000 — Business website or small web app</option>
                    <option value="8k-12k">RM8,000 – RM12,000 — Multi-page site, dashboard, or MVP with backend</option>
                    <option value="12k-20k">RM12,000 – RM20,000 — SaaS setup, full product build, or advanced integrations</option>
                    <option value="over-20k">Over RM20,000 — Custom solution or long-term project</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    rows={4}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 resize-none ${
                      fieldErrors.message && touched.message
                        ? 'border-red-300 focus:ring-red-500 bg-red-50'
                        : 'border-gray-300 focus:ring-blue-500 bg-white'
                    }`}
                    placeholder="Tell me more about your project — goals, features, or any ideas you already have…"
                  ></textarea>
                  {fieldErrors.message && touched.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-600 flex items-center gap-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {fieldErrors.message}
                    </motion.p>
                  )}
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <p className="text-sm text-gray-600">
                    I usually reply within a day — feel free to message me on WhatsApp if you'd like a quicker response.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Let's Get Started <span className="rocket-emoji">🚀</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
