// Define a Generic Base Type
type BaseType<T extends string> = {
  type: T;
  id: string;
  createdAt: Date;
};

// Define Extended Types Using Generics
type UserType = BaseType<'user'> & {
  name: string;
  email: string;
  roles: string[];
};

type ProductType = BaseType<'product'> & {
  title: string;
  price: number;
  inStock: boolean;
};

type OrderType = BaseType<'order'> & {
  userId: string;
  items: { productId: string; quantity: number }[];
  total: number;
};

// Create a Mapped Type for Dynamic Type Extraction
type TypeMap = {
  user: UserType;
  product: ProductType;
  order: OrderType;
};

// Utility type to extract the correct type dynamically
type ExtractType<T extends keyof TypeMap> = TypeMap[T];

// ################################
// Utility Types for Flexibility

// Make All Properties Optional
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};
// Make Object Immutable
type ReadonlyRecursive<T> = {
  readonly [K in keyof T]: T[K] extends object ? ReadonlyRecursive<T[K]> : T[K];
};

// Generic Function with Type Safety
function handleEntity<T extends keyof TypeMap>(entity: ExtractType<T>) {
  console.log('Handling entity of type:', entity.type);

  if (entity.type === 'user') {
    console.log('User:', entity.name, 'Email:', entity.email);
  } else if (entity.type === 'product') {
    console.log('Product:', entity.title, 'Price:', entity.price);
  } else if (entity.type === 'order') {
    console.log('Order Total:', entity.total, 'Items:', entity.items.length);
  }
}

// Example Usage
const user: UserType = {
  type: 'user',
  id: 'u1',
  createdAt: new Date(),
  name: 'Alice',
  email: 'alice@example.com',
  roles: ['admin', 'editor'],
};

const product: ProductType = {
  type: 'product',
  id: 'p1',
  createdAt: new Date(),
  title: 'Laptop',
  price: 1299.99,
  inStock: true,
};

const order: OrderType = {
  type: 'order',
  id: 'o1',
  createdAt: new Date(),
  userId: 'u1',
  items: [{ productId: 'p1', quantity: 2 }],
  total: 2599.98,
};

handleEntity(user); // ✅ Type-safe
handleEntity(product); // ✅ Type-safe
handleEntity(order); // ✅ Type-safe

// Type Transformations in Action
const partialUser: DeepPartial<UserType> = { name: 'Bob' }; // Everything optional
const readonlyOrder: ReadonlyRecursive<OrderType> = order; // Immutable

readonlyOrder.total = 3000; // ❌ Error: Cannot assign to 'total' because it is a read-only property.
