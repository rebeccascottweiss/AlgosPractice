// Zero Matrix
// Question:​ Given a boolean matrix, update it so that if any cell is true, all the cells in that row and column are true.

// [true ,​ ​false​,​ ​false​]​    ​[true,​ ​true ​,​ ​true​ ​]
// [false,​ ​false​,​ ​false​]​ ​->​ ​​[true,​ ​false​,​ ​false​]
// [false,​ ​false​,​ ​false​]​ ​   [true,​ ​false​,​ ​false​]

// Solution: https://www.byte-by-byte.com/zeromatrix/

function truthy(matrix){
    let row, col;
    // if we find a true cell, store the row/col
    // change the 
    let trueLocations = [];
    
    for(row =0; row < matrix.length; row++){
        for(col =0; col < matrix.length; col++){
            if(matrix[row][col]){
                trueLocations.push([row, col])
            }
        }
    }
    //our location array looks like [[0,0]]
    for(let i = 0; i < trueLocations.length; i++){
        for(let j = 0; j < matrix.length; j++){
            matrix[trueLocations[i][0]][j] = true; 
            matrix[j][trueLocations[i][1]] = true; 
        }
        
    }
    return matrix;
}

var test = [[true, false, false], [false, false, false], [false, false, false]];
var test2 = [[true, false, true], [false, false, false], [false, false, false]];

console.log(truthy(test));

console.log(truthy(test2)); 