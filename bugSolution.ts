function greet(name: string | null | undefined): string {
  return `Hello, ${name ?? "world"}!`;
}

console.log(greet(null)); // Output: Hello, world!
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet(undefined)); // Output: Hello, world!