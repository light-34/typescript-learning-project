export class ClassDemo {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet(message:string) {
        console.log(`${this.name} says ${message}`)
    }

    add(a: number, b: number) {
        return a + b;
    }

    processName(newProcess: string, num: number ,callback: (value: string) => void): void {
        const result = `Hello ${newProcess} and number is ${num}`;
        callback(result);
    }

    async fetchData(): Promise<string> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Data loaded successfully");
            }, 1000)
        });
    }

    describe(age?: number): string { //optional parameter
        if(age == undefined) {
            return `${this.name} has an undefined age`;
        }
        return `${this.name} has ${age} age`;
    }
}