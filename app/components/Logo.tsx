"use client";

import Image from "next/image";
import { useState } from "react";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function Logo({ width = 40, height = 40, className = "", priority = false }: LogoProps) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    // Fallback SVG logo
    return (
      <svg 
        viewBox="0 0 40 40" 
        className={className}
        width={width}
        height={height}
        style={{ width, height }}
      >
        <circle cx="10" cy="10" r="4" fill="#6366f1" />
        <circle cx="30" cy="10" r="4" fill="#6366f1" />
        <circle cx="10" cy="30" r="4" fill="#14b8a6" />
        <circle cx="30" cy="30" r="4" fill="#3b82f6" />
        <line x1="10" y1="10" x2="30" y2="30" stroke="currentColor" strokeWidth="1.5" className="text-gray-800" />
        <line x1="30" y1="10" x2="10" y2="30" stroke="currentColor" strokeWidth="1.5" className="text-gray-800" />
      </svg>
    );
  }

  return (
    <Image
      src="/images/logo.png"
      alt="ZIEPX Logo"
      width={width}
      height={height}
      className={className}
      priority={priority}
      onError={() => setImageError(true)}
    />
  );
}
