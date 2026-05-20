function asyncFun(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log("some detail...");
            resolve("success");
        },4000);
    });
}

function asyncFun2(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log("some detail 1..");
            resolve("success");
        },4000);
    });
}
// console.log("fatching data1....");
// let p1 = asyncFun();
// p1.then((res) =>{
//    console.log(res);
//     console.log("fatching data2....");
//     let p2 = asyncFun2();
//     p2.then((res) =>{
//         console.log(res);
//     })
// });
//easy from
console.log("fatching data1....");
 asyncFun().then((res) =>{
    console.log("fatching data2....");
    asyncFun2().then((res) =>{   
    });
});



// console.log("fatching data2....");
// let p2 = asyncFun2();
// p2.then((res) =>{
//     console.log(res);
// });
