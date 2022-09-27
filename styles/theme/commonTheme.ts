const fontSize = {
  xs: "0.75rem",
  sm: "0.875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
};

const borderRadius = {
  card: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1.25rem",
    lg: "1.625rem",
  },
  button: {
    sm: "0.375rem",
    base: "1rem",
  },
  icon: {
    base: "0.875rem",
  },
};

const commonTheme = {
  fontSize,
  borderRadius,
};

export type FontSize = typeof fontSize;

export default commonTheme;
