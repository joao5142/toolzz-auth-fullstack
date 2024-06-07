const radius = {
  xs: "0.6rem",
  sm: "1.2rem",
  md: "2rem",
  lg: "3rem",
};

const fontSizes = {
  "1xl": "1.8rem",
  xl: "1.5rem",
  lg: "1.25rem",
  md: "1.1rem",
  sm: "0.875rem",
  xs: "0.75rem",
};

export const light = {
  colors: {
    background: "#ffff",

    "text-pure": "#0E0E0E",
    "text-normal": "#585858",

    "neutral-500": "#909090",
    "neutral-200": "#0000001A",

    "border-normal": "#6A6A6A",
    "border-error": "#ff1414b7",

    icon: "#151515",

    primary: "#0761E2",
    white: "#ffff",
  },
  radius,
  fontSizes,
};

export const dark = {
  colors: {
    background: "#232323",

    "text-pure": "#EDEDED",
    "text-normal": "#909090",
    "neutral-500": "#909090",

    "neutral-200": "#0000001A",

    "border-normal": "#5C5C5C",
    "border-error": "#ff1414b7",

    icon: "#ffffff",

    primary: "#0761E2",
    white: "#ffff",
  },
  radius,
  fontSizes,
};

export type ColorTypes = keyof typeof light.colors;
export type FontSizeTypes = keyof typeof fontSizes;

export type ThemeType = typeof light;
