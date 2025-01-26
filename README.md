# TypeScript Type Guard Bug

This repository demonstrates a common error in TypeScript type guards where checks for `null` might miss `undefined`, causing runtime errors.  The `greet` function attempts to handle null input, but fails when passed `undefined`.

## Bug Report

The `bug.ts` file contains the faulty code.  The `undefined` case is not correctly handled by the type guard, resulting in a runtime error.

## Solution

The `bugSolution.ts` file provides a corrected version of the `greet` function. The solution checks for both `null` and `undefined` using the nullish coalescing operator (`??`).

## How to reproduce:

1. Clone the repository.
2. Navigate to the project directory.
3. Compile and run the `bug.ts` file using a TypeScript compiler (tsc) and node.
4. Observe the runtime error when calling `greet` with `undefined` as an argument.
5. Repeat steps 3 and 4 with `bugSolution.ts` to see the correct behavior.