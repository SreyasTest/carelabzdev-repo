import { gql } from "@apollo/client";

export const GET_NAVBAR = gql`
  query {
      navbar {
        Logo {
          url
        }
        buttonlink
        buttontext
        items {
          badge
          heading
          id
          label
          link
          order
          submenus {
            Button
            featureheading
            features {
              name
              id
            }
            subtitle
            title
            id
          }
        }
        regions {
          link
          name
          order
          siteUrl
        }
        viewText
        regions_connection {
          nodes {
            link
            siteUrl
            order
            name
          }
        }
        regionTitle
        regionSelector
        documentId
      }
      }
    `;

export const GET_BLOG = gql`
    query  {
      blogs {
        title
        slug
        content
        description
        link
        featureImage {
          url
        }
        seo {
          keywords
          metaDescription
          metaRobots
          metaTitle
          metaViewport
          structuredData
          openGraph {
            ogDescription
            ogImage {
              url
            }
            ogType
            ogTitle
            ogUrl
          }
        }
      }
    }`;


export const GET_HOME_SECTION_1 = gql`
query  {
  homes {
    title
    heading
    description
    btn1_link
    btn1_text
    btn2_link
    btn2_text
    stats {
      label
      number
      id
    }
  }
}`;

