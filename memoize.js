// function memoize(fn){
//     let cache ={};
//     return function(...arg){
//         let key = JSON.stringify(arg);
//         if(!cache[key]){
//             cache[key] = fn.apply(this,arg);
//         }
//         return cache[key];
//     }
// }

// function add(x,y){
//     return x+y;
// }

// let memoized = memoize(add);

//currying

function curry(a){
   let sum =a;
    return function add(b){
        if(arguments.length){
            sum+=b;
            return add;
        }        
        return sum;
    }
}

let add = curry(2)(3)(199)();
console.log(add);