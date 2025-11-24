import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureItem {
  text: string;
}

export interface InputFieldProps {
  type: string;
  placeholder: string;
  icon: LucideIcon;
}