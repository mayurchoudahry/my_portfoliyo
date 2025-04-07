'use client';

import {
  Component,
  HomeIcon,
  Github,
//   Twitter,
  Linkedin,
//   Instagram,
  Sun,
  Moon,
} from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '@/components/ThemeProvider';
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/dock'
import useMediaQuery from '@/hooks/useMediaQuery';

// Home section
const homeItems = [
  {
    title: 'Home',
    icon: <HomeIcon className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    href: '/',
  },
  {
    title: 'Projects',
    icon: <Component className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    href: '#projects',
  },
//   {
//     title: 'Experience',
//     icon: <Sparkles className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
//     href: '#experience',
//   },
];

// Social section
const socialItems = [
  {
    title: 'GitHub',
    icon: <Github className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    href: 'https://github.com/VipulSoniwork',
  },
//   {
//     title: 'Twitter',
//     icon: <Twitter className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
//     href: 'https://twitter.com',
//   },
  {
    title: 'LinkedIn',
    icon: <Linkedin className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    href: 'https://www.linkedin.com/in/vipul-soni-3a5005223/',
  },
];

export function Control() {
  const { theme, toggleTheme } = useTheme();
  const isSmallScreen = useMediaQuery('(max-width: 640px)');

  return (
    <div className='fixed bottom-4 left-1/2 -translate-x-1/2 w-auto max-w-full z-40'>
      <Dock className='items-end pb-2 sm:pb-3 border border-gray-200 dark:border-neutral-800 sm:border-2'>
        {/* Home Section */}
        {homeItems.map((item, idx) => (
          <Link href={item.href} key={`home-${idx}`}>
            <DockItem
              className='aspect-square rounded-full bg-gray-200 dark:bg-neutral-800'
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          </Link>
        ))}

        {/* Section Divider */}
        <div className="h-6 sm:h-8 mx-1 sm:mx-2 w-px bg-gray-300 dark:bg-neutral-700 self-center" />

        {/* Social Section */}
        {socialItems.map((item, idx) => (
          <Link href={item.href} target="_blank" rel="noopener noreferrer" key={`social-${idx}`}>
            <DockItem
              className='aspect-square rounded-full bg-gray-200 dark:bg-neutral-800'
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          </Link>
        ))}

        {/* Section Divider */}
        <div className="h-6 sm:h-8 mx-1 sm:mx-2 w-px bg-gray-300 dark:bg-neutral-700 self-center" />

        {/* Theme Toggle */}
        <div onClick={toggleTheme} className="cursor-pointer">
          <DockItem
            className='aspect-square rounded-full bg-gray-200 dark:bg-neutral-800'
          >
            <DockLabel>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</DockLabel>
            <DockIcon>
              {theme === 'dark' ? (
                <Sun className='h-full w-full text-neutral-600 dark:text-neutral-300' />
              ) : (
                <Moon className='h-full w-full text-neutral-600 dark:text-neutral-300' />
              )}
            </DockIcon>
          </DockItem>
        </div>
      </Dock>
    </div>
  );
}
  