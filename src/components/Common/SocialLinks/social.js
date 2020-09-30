import React from 'react';
import {
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPatreon,
} from 'react-icons/fa';
import {
  GITHUB_ID,
  TWITTER_ID,
  FACEBOOK_ID,
  INSTAGRAM_ID,
  LINKEDIN_ID,
  PATREON_ID,
} from '~/constants';

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
    name: 'Facebook',
    url: `https://facebook.com/${FACEBOOK_ID}`,
    icon: <FaFacebook />,
    display: true,
  },
  {
    name: 'Instagram',
    url: `https://instagram.com/${INSTAGRAM_ID}`,
    icon: <FaInstagram />,
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
    display: true,
  },
];
