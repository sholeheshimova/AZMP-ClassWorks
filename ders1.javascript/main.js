// 1 let age = +prompt("enter your age");


// if( age <=65 ){
//   console.log("hele cavansan")
// }else  {
//     console.log ("dusursen")
// }

// 2 let number = +prompt("enter number");

// if ( number == 4){
//     console.log ("beraber terefli ucbucaq")
// }else if ( number == 5){
//     console.log ("duzbucaqli ucbucaq")
// }else {
//   console.log ("berebaryanli ucbucaq")
// }

//  3 let number = +prompt("enter number");

// if (number >=0){
//     if(number % 2 !==0){
//         console.log("bu tek ededdir")
//     }else{
//         console.log("bu cut ededdir")
//     }
// }else{
//     console.log("number is not defined")
// }

// 4 let number = +prompt("enter new number")
//  switch ( number) {
//     case 1:
//         alert("January")
//         break;
//         case 2:
//             alert("February")
//         break;
//         case 3:
//             alert("March")
//         break;
//         case 4:
//             alert("April")
//         break;
//         case 5:
//             alert("May")
//         break;
//         case 6:
//             alert("June")
//         break;
//         case 7:
//             alert("July")
//         break;
//         case 8:
//             alert("August")
//         break;
//         case 9:
//             alert("September")
//         break;
//         case 10:
//             alert("October")
//         break;
//         case 11:
//             alert("November")
//         break;
//         case 12:
//             alert("December4")
//         break;
    
       
 
//     default:
//         alert("its not month")
//         break;
//  }


// 5 let number = +prompt ("enter positive number")

// if (number >=0){
//     if (number % 15 ===0){
//         console.log("it is right")

        
//     }else{
//         console.log("it is false")
//     }
// }else{
//    console.log("it is not positive number")
// }



// 6 let number = +prompt ("enter ur number")

// if (number >= 0){
//     if(number % 2 ===0){
//         console.log("bu cut ededdir");
        
//     }else{
//         console.log("bu tek ededdir");
        
//     }
// }else{
//     console.log("bu ededmusbet eded deyil");
    
// }


// 8 let eded = +prompt("ededi daxil   edin");

// if (1<eded && eded<100 ){
//     console.log("eded bu araliqdadi");
    
// }else{
//     console.log("eded bu araliqda deyil");
    
// }


//  9 let eded1= +prompt ("eded1 daxil edin");
// let eded2= +prompt ("eded2 daxil edin")
// let eded3= +prompt ("eded3 daxil edin")

// if(eded1 >eded2  && eded1>eded3){
//   console.log("en eded1 dir");
  
//   }

// else if(eded2 >eded1 && eded2 > eded3){
//     console.log("en boyuuk eded2 dir");
    
// }
// else if( eded3 >eded1 && eded3 > eded2){
//     console.log("en boyuk eded3 dur");
    
// }


let bal = +prompt("bali daxil edin");

if( bal>90 ){
    console.log("A");
    
}else if(bal>80 && bal<89){
    console.log("B");
    
}else if(bal>70 && bal<79){
    console.log("C");

}else if(bal>60 && bal<69){
    console.log("D");
}else if(bal>50 && bal<59){
    console.log("E");
}else if(bal>40 && bal<49){
    console.log("F");
}else{
    console.log("kesildi");
    
}