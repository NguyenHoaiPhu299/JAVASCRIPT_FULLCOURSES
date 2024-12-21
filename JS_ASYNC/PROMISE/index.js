let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    myResolve(); // When successful
    myReject(); // When error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
    function(value) { /* code if successful */ },
    function(error) { /* code if some error */ }
);