export interface Service {
  id: string;
  title: string;
  description: string;
  category: 'general' | 'cosmetic' | 'implant' | 'advanced' | 'sedation';
  features?: string[];
  ctaText?: string;
}

export interface Doctor {
  name: string;
  role: string;
  image: string;
  bio: string;
  credentials: string[];
  philosophy: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  treatment?: string;
}

export interface SmileTransformation {
  id: string;
  title: string;
  before: string;
  after: string;
  description: string;
}

export interface OfficeAmenity {
  id: string;
  title: string;
  description: string;
  category: 'comfort' | 'technology';
}
