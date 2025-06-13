// app/components/AutoTypingDescription.tsx
'use client';

import { TypeAnimation } from 'react-type-animation';

export default function AutoTypingDescription() {
  return (
    <TypeAnimation
      sequence={[
        'We are dedicated to delivering innovative solutions that empower our community. Our mission is to create meaningful impact through technology, fostering creativity and collaboration every step of the way.',
        1000, // Wait 1s before restarting
      ]}
      wrapper="p"
      speed={50} // Typing speed (lower is faster)
      repeat={Infinity} // Loop indefinitely
      className="info-description"
      aria-live="polite"
    />
  );
}