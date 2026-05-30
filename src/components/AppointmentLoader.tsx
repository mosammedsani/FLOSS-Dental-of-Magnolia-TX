import React, { useState } from 'react';
import { Check, Calendar, User, Phone, CheckCircle, ShieldAlert, AlertCircle, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AppointmentLoaderProps {
  onClose: () => void;
}

export default function AppointmentLoader({ onClose }: AppointmentLoaderProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    treatment: 'New Patient Welcome Special ($199 Offer)',
    doctorPref: 'Any Practitioner (First Available)',
    date: 'Wednesday, June 3rd, 2026',
    timeSlot: '10:00 AM',
    patientName: '',
    patientEmail: '',
    patientPhone: '',
    insuranceOption: 'yes',
    comfortPreference: 'Massage Chair + Quiet Suite',
    comments: ''
  });

  const treatments = [
    { title: 'New Patient Welcome Special ($199 Offer)', desc: 'Includes full digital X-Rays, preventive cleaning & personal exam.' },
    { title: 'Dental Implants Consultation', desc: 'Bespoke surgical diagnostic pre-plan for single tooth or All-On-4.' },
    { title: 'Cosmetic Dentistry & Smile Design', desc: 'Custom aesthetic porcelain veneers and alignment previews.' },
    { title: 'Same-Day CEREC Crown Visit', desc: 'Express custom ceramic milling and placement.' },
    { title: 'Emergency Treatment Helpline', desc: 'Soreness, physical fracture relief, or acute swelling.' }
  ];

  const doctorsList = [
    'Any Practitioner (First Available)',
    'Dr. Mike Tran (DDS)',
    'Dr. Catherine Castillo (DDS)'
  ];

  const days = [
    { weekday: 'Mon', day: 'Jun 1', str: 'Monday, June 1st, 2026' },
    { weekday: 'Tue', day: 'Jun 2', str: 'Tuesday, June 2nd, 2026' },
    { weekday: 'Wed', day: 'Jun 3', str: 'Wednesday, June 3rd, 2026' },
    { weekday: 'Thu', day: 'Jun 4', str: 'Thursday, June 4th, 2026' },
    { weekday: 'Fri', day: 'Jun 5', str: 'Friday, June 5th, 2026' }
  ];

  const hours = [
    '08:30 AM', '10:00 AM', '11:30 AM', '01:30 PM', '03:00 PM', '04:30 PM'
  ];

  const handleNext = () => {
    if (step === 3) {
      if (!formData.patientName || !formData.patientPhone || !formData.patientEmail) {
        alert('Please provide your full name, email, and phone number to secure your reservation slot.');
        return;
      }
    }
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleBook = () => {
    // Collect local reservation details
    setStep(4);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-luxury-navy/80 backdrop-blur-md">
      <div 
        id="appointment-modal"
        className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden border border-gray-150 shadow-2xl"
      >
        {/* Modal Close button */}
        <button
          id="close-booking-modal"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:bg-gray-100 transition-colors z-30"
          aria-label="Close booking wizard"
        >
          <X size={20} />
        </button>

        {/* Dynamic header showing steps */}
        {step < 4 && (
          <div className="bg-luxury-neutral border-b border-gray-100 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <Sparkles className="text-luxury-teal" size={20} />
              <h2 className="font-display font-bold text-lg text-luxury-navy">Boutique Appointment Booking</h2>
            </div>
            
            {/* Horizontal progress dots */}
            <div className="flex items-center gap-2 mt-4">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex-1 flex items-center gap-2">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center font-display text-[10px] font-bold ${
                    step >= num 
                      ? 'bg-luxury-teal text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {num}
                  </div>
                  <span className={`text-[10px] font-sans font-semibold uppercase tracking-wider ${
                    step === num ? 'text-luxury-navy' : 'text-gray-400'
                  }`}>
                    {num === 1 ? 'Treatments' : num === 2 ? 'Date & Time' : 'Patient Credentials'}
                  </span>
                  {num < 3 && <div className="flex-1 h-px bg-gray-200" />}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: VISIT PURPOSE */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="space-y-1">
                  <h3 className="font-display font-semibold text-md text-luxury-navy">Select the Purpose of Your Visit:</h3>
                  <p className="text-xs text-gray-500 font-sans">Choose your core procedural focus. Standard health insurances can be coordinated.</p>
                </div>

                <div className="space-y-3">
                  {treatments.map((t, idx) => (
                    <button
                      id={`treatment-option-${idx}`}
                      key={idx}
                      onClick={() => setFormData({ ...formData, treatment: t.title })}
                      className={`w-full p-4 rounded-2xl border text-left flex items-start gap-3 transition-all duration-300 ${
                        formData.treatment === t.title
                          ? 'border-luxury-teal bg-luxury-teal/5 ring-1 ring-luxury-teal'
                          : 'border-gray-150 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                        formData.treatment === t.title ? 'border-luxury-teal bg-luxury-teal text-white' : 'border-gray-300'
                      }`}>
                        {formData.treatment === t.title && <Check size={10} />}
                      </div>
                      <div className="space-y-0.5">
                        <p className="font-display font-bold text-xs text-luxury-navy leading-normal">{t.title}</p>
                        <p className="text-[10px] text-gray-500 font-sans leading-normal">{t.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="space-y-2 pt-2">
                  <h4 className="font-display font-semibold text-xs text-luxury-navy">Select Practitioner Preference:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {doctorsList.map((doc, idx) => (
                      <button
                        id={`practice-doc-option-${idx}`}
                        key={idx}
                        onClick={() => setFormData({ ...formData, doctorPref: doc })}
                        className={`p-3 rounded-xl border text-center text-[11px] font-sans font-medium transition-all duration-300 ${
                          formData.doctorPref === doc
                            ? 'border-luxury-teal bg-luxury-teal/5 text-luxury-teal font-extrabold'
                            : 'border-gray-150 hover:bg-gray-50 text-gray-600'
                        }`}
                      >
                        {doc.split(' ')[0]} {doc.split(' ')[1] || ''}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 2: DATE & TIME SELECTOR */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="space-y-1">
                  <h3 className="font-display font-semibold text-md text-luxury-navy">Choose Day & Preferred Session:</h3>
                  <p className="text-xs text-gray-500 font-sans">Our practice operates Monday through Friday. Slots adjust dynamically based on clinician speeds.</p>
                </div>

                {/* Day Horizontal Row */}
                <div className="space-y-2">
                  <p className="text-[10px] text-gray-400 font-sans tracking-wide uppercase font-bold">Select Date:</p>
                  <div className="grid grid-cols-5 gap-2">
                    {days.map((day, idx) => (
                      <button
                        id={`day-option-${idx}`}
                        key={idx}
                        onClick={() => setFormData({ ...formData, date: day.str })}
                        className={`p-3 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 ${
                          formData.date === day.str
                            ? 'border-luxury-teal bg-luxury-teal/5 ring-1 ring-luxury-teal'
                            : 'border-gray-150 hover:bg-gray-50'
                        }`}
                      >
                        <span className="text-[9px] text-gray-400 uppercase font-sans tracking-wider">{day.weekday}</span>
                        <span className="text-[11px] font-display font-extrabold text-luxury-navy mt-1">{day.day.split(' ')[1]}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Hour slots grid */}
                <div className="space-y-2 pt-2">
                  <p className="text-[10px] text-gray-400 font-sans tracking-wide uppercase font-bold">Preferred Arrival Period:</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {hours.map((h, idx) => (
                      <button
                        id={`hour-option-${idx}`}
                        key={idx}
                        onClick={() => setFormData({ ...formData, timeSlot: h })}
                        className={`p-3 rounded-xl border text-center text-xs font-mono transition-all duration-300 ${
                          formData.timeSlot === h
                            ? 'border-luxury-teal bg-luxury-teal/5 text-luxury-teal font-extrabold'
                            : 'border-gray-150 hover:bg-gray-50 text-gray-600'
                        }`}
                      >
                        {h}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-luxury-gold/5 rounded-2xl border border-luxury-gold/15 flex items-center gap-3">
                  <AlertCircle className="text-luxury-gold shrink-0" size={18} />
                  <p className="text-[10px] text-gray-600 font-sans leading-relaxed">
                    *Selected schedule represent target windows. Our administrative coordinators will call or text within 2 hours to confirm your absolute slot reservation.
                  </p>
                </div>
              </motion.div>
            )}

            {/* STEP 3: PATIENT CONTACT & DETAILS */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="space-y-1">
                  <h3 className="font-display font-semibold text-md text-luxury-navy">Your Contact & Wellness Priorities:</h3>
                  <p className="text-xs text-gray-500 font-sans">Provide your credentials and selected comfort extras to tailor your visit prior to arrival.</p>
                </div>

                {/* Patient Credentials entries */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider block">Full Patient Name *</label>
                    <input
                      id="input-name"
                      type="text"
                      className="w-full p-3 border border-gray-150 rounded-xl text-xs text-luxury-navy focus:outline-none focus:border-luxury-teal"
                      placeholder="e.g. Amanda Jones"
                      value={formData.patientName}
                      onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider block">Cell Phone Number *</label>
                    <input
                      id="input-phone"
                      type="tel"
                      className="w-full p-3 border border-gray-150 rounded-xl text-xs text-luxury-navy focus:outline-none focus:border-luxury-teal"
                      placeholder="e.g. (832) 558-2905"
                      value={formData.patientPhone}
                      onChange={(e) => setFormData({ ...formData, patientPhone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider block">Email Address *</label>
                    <input
                      id="input-email"
                      type="email"
                      className="w-full p-3 border border-gray-150 rounded-xl text-xs text-luxury-navy focus:outline-none focus:border-luxury-teal"
                      placeholder="e.g. amanda@example.com"
                      value={formData.patientEmail}
                      onChange={(e) => setFormData({ ...formData, patientEmail: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider block">Do you have dental insurance?</label>
                    <div className="grid grid-cols-2 gap-2 mt-1">
                      <button
                        id="insurance-yes-btn"
                        type="button"
                        onClick={() => setFormData({ ...formData, insuranceOption: 'yes' })}
                        className={`py-2 px-3 rounded-lg border text-xs font-semibold ${
                          formData.insuranceOption === 'yes' ? 'bg-luxury-teal border-luxury-teal text-white' : 'border-gray-150'
                        }`}
                      >
                        Yes, I have insurance
                      </button>
                      <button
                        id="insurance-no-btn"
                        type="button"
                        onClick={() => setFormData({ ...formData, insuranceOption: 'no' })}
                        className={`py-2 px-3 rounded-lg border text-xs font-semibold ${
                          formData.insuranceOption === 'no' ? 'bg-luxury-teal border-luxury-teal text-white' : 'border-gray-150'
                        }`}
                      >
                        No (Self-Pay)
                      </button>
                    </div>
                  </div>
                </div>

                {/* Additional comfort choices */}
                <div className="space-y-1 pt-1">
                  <label className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider block">Complimentary Comfort Extras</label>
                  <select
                    id="select-comfort"
                    className="w-full p-3 border border-gray-150 rounded-xl text-xs text-luxury-navy bg-white focus:outline-none focus:border-luxury-teal"
                    value={formData.comfortPreference}
                    onChange={(e) => setFormData({ ...formData, comfortPreference: e.target.value })}
                  >
                    <option value="Massage Chair + Quiet Suite">Ergonomic Massage treatment chair + Quiet Suite</option>
                    <option value="Bluetooth Headphones + Soft Streaming">High Fidelity Headphones with soft music streaming</option>
                    <option value="Warm Blankets + Beverage Service">Warm spa blankets + cold Icelandic bottled water</option>
                    <option value="Standard Check-In Only">No comfort extras, standard medical suite check-in</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider block">Special concerns or medical history</label>
                  <textarea
                    id="input-comments"
                    className="w-full p-3 border border-gray-150 rounded-xl text-xs text-luxury-navy focus:outline-none focus:border-luxury-teal h-14 resize-none"
                    placeholder="e.g. Sensitive teeth, dental fear concerns, IV questions..."
                    value={formData.comments}
                    onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  />
                </div>
              </motion.div>
            )}

            {/* STEP 4: RESERVATION COMPLETED */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mx-auto">
                  <CheckCircle size={36} />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg text-luxury-navy">Luxury Slot Reserved Successfully!</h3>
                  <p className="text-xs text-gray-500 font-sans max-w-md mx-auto">
                    Outstanding, <span className="font-bold text-luxury-teal">{formData.patientName}</span>. Your luxury welcome visit is preliminarily held inside our system.
                  </p>
                </div>

                {/* Recaps details */}
                <div className="max-w-md mx-auto p-5 rounded-2xl bg-luxury-neutral border border-gray-100 text-left text-xs space-y-3 font-sans">
                  <div className="flex justify-between pb-2 border-b border-gray-200/50">
                    <span className="text-gray-400">Treatment Plan:</span>
                    <span className="font-extrabold text-luxury-navy">{formData.treatment}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-200/50">
                    <span className="text-gray-400">Practitioner:</span>
                    <span className="font-bold text-luxury-navy">{formData.doctorPref}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-200/50">
                    <span className="text-gray-400">Target Schedule:</span>
                    <span className="font-bold text-luxury-navy font-mono text-[11px]">{formData.date} at {formData.timeSlot}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Comfort Preference:</span>
                    <span className="font-medium text-luxury-teal">{formData.comfortPreference}</span>
                  </div>
                </div>

                <div className="p-4 bg-luxury-navy text-white rounded-2xl text-[11px] font-sans text-center border border-white/5">
                  <p className="leading-relaxed">📞 Confirming Call: Our Magnolia guest concierge will contact you shortly at <span className="text-luxury-gold font-bold">{formData.patientPhone}</span> to finalize your arrival.</p>
                </div>

                <button
                  id="confirmed-dismiss-btn"
                  onClick={onClose}
                  className="px-6 py-3 bg-luxury-teal hover:bg-luxury-navy text-white font-display text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-300 w-full"
                >
                  Confirm and Return Home
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Dynamic actions footer button */}
        {step < 4 && (
          <div className="bg-luxury-neutral border-t border-gray-100 p-6 flex justify-between items-center">
            {step > 1 ? (
              <button
                id="back-step-btn"
                onClick={handleBack}
                className="px-5 py-2.5 rounded-full border border-gray-200 hover:bg-white text-gray-600 font-sans text-xs font-bold uppercase transition-all duration-200"
              >
                Back Page
              </button>
            ) : (
              <span className="text-[10px] text-gray-400 font-sans">FLOSS Wellness Assurance</span>
            )}

            <button
              id="next-step-btn"
              onClick={step === 3 ? handleBook : handleNext}
              className="px-6 py-3 rounded-full bg-luxury-teal hover:bg-luxury-navy text-white font-display text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow"
            >
              {step === 3 ? 'Secure Reservation' : 'Continue Next'}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
