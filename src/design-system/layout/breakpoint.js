import { breakpoints } from './data/breakpoints.yaml';
import { px } from '../utils';

const device = {
  'phone': {
    min: px(breakpoints.phone),
    max: px(breakpoints.tablet - 1),
  },
  'phone-l': {
    min: px(breakpoints.phone_l),
    max: px(breakpoints.tablet - 1),
  },
  'tablet': {
    min: px(breakpoints.tablet),
    max: px(breakpoints.desktop - 1),
  },
  'tablet-l': {
    min: px(breakpoints.tablet_l),
    max: px(breakpoints.desktop - 1),
  },
  'desktop': {
    min: px(breakpoints.desktop),
    max: px(breakpoints.widescreen - 1),
  },
  'desktop-l': {
    min: px(breakpoints.desktop_l),
    max: px(breakpoints.widescreen - 1),
  },
  'widescreen': {
    min: px(breakpoints.widescreen),
  },
};

function get(name) {
  return `@media (min-width: ${device[name].min}) and (max-width: ${device[name].max})`;
}

function to(name) {
  return `@media (max-width: ${device[name].max})`;
}

function from(name) {
  return `@media (min-width: ${device[name].min})`;
}

export const breakpoint = { get, to, from };
