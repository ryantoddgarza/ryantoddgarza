import React from 'react';
import type { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SEO from '../SEO';
import compare from '../../utils/compare';
import formattedDate from '../../utils/formattedDate';

const CurriculumVitae: FunctionComponent = () => {
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
          city
          state
          position
          start {
            year
          }
          end {
            year
          }
        }
        productions {
          name
          company
          roles
          performances {
            venue
            space
            date
          }
        }
      }
    }
  `);

  const formattedSiteUrl = siteUrl.split('://')[1];

  return (
    <div className="cv">
      <SEO title="Curriculum Vitae" />
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
            <h2>Dance</h2>
            <h3>Companies</h3>
            {dance.companies
              .sort((a: any, b: any) =>
                compare(a.start.year, b.start.year, 'desc')
              )
              .sort((a: any, b: any) =>
                compare(a.end.year || 9999, b.end.year || 9999, 'desc')
              )
              .map(({ name, city, state, position, start, end }) => (
                <div key={name}>
                  <h5>{name}</h5>
                  <div>{`${city}, ${state}`}</div>
                  <div>{position}</div>
                  <div>{`${start.year} - ${end.year || 'Present'}`}</div>
                </div>
              ))}
            <h3>Performances</h3>
            {dance.productions
              .sort((a: any, b: any) =>
                compare(a.performances[0].date, b.performances[0].date, 'desc')
              )
              .map(({ name, company, performances }) => (
                <div key={name}>
                  <h5>{name}</h5>
                  <div>{company}</div>
                  {performances.map(({ venue, space, date }) => (
                    <ul key={date}>
                      <li className="detail">
                        <div>{formattedDate(date)}</div>
                        <div>{venue}</div>
                        <div>{space}</div>
                      </li>
                    </ul>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CurriculumVitae;