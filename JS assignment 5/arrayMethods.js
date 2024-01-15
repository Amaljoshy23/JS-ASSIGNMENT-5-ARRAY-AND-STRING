
const array1 = ['12','23','32','44','52','64','74'];
const array2 = ['apple','orange','grape','pineapple']
const array3 = ['amal','joshy','jjre','mohanlal']

// 1.concat

let newArray= array1.concat(array2,array3);
console.log(newArray);

// 2.every


let check= array1.every(function(val){
    if(val>0){
        return true;
    }
})
console.log(check);

// 3.fill
let g = array2.fill('ronaldo');
console.log(g);

//4.find
const checkNum=(num)=>{
    return num>=13
}
let z=array1.find(checkNum)
console.log(z);

// 5.findindex
const arr2= (val)=>{
    return val<9;
}
let findex= array1.findIndex(arr2);
console.log(findex);

// 6.flat
const myArr = [1, 2, ['amal','joshy'], 8];
const newArr = myArr.flat(2);
console.log(myArr)

// 7.for each
array2.forEach((fruits,index)=>{
    console.log(fruits,":",index);
})

// 8.includes
let info= array2.includes('ronaldo');
console.log(info);
let inf= array2.includes('amal');
console.log(inf);

// 9 indexOf
let indexOf_arr = [ "Orange", "Apple", "Mango"];

console.log(indexOf_arr.indexOf("Mango"));

console.log(indexOf_arr.indexOf("Orange"));

console.log(indexOf_arr.indexOf("apple"));

console.log("");

// 10.join
let d= array1.join('+');
console.log(d);

// 11 lastindexOf

let inde= array1.lastIndexOf(3);
console.log(inde);

// 12 pop

array1.pop();
array1.pop();
console.log(array2);

// 13 push

array3.push('12345');
console.log(array3);

array2.push('cherry');
console.log(array3);

array1.push('23243');
console.log(array2)

// 14 reverse

let arr= array2.reverse();
console.log(arr);

array3.reverse();
console.log(array3);

// 15 unshift

array1.unshift('grape');
console.log(array1);

// 16 shift

array2.shift();
console.log(array2);

// 17 slice

let sets= array1.slice(0,2);
console.log(sets);

let set1= array1.slice(3);
console.log(set1);

// 18 some

let some= array1.some(function(value){
    if(value===12){
        return true; 
    }
})
console.log(some);

// 19 sort

let sort= array2.sort();
console.log(sort);

let sort2= array1.sort((val1,val2)=>{
    return val1-val2;
})
console.log(sort2);

// 20 splice

array1.splice(4,1000);
console.log(array1);

 array1.splice(1,2);
 console.log(array1);

let see= array1.splice(1,2);
console.log(see);

// 21 toString

let string= array3.toString();
console.log(string);

// 22 filter

let filter= array1.filter((val)=>{
    if(val<5){
        return val;
    }
})
console.log(filter);

// 23 reduce

let reduce= array1.reduce((a,b)=>{
    return a+b;
})
console.log(reduce);

// 24 map

const array5= [3,4,5,6,7];
let map= array5.map((val)=>{
    return reresult=val+6;
})
console.log(map);
