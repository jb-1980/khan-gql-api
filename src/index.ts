import { GraphQLClient } from "graphql-request"
import { getSdk, Sdk } from "./graphql/sdk.generated.js"
import nodeFetch from "node-fetch"
import fetchCookie from "fetch-cookie"

export const getKhanGraphQLSdk = (): Sdk => {
  const customFetch = fetchCookie(nodeFetch)

  const client = new GraphQLClient(
    "https://www.khanacademy.org/api/internal/graphql",
    {
      // @ts-expect-error, package has incorrect types
      fetch: customFetch,
      credentials: "include",
      requestMiddleware: (request) => {
        return {
          ...request,
          url: `${request.url}/${request.operationName}`,
        }
      },
      headers: {
        "x-ka-fkey": "1",
      },
    }
  )
  return getSdk(client)
}

export default getKhanGraphQLSdk
