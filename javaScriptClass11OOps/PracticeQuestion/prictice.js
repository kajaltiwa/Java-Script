let DATA = "secret information";

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("data = ",DATA);
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA="some new value";
    }
}
let student1 = new User("kajal", "kajal@email.com");
let student2 = new User("raha","raha@email.com")

let teacher1 = new User("brijesh","brijesh@email.com");
let teacher2 = new User("harshit","harshit@email.com");
let admin1 = new User("admin","admin@email.com");
let admin2 = new User("admin2","admin2@email.com")

