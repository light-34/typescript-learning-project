export class CallBackVsPromise {
    //Callback = “When this task is done, call this function”
    //Promise = “This task will finish sometime, and I can handle success or failure later”

    fetchDataWithCallback(callback: (data: string) => void): void {
        setTimeout(() => {
            callback("User data loaded");
        }, 1000)
    }

    // Callbacks are 
    // Good for:
    // simple async tasks
    // event handlers
    // one-time actions
    // Problem:
    // if you have many async steps, callbacks can become messy


    //Here is Promise example

    fetchData(): Promise<string> {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve("User data loaded"), 1000);
        });
    }
    //How to call this method?

    // cbvspr.fetchData()
    //     .then((result) => { console.log(result) })
    //     .catch ((err) => { console.log(err) });

    // What happens:
    // fetchData() returns a Promise
    // when it finishes successfully, .then(...) runs
    // if there is an error, .catch(...) runs
    // This is cleaner and more readable.

    getNumberPromise(): Promise<number> {
        return new Promise((resolve) => {
            setTimeout(() => resolve(45), 1000);
        });
    }

    // Why Promises are preferred
    // Promises are better because:
    // easier to read
    // easier to chain
    // better error handling
    // works well with async/await

    async loadNumber(): Promise<void> {
        const data = await this.getNumberPromise();
        console.log("Loaded number: " + data);
    }
}