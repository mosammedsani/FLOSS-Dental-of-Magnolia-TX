import { Service, Doctor, Testimonial, SmileTransformation, OfficeAmenity } from './types';

import heroImage from './assets/images/luxury_dentistry_hero_1780148884932.png';
import officeImage from './assets/images/luxury_dental_office_1780148903043.png';
import doctorMikeImage from './assets/images/doctor_mike_tran_1780148924052.png';
import doctorCatherineImage from './assets/images/doctor_catherine_castillo_1780148946307.png';

export const HERO_IMAGE = heroImage;
export const OFFICE_IMAGE = officeImage;

export const services: Service[] = [
  {
    id: 'implants',
    title: 'Dental Implants',
    description: 'Restore the seamless confidence and full bite of your smile permanently with our ultra-precise, customizable dental implant options. Engineered with premium materials, they behave exactly like natural teeth.',
    category: 'implant',
    features: [
      'Single Tooth Implants',
      'Implant Bridges',
      'Snap-In Implant Dentures',
      'Full Arch Dental Implants',
      'All-On-4 Solutions'
    ],
    ctaText: 'Schedule Implant Consultation'
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    description: 'Discover the artistry of smiles. We craft exquisite, custom cosmetic enhancements that harmonize beautifully with your unique features to deliver a natural, editorial-grade smile.',
    category: 'cosmetic',
    features: [
      'Porcelain Veneers',
      'Invisalign Clear Aligners',
      'Professional Teeth Whitening',
      'Smile Makeovers'
    ],
    ctaText: 'Design My Smile'
  },
  {
    id: 'same-day-crowns',
    title: 'Same-Day Crowns',
    description: 'Avoid multiple visits and messy impressions. Custom-milled with state-of-the-art CEREC computerized design, our high-density ceramic crowns are created and placed in just one single appointment.',
    category: 'advanced',
    features: [
      'CEREC CAD/CAM Technology',
      'No Temporary Crowns Necessary',
      'Premium Solid Porcelain',
      'Precise Color Matching'
    ],
    ctaText: 'Book Same-Day Crown'
  },
  {
    id: 'iv-sedation',
    title: 'IV Sedation',
    description: 'For patients with elevated dental anxiety or undergoing intensive restorative procedures, our carefully monitored intravenous sedation offers complete peace and total relaxation.',
    category: 'sedation',
    features: [
      'Highly Controlled Level of Conscious Calm',
      'Ideal for Complex Oral Reconstruction',
      'Continuous Pulse & Oxygen Monitoring',
      'Wake up with Zero Memory of Treatment Anxieties'
    ],
    ctaText: 'Learn About IV Sedation'
  },
  {
    id: 'nitrous-sedation',
    title: 'Nitrous Sedation',
    description: 'Also called laughing gas, this is a gentle, fast-acting inhaled vapor that melts away daily stress and ensures a serene procedure, leaving you fully alert immediately after.',
    category: 'sedation',
    features: [
      'Safe for Both Adults & Children',
      'Quick Onset & Instant Reversibility',
      'Adjustable Anxiety Mitigation',
      'Ability to Safely Drive Home Post-Visit'
    ],
    ctaText: 'Explore Nitrous Options'
  },
  {
    id: 'root-canal',
    title: 'Root Canal Therapy',
    description: 'Relieve lingering discomfort and shield your natural tooth from extraction. Our micro-endodontic procedures are quiet, completely comfortable, and highly successful.',
    category: 'general',
    features: [
      'Modern High-Efficiency Technology',
      'Immediate Infection Clearance',
      'Virtually Pain-Free Experience',
      'Preserves Natural Tooth and Jaw Integrity'
    ]
  },
  {
    id: 'dentures',
    title: 'Dentures & Partials',
    description: 'Combining functional strength with aesthetic refinement, our custom restorations recreate your complete bite for eating, laughing, and conversing without hesitation.',
    category: 'general',
    features: [
      'Full and Partial Dentures',
      'Premium Premium Bio-Aesthetic Materials',
      'Handcrafted for Unrivaled Fit',
      'Implant-Supported Stability Options'
    ]
  },
  {
    id: 'emergency-dentistry',
    title: 'Emergency Dentistry',
    description: 'When sudden discomfort or dental trauma occurs, we provide rapid, empathetic emergency diagnosis and intervention to restore your comfort and peace of mind.',
    category: 'advanced',
    features: [
      'Soreness, Swelling, and Pain Relief',
      'Broken, Chipped, or Knocked-Out Teeth',
      'Priority Same-Day Appointments',
      'Emergency Root Canals & Extractions'
    ],
    ctaText: 'Emergency Help Line'
  },
  {
    id: 'general-dentistry',
    title: 'General & Preventive',
    description: 'Maintain pristine dental health with our luxurious preventive cleanings, diagnostic screenings, and detailed health reviews customized for your overall well-being.',
    category: 'general',
    features: [
      'Comprehensive Head & Oral Examinations',
      'Low-Radiation High-Definition Digital X-Rays',
      'Professional Ultrasonic Calculus Removal',
      'Fluoride Protection & Oral Cancer Screenings'
    ]
  },
  {
    id: 'invisalign',
    title: 'Invisalign® Clear Aligners',
    description: 'Gently realign your teeth with a series of custom, BPA-free medical-grade transparent trays. Fully removable, hygienic, and virtually imperceptible in photos.',
    category: 'cosmetic',
    features: [
      'Discreet and Comfortable Aligners',
      'No Restrictive Metal Wires or Brackets',
      'Removable for Easy Flossing & Eating',
      '3D Visual Path Prediction Software'
    ]
  },
  {
    id: 'veneers',
    title: 'Porcelain Veneers',
    description: 'The premier choice for celebrity smile transformations. Thin, bespoke porcelain casings crafted by our clinical designers to address severe discolors, spacing, or micro-cracks.',
    category: 'cosmetic',
    features: [
      'Bespoke Visual Framing and Translucency',
      'Stain-Resistant Glass Surface Properties',
      'Conservative Edge Preparation',
      'Immediate Red Carpet Aesthetic Upgrade'
    ]
  },
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening',
    description: 'Turn back decades of coffee, tea, and tobacco discoloration. Our clinically supervised whitening solutions achieve multiple levels of uniform luminosity safely.',
    category: 'cosmetic',
    features: [
      'Powerful In-Office Laser Whitening',
      'Custom Take-Home Maintenance Trays',
      'Low-Sensitivity Medical Formulations',
      'Instantly Radiant, Head-Turning Results'
    ]
  },
  {
    id: 'periodontal',
    title: 'Periodontal Services',
    description: 'Reclaim resilient gums and bone health. We deploy precise deep scale-planing and restorative therapies to stop progressive bleeding, pocketing, and halitosis.',
    category: 'general',
    features: [
      'Aero-Powder Periodontal Therapy',
      'Laser-Assisted Debridement',
      'Comprehensive Gingival Health Screenings',
      'Atypical Bacteria Diagnosis and Rinses'
    ]
  },
  {
    id: 'extractions',
    title: 'Tooth Extractions',
    description: 'When teeth cannot be saved by restorative therapy, we provide meticulous, minimally invasive extractions that prioritize jaw care and set up immediate implant candidacy.',
    category: 'general',
    features: [
      'Gentle Atraumatic Techniques',
      'Wisdom Teeth Expert Management',
      'Pre-planning for Socket Preservations',
      'Luxurious Sedation & Pain Protocols'
    ]
  }
];

