import { gql } from "@apollo/client";

export const GET_NAVBAR = gql`
  query {
    navbar {
      Logo { url }
      items { label link order }
    }
  }
`;