// for (let i = 0; i < 101; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }


// let count = 0;

// for (let i = 0; i < 100; i++) {
//     if (i %2 ==1) {
//         count++
//     }
// }
// console.log(count);


// let sum = 0;

// for (let i = 0; i < 100; i++) {
//     if (i %5 ==0) {
//         sum+=i
//     }
    
// }
// console.log(sum);

// clastask1
// let arr =[12,14,35,56,68,93];
// sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
    
// }
// console.log(sum);



// clastask2
// let arr =[12,14,35,56,68,93];

// for (let i = 0; i < arr.length; i++) {
//     if(i%2==1){
//         console.log(arr[i]);
        
//     }
// }


// clastask3
// let arr =[12,14,35,56,68,93];
// sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     if(i%2==0) 
//       sum +=arr[i]  
    
    
// }

// console.log(sum)





// clastask4

// let arr =[12,14,35,56,68,93];
// let max = 0;

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]> max){
//         max = arr[i]
//     }

// }
// console.log(max);





// clastask5

// let arr =[12,14,35,56,68,93];
//  let max = arr[0];
//  let min = arr[0];

//  for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > max  ){
//            max = arr[i]
           
//     }
//     else if(arr[i] < min){
//         min = arr[i]
//     }
    
    
//  }
//  console.log(max - min);
 



// let arr =[12,14,35,56,68,93];
// let point = 25;

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]==point){
//         console.log("bu eded var");
//         break;
        
//     }
    
// }



// let number = +prompt("ededi daxil edin");
// let factorial = 1;

// for (let i = 1; i <= number; i++) {
//     factorial*=i;
    
// }
// console.log(factorial);



// let str = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, reprehenderit!"
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//     if (str[i]=="l") {
//        count++
        
//     }
    
// }
// console.log("count of l:" , count);



// const countries = ["azerbaijan","norvey","albania","america"];

// for (let  i = 0;  i < countries.length;  i++) {
//    if(countries[i][0]==="a"){
//     console.log(countries[i]);
    
//    }
    
// }


let scores =  [70, 85, 90, 88, 92];
sum = 0;

for (let i = 0; i < scores.length; i++) {
   sum+=scores[i] / scores.length
    
}
console.log(sum);
