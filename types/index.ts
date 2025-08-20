import { ReactNode } from 'react';

export interface Review {
  id: number;
  name: string;
  rating: number; // 1 to 5
  comment: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  price: number;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

export interface Company {
  name: string;
  tagline: string;
  contact: ContactInfo;
  services: Service[];
  reviews: Review[];
}

const CleanSSR: Company = {
  name: "CleanSSR",
  tagline: "Your Trusted Cleaning Service",
  contact: {
    phone: "123-456-7890",
    email: "info@cleanSSR.com",
    address: "123 Clean St, Clean City, CC 12345",
  },
  services: [
    { id: 1, title: "Home Cleaning", description: "Thorough cleaning for your home.", price: 100 },
    { id: 2, title: "Office Cleaning", description: "Professional cleaning for your office space.", price: 150 },
  ],
  reviews: [
    { id: 1, name: "John Doe", rating: 5, comment: "Excellent service!" },
    { id: 2, name: "Jane Smith", rating: