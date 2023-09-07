import React from 'react';
import type { FunctionComponent } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import type { Track, Writeup } from '../../../lib/contentful/generated';
import { EMAIL } from '../../constants';
import SEO from '../SEO';
import type { AlbumProps } from './types';

const Album: FunctionComponent<AlbumProps> = ({ data }: AlbumProps) => {
  const {
    contentfulMusicRelease: {
      artist,
      copyright,
      credits,
      description,
      format,
      image,
      label,
      links,
      releaseDate,
      title,
      tracks,
      upc,
      writeups,
    },
  } = data;

  const metadata: { key: string; value: string }[] = [];
  const buildMetadataList = () => {
    artist?.name && metadata.push({ key: 'Artist', value: artist.name });
    releaseDate && metadata.push({ key: 'Date', value: releaseDate });
    format && metadata.push({ key: 'Format', value: format });
    label && metadata.push({ key: 'Label', value: label });
    upc && metadata.push({ key: 'UPC', value: upc });
  };

  buildMetadataList();

  const getCreditDetailElements = ({
    name,
    role,
  }: {
    name: string;
    role: string;
  }) => {
    const nameKey = `${name.substr(0, 3)}_${role.substr(0, 3)}`;
    const roleKey = `${role.substr(0, 3)}_${name.substr(0, 3)}`;
    const trailChar = '.';

    const componentArray = [
      <dt className="list-item xs" key={nameKey}>
        {name + trailChar.repeat(220)}
      </dt>,
      <dd className="list-item xs" key={roleKey}>
        {role}
      </dd>,
    ];

    return componentArray;
  };

  return (
    <article className="album">
      <SEO title={title} />
      <div className="container">
        <div className="row">
          <div className="module col left">
            <div className="cover-art">
              <GatsbyImage image={image?.gatsbyImage} alt="" />
            </div>
          </div>
          <div className="module col right">
            <header className="header">
              <h1 className="title h1">{title}</h1>
              <h2 className="title h2">{artist?.name}</h2>
            </header>
            {description && (
              <div
                className="section description"
                dangerouslySetInnerHTML={{
                  __html: description.childMarkdownRemark.html,
                }}
              />
            )}
          </div>
        </div>
      </div>
      {(tracks || metadata || links) && (
        <div className="container">
          <div className="row">
            <div className="module col left">
              {tracks && (
                <section className="section">
                  <h3 className="title">Tracks</h3>
                  <ul className="track-list">
                    {tracks?.map(
                      ({ id, title, videoUrl }: Track | null, i: number) => (
                        <li key={id} className="track-row list-item md">
                          <div className="track-col index-col">
                            {(i + 1).toString().padStart(2, '0')}
                          </div>
                          <div className="track-col title-col">{title}</div>
                          <div className="track-col link-col">
                            {videoUrl && (
                              <a
                                className="list-link"
                                href={videoUrl}
                                target="_blank"
                                rel="noreferrer noopener"
                              >
                                Video
                              </a>
                            )}
                          </div>
                        </li>
                      )
                    )}
                  </ul>
                </section>
              )}
            </div>
            <div className="module col right">
              <section className="section">
                {metadata && (
                  <>
                    <h3 className="title">Info</h3>
                    <ul className="meta-list">
                      {metadata?.map(
                        ({ key, value }) =>
                          value && (
                            <li className="list-item sm" key={key}>
                              {key}: {value}
                            </li>
                          )
                      )}
                    </ul>
                  </>
                )}
                {links && (
                  <>
                    <h3 className="title">Listen</h3>
                    <ul className="listen-list">
                      {links?.map(
                        ({ name, url }: { name: string; url: string }) => (
                          <div className="list-item sm" key={name}>
                            <a
                              className="list-link"
                              href={url}
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              {`${name} →`}
                            </a>
                          </div>
                        )
                      )}
                    </ul>
                  </>
                )}
              </section>
            </div>
          </div>
        </div>
      )}
      {(credits || copyright || writeups) && (
        <div className="container">
          <div className="row">
            {credits && (
              <div className="module col left">
                <section className="section">
                  <h3 className="title">Credits</h3>
                  <dl className="credit-list">
                    {credits?.map(
                      ({ name, role }: { name: string; role: string }) =>
                        getCreditDetailElements({ name, role })
                    )}
                  </dl>
                  {copyright && <p className="copyright">{copyright}</p>}
                </section>
              </div>
            )}
            <div className="module col right">
              <section className="section praise">
                <h3 className="title">Praise</h3>
                {writeups && (
                  <ul className="praise-list">
                    {writeups?.map(
                      ({
                        title,
                        publication,
                        author,
                        date,
                        url,
                      }: Writeup | null) => (
                        <li className="" key={url}>
                          <a
                            className="list-link"
                            href={url}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            {publication}
                          </a>
                          <div className="list-item xs">
                            {`
                              ${date ? date : ''}
                              ${title}
                              ${author ? ` by ${author}` : ''}
                              `}
                          </div>
                        </li>
                      )
                    )}
                  </ul>
                )}
                <a className="button small light" href={`mailto:${EMAIL}`}>
                  Contact to submit
                </a>
              </section>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default Album;
