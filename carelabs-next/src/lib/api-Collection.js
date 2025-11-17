import { gql } from "@apollo/client";

export const GET_NAVBAR = gql`
  query {
    navbar {
    Logo {
      url
    }
    items {
      order
      link
      label
      id
      heading
      badge
      submenus {
        Button
        featureheading
        features {
          name
          id
        }
        subtitle
        title
        
      }
    }
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


export const GET_HOME_BANNER = gql`
query  {
  homes {
    title
    description
    btn1_text
    btn1_link
    btn2_link
    btn2_text
    background_video {
      url
    }
    stats {
      number
      label
    }
  }
}`

