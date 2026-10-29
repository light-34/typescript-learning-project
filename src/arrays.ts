export function arrayDemo(): void {
    const numbers: number[] = [1,2,3,4];
    
    for(const number of numbers) {
        if(number % 2 == 0) {
            console.log("Even : " + number)
        } else {
            console.log("Odd : " + number)
        }
    }

    const names: string[] = ["Alice", "Bob", "Lila", "Zula", "Cece"];

    names.forEach(nm => { 
        if(nm.startsWith('A')) {
            console.log("Names start with 'A' : " + nm )
        }
    });
}