import { z } from 'zod';

const BaseSchema = z.object({
  name: z.literal('Test'), // Fixed value
});

const AssetSchema = BaseSchema.extend({
  type: z.literal('asset'), // Discriminator
  assetValue: z.number(),
});

const Asset1Schema = BaseSchema.extend({
  type: z.literal('asset1'), // Discriminator
  assetDescription: z.string(),
});

// Define a Discriminated Union
const ExtendedSchema = z.discriminatedUnion('type', [
  AssetSchema,
  Asset1Schema,
]);

type ExtendedType = z.infer<typeof ExtendedSchema>;

const obj1 = { type: 'asset1', name: 'Test', assetValue: 100 };
const obj2 = {
  type: 'asset1',
  name: 'Test',
  assetDescription: 'An important asset',
};

console.log(ExtendedSchema.parse(obj1));
console.log(ExtendedSchema.parse(obj2));

// Type-Safe Function
function handleType(obj: ExtendedType) {
  if (obj.type === 'asset') {
    console.log('Asset Value:', obj.assetValue); // ✅ TypeScript knows obj has assetValue
  } else if (obj.type === 'asset1') {
    console.log('Asset Description:', obj.assetDescription); // ✅ TypeScript knows obj has assetDescription
  }
}
