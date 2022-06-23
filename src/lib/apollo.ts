import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pszwv02bri01z4ctqg7585/master',
    cache: new InMemoryCache()
})