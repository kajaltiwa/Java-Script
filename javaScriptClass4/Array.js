// let nam = ["kajal",73.3,"amita",70, "smriti",75];
// // for(let i=0;i<nam.length;i++)
// // console.log("Name : ",nam[i]);

// for(let name of nam){
//     console.log(name);
// }

// let cities = ["delhi","pune","mumbai","hyderabad","uttarpadesh"];
// for(let city of cities){
//     console.log(city.toUpperCase());
// }

// let marks = [85,86,23,65,84];
// let sum = 0;
// for(let val of marks){
//     sum += val;
// }
// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);


// items of number of 10%
 let items = [250,645,300,900,50];
// let i= 0;
// for(let val of items){
//    //console.log(`value at index ${i} = ${val}`);
//    let offer = val/10;
//    items[i] = items[i] - offer;
//    console.log(`value after offer = ${items[i]}`);
//    i++;
// }

for(let i=0;i<items.length;i++){
    let offer = items[i]/10;
    items[i] -= offer;
}
console.log(items);

