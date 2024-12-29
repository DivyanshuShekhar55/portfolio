import { SocialLink } from '../types/social';
import { Dribbble, Twitter, Github, Linkedin, Instagram } from 'lucide-react';

export const socialLinks: SocialLink[] = [
  {
    icon: Twitter,
    href: 'https://x.com/sky_walker_421',
    color: 'bg-[#1DA1F2]',
    hoverColor: 'hover:bg-[#1a8cd8]'
  },
  {
    icon: Github,
    href: 'https://github.com/DivyanshuShekhar55',
    color: 'bg-black',
    hoverColor: 'hover:bg-black'
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/divyanshu-shekhar-19a709292',
    color: 'bg-blue-600',
    hoverColor: 'hover:bg-blue-700'
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/feelin_divyansh?igsh=MnBzOWV0cmtjaW8x',
    color: 'bg-pink-600',
    hoverColor: 'hover:bg-pink-700'
  },
  {
    icon: Dribbble,
    href: 'https://dribbble.com/Div42#',
    color: 'bg-pink-500',
    hoverColor: 'hover:bg-pink-600'
  }
];