export const doctors: Doctor[] = [
  {
    name: 'Dr. Mike Tran',
    role: 'Founder & Doctor of Dental Surgery (DDS)',
    image: doctorMikeImage,
    bio: 'Dr. Mike Tran is a celebrated dental artist who combines elite master-level training, meticulous technological precision, and a genuine, compassionate touch to redefine modern dentistry. Graduating with honors and continuing to achieve advanced clinical certifications across implantology, digital surgery, and cosmetic dentistry, he established FLOSS Dental Magnolia as an epic wellness sanctuary.',
    credentials: [
      'Doctor of Dental Surgery (DDS)',
      'Fellow of the International Congress of Oral Implantologists (ICOI)',
      'Member of the American Academy of Cosmetic Dentistry (AACD)',
      'Certified Intravenous (IV) Sedation Practitioner',
      'Clinical Innovator in CEREC Computerized CAD/CAM Restorations'
    ],
    philosophy: 'Your smile is the absolute focal point of your face and a window to your inner confidence. I believe in replacing fear with luxurious comfort, leveraging cutting-edge clinical technology to craft highly customized, life-altering aesthetic and health transformations.'
  },
  {
    name: 'Dr. Catherine Castillo',
    role: 'Associate Dentist & Smile Architect',
    image: doctorCatherineImage,
    bio: 'Dr. Catherine Castillo represents the future of boutique preventative and aesthetic healthcare in the Magnolia and Conroe communities. Renowned for her exceptionally gentle touch and friendly demeanors, she crafts restorative solutions that blend artistic geometry with medical integrity, transforming dental anxieties into state of reassuring relaxation.',
    credentials: [
      'Doctor of Dental Surgery (DDS)',
      'Active Member of the American Dental Association (ADA)',
      'Licensed Texas Dental Association Practitioner',
      'Advanced Certification in Laser Therapy & Digital Dental Care',
      'Post-Graduate Specialist in Pediatric Comfort Dynamics'
    ],
    philosophy: 'Superb dental experience should never evoke feeling of clinical chore. It should feel like high-end wellness. My focus lies in listening intently, establishing comforting bonds, and combining medical excellence with aesthetic mastery for every smile I design.'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Amanda K.',
    rating: 5,
    text: 'Usually dental offices make me break out in sweat, but FLOSS is a luxury. The patient lounge felt like a modern luxury spa. Dr. Mike Tran explained everything with custom scans, and the IV sedation was incredibly smooth. I woke up with my new crowns completed and had zero anxiety. Amazing!',
    date: 'April 2026',
    treatment: 'Same-Day Crown & Sedation'
  },
  {
    id: 't2',
    name: 'Robert H.',
    rating: 5,
    text: 'I received full arch dental implants here and the results have completely restored my quality of life. The clinical technology they use is unlike any doctor office I have ever seen. High precision, zero issues, and absolutely outstanding patient-first hospitality.',
    date: 'May 2026',
    treatment: 'All-On-4 Dental Implants'
  },
  {
    id: 't3',
    name: 'Samantha M.',
    rating: 5,
    text: 'Dr. Catherine Castillo is incredibly detailed and gentle. She customized my porcelain veneers and gave me the smile I have typed about on Pinterest for years. She is truly a genius dentist who balances art with care. The complimentary drinks and plush chairs in the office make the whole thing feel like a luxury getaway.',
    date: 'March 2026',
    treatment: 'Porcelain Veneers & Whitening'
  },
  {
    id: 't4',
    name: 'Thomas S.',
    rating: 5,
    text: 'Highly professional, state of the art, and genuinely caring. The local Magnolia team treats you like respected family. There is no rushed feeling—just absolute luxury and clear, upfront scheduling. The $199 New Patient Special was fantastic and incredibly thorough.',
    date: 'May 2026',
    treatment: 'Preventive Cleaning & Digital Scans'
  }
];

