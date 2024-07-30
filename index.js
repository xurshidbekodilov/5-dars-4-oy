//N1  Berilgan massivdagi barcha sonlarni ikki barobarga oshiring va natijani yangi massivga saqlang 
/*
let arr = [1 , 2, 3, 4, 5];
let res = [];
for (const iterator of arr) {
    res.push(iterator*2);
}
console.log(res);
*/

//N2  Berilgan massivni teskari qilib, yangi massivga saqlang.
/*let arr = [1 , 2, 3, 4, 5,];
let res = [];
for (const iterator of arr) {
    res.unshift(iterator);
}
console.log(res);
*/

//N3 Berilgan massivdan manfiy sonlarni olib tashlang va yangi massivga saqlang
/*
let arr = [1 , 2, -3, 4, 5, -5, -7];
let res = [];
for (const iterator of arr){
    if(iterator>0){
        res.push(iterator);
    }
}
console.log(res);
*/

//N4 Berilgan massivdagi barcha sonlarning yig‘indisini hisoblang
/*
let arr = [1 , 2, 3, 4, 5,];
let res = 0;
for (const iterator of arr){
    res+=iterator;
}
console.log(res);
*/

//N5 Berilgan massivning oxiriga yangi element qo‘shing
/*
let fruits = ["apple", "banana", "mango"];
fruits.push("orange");
console.log(fruits);
*/

//N6 Berilgan massivdan oxirgi elementni olib tashlang
/*
let fruits = ["apple", "banana", "mango", "orange"];
fruits.pop();
console.log(fruits);
*/

//N7 Berilgan massivdan boshidagi elementni olib tashlang
/*
let fruits = ["apple", "banana", "mango", "orange"];
fruits.shift();
console.log(fruits);
*/

//N8  Berilgan massivning boshiga yangi element qo‘shing
/*
let fruits = ["banana", "mango", "orange"];
fruits.unshift("apple");
console.log(fruits);
*/

//N9 Berilgan massivda qidirilayotgan elementning indeksini toping
/*
let fruits = ["apple", "banana", "mango", "orange"];
let search = "mango";
let index = fruits.indexOf(search);
console.log(index);
*/

//N10 Berilgan massivdagi barcha elementlarni boshqa yangi massivga ko‘chiring
/*
let fruits = ["apple", "banana", "mango", "orange"];
let new_fruits=[];
for (const iterator of fruits) {
    new_fruits.push(iterator);
}
console.log(new_fruits);
*/

//N11 Berilgan massivdagi eng katta elementni toping
/*
let arr = [1, 2, 5, 8, 3];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i];
    }
}
console.log(max);
*/

//N12  Berilgan massivdagi eng kichik elementni toping
/*
let arr = [1, 2, 5, 8, 3];
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
        min = arr[i];
    }
}
console.log(min);
*/

//N13  Berilgan massivdagi juft sonlarni sanang.
/*
let arr = [1, 2, 5, 8, 3, 9, 4, 7, 10];
let counter=0;
for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){
        counter+=1;
    }
}
console.log(counter);
*/

//N14 Berilgan massivdagi toq sonlarni sanang
/*
let arr = [1, 2, 5, 8, 3, 9, 4, 7, 10];
let counter=0;
for(let i=0; i<arr.length; i++){
    if(arr[i]%2==1){
        counter+=1;
    }
}
console.log(counter);
*/

//N15  Berilgan massivdan barcha nollarni olib tashlang va yangi massivga saqlang.
/*
let arr =[1, 2, 0, 50, 4, 9, 0];
let new_arr = [];
for(let i=0; i<arr.length; i++){
    if(arr[i]!=0){
        new_arr.push(arr[i]);
    }
}
console.log(new_arr);
*/

//N16 Berilgan massivdagi har bir elementni ikki marta takrorlab yangi massiv yarating
/*
let arr = [1, 2, 5, 8, 3, 9, 4, 7, 10];
let new_arr = [];
for (const iterator of arr){
    new_arr.push(iterator);
    new_arr.push(iterator);
}
console.log(new_arr);
*/

//N17 Berilgan massivni teng ikki qismga ajrating va ikkita yangi massivga saqlang(xato savol)

//N18 Berilgan massivdagi barcha sonlarning ko‘paytmasini hisoblang
/*
let arr = [1, 2, 5, 8, 3, 9, 4, 7, 10];
let res = 1;
for (const iterator of arr){
    res*=iterator;
}
console.log(res);
*/

//N19 Berilgan massivdagi faqat toq indeksli elementlarni toping va yangi massivga saqlang.
/*
let arr = [1, 2, 5, 8, 3, 9, 4, 7, 10];
let new_arr = [];
for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 1) {
        new_arr.push(arr[i]);
    }
}
console.log(new_arr);
*/

//N20 Berilgan massivdagi faqat juft indeksli elementlarni toping va yangi massivga saqlang
/*
let arr = [1, 2, 5, 8, 3, 9, 4, 7, 10];
let new_arr = [];
for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
        new_arr.push(arr[i]);
    }
}
console.log(new_arr);
*/

//N21 Berilgan massivdagi faqat string (matn) turidagi elementlarni toping va yangi massivga saqlang.
/*
let arr = ['salom', 8, 3,true, 7, null, 'hayr'];
let new_arr = [];
for (const iterator of arr) {
    if ( typeof iterator == 'string'){
        new_arr.push(iterator);
    }
}
*/

//N22 Berilgan massivdagi faqat number (son) turidagi elementlarni toping va yangi massivga saqlang
/*
let arr = ['salom', 8, 3,true, 7, null, 'hayr'];
let new_arr = [];
for (const iterator of arr) {
    if ( typeof iterator == 'number'){
        new_arr.push(iterator);
    }
}
*/

//N23 Berilgan massivning uzunligini toping

let arr = ['salom', 8, 3,true, 7, null, 'hayr'];
console.log(arr.length);