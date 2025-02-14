// Same with Types
enum TypeCompEnum {
  asset = 'asset',
  asset1 = 'asset1',
}

type TypeBaseType<T = TypeCompEnum> = {
  type: T;
  name: string;
};

type TypeExtendedType = TypeBaseType<TypeCompEnum.asset> & {
  extended: boolean;
};

type TypeExtendedType1 = TypeBaseType<TypeCompEnum.asset1> & {
  differentAttribute: string;
};

// Create a Union of Extended Types
type TypeExtendedUnion = TypeExtendedType | TypeExtendedType1;

// Type-Safe Function Using Discriminated Unions
function handleType1(obj: TypeExtendedUnion) {
  if (obj.type === TypeCompEnum.asset) {
    console.log('Value of TypeExtendedType:', obj.extended); // TypeScript knows obj has assetValue
  } else if (obj.type === TypeCompEnum.asset1) {
    console.log('Value of TypeExtendedType1:', obj.differentAttribute); // TypeScript knows obj has assetDescription
  }
}

// Example Usage
const obj1: TypeExtendedType = {
  type: TypeCompEnum.asset,
  name: 'Test',
  extended: true,
};
const obj2: TypeExtendedType1 = {
  type: TypeCompEnum.asset1,
  name: 'Test',
  differentAttribute: 'An important asset',
};

handleType1(obj1);
handleType1(obj2);
