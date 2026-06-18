// components/icons.tsx
// Minimal, consistent stroke-based icons. No cartoonish medical clip-art.
import * as React from "react";

type IconProps = Omit<React.SVGProps<SVGSVGElement>, "strokeWidth"> & {
  size?: number;
  strokeWidth?: number;
};

function base({ size = 24, strokeWidth = 1.6, ...rest }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...rest,
  };
}

export const SearchIcon = (p: IconProps) => (
  <svg {...base(p)} aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

export const PulseIcon = (p: IconProps) => (
  <svg {...base(p)} aria-hidden="true">
    <path d="M3 12h3.5l2-6 3.5 12 2.5-7 1.5 1H21" />
  </svg>
);

export const HeartIcon = (p: IconProps) => (
  <svg {...base(p)} aria-hidden="true">
    <path d="M12 20s-7-4.6-7-9.7A4 4 0 0 1 12 7a4 4 0 0 1 7 3.3C19 15.4 12 20 12 20Z" />
  </svg>
);

export const DropletIcon = (p: IconProps) => (
  <svg {...base(p)} aria-hidden="true">
    <path d="M12 3s6 5.6 6 10a6 6 0 0 1-12 0c0-4.4 6-10 6-10Z" />
  </svg>
);

export const BrainIcon = (p: IconProps) => (
  <svg {...base(p)} aria-hidden="true">
    <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1 5.8V16a3 3 0 0 0 4 2.8" />
    <path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 1 5.8V16a3 3 0 0 1-4 2.8" />
    <path d="M12 4.5v15" />
  </svg>
);

export const MaternalIcon = (p: IconProps) => (
  <svg {...base(p)} aria-hidden="true">
    <circle cx="12" cy="6" r="2.4" />
    <path d="M12 9c-2.2 0-3.5 1.6-3.5 4 0 2.6 1 4 1 6.5h5c0-2.5 1-3.9 1-6.5 0-2.4-1.3-4-3.5-4Z" />
    <circle cx="13" cy="14" r="1.6" />
  </svg>
);

export const ShieldIcon = (p: IconProps) => (
  <svg {...base(p)} aria-hidden="true">
    <path d="M12 3 5 6v5c0 4.2 2.9 7.4 7 9 4.1-1.6 7-4.8 7-9V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const BookIcon = (p: IconProps) => (
  <svg {...base(p)} aria-hidden="true">
    <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H19v15.5H5.5A1.5 1.5 0 0 0 4 21V5.5Z" />
    <path d="M4 18.5h15" />
    <path d="M8 8h7M8 11h5" />
  </svg>
);

export const PillIcon = (p: IconProps) => (
  <svg {...base(p)} aria-hidden="true">
    <rect x="3" y="8" width="18" height="8" rx="4" />
    <path d="M12 8v8" />
  </svg>
);

export const ClipboardIcon = (p: IconProps) => (
  <svg {...base(p)} aria-hidden="true">
    <rect x="6" y="4" width="12" height="17" rx="1.5" />
    <path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H9V4Z" />
    <path d="M9 11h6M9 14h4" />
  </svg>
);

export const AlertIcon = (p: IconProps) => (
  <svg {...base(p)} aria-hidden="true">
    <path d="M12 4 2.7 20h18.6L12 4Z" />
    <path d="M12 10v4" />
    <path d="M12 17.5h.01" />
  </svg>
);

export const MapPinIcon = (p: IconProps) => (
  <svg {...base(p)} aria-hidden="true">
    <path d="M12 21s-6-5.2-6-10a6 6 0 0 1 12 0c0 4.8-6 10-6 10Z" />
    <circle cx="12" cy="11" r="2.2" />
  </svg>
);

export const HospitalIcon = (p: IconProps) => (
  <svg {...base(p)} aria-hidden="true">
    <path d="M4 21V8l8-4 8 4v13" />
    <path d="M4 21h16" />
    <path d="M12 8v5M9.5 10.5h5" />
    <path d="M9 21v-4h6v4" />
  </svg>
);

export const CheckIcon = (p: IconProps) => (
  <svg {...base(p)} aria-hidden="true">
    <path d="m4 12 5 5L20 6" />
  </svg>
);

export const ArrowRightIcon = (p: IconProps) => (
  <svg {...base(p)} aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const StethoscopeIcon = (p: IconProps) => (
  <svg {...base(p)} aria-hidden="true">
    <path d="M5 4v5a4 4 0 0 0 8 0V4" />
    <path d="M5 4H3.5M13 4h1.5" />
    <path d="M9 17a5 5 0 0 0 10 0v-2" />
    <circle cx="19" cy="13" r="2" />
  </svg>
);

export const iconBySlug: Record<string, (p: IconProps) => React.JSX.Element> = {
  "heart-blood-pressure": HeartIcon,
  "diabetes-metabolic": DropletIcon,
  "maternal-health": MaternalIcon,
  "kidney-health": DropletIcon,
  "mental-behavioural": BrainIcon,
  "preventive-health": ShieldIcon,
};
