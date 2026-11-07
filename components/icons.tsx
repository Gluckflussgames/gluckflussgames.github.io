import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Icon({ size = 24, children, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const ArrowUpRight = (props: IconProps) => (
  <Icon {...props}>
    <path d="M7 17 17 7M7 7h10v10" />
  </Icon>
);
export const ArrowDown = (props: IconProps) => (
  <Icon {...props}>
    <path d="M12 4v16m-6-6 6 6 6-6" />
  </Icon>
);
export const ArrowRight = (props: IconProps) => (
  <Icon {...props}>
    <path d="M4 12h16m-6-6 6 6-6 6" />
  </Icon>
);
export const ArrowLeft = (props: IconProps) => (
  <Icon {...props}>
    <path d="M20 12H4m6-6-6 6 6 6" />
  </Icon>
);
export const Play = (props: IconProps) => (
  <Icon {...props}>
    <path d="m8 5 11 7-11 7z" />
  </Icon>
);
export const Pause = (props: IconProps) => (
  <Icon {...props}>
    <path d="M8 5v14M16 5v14" />
  </Icon>
);
export const X = (props: IconProps) => (
  <Icon {...props}>
    <path d="m6 6 12 12M6 18 18 6" />
  </Icon>
);
export const Menu = (props: IconProps) => (
  <Icon {...props}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </Icon>
);
export const Plus = (props: IconProps) => (
  <Icon {...props}>
    <path d="M12 5v14M5 12h14" />
  </Icon>
);
export const Minus = (props: IconProps) => (
  <Icon {...props}>
    <path d="M5 12h14" />
  </Icon>
);
