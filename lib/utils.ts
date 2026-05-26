import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: 'August Solar',
  longName: 'August Solar',
  url: 'https://augustsolar.com',
  hero: 'Residential Solar & Battery Storage',
  description:
    'August Solar installs residential solar panels and battery storage systems. Power your home by day. Battery storage keeps the life you love running by night.',
  email: 'info@augustsolar.com',
  phone: '',
  social: {
    linkedin: 'https://www.linkedin.com/company/august-solar'
  }
};
