// Bir funksiya yazın. İki parametr qəbul etsin. Biri cümlə digəri isə o cümlə içərisindəki söz olsun. Sizin funksiyanız həmin sözün indeksini tapsın

// function findWordIndex(sentence ,word) {
//     let words = sentence.split(" ");
//     for (let i = 0; i < sentence.length; i++) {
//       if ( words[i] === word) {
//         return i;
//       }
//     }
// }
// console.log( findWordIndex( "salam azmp 202 qrupu","qrupu"));



// Daxil edilən cümlədə ən uzun sözü tapın.


// function enUzunSoz(cumle) {
//     let soz = cumle.split(" ");
//     let enUzunSoz = "";

//     for (let i = 0; i < soz.length; i++) {
//        if (soz[i].length > enUzunSoz.length) {
//         enUzunSoz = soz[i];
        
//     }
   
// }
// return enUzunSoz;
// }
// console.log(enUzunSoz("hi everyone"));


// Bir funksiya yazın,string şəklində 2 parametr qəbul etsin.Funksiyanız bu sözlərin anagram olub-olmadığını tapmalıdır. 
// Anagram sözlər yerləri fərqli olsa da eyni hərflərdən təşkil olunmuş sözlərdir.



// function Str(soz1 , soz2) {
//     let herf1 = soz1.split(" ").length;
//     let herf2 = soz2.split(" ").length;
//     if (herf1 === herf2) {
//         return true;
//     }else {
//         return false;
//     }
// }
// console.log(Str("listen" , "silent"));


// # Verilən bir cümlənin bütün hərflərini böyük hərflərə çevirən bir funksiya yazın.convertToUpper("Hello World");
// Nəticə: "HELLO WORLD"


// function convertToUpper(cumle) {
//     return cumle.toUpperCase();
// }

// console.log(convertToUpper("hello world"));


// # Verilən bir cümlədəki sözləri tərs sıraya düzmək üçün funksiya yazın.



// function Str(cumle) {
//     return cumle.split(" ").reverse(" ");
// }
// console.log(Str("hi my name is shola"));




// arrayi azdan coxa duzun


// let arr = [12,3,8,23,9,22,1];

// arr.sort((a,b) => a-b);
// console.log(arr);
