module.exports = {

     aritGeo: (arr) => { 
        
            // A Geometric Progression is a sequence of numbers where each term after the first is found by multiplying the previous one by a fixed, non-zero number called the common ratio.
            // An Arithmethic Progression is a sequence of numbers such that the difference between the consecutive terms is constant.
            
                
            
            // Find the common difference between values in the array for an arithmetic progression
            const constantDifference = arr[1] - arr[0];
        
            // Find the common ration between the values in the array for a geometric progression
            const commonRatio = arr[1] / arr[0];
            
            // forLoop to loop through the array and check if entered array is an Arithmetic or geometric progression
            for(var i = 0; i < arr.length - 1; i++)
            {
                if( arr[i + 3] - arr[i + 2] == constantDifference ) {
                    return "Arithmetic";
                }
                else if ((arr[i + 1] *  commonRatio) == arr[i + 2]) {
                    return "Geometric";
                }
            }
        
            // Ensure the array is not empty
            if (arr.length <= 0) {
                return 0;
            }
            else {
                return -1;
            }
    }        
}

