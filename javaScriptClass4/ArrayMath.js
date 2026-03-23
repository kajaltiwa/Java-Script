//push() add to end
// let foodItems = ["samosa","apple","banana","lichi"];
// foodItems.push("chips","burger","paneer");
// console.log(foodItems);


// pop() delete to end

// let foodiee = ["momo","burger","pizza","icecream","lichi"];
// console.log(foodiee);
// let deletefoodiee = foodiee.pop();
// console.log(foodiee);
// console.log("delete",deletefoodiee);

// toString() 
// let food = ["ab","bc","ca"];
// let marks=[3,5,7];
// console.log(food)
// console.log(food.toString());
// console.log(food);


//Cancat() joint to two string
// let marvelHeroes = ["thor","spiderman","ironman"];
// let dcHeroes = ["superman","batman"];
// let inHeroes = ["shaktiman"];
// let heroes = marvelHeroes.concat(dcHeroes,inHeroes);
// console.log(heroes);


//unshift() : add to start
// let here = ["a","b","c"];
// let joint = here.unshift("add");
//console.log(joint);


//shift() : delete to start
// let her = ["a","b","c"];
// let join = her.shift();
// console.log("delete",join);


//Slice() :return a piece of array
// let her = ["a","b","c","d","e"];
// console.log(her);
// console.log(her.slice(1,3));


//splice() :change original array(add,remove,replace)

// let arr = [1,2,3,4,5,6,7];
// //arr.splice(2,2,101,102);

// //add element
// arr.splice(2,0,101);

// //delete
// arr.splice(3,1);

// //Replace element
// arr.splice(3,1,101);


//let's Practice
let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
console.log(companies);
//Remove the first company
let delet = companies.shift();
console.log("delet",delet);

//Remove Uber & Add Ola in its place
 companies.splice(2,1,"Ola");
 console.log(companies)

// add amozon at the end
companies.push("Amazon");
console.log(companies)







