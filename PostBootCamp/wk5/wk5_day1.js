// 3. Matrix product
// Question: Given a matrix, find the path from top left to bottom right with the greatest
// product by moving only down and right.


// eg.
// [1, 2, 3]
// [4, 5, 6]
// [7, 8, 9]

// 1 -> 4 -> 7 -> 8 -> 9
// 2016

// [-1, 2, 3]
// [4, 5, -6]
// [7, 8, 9]

// -1 -> 4 -> 5 -> -6 -> 9
// 1080

// 3. Matrix product
// Question: Given a matrix, find the path from top left to bottom right with the greatest
// product by moving only down and right.

// Solutin: (Don't peek ;P)
// https://www.byte-by-byte.com/matrixproduct/


// Example:
// [1, 2, 3]
// [4, 5, 6]
// [7, 8, 9]
// 1 -> 4 -> 7 -> 8 -> 9
// 2016
// [-1, 2, 3]
// [4, 5, -6]
// [7, 8, 9]
// -1 -> 4 -> 5 -> -6 -> 9
// 1080

// check the product of the value to the right and compare it to the product of the value that is down.
// move in the direction of the larger product.

function matrixProd(matrix){
    let path = [matrix[0][0]]; 
    let prod = matrix[0][0]; 
    let r = 0, c = 0;  

    while(c <= matrix.length && r <= matrix.length ){ // stop when c = 3 and r = 3 or matrix[3][3]
        if (r = matrix.length || c != matrix.length || prod * matrix[r][c+1] > prod * matrix[r+1][c]){ // 1 * 2 > 1 * 4
            //move to the right
            prod = prod * matrix[r][c+1];
            path.push(matrix[r][c+1]);
            c = c+1;
            
        } else {
            //move down
            prod = prod * matrix[r+1][c]; 
            path.push(matrix[r+1][c]);
            r = r + 1;
        }
    }
    console.log(path.join(" -> "))
    return prod; 
}

function matrixProduct(matrix, startX = 0, startY = 0){
    if( startX == matrix.length -1 && startY == matrix.length - 1){
        console.log("at the end")
        console.log(`at ${startX}, ${startY}`)
        return matrix[startY][startX]
    } else if (startX == matrix.length - 1 ){
        console.log("at the side")
        console.log(`at ${startX}, ${startY}`)
        return matrix[startY][startX] * matrixProduct(matrix, startX, startY + 1)
    } else if ( startY == matrix.length - 1 ){
        console.log("at the bottom")
        console.log(`at ${startX}, ${startY}`)
        return matrix[startY][startX] * matrixProduct(matrix, startX + 1, startY)
    } else {
        console.log(`at ${startX}, ${startY}`)
        return matrix[startY][startX] * Math.max(matrixProduct(matrix, startX + 1, startY), matrixProduct(matrix, startX, startY + 1))
    }
}

test1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]]

test2 = [
    [-1, 2, 3],
    [4, 5, -6],
    [7, 8, 9]
]

console.log(matrixProd(test1)); 
console.log(matrixProd(test2)); 