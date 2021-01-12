// This problem was asked by Spotify.

// You are the technical director of WSPT radio, 
// serving listeners nationwide. For simplicity's 
// sake we can consider each listener to live 
// along a horizontal line stretching from 0 (west) to 1000 (east).

// Given a list of N listeners, and a list of M 
// radio towers, each placed at various locations 
// along this line, determine what the minimum 
// broadcast range would have to be in order for 
// each listener's home to be covered.
//                                                         3        1       4        3         4        5
//                                                        /\        /\     /\        /\       /\       /\
// For example, suppose listeners = [1, 5, 11, 20],   _1 ----- *4 ----- 5 ----- *8 ----- 11 ----- *15 ---- 20 _
// and towers = [4, 8, 15]. In this case the 
// minimum range would be 5, since that would be 
// required for the tower at position 15 to reach 
// the listener at position 20.


//for each user - figure out the distance between the two users. Then figure out which tower is closer to which user....????
function minRange(listeners, towers){
    
    let i = 0, j = 0, max = 0, dist=0; 

    while(i < listeners.length){
        dist = Math.abs(listeners[i] - towers[j]); 
        console.log(`The distance is ${dist}. The max is ${max}.`)
        
        //only checks for distance moving to the next tower
        //need to refactor to include the prev tower as well. 
        //or only move the users up when the tower is further... 
        if(dist > max){
            max = dist; 
        }

        i++; 

        if(i == listeners.length && j != towers.length -1){
            i--; 
            j++; 
        } else if ( j != towers.length -1){
            j++; 
        }
    }

    return max; 
}

console.log(minRange([1, 5, 11, 20], [4, 8, 15]));