"use strict";
exports.__esModule = true;
var message = 'hello world change2';
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = 'learn ts';
var isBeginner = true;
var total = 0;
var hname = 'bikki';
var name = 'ayush';
//  ``  name=20
//name= 'bikkii' 
//name=20 //gives error is not assignable
//name.   suggestion for only string type
var sentence = "My name is ".concat(name, " && I am beginner in ts ");
console.log(sentence);
//
//subtype   null undefined
var n = null;
var u = undefined;
//can assign subtype in main type
//let isOld :boolean = null;
//let myName : string = undefined;
/// ways to define array in typescript
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['ayush', 23];
// throw  error as per declare should follow let person2 : [string,number]=['23','aysu']
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c); //1
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 5] = "Red";
    Color2[Color2["Green"] = 6] = "Green";
    Color2[Color2["Blue"] = 7] = "Blue";
})(Color2 || (Color2 = {}));
;
var c2 = Color2.Green; //6
console.log(c2); //1
//any type
var random = 10;
random = true;
random = 'ayush';
var myVariable = 10;
console.log(myVariable.name);
myVariable(); //it will not throw error in watchMode but as there is no function of myVariable it will error as typeError
myVariable.toUpperCase();
//unknown to tackle above issue
var myVariable1 = 10;
//console.log(myVariable1.name) //not assignable error
//myVariable1.toUpperCase() //not assignable error
//to resolve error
myVariable1.toLowerCase(); //not it will not throw not assignable error
// function of parameter type any and return string
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable1)) {
    console.log(myVariable1.name);
}
