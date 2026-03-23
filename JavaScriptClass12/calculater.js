// function sum(a, b){
//     console.log(a+b);

// }
// function calculator(a,b,sumCallBack){
//     sumCallBack(a,b);
// }
// calculator(1,2,(a,b) =>{
//     console.log(a+b);
// });

// nesting
// for(let i=0;i<5;i++){
//     let str = "";
//     for(let j=0;j<5;j++){
//         str = str + j;
//     }
//     console.log(i, str);
// }

// function getData(dataId){
//     setTimeout(() =>{
//     console.log("data",dataId);
//     },2000); 
// }

function getData(dataId, getNextData){
    //2s
    setTimeout(() =>{
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}
getData(1, () =>{
    getData(2, () =>{
        getData(3, () =>{
            getData(4);
        });
    })
})