function sum(numArr: number[]): number {
    let summary: number = 0;
    for (let index = 0; index < numArr.length; index++) {
        const element: number = numArr[index];
        summary += element;
    }
    return summary;
}

let array: number[] = [7, 5, 4, 7];
console.log(sum(array));
