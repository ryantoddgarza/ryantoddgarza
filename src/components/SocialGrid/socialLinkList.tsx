import React from 'react';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import {
  FACEBOOK_ID,
  GITHUB_ID,
  INSTAGRAM_ID,
  LINKEDIN_ID,
} from '../../constants';
import type { SocialLinkListItem } from './types';

const socialLinkList: SocialLinkListItem[] = [
  {
    name: 'Github',
    url: `https://github.com/${GITHUB_ID}`,
    icon: <FaGithub />,
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
];

export default socialLinkList;
