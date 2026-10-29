export function objectsDemo() : void {
    type Person = {fname: string, age: number, city: string | null};

    const people: Person[] = [{fname: 'Ali', age: 15, city: 'Ottawa'},
        {fname: 'Zulu', age: 25, city: null},
        {fname: 'Olibe', age: 13, city: 'Bramton'}
    ]

    for(const person of people) {
        console.log(person.fname + " " + person.age + " " + person.city);
    }

    const person: Person = {fname: 'Ali', age: 15, city: 'Ottawa'};

    //Use for...in when you want keys:
    //Important: for...in works on object keys, not array values.
    for(const key in person) {
        console.log(key, person[key as keyof Person]);
    }

    const animal = {family: 'Felidae', commonName: 'Cat', loc: 'Anywhere in the World'};
    console.log("Family : " + animal.family)
    console.log("Common Name : " + animal.commonName)
    console.log("Location : " + animal.loc)
}