# Khan GQL API

A few queries and mutations that have been picked up by observing the networking
tab in the browser while using the Khan Academy website.

This repo seeks to use the graphql queries to create an SDK that can be used in
a Node environment to get some data from the Khan Academy API.

## Usage

```ts
import { getKhanGraphQLSdk } from "khan-gql-api"

const main = async () => {
  // instantiate the SDK
  const khanSdk = getKhanGraphQLSdk()

  // login to Khan Academy
  await khanSdk.loginWithPasswordMutation({
    identifier: "<identifier>", // your KA username
    password: "<password>", // your KA password
  })

  // make a request to get a response
  const response = await khanSdk.getLearnMenuProgress()

  // do your thing with the data
  console.dir(response, { depth: null })
}
```
