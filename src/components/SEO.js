import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const query = graphql`
  query GetSiteMetadata {
    site {
      siteMetadata {
        title
        subtitle
        siteurl
        author {
          aboutme
        }
      }
    }
  }
`;

const SEO = ({
  meta, image, title, description, slug,
}) => (
  <StaticQuery
    query={query}
    render={data => {
      const { siteMetadata } = data.site;
      const metaDescription = description || siteMetadata.subtitle;
      const metaImage = image ? `${siteMetadata.siteurl}/${image}` : null;
      const url = `${siteMetadata.siteurl}${slug}`;
      return (
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          {...(title
            ? {
              titleTemplate: `%s - ${siteMetadata.title}`,
              title,
            }
            : {
              title: siteMetadata.title,
            })}
          meta={[
            {
              name: 'description',
              content: metaDescription,
            },
            {
              property: 'og:url',
              content: url,
            },
            {
              property: 'og:title',
              content: title || siteMetadata.title,
            },
            {
              name: 'og:description',
              content: metaDescription,
            },
            {
              name: 'twitter:card',
              content: 'summary',
            },
            {
              name: 'twitter:creator',
              content: siteMetadata.author.aboutme,
            },
            {
              name: 'twitter:title',
              content: title || siteMetadata.title,
            },
            {
              name: 'twitter:description',
              content: metaDescription,
            },
          ]
            .concat(
              metaImage
                ? [
                  {
                    property: 'og:image',
                    content: metaImage,
                  },
                  {
                    name: 'twitter:image',
                    content: metaImage,
                  },
                ]
                : []
            )
            .concat(meta)}
        />
      );
    }}
  />
);

SEO.defaultProps = {
  meta: [],
  slug: '',
};

SEO.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  meta: PropTypes.array,
  slug: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default SEO;