import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";

const client = new ApolloClient({
  link:new HttpLink({
    uri: 'https://proper-hug-7f40206151.strapiapp.com/graphql',
    credentials: 'same-origin'
  }),
  cache: new InMemoryCache(),
});

export default client;