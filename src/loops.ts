export function loopsDemo(): void {

    //classic loop
    for (let i: number = 0; i < 3; i++) {
        console.log('Loop #' + (i + 1));
    }

    let count = 1;
    while (count < 4) {
        console.log('While Loop #' + count);
        count++;
    }

    let num = 5;
    do {
        console.log('Do-While Loop #' + num);
        num--;
    } while (num > 0)

    const fruits: string[] = ["apple", "banana", "mango"];
    console.log('\n**** for...of ****');
    for (const fruit of fruits) {
        console.log('Fruit : ' + fruit);
    }

    //This is the best for objects
    console.log('\n**** for...in ****');
    const person = {
        name: "Alice",
        age: 25,
        city: "Istanbul",
    };

    for (const key in person) {
        console.log(key, person[key as keyof typeof person]); //returns keys
    }

    console.log('\n**** forEach ****');
    const numbers: number[] = [10, 20, 30];
    numbers.forEach((num, index) => {
        console.log('Index: ' + index + ' - Value: ' + num);
    });


    for (let i = 0; i < 10; i++) {
        console.log("Numbers : " + i);
        if (i == 5) {
            console.log("Terminal number has been reached");
            break;
        }
    }

    console.log('\n**** Switch ****');
    const dayNum: number = 2;
    switch (dayNum) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        default:
            console.log("One of the other day");
    }


}