export function methodDemo(): void {

    //A method in an object
    const person = {
        fname: 'Alice',
        greet(message: string) : void {
            console.log('Hello ' + message);
        }
    };

    person.greet('Lulu');
}

