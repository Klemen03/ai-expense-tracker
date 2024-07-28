'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useUser, UserButton } from '@clerk/nextjs';
import Logo from './Logo';
import Link from 'next/link';

const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <div className="flex flex-row items-center justify-between p-5 border shadow-lg">
      <div>
        <Logo />
      </div>
      {isSignedIn ? (
        <UserButton />
      ) : (
        <div className="flex gap-3 items-center">
          <Link href="/dashboard">
            <Button variant="outline" className="rounded-full">
              Dashboard
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button className="rounded-full">Get Started</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;