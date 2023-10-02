import React from 'react';
import type { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import {
  ABOUT_PATH,
  CATEGORIES_PATH,
  CONTACT_PATH,
  MUSIC_PATH,
  POSTS_PATH,
} from '../../constants';
import isInternal from '../../utils/isInternal';
import titleCase from '../../utils/titleCase';
import { FooterDirectoryProps } from './types';

const FooterDirectory: FunctionComponent<FooterDirectoryProps> = ({
  categories,
}: FooterDirectoryProps) => {
  const posts = categories
    .filter(({ key }) => key !== '__ALL__')
    .map(({ key }) => {
      return { name: titleCase(key), url: `${CATEGORIES_PATH}/${key}` };
    });

  const directory = [
    {
      title: 'Pages',
      items: [
        { name: 'Posts', url: POSTS_PATH },
        { name: 'Music', url: MUSIC_PATH },
        { name: 'About', url: ABOUT_PATH },
        { name: 'Contact', url: CONTACT_PATH },
      ],
    },
    {
      title: 'Posts',
      items: posts,
    },
  ];

  return (
    <nav className="footer-nav">
      {directory.map(({ title, items }) => (
        <div className="nav-group" key={title}>
          <h6 className="nav-title">{title}</h6>
          <ul className="nav-list">
            {items.map(({ name, url }) => (
              <li className="nav-list-item" key={name}>
                {isInternal(url) ? (
                  <Link className="nav-link" to={url}>
                    {name}
                  </Link>
                ) : (
                  <a
                    className="nav-link"
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export default FooterDirectory;
