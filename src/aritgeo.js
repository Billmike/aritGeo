module.exports = {

     aritGeo: (arr) => { 
        
            // A Geometric Progression is a sequence of numbers where each term after the first is found by multiplying the previous one by a fixed, non-zero number called the common ratio.
            // An Arithmethic Progression is a sequence of numbers such that the difference between the consecutive terms is constant.
            let minCommonRatio = 1/0;
            let maxCommonRatio = -1/0;
            let minDiff  = 1/0;
            let maxDiff  = -1/0;
            let floatApproximate  = 0.000001;
    
        for (var i = 1; i < arr.length; ++i) {
            let diff  = arr[i] - arr[i - 1];
            let ratio = arr[i] / arr[i - 1];
            minDiff  = Math.min(diff, minDiff);
            maxDiff  = Math.max(diff, maxDiff);
            minCommonRatio = Math.min(ratio, minCommonRatio);
            maxCommonRatio = Math.max(ratio, maxCommonRatio);
        }
    
        if (arr.length <= 0) {
            return 0;
        }

        else if (Math.abs(minDiff - maxDiff) < floatApproximate) {
            return "Arithmetic";
        }
    
        else if (Math.abs(minCommonRatio - maxCommonRatio) < floatApproximate) {
            return "Geometric";
        }
        
        else {
            return -1;
        }
    }        
}

