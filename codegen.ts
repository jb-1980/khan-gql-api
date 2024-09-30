import type { CodegenConfig } from "@graphql-codegen/cli"
import { DateTimeResolver } from "graphql-scalars"

const config: CodegenConfig = {
  schema: ["src/graphql/schema/**/*.graphql"],
  documents: "src/graphql/operations/**/*.graphql",
  generates: {
    "src/graphql/sdk.generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        rawRequest: true,
        scalars: {
          DateTime: DateTimeResolver.extensions.codegenScalarType,
        },
      },
    },
  },
}
export default config
