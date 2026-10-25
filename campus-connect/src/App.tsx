/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  User, 
  Phone, 
  MapPin, 
  School, 
  Percent, 
  Send,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';

// --- Types ---

type PUCourse = 'Science' | 'Commerce' | 'Arts';
type DegreeCourse = 'BCA' | 'BCOM' | 'BBA' | 'BSC';

interface AdmissionFormData {
  studentName: string;
  phoneNumber: string;
  address: string;
  puCollegeName: string;
  puCourse: PUCourse;
  percentage: string;
  desiredCourse: DegreeCourse;
}

// --- Components ---

export default function App() {
  const [formData, setFormData] = useState<AdmissionFormData>({
    studentName: '',
    phoneNumber: '',
    address: '',
    puCollegeName: '',
    puCourse: 'Science',
    percentage: '',
    desiredCourse: 'BCA',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      studentName: '',
      phoneNumber: '',
      address: '',
      puCollegeName: '',
      puCourse: 'Science',
      percentage: '',
      desiredCourse: 'BCA',
    });
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100">
      {/* Dynamic Gradient Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-purple-400/20 blur-[120px]" />
        <div className="absolute -bottom-[10%] left-[20%] w-[40%] h-[40%] rounded-full bg-indigo-400/20 blur-[120px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-2.5 rounded-xl shadow-lg shadow-blue-200">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
                Campus Connect
              </h1>
              <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">University Admissions</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-blue-600 transition-colors">Explore Courses</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Scholarships</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Campus Life</a>
            <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all shadow-md active:scale-95">
              Student Portal
            </button>
          </nav>
        </div>
      </header>

      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-3 h-3" />
                Admissions Open 2026-27
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
                Your Gateway to <span className="text-blue-600">Higher Education</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Welcome to Campus Connect, a smart and user-friendly university admission platform designed to simplify your journey from Pre-University (PU) to your dream degree course.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 gap-4"
            >
              {[
                { icon: CheckCircle2, text: "Clean and modern design" },
                { icon: CheckCircle2, text: "Mobile-friendly interface" },
                { icon: CheckCircle2, text: "Quick and easy form submission" },
                { icon: CheckCircle2, text: "Secure student data handling" },
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white/50 border border-white shadow-sm">
                  <feature.icon className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-sm font-medium text-slate-700">{feature.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white rounded-3xl shadow-2xl shadow-indigo-100 border border-slate-100 overflow-hidden"
                >
                  <div className="p-8 md:p-10">
                    <form onSubmit={handleSubmit} className="space-y-8">
                      {/* Section: Personal Details */}
                      <div>
                        <div className="flex items-center gap-2 mb-6">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                            <User className="w-4 h-4 text-blue-600" />
                          </div>
                          <h3 className="text-lg font-bold text-slate-900">Personal Details</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Student Name</label>
                            <input
                              required
                              type="text"
                              name="studentName"
                              value={formData.studentName}
                              onChange={handleInputChange}
                              placeholder="John Doe"
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none bg-slate-50/50"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Phone Number</label>
                            <input
                              required
                              type="tel"
                              name="phoneNumber"
                              value={formData.phoneNumber}
                              onChange={handleInputChange}
                              placeholder="+91 98765 43210"
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none bg-slate-50/50"
                            />
                          </div>
                          <div className="md:col-span-2 space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Address</label>
                            <textarea
                              required
                              name="address"
                              value={formData.address}
                              onChange={handleInputChange}
                              placeholder="Enter your full residential address"
                              rows={3}
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none bg-slate-50/50 resize-none"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Section: Academic Details */}
                      <div>
                        <div className="flex items-center gap-2 mb-6">
                          <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
                            <BookOpen className="w-4 h-4 text-indigo-600" />
                          </div>
                          <h3 className="text-lg font-bold text-slate-900">Academic Details</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="md:col-span-2 space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">PU College Name</label>
                            <div className="relative">
                              <School className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                              <input
                                required
                                type="text"
                                name="puCollegeName"
                                value={formData.puCollegeName}
                                onChange={handleInputChange}
                                placeholder="St. Joseph's PU College"
                                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none bg-slate-50/50"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Course in PU</label>
                            <select
                              name="puCourse"
                              value={formData.puCourse}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none bg-slate-50/50 appearance-none cursor-pointer"
                            >
                              <option value="Science">Science</option>
                              <option value="Commerce">Commerce</option>
                              <option value="Arts">Arts</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Percentage (%)</label>
                            <div className="relative">
                              <Percent className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                              <input
                                required
                                type="number"
                                step="0.01"
                                name="percentage"
                                value={formData.percentage}
                                onChange={handleInputChange}
                                placeholder="85.50"
                                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none bg-slate-50/50"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Section: Course Selection */}
                      <div>
                        <div className="flex items-center gap-2 mb-6">
                          <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
                            <GraduationCap className="w-4 h-4 text-purple-600" />
                          </div>
                          <h3 className="text-lg font-bold text-slate-900">Course Selection</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {(['BCA', 'BCOM', 'BBA', 'BSC'] as DegreeCourse[]).map((course) => (
                            <button
                              key={course}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, desiredCourse: course }))}
                              className={cn(
                                "py-3 rounded-xl border-2 text-sm font-bold transition-all active:scale-95",
                                formData.desiredCourse === course 
                                  ? "border-purple-600 bg-purple-50 text-purple-700 shadow-sm" 
                                  : "border-slate-100 bg-slate-50 text-slate-500 hover:border-slate-200"
                              )}
                            >
                              {course}
                            </button>
                          ))}
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5 transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        {isSubmitting ? (
                          <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            Apply Now & Shape Your Future!
                            <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-3xl shadow-2xl shadow-green-100 border border-green-50 p-12 text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Application Submitted!</h2>
                  <p className="text-slate-600 max-w-sm mx-auto">
                    Thank you, <span className="font-bold text-slate-900">{formData.studentName}</span>! Your application for <span className="font-bold text-blue-600">{formData.desiredCourse}</span> has been received. Our admissions team will contact you soon.
                  </p>
                  <div className="pt-6">
                    <button
                      onClick={resetForm}
                      className="px-8 py-3 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all active:scale-95"
                    >
                      Submit Another Application
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              <span className="font-bold text-slate-900">Campus Connect</span>
            </div>
            <div className="flex gap-8 text-sm font-medium text-slate-500">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Contact Support</a>
            </div>
            <p className="text-sm text-slate-400">© 2026 Campus Connect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
