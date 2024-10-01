import type { CodegenConfig } from "@graphql-codegen/cli"
import { DateTimeResolver } from "graphql-scalars"

const config: CodegenConfig = {
  schema: ["src/graphql/schema/**/*.graphql"],
  documents: "src/graphql/operations/**/*.graphql",
  overwrite: true,
  hooks: {
    afterAllFileWrite: [`prettier --write`],
  },
  generates: {
    "src/graphql/sdk.generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        scalars: {
          DateTime: DateTimeResolver.extensions.codegenScalarType,
        },
        gqlImport: "graphql-tag#gql",
      },
    },
  },
}
export default config
