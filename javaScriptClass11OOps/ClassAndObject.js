// const employee = {
//     calcTax1() {
//         console.log("tax rate is 10%");
//     },
//     calctax2 : function() {
//         console.log("tax rate is 10%");
//     }
    
// };

class Toyotacar {
    constructor() {
        console.log("creating new object");
    }
    start() {
        console.log("start");
    }
    end() {
        console.log("end");
    }
    setBrand(brand){
        this.brand = brand;
    }
}
let fortuner = new Toyotacar();
fortuner.setBrand("fortuner");
let lexus = new Toyotacar();
lexus.setBrand("lexus");