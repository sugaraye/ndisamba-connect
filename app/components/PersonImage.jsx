'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function PersonImage({ src, alt, size = "medium", className = "" }) {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    small: "w-20 h-20",
    medium: "w-32 h-32",
    large: "w-40 h-40"
  };

  const fallbackIcons = {
    small: "text-2xl",
    medium: "text-4xl", 
    large: "text-5xl"
  };

  if (imageError) {
    return (
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white ${fallbackIcons[size]}`}>
        {size === "small" ? "👑" : size === "medium" ? "👨‍💼" : "👑"}
      </div>
    );
  }

  return (
    <div className={`${sizeClasses[size]} relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="rounded-full object-cover"
        onError={() => setImageError(true)}
      />
    </div>
  );
}