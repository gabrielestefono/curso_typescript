# Utility Types

TypeScript provides several utility types to facilitate common type transformations. These utilities are available globally.

## `Awaited<Type>`

This type is meant to model operations like `await` in `async` functions, or the `.then()` method on `Promise`s - specifically, the way that they recursively unwrap `Promise`s.

### Example

```ts
type A = Awaited<Promise<string>>;
    
type A = string
 
type B = Awaited<Promise<Promise<number>>>;
    
type B = number
 
type C = Awaited<boolean | Promise<number>>;
    
type C = number | boolean
```

## Partial<Type>

Constructs a type with all properties of `Type` set to optional. This utility will return a type that represents all subsets of a given type.

### Example

```ts
interface Todo {
  title: string;
  description: string;
}
 
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
 
const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};
 
const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});
```

## Required<Type>

Constructs a type consisting of all properties of `Type` set to required. The opposite of [Partial](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype).

### Example

```ts
interface Props {
  a?: number;
  b?: string;
}
 
const obj: Props = { a: 5 };
 
const obj2: Required<Props> = { a: 5 };
Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.
```

## Readonly<Type>

Constructs a type with all properties of `Type` set to `readonly`, meaning the properties of the constructed type cannot be reassigned.

### Example

```ts
interface Todo {
  title: string;
}
 
const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};
 
todo.title = "Hello";
Cannot assign to 'title' because it is a read-only property.
```
This utility is useful for representing assignment expressions that will fail at runtime (i.e. when attempting to reassign properties of a [frozen object](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)).

### Object.freeze

```ts
function freeze<Type>(obj: Type): Readonly<Type>;
```

## Record<Keys, Type>

Constructs an object type whose property keys are `Keys` and whose property values are `Type`. This utility can be used to map the properties of a type to another type.

### Example

```ts
type CatName = "miffy" | "boris" | "mordred";
 
interface CatInfo {
  age: number;
  breed: string;
}
 
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
 
cats.boris;
 
const cats: Record<CatName, CatInfo>
```

## Pick<Type, Keys>