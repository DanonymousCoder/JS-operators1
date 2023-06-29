const person = {
	first_name: "Pankaj",
	last_name: "Singh",
	Age: 20,
	About: "Web Developer and Competitive Programmer"
};

console.log(person);

// It is possible
person.first_name = "Aryan";
person.last_name = "Yadav";
person.Age = 22;
person.About = "Commerce undergraduate";

console.log(person);

// it is not possible
// const person={
// "first_name":"Aryan",
// "last_name":"Yadav",
// "Age":22,
// "About":"Commerce undergraduate"
// }
var test = 12
function foo(){
	console.log(test);
}
foo();
var test1 = 12,
	test2= 14,
	test3 = 16
function foo(){
	console.log(test1, test2, test3);
}
foo();
var test = 12;
function foo(){
	var test = 100;
	console.log(test);
}
foo();
console.log(test);
