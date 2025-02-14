// https://github.com/colinhacks/zod?tab=readme-ov-file#writing-generic-functions

import { z } from 'zod';

function inferSchema<T extends z.ZodTypeAny>(schema: T) {
  return schema;
}

inferSchema(z.string());
// => ZodString

function parseData<T extends z.ZodTypeAny>(data: unknown, schema: T) {
  return schema.parse(data) as z.infer<T>;
}

parseData('sup', z.string());
