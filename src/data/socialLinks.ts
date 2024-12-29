import { SocialLink } from '../types/social';
import { Dribbble, Twitter, Twitch, Facebook, Instagram } from 'lucide-react';

export const socialLinks: SocialLink[] = [
  {
    icon: Dribbble,
    href: '#',
    color: 'bg-pink-500',
    hoverColor: 'hover:bg-pink-600'
  },
  {
    icon: Twitter,
    href: '#',
    color: 'bg-[#1DA1F2]',
    hoverColor: 'hover:bg-[#1a8cd8]'
  },
  {
    icon: Twitch,
    href: '#',
    color: 'bg-purple-600',
    hoverColor: 'hover:bg-purple-700'
  },
  {
    icon: Facebook,
    href: '#',
    color: 'bg-blue-600',
    hoverColor: 'hover:bg-blue-700'
  },
  {
    icon: Instagram,
    href: '#',
    color: 'bg-pink-600',
    hoverColor: 'hover:bg-pink-700'
  }
];