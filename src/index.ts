import { showVariables } from "./variables";
import { arrayDemo } from "./arrays";
import { objectsDemo } from "./objects";
import { loopsDemo } from "./loops";
import { methodDemo } from "./methods";
import { ClassDemo } from "./ClassDemo";
import { CallBackVsPromise } from "./CallBackVsPromise";
import { TypeVsInterface } from "./TypeVsInterface";


//showVariables();
//arrayDemo();
//objectsDemo();
//loopsDemo();
//methodDemo();
// const classDemo = new ClassDemo('Alice');
// classDemo.greet('Hello All');
// console.log(classDemo.add(10, 5))
// classDemo.processName("New Process", 25, (message) => {
//     console.log(message);
// });

// async function main() {
//     const result = await classDemo.fetchData();
//     console.log(result);
// };

//main();

//console.log(classDemo.describe(26));
//console.log(classDemo.describe());

// const cbvspr = new CallBackVsPromise();

// function writeThis():void {
//     console.log("Write This ....")
// }

// cbvspr.fetchDataWithCallback((result) => {
//     console.log(result);
// });

// cbvspr.fetchDataWithCallback(writeThis);

// What happens:
// fetchData() returns a Promise
// when it finishes successfully, .then(...) runs
// if there is an error, .catch(...) runs
// This is cleaner and more readable.
// cbvspr.fetchData()
//     .then((result) => { console.log(result) })
//     .catch((err) => { console.log(err) });

//cbvspr.loadNumber();

const typeInter = new TypeVsInterface();

typeInter.getDetailsPoint(3, 5);
