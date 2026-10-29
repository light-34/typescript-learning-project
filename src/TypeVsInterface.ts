export class TypeVsInterface {

    getDetailsPoint(x: number, y: number) {
        type Location = "Far" | "Near" | "Close";

        let val: Location;
        let sum = x + y;
        if(sum < 5) {
            val = 'Close';
            console.log(val);
        } else if (sum < 10) {
            val = 'Near';
            console.log(val);
        } else {
            val = 'Far';
            console.log(val);
        }

    }
}