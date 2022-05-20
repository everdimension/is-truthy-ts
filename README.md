# is-truthy-ts

A type predicate for truthy values

## Install
```sh
npm install is-truthy-ts
```

## The problem

Often you want to filter out nullish values from an array, but typescript
doesn't type the result correctly by default:

```typescript
const arrayWithNulls = [1, 2, null, 4];

const filtered = arrayWithNulls.filter(Boolean);
// ❌ The type of filtered is (number | null)[]
```

## Solution

```typescript
import { isTruthy } from 'is-truthy-ts';

const arrayWithNulls = [1, 2, null, 4];
const filtered = arrayWithNulls.filter(Boolean);
// ✅ The type of filtered is number[]
```
