// app/components/NativeMotif.tsx
"use client";

export default function NativeMotif() {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      aria-hidden="true"
      className="opacity-20 absolute right-0 top-0 transform translate-x-1/4 -translate-y-1/4"
    >
      {/* A simple arrow-like diamond shape */}
      <path d="M0 50 L50 0 L100 50 L50 100 Z" fill="currentColor" />
    </svg>
  );
}
