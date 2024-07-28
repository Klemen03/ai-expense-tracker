import React from 'react';
import { ChartNoAxesCombined } from 'lucide-react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex flex-row items-center">
      <ChartNoAxesCombined size={45} color="blue" />
      <span className="text-4xl font-bold">
        <span className="text-blue-700">Smart</span>Finance
      </span>
    </Link>
  );
};

export default Logo;
