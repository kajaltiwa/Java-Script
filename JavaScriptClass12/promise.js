// let promise = new Promise((resolve,reject) =>{
//     console.log("I am Promise");
//     //resolve("success");
//     reject("some error occurred");
// });


function getData(dataId, getNextData){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
           console.log("data", dataId);
           resolve("success");
           //reject("error");
            if(getNextData){
                getNextData();
            }
        },5000);
    });
}

//callBack 


// promise.then -> fullfiled
//promise.catch -> error
const getPromise = () =>{
    return new Promise((resolve, reject) =>{
        console.log("I am a padding");
       // resolve("success");
       reject("network error");
    });
};

let promise = getPromise();
promise.then((res) =>{
    console.log("promise fulfilled",res);
});

promise.catch((err) =>{
    console.log("rejected",err);
});