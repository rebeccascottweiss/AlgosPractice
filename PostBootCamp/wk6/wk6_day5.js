// Square Submatrix
// Question:​ Given a 2D array of 1s and 0s, find the largest square subarray of all 1s.

// subarray1 = ([​1​, ​1​, ​1​, ​0​], 
//          [​1​, ​1​, ​1​, ​1​],
//          [​1​, ​1​, ​0​, ​0​]) = ​2

// subarray2 =  ([1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
//               [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
//               [0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1],
//               [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1]) = 4

//)


// Solution:​ ​https://www.byte-by-byte.com/squaresubmatrix/


function subarray(arr){
    let size = 0;
    let x = 0, y = 0;
    while(y < arr.length ){
        while( x < arr[0].length ){
            if(arr[y][x] == 1){
                var currSize = 1;
                var potentialSqr = true;
                while(potentialSqr){
                    console.log(`Curr Poss = ${x}, ${y}`)
                    for(let i = x; i <= x + currSize && i < arr.length; i++){
                        if(arr[y + currSize][i] != 1){
                            potentialSqr = false;
                        }
                    }
                    for(let j = y; j <= y + currSize && j < arr[0].length; j++){
                        if(arr[j][x+currSize] != 1){
                            potentialSqr = false;
                        }
                    }
                    if(potentialSqr){
                        currSize ++;
                    }
                    size = Math.max(currSize, size)
                }
            }
            x++;
        }
        y++;
    }

    return size; 
}

console.log(subarray([[1,1,1,0], [1,1,1,1], [1,1,0,0]]));