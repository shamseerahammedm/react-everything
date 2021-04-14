
// async problem example

// var outerScopeVar;
// helloCatAsync();

// console.log(outerScopeVar);

// function helloCatAsync() {
//     setTimeout(function() {
//         outerScopeVar = 'Nya';
//     }, Math.random() * 2000);
// }



// ------------ async callback -------------- starts  

var outerScopeVar;


// es6 implementation consoleIt is function thats passed 
helloCatAsync((consoleIt)=>{
    console.log(consoleIt);
});


// normal function implementation

// function consoler(value)
// {
//     console.log(value);
// }

// helloCatAsync(consoler);


// function that takes a function as an argument( callback in this eg) and passing resolved 
// value as argument to this function ( callback(outerScopeVar) --> callback is function, outerscope is resolved value )

function helloCatAsync(callback) {
    setTimeout(function() {
        outerScopeVar = 'Nya';
        callback(outerScopeVar)
    }, Math.random() * 2000);
}

// -----  same problem solved with promises


// let helloCatAsync = new Promise((resolve, reject) => {
//     let outerScopeVar;
//     setTimeout(() => {
//         outerScopeVar = 'i am the value';
//         resolve(outerScopeVar)
//     }, Math.random() * 2000);
// });


// helloCatAsync.then(value => {
//     // console.log(value);
// })


// ------------ async callback -------------- ends  



