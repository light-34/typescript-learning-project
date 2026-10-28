export const name: string = "Alice";
export let age: number = 25;
export const isStudent: boolean = true;

export const favoriteNumbers: number[] = [10, 20, 30];

export const person: {
  name: string;
  age: number;
} = {
  name: "Bob",
  age: 30,
};

export function showVariables(): void {
  console.log("Name:", name);
  console.log("Age:", age);
  console.log("Is student:", isStudent);
  console.log("Favorite numbers:", favoriteNumbers);
  console.log("Person:", person);
}
