	
// 1) Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances 
// of the 'Person' class and display their details.




// class Person{
//     constructor(name , age, country){
//         this.name = name;
//         this.age = age;
//         this.country = country;
//     }

//     displayDetails(){
//         console.log(`Name: ${this.name}`);
//         console.log(`Age: ${this.age}`);
//         console.log('Country: ${this.country}');
        
//     }
// }

// let person1 = new Person ('Shola' , 19 , 'Azerbaijan');
// let person2 = new Person ('Ulviyya' , 20 , 'Azerbaijan');


// console.log(" Person 1 details :");
// person1.displayDetails();

// console.log(" Person 2 details :");
// person2.displayDetails();




// 2)
// Bir class yaradirsiz ve o classin icerisinde plus, minus, multiply, divide functionlari olur.
// var result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2) resultin neticesi bu yazilisa gore 50+6-30*3/2 mentiqi ile (riyazi prinsibi unudun,vurma bolme onceliyine 
//     ehtiyac yoxdu)  39 olmalidi.


// class CustomMatch{
//     constructor (num){
//           this.num = num;
//     }

//     divide(value){
//         this.num /=value;
//         return this;
//     }

//     plus(value){
//         this.num +=value;
//         return this;
//     }

//     multiply(value){
//         this.num *=value;
//         return this;
//     }

//     minus(value){
//         this.num -=value;
//         return this;

//     }
// }


// let result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2);
// console.log(result);