export const smileGallery: SmileTransformation[] = [
  {
    id: 'g1',
    title: 'Porcelain Veneers Makeover',
    before: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&h=300&q=80',
    after: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Corrected gaps, uneven wear, and deep discoloration using 8 custom-layered aesthetic porcelain veneers.'
  },
  {
    id: 'g2',
    title: 'Full-Arch Implant Restoration',
    before: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=400&h=300&q=80',
    after: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Restored absolute bite force and aesthetic confidence with upper and lower All-on-4 hybrid implant dentures.'
  },
  {
    id: 'g3',
    title: 'Invisalign® & Teeth Whitening',
    before: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=300&q=80',
    after: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Addressed severe crowding in 10 months of invisible alignment, concluded with in-office luxury deep lasers whitening.'
  }
];

export const officeAmenities: OfficeAmenity[] = [
  {
    id: 'a1',
    title: 'Complimentary Beverage Lounge',
    description: 'Relax in our contemporary hospitality-inspired lounge with premium mineral waters and organic beverages.',
    category: 'comfort'
  },
  {
    id: 'a2',
    title: 'Luxury Spa Seating',
    description: 'Unwind on ergonomic, plush dental suites equipped with heated memory foam, massage overlays, and ambient noise-isolation headphones.',
    category: 'comfort'
  },
  {
    id: 'a3',
    title: 'CEREC® Same-Day Technology',
    description: 'Mill your final, high-definition solid ceramic crown in minutes using our in-house computer-controlled porcelain milling machine.',
    category: 'technology'
  },
  {
    id: 'a4',
    title: 'Advanced Gentle Laser Therapy',
    description: 'Promote extremely rapid cellular healing and comfortable, injection-free gum treatments using advanced micro-lasers.',
    category: 'technology'
  }
];

export const faqs = [
  {
    question: 'What is included in the $199 New Patient Welcome Special?',
    answer: 'The Welcome Special is a premium introduction package for those who are new to FLOSS Dental. It covers: (1) a Comprehensive Oral & Head Exam by our doctors, (2) all necessary High-Definition Digital Radiographs & X-Rays, (3) a thorough preventative dental cleaning (applicable in healthy gum situations), and (4) a luxurious personalized tour of our medical spa amenities.'
  },
  {
    question: 'How do clinical same-day CEREC crowns work?',
    answer: 'Traditional dental crowns require a painful initial molding physical paste, a smelly temporary acrylic tooth, and a wait of 2 to 3 weeks. At FLOSS Dental Magnolia, our 3D intraoral optical camera captures a microscopic digital printout, which is designed live by our doctor in CAD software, carved from a solid vitrified ceramic block in our lab, and safely bonded inside your mouth in a single, comfortable appointment.'
  },
  {
    question: 'Can you treat patients with severe dentist fear?',
    answer: 'We specialized in creating stress-free experiences. Apart from our comforting heated massage chairs and noise-reduction music, our certified medical sedationists provide customizable IV Conscious Sedation, allowing you to slip into peaceful relaxation during your procedure and emerge with no recollection of any clinical tools or sound anxieties.'
  },
  {
    question: 'What financial or insurance coordination plans are supported?',
    answer: 'FLOSS Dental coordinates with major dental insurances to maximize your active preventative benefits. For cosmetic enhancements and dental implants, we provide in-house installment plans, customizable payment structures, and premier healthcare financing programs like CareCredit® with 0% interest terms to keep your dream smile financially stress-free.'
  }
];
