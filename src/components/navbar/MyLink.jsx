'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyLink = ({ href, children }) => {
  const pathname = usePathname();
  return (
    <div>
      <Link
        className={`${href === pathname && 'border-b-2 border-purple-500'}`}
        href={href}
      >
        {children}
      </Link>
    </div>
  );
};

export default MyLink;
