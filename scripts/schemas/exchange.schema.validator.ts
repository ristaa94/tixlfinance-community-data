/* tslint:disable */
// generated by typescript-json-validator
import { inspect } from "util";
import Ajv from "ajv";
import ExchangeSchema from "./exchange.schema";
export const ajv = new Ajv({
  allErrors: true,
  coerceTypes: false,
  format: "fast",
  nullable: true,
  unicode: true,
  uniqueItems: true,
  useDefaults: true,
});

ajv.addMetaSchema(require("ajv/lib/refs/json-schema-draft-06.json"));

export { ExchangeSchema };
export const ExchangeSchemaSchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  defaultProperties: [],
  definitions: {
    ExchangeScoreSchema: {
      defaultProperties: [],
      properties: {
        adoption_score: {
          type: "number",
        },
        decentralization_score: {
          type: "number",
        },
        regulation_score: {
          type: "number",
        },
        total_score: {
          type: "number",
        },
        wash_trading_score: {
          type: "number",
        },
      },
      required: ["total_score"],
      type: "object",
    },
  },
  properties: {
    coin_api_id: {
      type: "string",
    },
    coingecko_id: {
      type: "string",
    },
    exchange_id: {
      type: "string",
    },
    exchange_score: {
      $ref: "#/definitions/ExchangeScoreSchema",
    },
    name: {
      type: "string",
    },
    website: {
      format: "url",
      type: "string",
    },
  },
  required: ["exchange_id", "exchange_score", "name", "website"],
  type: "object",
};
export type ValidateFunction<T> = ((data: unknown) => data is T) &
  Pick<Ajv.ValidateFunction, "errors">;
export const isExchangeSchema = ajv.compile(
  ExchangeSchemaSchema
) as ValidateFunction<ExchangeSchema>;
export default function validate(value: unknown): ExchangeSchema {
  if (isExchangeSchema(value)) {
    return value;
  } else {
    throw new Error(
      ajv.errorsText(
        isExchangeSchema.errors!.filter((e: any) => e.keyword !== "if"),
        { dataVar: "ExchangeSchema" }
      ) +
        "\n\n" +
        inspect(value)
    );
  }
}
