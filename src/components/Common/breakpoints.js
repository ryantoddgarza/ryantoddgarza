export const breakpoints = {
  card: 160,
  card_lg: 240,
  mobile: 320,
  mobile_lg: 480,
  tablet: 640,
  tablet_lg: 880,
  desktop: 1024,
  desktop_lg: 1200,
  widescreen: 1400,
};

const device = {
  card: {
    max: breakpoints.mobile - 1 + 'px',
  },
  card_lg: {
    min: breakpoints.card_lg + 'px',
    max: breakpoints.mobile - 1 + 'px',
  },
  mobile: {
    min: breakpoints.mobile + 'px',
    max: breakpoints.tablet - 1 + 'px',
  },
  mobile_lg: {
    min: breakpoints.mobile_lg + 'px',
    max: breakpoints.tablet - 1 + 'px',
  },
  tablet: {
    min: breakpoints.tablet + 'px',
    max: breakpoints.desktop - 1 + 'px',
  },
  tablet_lg: {
    min: breakpoints.tablet_lg + 'px',
    max: breakpoints.desktop - 1 + 'px',
  },
  desktop: {
    min: breakpoints.desktop + 'px',
    max: breakpoints.widescreen - 1 + 'px',
  },
  desktop_lg: {
    min: breakpoints.desktop_lg + 'px',
    max: breakpoints.widescreen - 1 + 'px',
  },
  widescreen: {
    min: breakpoints.widescreen + 'px',
  },
};

const to = (breakpoint) => `(max-width: ${breakpoint})`;

const from = (breakpoint) => `(min-width: ${breakpoint})`;

const media = {
  'card': `
    @media only screen and ${to(device.card.max)}
  `,
  'card-lg': `
    @media only screen and ${from(device.card_lg.min)} and ${to(device.card.max)}
  `,
  'from-card-lg': `
    @media only screen and ${from(device.card_lg.min)}
  `,
  'mobile': `
    @media only screen and ${from(device.mobile.min)} and ${to(device.mobile.max)}
  `,
  'from-mobile': `
    @media only screen and ${from(device.mobile.min)}
  `,
  'mobile-lg': `
    @media only screen and ${from(device.mobile_lg.min)} and ${to(device.mobile_lg.max)}
  `,
  'from-mobile-lg': `
    @media only screen and ${from(device.mobile_lg.min)}
  `,
  'to-mobile': `
    @media only screen and ${to(device.mobile.max)}
  `,
  'tablet': `
    @media only screen and ${from(device.tablet.min)} and ${to(device.tablet.max)}
  `,
  'from-tablet': `
    @media only screen and ${from(device.tablet.min)}
  `,
  'tablet-lg': `
    @media only screen and ${from(device.tablet_lg.min)} and ${to(device.tablet_lg.max)}
  `,
  'from-tablet-lg': `
    @media only screen and ${from(device.tablet_lg.min)}
  `,
  'to-tablet': `
    @media only screen and ${to(device.tablet.max)}
  `,
  'desktop': `
    @media only screen and ${from(device.desktop.min)} and ${to(device.desktop.max)}
  `,
  'from-desktop': `
    @media only screen and ${from(device.desktop.min)}
  `,
  'desktop-lg': `
    @media only screen and ${from(device.desktop_lg.min)} and ${to(device.desktop_lg.max)}
  `,
  'from-desktop-lg': `
    @media only screen and ${from(device.desktop_lg.min)}
  `,
  'to-desktop': `
    @media only screen and ${to(device.desktop.max)}
  `,
  'widescreen': `
    @media only screen and ${from(device.widescreen.min)}
  `,
};

export const breakpoint = (val) => media[val];
