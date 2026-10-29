
const name: string = "Alice";
let age: number = 25;
const isStudent: boolean = true;
let aNull: null = null;
let anUndefined: undefined = undefined;
let nickname: string | null = '';

//Array Type
const favoriteNumbers: number[] = [10, 20, 30];

//Object Type
const person: {
  name: string;
  age: number;
} = {
  name: "Bob",
  age: 30,
};

export function showVariables(): void {
    const user = {name: 'Daniel', lname: 'Dingo', age: 26}
    nickname = 'Pivaz';

  console.log("Name:", name);
  console.log("Age:", age);
  console.log("Is student:", isStudent);
  console.log("Favorite numbers:", favoriteNumbers);
  console.log("Person:", person);
  console.log('Undefined : ' + anUndefined);
  console.log('Null : ' + aNull);
  console.log('Nickname : ' + (isBlank(nickname) ? nickname : ''));
  console.log('User: ' + user.name.toUpperCase() + ", Last Name: " + user.lname.toLowerCase() +" and Age: " + user.age);
}

function isBlank(text: string): boolean {
    return text == null || text.trim() === '';
}
