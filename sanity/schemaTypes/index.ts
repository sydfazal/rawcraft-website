import { type SchemaTypeDefinition } from "sanity";
import { productSchema } from "../schema/product";
import { categorySchema } from "../schema/category";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, categorySchema],
};
