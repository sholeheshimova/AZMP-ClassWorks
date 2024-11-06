// TASK 1.1 : Məhsulların hər birini consoleda göstərin.
let milks = [
  {
    id: 1,
    name: "Azersud",
    price: 5,
    FatPercent: 1.5,
    MadeIn: "Azerbaijan",
  },
  {
    id: 2,
    name: "Palsud",
    price: 4,
    FatPercent: 2,
    MadeIn: "Azerbaijan",
  },
  {
    id: 3,
    name: "Atena",
    price: 2,
    FatPercent: 3,
    MadeIn: "Georgia",
  },
];

// milks.forEach((element) => {
//     console.log(element);

// }
// )

// TASK 1.2 : Məhsullardan id-si 1-ə bərabər olan məhsulu qaytaran funksiya yazın.

// let found = milks.find((element) => element.id === 1);

// console.log(found);

// TASK 1.3 : FatPercent-in ədədi ortasını çıxarın. Bunu FatAverage adlı funksiya ilə edin. Funksiya həmin arrayi parametr kimi qəbul edəcək, ədədi ortanı qaytaracaq

// let sum = milks.reduce((acc, item) => acc + item.FatPercent, 0);

// let average = sum / milks.length;
// console.log(sum);
// console.log(average);

// Task 1.4 : yağlılıq faizi 3-dən yuxarı olan milk-ləri arraydə göstərin. Funksiya yazın.

// let newOne = milks.filter(milk => milk.FatPercent >= 3);
// console.log(newOne);

// Task 1.5 : Funksiya yazın array və bir number qəbul etsin. Arraydəki elementlərin price-nı bu number qədər artırsın.

// milks.map((item) => {
//   console.log(item.price + 5);
// });

// function increasePrice(arr,number){
//     arr.map((item)=>{
//         console.log(item.price +number);
//     })
// }

// increasePrice(milks,5)




// Task 1.6 : Ümumi price-ı qaytaran funksiya yazın.

// let umumiPrice = milks.reduce((sum , milk) => sum + milk.price, 0)
// console.log(umumiPrice);


// Task 1.7 : Məhsullardan id-si 2-ə bərabər olan məhsulu qaytaran funksiya yazın.

// let newID = milks.filter(milk => milk.id ===2);
// console.log(newID);


// Task 1.8 : ən baha milkin adını qaytaran funksiya yazın. Arrayi parametr kimi qəbul etsin

// function findMaxMilk(milks) {
//     let maxMilk = milks[0]
//     for (let i = 0; i < milks.length; i++) {
//        if (milks[i].price > maxMilk.price) {
//         maxMilk = milks[i]
//        }
        
//     }
//     return maxMilk.name
// }
// console.log(findMaxMilk(milks));


// Task 1.9 : ən baha və ən ucuz arasındakı fərqi qaytaran funksiya yazın. Funksiya yazın.

// function findMaxMilk(milks) {
//     let maxMilk = milks[0];
//     let minMilk = milks[0];
//     for (let i = 0; i < milks.length; i++) {
//        if (milks[i].price > maxMilk.price) {
//         maxMilk = milks[i]
//        }
//      if (milks[i].price < minMilk.price ) {
//         minMilk = milks[i]
//      }
//     }
//    return {
//     bahaliSud : maxMilk.name,
//     ucuzSud : minMilk.name,
//     muqayise :maxMilk.price > minMilk.price
//    }
    
// }
// console.log(findMaxMilk(milks));



// Task 1.10: Məhsullar içərisində Azərbaycan istehsalı olan məhsul varmı?(true or false)

// let istehsal = milks.some(milk => milk.MadeIn === "Azerbaijan");

// console.log(istehsal);

