import React from 'react';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMediumM,
  FaPatreon,
  FaTwitter,
} from 'react-icons/fa';
import {
  FACEBOOK_ID,
  GITHUB_ID,
  INSTAGRAM_ID,
  LINKEDIN_ID,
  MEDIUM_ID,
  PATREON_ID,
  TWITTER_ID,
} from '../../../constants';

export default [
  {
    name: 'Github',
    url: `https://github.com/${GITHUB_ID}`,
    icon: <FaGithub />,
    display: true,
  },
  {
    name: 'Twitter',
    url: `https://twitter.com/${TWITTER_ID}`,
    icon: <FaTwitter />,
    display: true,
  },
  {
    name: 'Instagram',
    url: `https://instagram.com/${INSTAGRAM_ID}/`,
    icon: <FaInstagram />,
    display: true,
  },
  {
    name: 'Facebook',
    url: `https://facebook.com/${FACEBOOK_ID}`,
    icon: <FaFacebook />,
    display: true,
  },
  {
    name: 'Linkedin',
    url: `https://www.linkedin.com/in/${LINKEDIN_ID}`,
    icon: <FaLinkedin />,
    display: true,
  },
  {
    name: 'Patreon',
    url: `https://patreon.com/${PATREON_ID}`,
    icon: <FaPatreon />,
    display: false,
  },
  {
    name: 'Medium',
    url: `https://${MEDIUM_ID}.medium.com`,
    icon: <FaMediumM />,
    display: true,
  },
];
