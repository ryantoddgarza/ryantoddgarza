import React from 'react';
import type { FunctionComponent } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import type { Track, Writeup } from '../../../lib/contentful/generated';
import { EMAIL } from '../../constants';
import DefinitionList, { DefinitionListItem } from '../DefinitionList';
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

  const metadataDefinitionList: DefinitionListItem[] = [];
  (function buildMetadataDefinitionList() {
    if (artist?.name) {
      metadataDefinitionList.push({ term: 'Artist', definition: artist.name });
    }

    if (releaseDate) {
      metadataDefinitionList.push({ term: 'Date', definition: releaseDate });
    }

    if (format) {
      metadataDefinitionList.push({ term: 'Format', definition: format });
    }

    if (label) {
      metadataDefinitionList.push({ term: 'Label', definition: label });
    }

    if (upc) {
      metadataDefinitionList.push({ term: 'UPC', definition: upc });
    }
  })();

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
      <dt className="list-item sm" key={nameKey}>
        {name + trailChar.repeat(220)}
      </dt>,
      <dd className="list-item sm" key={roleKey}>
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
            {metadataDefinitionList.length > 0 && (
              <DefinitionList nodes={metadataDefinitionList} />
            )}
          </div>
        </div>
      </div>
      {(tracks || metadataDefinitionList.length > 0 || links) && (
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
                {links && (
                  <>
                    <h3 className="title">Listen</h3>
                    <ul className="listen-list">
                      {links?.map(
                        ({ name, url }: { name: string; url: string }) => (
                          <div className="list-item md" key={name}>
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
                        <dl className="list-item md" key={url}>
                          <dt>
                            <a
                              className="title list-link"
                              href={url}
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              {publication}
                            </a>
                          </dt>
                          <dd className="detail">
                            {`
                              ${date ? date : ''}
                              ${title}
                              ${author ? ` by ${author}` : ''}
                              `}
                          </dd>
                        </dl>
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
