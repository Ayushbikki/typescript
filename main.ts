export {} // typescript treat this file as a module instead as a script
let message= 'hello world change2'
console.log(message)

let x=10;
const y= 20;
let sum;
const title='learn ts'

let isBeginner : boolean = true;
let total : number= 0
let hname='bikki'
let name: string = 'ayush'
//  ``  name=20
//name= 'bikkii' 
//name=20 //gives error is not assignable
//name.   suggestion for only string type


let sentence: string = `My name is ${name} && I am beginner in ts `
console.log(sentence)
//
//subtype   null undefined
let n: null = null;
let u: undefined = undefined;

//can assign subtype in main type
 //let isOld :boolean = null;
 //let myName : string = undefined;

/// ways to define array in typescript
 let list1: number[]= [1,2,3]
 let list2: Array<number> =[1,2,3]
 let  person1: [string,number]= ['ayush',23]
 // throw  error as per declare should follow let person2 : [string,number]=['23','aysu']
 
 enum Color {Red,Green,Blue};

 let c: Color = Color.Green
 console.log(c) //1

 enum Color2 {Red=5,Green,Blue};

 let c2: Color2 = Color2.Green   //6
 console.log(c2) //1


 //any type
 let random:any =10
 random=true;
 random='ayush'

 let myVariable: any =10;
 console.log(myVariable.name)
 myVariable() //it will not throw error in watchMode but as there is no function of myVariable it will error as typeError
 myVariable.toUpperCase()

 //unknown to tackle above issue
 let myVariable1: unknown =10;
 //console.log(myVariable1.name) //not assignable error
//myVariable1.toUpperCase() //not assignable error
//to resolve error
(myVariable1 as string).toLowerCase()  //not it will not throw not assignable error

// function of parameter type any and return string
function hasName(obj: any): obj is {name: string}{
    return !! obj &&
    typeof obj=== "object" &&
    "name" in obj
}
if (hasName(myVariable1)){
    console.log(myVariable1.name)
}

//function
//default

function add(num1: number, num2: number = 10): number {
    if (num2)
      return num1 + num2;
    else
      return num1;
  }
  
  add(5, 10);
  add(5);
  //optional
  function add1(num1: number, num2?: number ): number {
    if (num2)
      return num1 + num2;
    else
      return num1;
  }
  
  add1(5)

  //interface
  //Interfaces define properties, methods, and events, which are the members of the interface. Interfaces contain only the declaration of the members. like object

//An interface is a syntactical contract that an entity should conform to. In other words, an interface defines the syntax that any entity must adhere to.

interface Person {
    firstName: string;
    lastName?: string;
  }
  
  function fullName(person: Person) {
    console.log(person.firstName + ' ' + person.lastName);
  }
  
  let p = {
    firstName: 'Bruce'
  };
  fullName(p);


  //Classes are the fundamental entities which are used to create reusable components. It is a group of objects which have common properties. In terms of OOPs, a class is a template or blueprint for creating objects. It is a logical entity.
 
  class Employee {
     public employeeName: string;
  // same as  employeeName: string;
 // private  employeeName: string;
   //protected  employeeName: string;
    constructor(name: string) {
      this.employeeName = name;
    }
  
    greet() {
      console.log('Good morning ' + this.employeeName);  
    }
  }
  
  let emp1 = new Employee('Vishwas');
  console.log(emp1.employeeName);  //if employee is private it cannot be accesse d outside of class and also not ven accessed in derived class
  emp1.greet();


  class Manager extends Employee{
    constructor(managerName: string) {
      super(managerName);
    }
    delegateWork() {
      console.log('Manager delgating tasks' + this.employeeName);  
      //if employee name is protected it can be accessed in derived class
    }
  }
  
  let m1 = new Manager('Bruce');
  m1.delegateWork();
  m1.greet();  // has  access of parent  class method
  console.log(m1.employeeName);


  //access modifier
  // access modifier is basciall set of keyword that set accessibility of properties and methods of a class
  //public,protected and private
  //by default each class member is public
