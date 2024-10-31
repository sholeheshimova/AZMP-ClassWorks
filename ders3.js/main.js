// let arr = [5 , 6, 9, 11, 8, 14, 22];
// let enboyukcuteded = Math.max(...arr)
// console.log(enboyukcuteded);






// let arr = [5 , 6, 9, 11, 8, 14, 22, 39];

// let enboyuktek = 0;

// for (let i = 0; i < arr.length; i++) {
//    if (arr[i] % 2 == 1) {
//       if (enboyuktek === 0 || arr[i] > enboyuktek){
//         enboyuktek = arr[i]
//       }
//    }
    
// }

// console.log("en boyuk tek eded:" + enboyuktek);






// let arr = [5 , 6, 9, 11, 8, 14, 22, 39];

// let enboyuk  = Math.max(...arr);
// let enkicik = Math.min(...arr);

// let sum = enboyuk+enkicik;

// let hasil = enboyuk*enkicik;
// if(hasil>sum){
//     console.log("hasil boyukdur");
    
// }else{
//     console.log("cem boyukdur");
    
// }





// let num = 658;

//  let sum = 0;
 
//  while (num > 0) {
//     sum+= num % 10;
//     num = Math.floor(num / 10);
//  }

//  console.log("Reqemlerin cemi:" + sum);
 





// let arr = [5 , 6, 9, 11, 8, 14, 22, 39];

// let enboyuk = Math.max(...arr)
// let enkicik = Math.min(...arr)

// arr[enboyuk] = arr[enkicik]

// console.log(arr);






// let people = [
//     { name: "Aysel", age: 25, city: "Bakı" },
//     { name: "Rəşad", age: 30, city: "Gəncə" },
//     { name: "Leyla", age: 18, city: "Bakı" },
//     { name: "Kamal", age: 40, city: "Sumqayıt" }
// ];
// for (let index = 0; index < people.length; index++) {
//     if (people[index].city =="Bakı" && people[index].age > 20) {
//         console.log(people[index].name);
        
//     }    
// }






// let array =[-10,12,-23,40,60,73,-6,-20];

// let positive = 0;
// let negative = 0;

// for (let i = 0; i < array.length; i++) {
//     if (array[i] < 0) {
//         negative++;
//     }else if (array[i] > 0) {
//         positive++;
//     }
    
// }

// console.log("Positiv ededler:"  + positive);
// console.log("Negative ededler:" + negative);






// let array = [-10,12,-23,40,60,73,-6,-20];

// let menfihasil = 1;
// let musbethasil = 1;


// for (let i = 0; i < array.length; i++) {
//     if (array[i] < 0) {
//         menfihasil *= array[i]
//     }else if(array[i] > 0){
//         musbethasil *= array[i]
//     }
    
// }
// let muqayise = musbethasil > menfihasil

// console.log("Musbet ededlerin hasili:" +musbethasil);
// console.log("Menfi ededlerin hasili:" +menfihasil);
// console.log("Muqayise:" + muqayise);





// let array = [12,54,23,43,59]
// let reserved =[];

// for (let index = array.length-1; index >=0; index--) {
//     reserved.push(array[index])
    
// }
// console.log(reserved);
