let set = new Set();

for(let i=0;i<4;i++){
    set.add(i)
}
console.log(set);

for(let s of set){
    console.log(s,typeof s);
}