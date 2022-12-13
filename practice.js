/* Basic 13*/

//Print 1-255
/*
for (let i = 1; i<=255; i++){
    console.log(i);
}
*/
//Print sum 0-255

/*let NewSum = 0;

for(let i = 0; i <= 255; i++){
    NewSum = NewSum + i;
    console.log(`The number is ${i} and the sum is ${NewSum}`);
}*/

//Find and Print Max

/*let thisArray = [22,1,0,334,8,67,335];
let Max = thisArray[0];

for(let i = 0; i < thisArray.length; i++){
    if (thisArray[i] > Max){
        Max = thisArray[i];
    }
}

console.log(Max);*/

//Array with odds
//create an array with all the odd integers between 1 and 255 (inclusive)

/*const thisArray = [];

for (let i = 1; i <= 255; i++){
    if(i%2 != 0){
        thisArray.push(i)
    }
}

console.log(thisArray);*/


//Greater Than Y
//Given an array and a value Y, count and print the number of array values greater than Y

/*const thisArray = [3,5,9,8,6,34,2,0,18]
let Y = 3
let count = 0

for (let i = 0; i < thisArray.length; i++){
    if (thisArray[i] > Y){
        count++;
    }
}

console.log(count);*/

//Max,Min,Average
//Given an array, print the max, min and average values for that array

/*const thisArray = [223,5,0,-4,222,45,88]
let Max = thisArray[0]
let Min = thisArray[0]
let Avg = 0

for (let i = 0; i <= thisArray.length - 1; i++){
    if (thisArray[i] > Max){
        Max = thisArray[i];
    };

    if (thisArray[i] < Min){
        Min = thisArray[i];
    };

    Avg = Avg + thisArray[i]
};

Avg = Avg/thisArray.length

console.log(`The max value is ${Max}, the min value is ${Min}, and the average is ${Avg}.`);*/


//Swap string for array negative values
//Replace any negative array values with 'Dojo'

/*const thisArray = [1,3,-4,5,-6,7,8,10,-11,12]

for (let i = 0; i < thisArray.length; i++){
    if(thisArray[i] < 0){
        thisArray[i] = 'Dojo';
    }
}

console.log(thisArray);*/

//Print Odds 1-255
//Print all odd integers from 1 to 255

/*for (let i = 1; i <= 255; i = i + 2){
    console.log(i)
};*/

//Iterate and Print Array
//Iterate through a given array, printing each value.

/*const thisArray = [1,2,3,4,5,6,7,8]

for (let i = 0; i < thisArray.length; i++){
    console.log(thisArray[i]);
};*/


//Get and Print Average
//Analyze an array's values and print the average.

/*const thisArray = [1,2,3,4]

let sum = 0

for(let i = 0; i < thisArray.length; i++){
    sum = sum + thisArray[i];
};

sum = sum/thisArray.length;

console.log(sum);*/

//Square the values
//Square each value in a given array, returning that same array with changed values.

/*const thisArray = [2,3,4,5].map((a)=>Math.pow(a,2));

console.log(thisArray);*/

//Zero Out Negative Numbers
//Return the given array, after setting any negative values to zero.
/*const thisArray = [2,3,-4,5,-6,7,8].map(a => a < 0 ? 0 : a);
console.log(thisArray);*/

//Shift Array Values
//Given an array, move all values forward by one index, droppng the first and leaving a '0' value at the end. 
const thisArray = [2,3,4,5,6,7].map((a,i,t)=> a = t[i +1]);
thisArray[thisArray.length - 1] = 0;
console.log(thisArray);


