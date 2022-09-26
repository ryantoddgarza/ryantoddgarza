import React from 'react';
import type { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Collapsible from 'react-collapsible';
import SEO from '../SEO';
import compare from '../../utils/compare';
import formattedDate from '../../utils/formattedDate';

const DanceCV: FunctionComponent = () => {
  const {
    site: {
      siteMetadata: { siteUrl, email },
    },
    dance,
  } = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          siteUrl
          email
        }
      }
      dance: resourcesJson(name: { eq: "dance" }) {
        companies {
          name
          title
          location
          dates {
            start
            end
          }
          description
        }
        productions {
          name
          company
          description
          performances {
            venue
            space
            date
          }
        }
        intensives {
          name
          location {
            facility
            space
            city
            state
            country
          }
          dates {
            start
            end
          }
          description
        }
      }
    }
  `);

  const formattedSiteUrl = siteUrl.split('://')[1];

  return (
    <div className="cv">
      <SEO title="Dance CV" />
      <section className="layout--margin">
        <div className="container desktop markdown">
          <h1>Ryan Todd Garza</h1>
          <div>
            <p>
              <b>Address and phone number available upon email request.</b>
            </p>
            <div>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
            <div>
              <a href={siteUrl}>{formattedSiteUrl}</a>
            </div>
          </div>
          <div>
            <h2>Professional Experience</h2>
            <h3>Companies</h3>
            {dance.companies
              .sort((a: any, b: any) =>
                compare(
                  a.dates?.start.split('-')[0],
                  b.dates?.start.split('-')[0],
                  'desc'
                )
              )
              .sort((a: any, b: any) =>
                compare(
                  a.dates?.end.split('-')[0] || 9999,
                  b.dates?.end.split('-')[0] || 9999,
                  'desc'
                )
              )
              .map(({ name, title, location, dates, description }) => (
                <div key={name}>
                  <h5>{name}</h5>
                  <div className="detail">
                    {title && <div>{title}</div>}
                    <div>
                      {`
                      ${dates.start.split('-')[0]}
                      -
                      ${dates.end.split('-')[0] || 'Present'}
                      `}
                    </div>
                    {location && <div>{location}</div>}
                  </div>
                  {description && (
                    <div className="description">{description}</div>
                  )}
                </div>
              ))}
            <h3>Performances</h3>
            {dance.productions
              .sort((a: any, b: any) =>
                compare(a.performances[0]?.date, b.performances[0]?.date, 'desc')
              )
              .map(({ name, company, description, performances }) => (
                <div key={name}>
                  <h5>{name}</h5>
                  <div className="detail">
                    <div>{company}</div>
                  </div>
                  <Collapsible trigger="show more" triggerWhenOpen="show less">
                    {description && (
                      <div className="description">{description}</div>
                    )}
                    {performances.map(({ venue, space, date }) => (
                      <ul key={date}>
                        <li className="detail">
                          {date && <div>{formattedDate(date)}</div>}
                          {venue && <div>{venue}</div>}
                          {space && <div>{space}</div>}
                        </li>
                      </ul>
                    ))}
                  </Collapsible>
                </div>
              ))}
          </div>
          <div>
            <h2>Education and Training</h2>
            <h3>Intensives</h3>
            {dance.intensives
              .sort((a: any, b: any) =>
                compare(a.dates?.start, b.dates?.start, 'desc')
              )
              .map(({ name, location, dates, description }) => (
                <div key={`${name}_${dates.start}`}>
                  <h5>{name}</h5>
                  <Collapsible trigger="show more" triggerWhenOpen="show less">
                    <div className="detail">
                      <div>
                        {`
                      ${formattedDate(dates.start)}
                      -
                      ${formattedDate(dates.end)}
                      `}
                      </div>
                      <div>{location.facility}</div>
                      <div>{location.space}</div>
                      <div>
                        {location.city}
                        {location.state && `, ${location.state}`}
                        {location.country && `, ${location.country}`}
                      </div>
                    </div>
                    {description && (
                      <div className="description">{description}</div>
                    )}
                  </Collapsible>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DanceCV;
