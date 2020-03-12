/* ES5 V1 */
function createPerson(name,age,height){
	
	var createPerson={};
	
	
	
	createPerson.name=name;
	createPerson.age=age;
	createPerson.height=height;
	
	
	return createPerson;
	
}


var p=createPerson("Ali",20,170);


console.log(p);



/* ES5 V2 */


function Person(name,age,height){
	
	this.name=name;
	this.age=age;
	this.height=height;
	
	this.sayName=function(){
		
		return "My name is : " + this.name;
	}
	
}

var mohammad=new Person("Mohammad",25,160);
var Ali=new Person("Ali",20,170);
var Sara=new Person("Sara",35,180);
var Omid=new Person("Omid",16,180);

console.log(mohammad);
console.log(Ali);
console.log(Sara);
console.log(Omid);


function User(name,age,height,email,username,password){
	
	Person.call(this,name,age,height);
	
	this.email=email;
	this.username=username;
	this.password=password;
	
}



var azita=new User("Azita",32,180,"azita@gmail.com","azita","12156#$&*656azi^7");


console.log(azita);