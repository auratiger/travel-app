export const COLORS = {
   primary: 'hsl(31deg 97% 55%)',
   accent: 'hsl(43deg 100% 52%)',
   background: 'hsl(0deg 0% 100%)',
   primaryText: 'hsl(232deg 26% 17%)',
   secondaryText: 'hsl(223deg 17% 76%)',
   black: 'hsl(0deg 0% 0%)',
   gray: 'hsl(232deg 26% 17%)',
   grayLight: 'hsl(236deg 5% 35%)',
};

export const TRANSITIONS = {
   sm: '0.2s all ease',
   md: '0.3s all ease'
}

export const BREAKPOINT_SIZES = {
   xs: 320,
   sm: 600,
   md: 900,
   lg: 1024,
   xl: 1440,
};

export const BREAKPOINTS = {
   xs: `(max-width: ${BREAKPOINT_SIZES.xs}px)`,
   sm: `(max-width: ${BREAKPOINT_SIZES.sm}px)`,
   md: `(max-width: ${BREAKPOINT_SIZES.md}px)`,
   lg: `(max-width: ${BREAKPOINT_SIZES.lg}px)`,
   xl: `(max-width: ${BREAKPOINT_SIZES.xl}px)`,
   xsMin: `(min-width: ${BREAKPOINT_SIZES.xs + 1}px)`,
   smMin: `(min-width: ${BREAKPOINT_SIZES.sm + 1}px)`,
   mdMin: `(min-width: ${BREAKPOINT_SIZES.md + 1}px)`,
   lgMin: `(min-width: ${BREAKPOINT_SIZES.lg + 1}px)`,
   xlMin: `(min-width: ${BREAKPOINT_SIZES.xl + 1}px)`,
   desktop: `(min-width: ${BREAKPOINT_SIZES.sm + 1}px)`,
};

export const SHADOWS = {
   md: `0px 0px 14px -5px ${COLORS.black};`
}

export const READING_WIDTH = 850;
export const EXTRA_WIDE_WIDTH = 1024;

export const Z_INDICES = {
   hero: 1,
   mainContent: 10,
   header: 100,
};
